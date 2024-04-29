import Navbar from "@/components/Navbar";
import About from "@/components/Pages/About";
import Main from "@/components/Pages/Main";
import Speakers from "@/components/Pages/Speakers";
import Tickets from "@/components/Pages/Tickets";
import Footer from"@/components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full h-screen overflow-y-scroll home-bg">
      <Navbar/>
      <Main/>
      <About/>
      <Tickets/>
      <Speakers/>
      <Footer/>


      
    </div>
  );
}
