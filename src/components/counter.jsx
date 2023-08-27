import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Counter = () => {
  var endDate = new Date("2023-09-28").getTime();

  var [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0, days: 0 });

  useEffect(() => {
    var interval = setInterval(() => {
      var difference = endDate - new Date().getTime();

      var milliseconds = 1000;
      var seconds = Math.floor(
        (difference % (milliseconds * 60)) / milliseconds
      );
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var days = Math.floor(difference / (1000 * 60 * 60 * 24));

      setTime((prev) => ({
        ...prev,
        seconds,
        minutes,
        hours,
        days,
      }));
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="h-[42rem] bg-gray-100 w-screen relative overflow-hidden ">
        <div className="w-full h-full absolute z-10 flex items-center justify-center flex-col gap-y-14">
          {/* <img src={timer} className="absolute z-0 w-full object-cover h-full" /> */}
          <div className="absolute flex flex-col items-center gap-y-12">
            <h2 className="uppercase text-4xl font-semibold">
              Fin des votes dans
            </h2>
            <div className="flex gap-x-12">
              <CounterBox time={time.days} label="Jours" />
              <CounterBox time={time.hours} label="Heures" />
              <CounterBox time={time.minutes} label="Minutes" />
              <CounterBox time={time.seconds} label="Secondes" />
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
    </motion.div>
  );
};

export default Counter;

const CounterBox = ({ label, time = 1 }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-risenBlack text-white flex items-center justify-center text-8xl w-[16rem] h-[17rem]">
        {time.toString().length == 1 ? `0${time}` : time}
      </div>
      <p className="mt-3 uppercase text-2xl font-semibold">{label}</p>
    </div>
  );
};
