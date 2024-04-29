"use client";
import { NavbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavList = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // assuming sections have unique IDs
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center gap-5 lg:gap-16 max-sm:hidden">
      {NavbarLinks.map((link, key) => {
        return (
          <div
            key={key}
            className={cn(
              "flex items-center gap-1 pb-1 transition-all duration-300",
              {
                "border-b-4 border-primary": activeSection===link.name,
              }
            )}
          >
            <Link style={{ fontWeight: 500 }} href={link.route}>
              {link.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavList;
