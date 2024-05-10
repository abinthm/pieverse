import React from "react";

const Tickets = () => {
  return (
    <section id="ticket" className="w-full h-max p-5 md:p-8 xl:px-14">
      <div className=" w-full h-full flex flex-col items-center bg-violet-950/70 p-4 md:pt-8 shadow-md">
        <h1 className="flex gap-2 items-center text-4xl font-bold text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
          Buy <span className="text-primary">Tickets</span> 
        </h1>
        <div className="flex flex-col md:text-lg mt-4 text-center text-zinc-300">
          <span>Grab your tickets !</span>
          <span className="md:px-16">
            Don't miss out on this exciting opportunity to learn from the best
            in the business!
          </span>
        </div>
        <div className="w-full flex flex-col md:flex-row p-4 xl:px-8 gap-8 xl:gap-14 text-black">
          <div className="w-full h-max flex flex-col items-center bg-primary rounded-xl shadow-md p-4">
            <h2 className="font-semibold text-secondary">IEEE MEMBERS</h2>
            <h3 className="text-6xl">₹199</h3>
            <hr className="w-full my-4 border-[0.5px] border-black" />
            <ul className="flex flex-col gap-1 md:gap-3 max-sm:text-sm pl-4">
              <li>Food charges included</li>
              <li>Access to Session, Workshop, and Competition</li>
              <li>3 Certificates</li>
              <li>Activity Points</li>
            </ul>
          </div>
          <div className="w-full h-max flex flex-col items-center bg-primary rounded-xl shadow-md p-4">
            <h2 className="font-semibold text-secondary">Non-IEEE MEMBERS</h2>
            <h3 className="text-6xl">₹249</h3>
            <hr className="w-full my-4 border-[0.5px] border-black" />
            <ul className="flex flex-col gap-1 md:gap-3 max-sm:text-sm pl-4">
              <li>Food charges included</li>
              <li>Access to Session, Workshop, and Competition</li>
              <li>3 Certificates</li>
              <li>Activity Points</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
