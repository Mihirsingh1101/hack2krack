import React from "react";

function CapsuleItem({ title, imageSrc, aspectRatio, width = "w-[33%]" }) {
  return (
    <div className={`flex flex-col ${width} max-md:ml-0 max-md:w-full`}>
      <div className="flex flex-col grow max-md:mt-10">
        <div className="flex overflow-hidden flex-col px-5 pt-5 pb-16 bg-white bg-blend-saturation max-md:pl-5">
          <img
            loading="lazy"
            src={imageSrc}
            alt={title}
            className={`object-contain w-full aspect-[${aspectRatio}]`}
          />
        </div>
        <div className="self-center mt-3.5 text-3xl font-semibold leading-none text-center text-black">
          {title}
        </div>
      </div>
    </div>
  );
}

export default CapsuleItem;
