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
    <div className="relative w-full h-max bg-secondary overflow-x-hidden z-20">
      <Navbar />
      <div className="z-10">
        <Main />
        <About />
        <Tickets />
        <Speakers />
        <Schedule />
        <Posters />
        <Footer/>
      </div>
      <div className="fixed left-0 top-0 h-screen w-full home-bg -z-10">

      </div>
      {/* <Image
        src={"/assets/bg.jpg"}
        style={{ height: "100vh", width: "100%" }}
        width={1000}
        height={800}
        className="fixed top-0 left-0 -z-10"
      /> */}
    </div>
  );
}
