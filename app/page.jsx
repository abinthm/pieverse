import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";
import About from "@/components/Pages/About";
import Main from "@/components/Pages/Main";
import Posters from "@/components/Pages/Posters";
import Schedule from "@/components/Pages/Schedule";
import Speakers from "@/components/Pages/Speakers";
import Tickets from "@/components/Pages/Tickets";
import Footer from"@/components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full h-screen overflow-y-scroll overflow-x-hidden home-bg">
      <Navbar/>
      <Main/>
      <About/>
      <Tickets/>
      <Speakers/>
      {/* <Grid/> */}
      <Schedule/>
      <Posters/>
      <Footer/>
    </div>
  );
}
