import Link from "next/link";
function Navbar() {
  return (
    <div className="w-full flex justify-center items-center pt-5 text-[#d4d4d4]">
      <div className="">
        <div className="flex flex-row justify-center items-center gap-8 font-extralight text-sm"><Link href="/" className=" font-semibold">View</Link>
        <Link href="/"> Pricing</Link>
        <Link href="/"> Blogs</Link>
        <Link href="/"> Contact</Link></div>
        
      </div>
    </div>
  );
}

export default Navbar;
