import React from "react";
import avatar from "../assets/avatar.png";
import crown1 from "../assets/crown_1.png";
import crown2 from "../assets/crown_2.png";
import crown3 from "../assets/crown_3.png";
import candidate1 from "../assets/candidate1.jpg";
import candidate2 from "../assets/candidate2.jpg";
import candidate3 from "../assets/candidate3.jpg";
import crownBg from "../assets/crown.png";
import LineTitle from "./line-title";
import { AppName } from "../contants/data";

const Candidates = () => {
  return (
    <section className="bg-gray-100 relative w-full  h-[51rem]">
      <img
        src={crownBg}
        className="absolute w-full h-full aspect-video object-cover "
      />
      <div className="absolute w-full h-full  backdrop-blur-md" />
      <div className="absolute w-full h-full flex flex-col text-white justify-center items-center gap-y-20">
        <div>
          <h3 className="titleLarge mb-2 text-center">{AppName}</h3>
          <LineTitle title="Votez pour votre candidat préféré" showLine color='gold' />
        </div>
        <div className="flex  gap-x-12 items-center justify-center"> 
          <div className="flex flex-col items-center">
            <img src={crown3} className="w-[3.5rem] h-[3.5rem] mb-2" />
            <div className="w-[19rem] h-[18rem] border border-gold p-5">
              <img src={candidate2} className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={crown1} className="w-[3.5rem] h-[3.5rem] mb-2" />
            <div className="w-[25rem] h-[24rem] border border-gold p-5">
              <img src={candidate1} className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={crown2} className="w-[3.5rem] h-[3.5rem] mb-2" />
            <div className="w-[19rem] h-[18rem] border border-gold p-5">
              <img src={candidate3} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
