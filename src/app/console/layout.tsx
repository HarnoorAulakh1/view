import { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import Wrapper from "./components/SocketWrapper";
import AnalyticsWrapper from "./components/analyticsWrapper";


function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white w-full h-full flex flex-row">
      <Sidebar />
      <AnalyticsWrapper>
        <Wrapper>{children}</Wrapper>
      </AnalyticsWrapper>
    </div>
  );
}

export default Layout;
