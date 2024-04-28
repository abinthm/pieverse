import React from "react";
import NavList from "./Navlist";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-7 py-4 text-white bg-black/40 select-none fixed">
      <Image src={"/assets/logo/pie.png"} width={150} height={100} alt="..." />
      <div className="flex items-center gap-16 sm:pt-4">
        <NavList />
        <div className="flex gap-3 items-center">
          <Button className="px-5" >Buy Tickets</Button>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
