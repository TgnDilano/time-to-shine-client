import React from "react";
import avatar from "../assets/avatar.jpg";

const Candidates = () => {
  return (
    <section className="h-[46rem] flex gap-x-12 items-center justify-center">
      <div className="w-[22rem] h-[26rem] border border-gold p-5">
        <img src={avatar} className="w-full h-full" />
      </div>
      <div className="w-[22rem] h-[26rem] border border-gold p-5">
        <img src={avatar} className="w-full h-full" />
      </div>
      <div className="w-[22rem] h-[26rem] border border-gold p-5">
        <img src={avatar} className="w-full h-full" />
      </div>
    </section>
  );
};

export default Candidates;
