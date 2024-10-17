"use client";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../components/profile";
import { userSites } from "@/lib/types";

function Select() {
  const { dispatch, user } = useContext(userContext);
  const [data, set] = useState<userSites[]>();
  function handle(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    dispatch({ ...user, origin: e.target.value });
  }
  useEffect(() => {
    const response = async () => {
      const data = await fetch("/api/user/getSites", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          owner: user.username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      set(await data.json());
    };
    response();
    //console.log("data= ",data);
  }, [user]);
  return (
    <>
      {data && (
        <select
          className="px-2 py-1 rounded-md outline-none bg-[#e8e8e8] w-[10rem] text-center"
          onChange={handle}
        >
          <option value="default">---select---</option>
          {data.map((item, index) => (
            <option key={index} value={item.url}>
              {item.url}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default Select;
