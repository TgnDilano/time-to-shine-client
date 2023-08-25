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
import { BiHeart, BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const CandidateImage = ({ image, votes = 0, type = "sm" }) => {
  var width = {
    sm: "w-[20rem]",
    md: "w-[25rem]",
  };

  return (
    <div className="relative border border-gold p-4">
      <img
        src={image}
        className={`${width[type]} aspect-square object-cover`}
      />
      <div className="absolute top-4 bg-black text-white flex gap-x-2 text-center items-center p-2 rounded-b">
        <span className="text-sm font-bold">{votes} votes</span> <BiHeart color="red" />
      </div>
      <div className="absolute top-4 right-4 bg-black text-sm text-white flex gap-x-1 items-center p-2 rounded-b">
        <FaStar color="gray" size={12} />
        <FaStar color="gray" size={12} />
        <FaStar color="gray" size={12} />
        <FaStar color="gray" size={12} />
        <FaStar color="gray" size={12} />
      </div>
    </div>
  );
};

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
          <LineTitle
            title="Votez pour votre candidat préféré"
            showLine
            color="gold"
          />
        </div>
        <div className="flex  gap-x-12 items-center justify-center">
          <div className="flex flex-col items-center">
            <img src={crown3} className="w-[3.5rem] h-[3.5rem] mb-2" />
            <CandidateImage image={candidate2} votes={42} />
          </div>
          <div className="flex flex-col items-center">
            <img src={crown1} className="w-[3.5rem] h-[3.5rem] mb-2" />
            <CandidateImage type="md" image={candidate1} votes={52} />
          </div>
          <div className="flex flex-col items-center">
            <img src={crown2} className="w-[3.5rem] h-[3.5rem] mb-2" />
            <CandidateImage image={candidate3} votes={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
