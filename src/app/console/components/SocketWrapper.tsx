"use client";
import React, { ReactNode, useContext, useEffect } from "react";
import { userContext } from "../../components/profile";
import { analyticsContext } from "./analyticsWrapper";

export default function Wrapper({ children }: { children: ReactNode }) {
  const { user } = useContext(userContext);
  const { dispatch } = useContext(analyticsContext);
  const { username: owner, origin } = user;
  console.log("origin= ", origin);
  useEffect(() => {
    if(origin=="default" || origin==undefined) return;
    let ts: NodeJS.Timeout;
    const ws: WebSocket = new WebSocket(
      `wss://seepbackend.onrender.com/?senderId=${origin}`
    );
    const sendMessage = () => {
      if (ws.readyState === WebSocket.OPEN && origin != "default") {
        console.log("initial  sent");
        ws.send(
          JSON.stringify({
            owner: owner,
            url: origin,
            type: "1",
          })
        );
      }
    };

    ws.onopen = () => {
      console.log("connected");
      ts=setTimeout(sendMessage, 1000);
    };
    ws.onmessage = async (response) => {
      const data = JSON.parse(response.data);
      const { live_users, new_signups, total_users } = data;
      console.log("data= ", data);
      if (
        data.total_users != undefined &&
        data.live_users != undefined &&
        data.new_signups != undefined
      )
        dispatch({ live_users, new_signups, total_users });
    };
    ws.onerror = (error) => {
      console.log(error);
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
    return () => {
      ws.close();
      clearTimeout(ts);
    };
  }, [origin, owner, dispatch]);

  return <>{children}</>;
}
