import React from "react";
import CapsuleItem from "./TimeCapsule/CapsuleItem";

const capsuleData = [
  {
    title: "STORIES CAPSULE",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d0301cb9915e50aefbcf90ae98270d8cd8a5645965c3e936af575d700f77317a?placeholderIfAbsent=true&apiKey=84772d49d160458eae63b6584bffa313",
    aspectRatio: "1.5",
  },
  {
    title: "IMAGE CAPSULE",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/804b95d9072bf5d96b9d721e0cd1d8d273b6360bc53a8cc1365c975d0ab77f33?placeholderIfAbsent=true&apiKey=84772d49d160458eae63b6584bffa313",
    aspectRatio: "1.2",
  },
  {
    title: "VIDEO CAPSULE",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/df1fcb0b962ff6550b31e99cd769f2155186f93ed0cd368925ee7837d0387a3d?placeholderIfAbsent=true&apiKey=84772d49d160458eae63b6584bffa313",
    aspectRatio: "1",
  },
  {
    title: "AUDIO CAPSULE",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/94d1f1ecc565d2f3c7a2a81085d21fd0f8f1e0245e23e20ea2e22d1c4e5de0e2?placeholderIfAbsent=true&apiKey=84772d49d160458eae63b6584bffa313",
    aspectRatio: "1.2",
  },
  {
    title: "COLLAB CAPSULE",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fc91b2a2fc2c944f2d8fdf4bd472c9df6eec1129cf4b27502f2dd470bdc8b152?placeholderIfAbsent=true&apiKey=84772d49d160458eae63b6584bffa313",
    aspectRatio: "1.2",
  },
];

function CapsuleGrid() {
  return (
    <>
      <div className="mt-11 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {capsuleData.slice(0, 3).map((capsule, index) => (
            <CapsuleItem key={index} {...capsule} />
          ))}
        </div>
      </div>
      <div className="mt-14 max-w-full w-[804px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          {capsuleData.slice(3).map((capsule, index) => (
            <CapsuleItem key={index + 3} {...capsule} width="w-6/12" />
          ))}
        </div>
      </div>
    </>
  );
}

export default CapsuleGrid;
