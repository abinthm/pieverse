import React from "react";
import ReactCarousel from "../ReactCarousel";
import Image from "next/image";

const Posters = () => {
  const images = [
    "/assets/posters/poster1.jpg",
    "/assets/posters/poster2.jpg",
    "/assets/posters/poster1.jpg",
    "/assets/posters/poster2.jpg",
    "/assets/posters/poster1.jpg",
    "/assets/posters/poster2.jpg",
  ];

  return (
    <section
      id="posters"
      className="w-full h-auto p-4 py-8 md:p-10  flex "
    >
      <div className="w-full h-auto flex flex-col  items-center justify-center p-4 bg-violet-950/50">
        <div className="p-6">
          <h1 className="flex gap-2 items-center text-4xl font-bold text-white">
           Posters
          </h1>
        </div>
        <div className="w-full h-auto">

        <ReactCarousel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Posters;
