import { CgProfile } from "react-icons/cg";
import { GrUserNew } from "react-icons/gr";
import { CgLivePhoto } from "react-icons/cg";
import Select from "../components/siteSelect";
import Box from "../components/Box";

const data = [
  {
    type: "total_users",
    heading: "Total Users",
    content: "The Total Number of Registered users",
    child: <CgProfile className="text-2xl" />,
  },
  {
    type: "new_signups",
    heading: "New Signups",
    content: "The number of new users that signed up this month",
    child: <GrUserNew className="text-2xl" />,
  },
  {
    type: "live_users",
    heading: "Live Users",
    content: "The number of users currently active",
    child: <CgLivePhoto className="text-2xl" />,
  },
];

async function Dashboard() {
  return (
    <div className="w-full ">
      <div className="flex flex-row justify-between items-center px-5 py-3 border-b-[1px] border-[#e2e2e2] bg-[#fbfafa]">
        <div className="flex flex-row justify-center gap-10 items-center">
          <p className="font-bold">DashBoard</p>
          <Select/>
        </div>
        <input
          type="text"
          placeholder="search"
          className="bg-white px-2 border-[#e2e2e2] rounded-md"
        />
      </div>
      <div className="flex flex-row p-5 gap-4">
        {data.map((item, index) => (
          <Box
            type={item.type}
            key={index}
            heading={item.heading}
            content={item.content}
          >
            {item.child}
          </Box>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
