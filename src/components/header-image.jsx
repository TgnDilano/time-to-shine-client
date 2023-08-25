import React from "react";
import { AppName } from "../contants/data";

const HeaderImage = ({ image, title = AppName, subtitle = "" }) => {
  return (
    <div className="w-full h-[23rem] relative">
      <img src={image} className="absolute w-full h-full object-cover " />
      <div className="absolute w-full h-full bg-black bg-opacity-70"></div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
        <h3 className="upppercase text-5xl font-medium text-center">{title}</h3>
        <div className="flex items-center gap-x-2 mt-7">
          <div className="w-16 h-[0.15rem] bg-white"></div>
          <h6 className="text-3xl">{subtitle}</h6>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
