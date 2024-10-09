import Review from "./components/reviews";
import { GridBackgroundDemo } from "./components/grid";
import Navbar from "./components/navbar";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="">
      <GridBackgroundDemo>
        <div className="w-full h-[100%] flex flex-col justify-center items-center gap-4">
          <p className="text-[6rem] text-[#ffffff] text-center w-[80%] font-bold leading-none">
            Generate Images, Text and Videos with AI
          </p>
          <p className="text-[#bbbaba] text-[1.3rem] text-center w-[50%]">
            Everything AI seamlessly integrated all the modern AI generation
            tools into one platform so that you can generate content with a
            single click.
          </p>
          <div className="flex flex-row justify-center items-center gap-2 rounded-xl">
            <div className="bg-[#6b6b6b] text-white rounded-[1.2rem] py-[0.05rem] flex justify-center items-center">
              <button className="hover:bg-[#000000e6] bg-[#171717] px-3 py-2 rounded-[2rem] transition ease-linear duration-150">
                Get started
              </button>
            </div>
            <button className="hover:bg-[#222222] group text-white px-5 py-2 flex items-center justify-center gap-2 rounded-3xl transition ease-linear duration-150">
              Contact us
              <div className="group-hover:translate-x-2 transition ease-linear duration-150">
                <IoArrowForwardOutline />
              </div>
            </button>
          </div>
        </div>
      </GridBackgroundDemo>
      <Review/>
        
    </div>
  );
}
