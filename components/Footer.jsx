import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 sm:px-6 py-4 md:py-8 text-white bg-slate-950">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col max-sm:text-center max-sm:items-center pb-5 md:pb-0 md:mr-8">
        <h1
          className={`text-2xl md:text-3xl font-extrabold text-primary mb-2 mentra-font tracking-wide`}
        >
          PIEVERSE
        </h1>
          <p>Providence college of Engineering</p>
          <p>Providence College Rd, Angadical South, Ala, Chengannur</p>
          <p>Kerala 689122</p>
          
          <div className="flex gap-4 items-center mt-3">
            <SocialIcon
              network="instagram"
              url=""
              bgColor="#5E0976"
              fgColor="#F7D63F"
              style={{ width: "40px", height: "40px" }}
            />
            <SocialIcon
              network="youtube"
              url=""
              bgColor="#5E0976"
              fgColor="#F7D63F"
              style={{ width: "40px", height: "40px" }}
            />
            <SocialIcon
              network="facebook"
              url=""
              bgColor="#5E0976"
              fgColor="#F7D63F"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>
        
        <div className="overflow-hidden rounded-xl md:mr-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.3807110727494!2d76.61414617420553!3d9.299493984697854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622984cfaf3af%3A0xd0320f890b6fca5!2sProvidence%20College%20of%20Engineering%20%26%20School%20of%20Business%2C%20Chengannur!5e0!3m2!1sen!2sin!4v1710087103947!5m2!1sen!2sin"
            className="h-full w-auto"
            allowFullScreen=""
            loading="none"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="text-center pt-6">
        <h2 className="text-xs">© Copyright IEEE PIE KERALA SECTION. All Rights Reserved</h2>
      </div>
    </footer> 
  );
};

export default Footer;
