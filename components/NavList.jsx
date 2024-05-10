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
      const sections = document.querySelectorAll("section");
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const windowBottom = scrollPosition + windowHeight;
  
        // Calculate the visible portion of the section
        const visibleHeight = Math.min(
          windowBottom,
          sectionTop + sectionHeight
        ) - Math.max(scrollPosition, sectionTop);
  
        // Calculate the percentage of section visibility
        const visibilityPercentage = (visibleHeight / sectionHeight) * 100;
  
        // Set a threshold for visibility percentage (adjust as needed)
        const visibilityThreshold = 50; // At least 50% visible
  
        if (visibilityPercentage >= visibilityThreshold) {
          setActiveSection(section.id);
          console.log("Section changed");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex items-center gap-4 lg:gap-16 max-sm:hidden">
      {NavbarLinks.map((link, key) => {
        return (
          <div
            key={key}
            className={cn(
              "flex items-center gap-1 pb-1 transition-all duration-300 xl:text-xl",
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
