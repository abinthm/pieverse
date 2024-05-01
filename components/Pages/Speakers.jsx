import Image from "next/image";
import React from "react";
import SpeakerCard from "../SpeakerCard";
import { speakers } from "@/constants";

const Speakers = () => {
  return (
    <section
      id="speakers"
      className="w-full h-max bg-black/50 p-4 py-8 md:p-8 md:px-12 xl:px-20 overflow-x-hidden"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          OUR EVENT <span className="text-primary">SPEAKERS</span>
        </h1>
        <h2 className="text-zinc-400 font-semibold mt-2 text-xl">
          Here are some of our speakers
        </h2>
        <hr className="border-2 border-primary w-24 mt-4" />
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center p-4 mt-4 gap-6">
          {
            speakers.map((speaker,key)=>(
              <SpeakerCard key={key} name={speaker.name} description={speaker.description} imgURL={speaker.imgURL} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Speakers;
