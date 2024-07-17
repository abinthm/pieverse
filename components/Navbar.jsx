import React from "react";
import NavList from "./NavList";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-7 py-4 xl:py-8 text-white bg-black/40 select-none fixed z-50">
      <Image src={"/assets/logo/pieverse.svg"} width={100} height={100} alt="..." />
      <div className="flex items-center gap-16 sm:pt-4">
        <NavList />
        <div className="flex gap-3 items-center">
          {/* <Button className="px-5" >Buy Tickets</Button> */}
          <a className={cn('flex items-center gap-2 py-2 bg-primary text-secondary rounded-3xl font-bold hover:bg-primary/50 hover:text-white px-5')} href="https://docs.google.com/forms/d/e/1FAIpQLScQihABsjtr_6ul80Fz2kPI3QWH7f8p2CZa7ZnnmL1qEjk22w/viewform">Buy Tickets</a>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
