import Link from "next/link";
import Navlink from "../components/navlink.tsx"
 
async function Navbar() {
  return (
    <div className="w-full z-[999] flex justify-center items-center pt-5 text-[#d4d4d4] fixed">
      <div className="flex flex-row justify-between w-[80%] px-2 rounded-xl bg-transparent bg-opacity-50 backdrop-blur-md p-2">
        <div className="flex flex-row justify-center rounded-xl items-center gap-4 font-extralight text-sm">
          <Navlink href="/" value="View" />
          <Navlink href="/pricing" value="Pricing" />
          <Navlink href="/blogs" value="blogs" />
          <Navlink href="/contact" value="contact" />
        </div>
        <div className="flex flex-row justify-center items-center gap-2 rounded-xl">
          <button className="hover:bg-[#222222] px-4 py-2 rounded-3xl transition ease-linear duration-150">
            Login
          </button>
          <div className="bg-[#6b6b6b] rounded-[1rem] py-[0.05rem] flex justify-center items-center">
            <button className="hover:bg-[#000000e6] bg-[#171717] px-3 py-1 rounded-[2.2rem] transition ease-linear duration-150">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
