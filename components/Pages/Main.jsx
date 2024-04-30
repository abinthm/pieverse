import { Poppins } from "next/font/google";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
const poppins = Poppins({ subsets: ["latin"], weight: "900" });

const Main = () => {
  return (
    <section id="home" className={`h-screen w-full flex items-center justify-center px-4 pt-8 md:pt-16`}>
      <div className="flex flex-col items-center">
        <h1
          className={`text-[55px] md:text-9xl font-extrabold text-primary text-with-stroke mentra-font tracking-wide`}
        >
          PIEVERSE
        </h1>
        <h2 className="flex flex-col sm:flex-row text-white text-2xl text-center mt-1">
          <span className="font-semibold">4 MAY 2024</span>
          <span className="max-sm:hidden mx-2">|</span>
          <span className="max-sm:text-sm">Providence College, Chengannur</span>
        </h2>
        <a className={cn('flex items-center gap-2 py-2 bg-primary text-secondary rounded-3xl font-bold hover:bg-primary/50 hover:text-white px-4 mt-4')} href="https://docs.google.com/forms/d/e/1FAIpQLScQihABsjtr_6ul80Fz2kPI3QWH7f8p2CZa7ZnnmL1qEjk22w/viewform">Grab Your Tickets</a>
        {/* <Button title={"Grab Your Ticket"} className={"px-4 mt-4"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
          Grab Your Ticket
        </Button> */}
        {/* <div className="flex items-center gap-2 mt-4">
          <Image src={'/assets/organizers/pie.png'} width={200} height={150} />
          <Image src={'/assets/organizers/ikyp.png'} width={200} height={150} />
          <Image src={'/assets/organizers/gdsc.png'} width={50} height={30} />
        </div> */}
      </div>
    </section>
  );
};

export default Main;
