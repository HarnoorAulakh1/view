import { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { GrUserNew } from "react-icons/gr";
import { CgLivePhoto } from "react-icons/cg";

const data=[
    {
        heading:"Total Users",
        content:"The Total Number of Registered users",
        number:"15,434",
        child:<CgProfile className="text-2xl"/>
    },
    {
        heading:"New Signups",
        content:"The number of new users that signed up this month",
        number:"1,500",
        child:<GrUserNew className="text-2xl"/>
    },
    {
        heading:"Live Users",
        content:"The number of users currently active",
        number:"10,434",
        child:<CgLivePhoto className="text-2xl"/>
    }
]

function Dashboard() {
  return (
    <div className="w-full ">
      <div className="flex flex-row justify-between items-center px-5 py-3 border-b-[1px] border-[#e2e2e2] bg-[#fbfafa]">
        <p className="font-bold">DashBoard</p>
        <input
          type="text"
          placeholder="search"
          className="bg-white border-[1px] px-2 border-[#e2e2e2] rounded-md"
        />
      </div>
      <div className="flex flex-row p-5 gap-4">
       {data.map( (item,index)=><Box
       key={index}
          number={item.number}
          heading={item.heading}
          content={item.content}
        >
          {item.child}
        </Box>)}
      </div>
    </div>
  );
}

function Box({
  children,
  content,
  number,
  heading,
}: {
  children: ReactNode;
  content: string;
  number: string;
  heading: string;
}) {
  return (
    <div className="border-[1px] border-[#e2e2e2] p-5 rounded-xl flex flex-col gap-12 w-[22rem]">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-2xl">{heading}</p>
        <p className="text-[#848484] text-[14px]">{content}</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-2xl">{number}</p>
        {children}
      </div>
    </div>
  );
}

export default Dashboard;
