import React from "react";
import avatar from "../assets/avatar.png";
import crown1 from "../assets/crown_1.png";
import crown2 from "../assets/crown_2.png";
import crown3 from "../assets/crown_3.png";
import behive from "../assets/behive.png";
import LineTitle from "./line-title";

const Candidates = () => {
  return (
    <section className="h-[46rem] py-8 flex flex-col justify-center bg-gray-100">
      <div className="flex flex-col text-center items-center mb-12">
        <h3 className="upppercase text-4xl font-medium text-center mb-4 text-gold">
          Iceberg Picture Challenge
        </h3>
        <h3 className="capitalize text-2xl font-medium text-center">
          Votez pour votre candidat préféré
        </h3>
      </div>
      <div className="flex gap-x-12 items-center justify-center">
        <div className="flex flex-col items-center">
          <img src={crown3} className="w-[3.5rem] h-[3.5rem] mb-2" />
          <div className="w-[18rem] h-[18rem] border border-gold p-5">
            <img src={avatar} className="w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={crown1} className="w-[3.5rem] h-[3.5rem] mb-2" />
          <div className="w-[22rem] h-[24rem] border border-gold p-5">
            <img src={avatar} className="w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={crown2} className="w-[3.5rem] h-[3.5rem] mb-2" />
          <div className="w-[18rem] h-[18rem] border border-gold p-5">
            <img src={avatar} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Candidates;
