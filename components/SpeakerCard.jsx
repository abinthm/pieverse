import Image from "next/image";
import React from "react";

const SpeakerCard = ({name,description,imgURL}) => {
  return (
    <div className="size-72 flex flex-col relative">
      <Image
        src={imgURL}
        width={400}
        height={400}
        style={{ height: "100%", width: "100%" }}
      />
      <div className="w-full flex flex-col justify-center items-center h-20 bg-violet-950/50 absolute bottom-0 left-0">
        <h1 className="font-bold text-2xl text-white">{name}</h1>
        <h2 className=" text-zinc-300">{description}</h2>
      </div>
    </div>
  );
};

export default SpeakerCard;
