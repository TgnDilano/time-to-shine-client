import React from "react";
import holdingCamera from "../assets/camera.jpg";
import photographer from "../assets/photographer.jpg";
import steps, { AppName } from "../contants/data";

const About = () => {
  return (
    <section className="w-screen">
      <div className="w-full h-[26rem] relative">
        <img
          src={holdingCamera}
          className="absolute w-full h-full object-cover "
        />
        <div className="absolute w-full h-full bg-black bg-opacity-70"></div>
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
          <h3 className="upppercase text-5xl font-medium text-center">
            {AppName}
          </h3>
          <div className="flex items-center gap-x-2 mt-7">
            <div className="w-16 h-[0.15rem] bg-white"></div>
            <h6 className="text-3xl">A Propos</h6>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full py-6  flex gap-x-16 px-56">
        <div className="w-[36rem] h-[46rem] border border-gold p-5">
          <img src={photographer} className="w-full h-full" />
        </div>
        <div className="w-1/2 text-xl flex flex-col items-start justify-center gap-y-8">
          <div className="flex items-center gap-x-2">
            <div className="w-16 h-[0.15rem] bg-gold"></div>
            <h6 className="">A Propos</h6>
          </div>
          <h3 className="titleLarge">{AppName}</h3>
          <p className="">
            L’évènement
            <span className="font-semibold">
              ICEBERG PICTURE CHALLENGE SAISON 2
            </span>{" "}
            Du 24 Juillet au 02 Septembre est un concept de l’agence ICEBERG
            PLUS conçu dans le but de mettre en avant l’art photographique.
          </p>
          <p className="">
            Il a été établit sous 4 semaines et sera constitué de 07 étapes dont
            chacun des sous thèmes fera l’objet d’une étape. Les éliminations se
            feront à chaque étape à partir des votes en ligne. Les votes en
            lignes pour le jury seront additionnés aux votes du public (site web
            et réseau Facebook) pour chaque candidat.
          </p>
          <div color="black" className="w-full h-[0.1rem] bg-zinc-100" />
          <div>
            <p className="border-l-4 border-gold pl-4 font-medium">
              “Commencer une compétition et ne pas vouloir la gagner, c’est être
              un compétiteur malhonnête.”
            </p>
            <p className="italic text-right text-lg">De William van Horne</p>
          </div>
        </div>
      </div>
      <div className="px-56 w-full mt-16 mb-24 flex flex-col items-center">
        <div className="flex items-center gap-x-2 mt-2">
          <div className="w-16 h-[0.15rem] bg-gold"></div>
          <h3 className="upppercase text-7xl font-medium text-center">Etape</h3>
        </div>
        <p className="mt-2 text-xl text-center">
          Complétez ces étapes et gagnez le prix
        </p>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8 mt-12 mb-6">
          {steps.map((e, i) => (
            <div
              className="flex flex-col justify-between gap-y-8 items-start
                        border border-gray px-12 py-8 group cursor-pointer duration-200
                        hover:border-gold"
            >
              <div className="flex justify-between items-center w-full">
                <h3 className="upppercase text-2xl font-medium text-center uppercase group-hover:text-gold">
                  {e.title}
                </h3>
                <p className="titleLarge text-gray-400 duration-300 group-hover:text-gold">
                  {i + 1}
                </p>
              </div>
              <p className="text-xl">{e.p1}</p>
              <p className="text-xl">{e.p2}</p>
              <p className="text-xl">{e.p3}</p>
              <div>
                <p>{e.duration}</p>
                <p>{e.totalParticipant}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
