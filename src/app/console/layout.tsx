import { ReactNode } from "react";
import Sidebar from "./components/sidebar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white w-full h-full flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
