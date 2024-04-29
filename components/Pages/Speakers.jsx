import Image from "next/image";
import React from "react";

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
        <div className="flex p-4 mt-4 gap-6">
          <div className="size-72 bg-slate-300">
          <Image
              src={"/assets/speakers/unknown.jpg"}
              width={400}
              height={400}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="size-72 flex flex-col relative">
            <Image
              src={"/assets/speakers/shambu.jpg"}
              width={400}
              height={400}
              style={{ height: "100%", width: "100%" }}
            />
            <div className="w-full flex flex-col justify-center items-center h-20 bg-violet-950/50 absolute bottom-0 left-0">
              <h1 className="font-bold text-2xl text-white">RJ Shambu</h1>
              <h2 className=" text-zinc-300">RJ at Red FM</h2>
            </div>
          </div>
          <div className="size-72 bg-slate-300">
          <Image
              src={"/assets/speakers/unknown.jpg"}
              width={400}
              height={400}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
