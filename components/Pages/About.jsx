import Image from "next/image";
import React from "react";
import Counter from "../Counter";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-max p-4 py-8 md:p-10 xl:px-20 bg-black/50 flex "
    >
      <div className="w-full flex flex-col md:flex-row max-sm:gap-5 items-center justify-evenly text-white">
        <div className="w-full flex flex-col">
          <h1 className="text-3xl">
            About <span className="text-primary font-extrabold">PIEVERSE</span>
          </h1>
          <p className="mt-4 max-sm:text-justify">
            Pie-verse, the unseen version of pie is presented by IEEE Young
            professionals Kerala section in collaboration with IEEE PIE Kerala
            section, IEEE SB PRC and GDSC PRC The event's main theme is 'To
            discover yourself'. The event will be having talks sessions, and
            workshops in 2 tracks - technical and entrepreneurship.
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <h1 className="flex items-center gap-2 font-bold text-3xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-primary"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            Venue
          </h1>
          <Image
            src={"/assets/location.svg"}
            height={170}
            width={170}
            className="bg-white mt-4 rounded-xl"
          />
          <div className="mt-4 flex flex-col text-center">
            <span>Providence College</span>
            <span>Chengannur, Alappuzha</span>
          </div>
          <hr className="w-2/3  my-2 border border-primary" />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="flex items-center gap-2 font-bold text-3xl">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-primary"
              >
                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Date
            </h1>
            <hr className="border-2 border-primary w-20" />
          </div>
          <h2 className="text-4xl font-semibold mt-4">4 May, 2024</h2>
          <Counter />
        </div>
      </div>
    </section>
  );
};

export default About;
