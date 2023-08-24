import React from "react";
import holdingCamera from "../assets/camera.jpg";
import { FaShare } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import LineTitle from "../components/line-title";

const SingleImage = () => {
  return (
    <div className="cursor-pointer w-[100%] h-[24rem] overflow-hidden relative text-white group border-2 border-transparent hover:border-gold">
      <img
        src={holdingCamera}
        className="w-full h-full absolute transform duration-200 hover:scale-125"
      />
      <div className="absolute w-full h-full bg-black text-right bg-opacity-0 group-hover:bg-opacity-60 duration-200 text-white" />
      <div className="absolute  -right-28 group-hover:right-6 duration-300 top-4 titleLarge flex flex-col items-center gap-x-1">
        <p>{1}</p>
        <span className="text-sm">ERE</span>
      </div>
      <div className="absolute -right-28 group-hover:right-6 duration-300 bottom-4 titleLarge flex flex-col items-center gap-x-1">
        <p>{42}</p>
        <span className="text-xl">Votes</span>
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 -bottom-72 group-hover:bottom-0 duration-300 flex items-center justify-center w-full h-full flex-col gap-y-6">
        <h3 className="titleMedium">Camera Holding</h3>
        <div className="flex text-xl items-center gap-x-4 mt-2">
          <p>Code: IPC-43 </p>
          <BsFillShareFill />
        </div>
        <Button
          borderRadius={0}
          backgroundColor="#ecaf52"
          className="w-[14rem]"
        >
          VOTER
        </Button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-7">
        <LineTitle title="Image Gallery" color="gold" showLine />
      </div>
      <section className="px-6 md:px-20 xl:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 py-10">
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
      </section>
    </div>
  );
};

export default Gallery;
