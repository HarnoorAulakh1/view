"use client";

import { ReactNode } from "react";
import Navbar from "./navbar";
import Profile from "./profile";
import { usePathname } from "next/navigation";
import { FetchData } from "view-analytics";

export default function Home({ children }: { children: ReactNode }) {
  const path = usePathname();
  const arr = path.split("/");
  return (
     //<FetchData owner="aulakh16">
      <div className="w-full h-full">
        {arr[1] != "console" && <Navbar />}
        <Profile>{children}</Profile>
      </div>
     //</FetchData>
  );
}
