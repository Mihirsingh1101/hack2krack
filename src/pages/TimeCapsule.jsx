import React from "react";
import Header from "../components/Header";
import CapsuleGrid from "../components/CapsuleGrid";

function TimeCapsule() {
  return (
    <div className="flex overflow-hidden flex-col px-20 pt-14 pb-28 bg-white max-md:px-5 max-md:pb-24">
      <Header />
      <div className="flex flex-col mt-12 ml-2.5 max-w-full text-3xl font-bold text-black h-[79px] w-[711px] max-md:mt-10">
        <div className="w-full rounded-none max-md:pr-5 max-md:max-w-full">
          <span className="text-5xl">Hi, John</span>
          <br />
          What brings you here today.....
        </div>
      </div>
      <CapsuleGrid />
    </div>
  );
}

export default TimeCapsule;
