import React from "react";
import timer from "../assets/timer.jpg";
import { Button } from "@chakra-ui/react";

const Counter = () => {
  return (
    <section className="h-[40rem] w-screen relative overflow-hidden text-white">
      <div className="w-full h-full absolute z-10 flex items-center justify-center flex-col gap-y-14">
        <img src={timer} className="absolute z-0 w-full object-cover h-full" />
        <div className="absolute flex flex-col items-center gap-y-12">
          <h2 className="uppercase text-4xl font-semibold">
            Fin des votes dans
          </h2>
          <div className="flex gap-x-12">
            <CounterBox label="Jours" />
            <CounterBox label="Heures" />
            <CounterBox label="Minutes" />
            <CounterBox label="Secondes" />
          </div>
          <Button
            backgroundColor="#161819"
            textColor="white"
            size="lg"
            borderRadius={0}
            p="2rem 4rem"
          >
            Voter Maintenat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Counter;

const CounterBox = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-risenBlack text-white p-14 lg:p-16 xl:p-24 flex items-center justify-center  text-8xl">
        01
      </div>
      <p className="mt-3 uppercase text-2xl font-semibold">{label}</p>
    </div>
  );
};
