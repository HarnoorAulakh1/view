"use client";

import { ReactNode, useContext, useEffect, useState } from "react";
import { analyticsContext } from "./analyticsWrapper";

function Box({
  type,
  children,
  content,
  heading,
}: {
  type: string;
  children: ReactNode;
  content: string;
  heading: string;
}) {
  const {analytics} = useContext(analyticsContext);
  const [data, set] = useState<number>(0);
  console.log("analytics= ", analytics);
  useEffect(() => {
    if (type == "new_signups") set(analytics.new_signups);
    else if (type == "live_users") set(analytics.live_users);
    else if(analytics.total_users!=undefined) set(Object.keys(analytics.total_users).length);
  }, [type,analytics]);
  return (
    <div className="border-[1px] border-[#e2e2e2] p-5 rounded-xl flex flex-col gap-12 w-[22rem]">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-2xl">{heading}</p>
        <p className="text-[#848484] text-[14px]">{content}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-2xl">{data}</p>
        {children}
      </div>
    </div>
  );
}

export default Box;
