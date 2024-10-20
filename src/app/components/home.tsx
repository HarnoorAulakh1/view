"use client";

import { ReactNode } from "react";
import Navbar from "./navbar";
import Profile from "./profile";
import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function Home({ children }: { children: ReactNode }) {
  const path = usePathname();
  const arr = path.split("/");
  return (
    <div className="w-full h-full">
      {arr[1] != "console" && <Navbar />}
      <Profile>{children}</Profile>
      {arr[1] != "console" && <Footer />}
    </div>
  );
}
