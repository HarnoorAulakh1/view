import { GrDashboard } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";

function Sidebar(){
    return (
        <div className="bg-[#fbfafa] h-full flex flex-col gap-10 w-[20%] border-r-[1px] border-[#ecebeb]">
          <p className="font-semibold pt-3 ml-5 text-lg">View Dashboard</p>
          <div className="flex flex-col gap-1 justify-center">
          <Link href="/console/dashboard">
            <div className="flex flex-col gap-2 text-[#848484] border-y-2 border-[#fbfafa]  hover:border-black p-1">
              <div className="flex gap-1 ml-5 items-center">
                <GrDashboard /> DashBoard
              </div>
            </div>
            </Link>
            <Link href="/console/profile">
            <div className="flex flex-col gap-2 text-[#848484] border-y-2 border-[#fbfafa]  hover:border-black p-1">
              <div className="flex gap-1 ml-5 items-center">
                <CgProfile /> profile
              </div>
            </div>
            </Link>
            <Link href="/console/settings">
            <div className="flex flex-col gap-2 text-[#848484] border-y-2 border-[#fbfafa]  hover:border-black p-1">
              <div className="flex gap-1 ml-5 items-center">
                <IoSettingsOutline /> Settings
              </div>
            </div>
            </Link>
           
          </div>
          </div>
      );
}

export default Sidebar;