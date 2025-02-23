import React from "react";

function Header() {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center self-center w-full text-black max-w-[1240px] min-h-[57px] max-md:max-w-full">
      <div className="self-stretch pt-1.5 my-auto text-4xl leading-none rounded-none w-[205px]">
        Time capsule
      </div>
      <div className="self-stretch my-auto text-lg font-bold whitespace-nowrap rounded-none w-[97px]">
        Dashboard
      </div>
      <button className="self-stretch px-3 py-3.5 my-auto text-sm font-medium text-white bg-green-600 rounded-xl min-h-[43px] w-[137px]">
        Sign up/Log in
      </button>
    </div>
  );
}

export default Header;
