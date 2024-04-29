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
      id="gallery"
      className="w-full h-auto p-4 py-8 md:p-10  flex bg-black/50 mt-8 "
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center mb-4 md:mb-8">
          <h1 className="text-white text-3xl md:text-4xl font-bold">GALLERY</h1>
          <h2 className="text-zinc-400 font-semibold mt-2 text-xl">
            Here are our event posters
          </h2>
          <hr className="border-2 border-primary w-24 mt-4" />
        </div>
        <div className="w-full h-auto">
          <ReactCarousel images={images} />
        </div>
      </div>
    </section>
  );
};

export default Posters;
