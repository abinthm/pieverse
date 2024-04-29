import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";
import About from "@/components/Pages/About";
import Main from "@/components/Pages/Main";
import Posters from "@/components/Pages/Posters";
import Schedule from "@/components/Pages/Schedule";
import Speakers from "@/components/Pages/Speakers";
import Tickets from "@/components/Pages/Tickets";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-y-scroll overflow-x-hidden home-bg z-20">
      <Navbar />
      <div className="z-10">
        <Main />
        <About />
        <Tickets />
        <Speakers />
        {/* <Grid/> */}
        <Schedule />
        <Posters />
        <Footer/>
      </div>
      {/* <Image
        src={"/assets/bg-overlay.png"}
        style={{ height: "100%", width: "100%" }}
        width={1000}
        height={800}
        className="absolute top-0 mix-blend-overlay left-0 -z-10"
      /> */}
    </div>
  );
}
