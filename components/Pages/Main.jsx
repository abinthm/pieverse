import React from "react";
import Image from "next/image";
import SlowFade from "@/Animations/SlowFade";
import FadeUp from "@/Animations/FadeUp";

const Main = () => {
  return (
    <section
      id="home"
      className={`relative h-screen w-full flex flex-col items-center justify-center px-4 max-sm:pb-16`}
    >
      <div className="flex flex-col items-center py-2 text-center">
        <FadeUp delay={2}>
          <Image src={"/assets/organizers/pie.png"} width={150} height={100} />
        </FadeUp>
        <FadeUp delay={2}>
          <h3 className="text-lg md:text-xl text-white">
            IN COLLABORATION WITH
          </h3>
        </FadeUp>
        <FadeUp delay={2} className=" md:w-1/2 lg:w-2/5 flex justify-evenly items-center gap-2 mt-2 px-2 md:px-8">
          <div className="flex-1">
            <Image
              src={"/assets/organizers/ikyp-white.svg"}
              width={200}
              height={150}
              style={{ width: "100%" }}
            />
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/organizers/ieee-white.png"}
              width={200}
              height={150}
              style={{ width: "100%" }}
            />
          </div>
          <div className="flex-1">
            <Image
              src={"/assets/organizers/gdsc-white.svg"}
              width={200}
              height={150}
              style={{ width: "100%" }}
            />
          </div>
        </FadeUp>
      </div>
      <div className="flex flex-col items-center mt-2 md:mt-4">
        <SlowFade>
          <h1
            className={`text-[55px] md:text-9xl font-extrabold text-primary text-with-stroke mentra-font tracking-wide`}
          >
            PIEVERSE
          </h1>
        </SlowFade>
        <FadeUp delay={2}>
          <h2 className="flex flex-col sm:flex-row text-white text-2xl text-center mt-1">
            <span className="font-semibold">4 MAY 2024</span>
            <span className="max-sm:hidden mx-2">|</span>
            <span className="max-sm:text-sm">
              Providence College, Chengannur
            </span>
          </h2>
        </FadeUp>
        <FadeUp delay={2}>
          <a
            className={
              "flex items-center gap-2 py-2 bg-primary text-secondary rounded-3xl font-bold hover:bg-primary/50 hover:text-white px-4 mt-4"
            }
            href="https://docs.google.com/forms/d/e/1FAIpQLScQihABsjtr_6ul80Fz2kPI3QWH7f8p2CZa7ZnnmL1qEjk22w/viewform"
          >
            Grab Your Tickets
          </a>
        </FadeUp>
      </div>
    </section>
  );
};

export default Main;
