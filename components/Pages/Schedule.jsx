import React from "react";
import EventCard from "../EventCard";

const Schedule = () => {

    const events = [
        {
            title: 'Registration',
            description: 'Mark your trace and recieve the essentials',
            time: '8:30',
            period: 'AM'
        },
        {
            title: 'Inagruation',
            description: 'Witness the official start of PIEVERSE',
            time: '9:30',
            period: 'AM'
        },
        {
            title: 'Ice Breaker',
            description: 'Jump into it with loads of fun',
            time: '11:00',
            period: 'AM'
        },
        {
          title: 'Talk',
          description: 'Have a blast with RJ Shambu',
          time: '11:30',
          period: 'AM'
      },
        {
            title: 'Workshop',
            description: 'Level yourself up a notch in your chosen track',
            time: '1:30',
            period: 'PM'
        },
        {
          title: 'Feedback',
          description: 'Partake through the end of an exhilarating day',
          time: '4:15',
          period: 'PM'
      },
    ]
  return (
    <section
      id="schedule"
      className="w-full h-max bg-black/50 p-4 py-8 mt-8 md:p-8 md:px-12 xl:px-20"
    >
      <div className="w-full flex flex-col items-center">
        <h1 className="flex gap-2 items-center text-white text-3xl md:text-4xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          EVENT <span className="text-primary">SCHEDULE</span>
        </h1>
        <h2 className="text-zinc-400 font-semibold mt-2 text-xl">
          Here is our event schedule
        </h2>
        <hr className="border-2 border-primary w-24 mt-4" />
        <div className="w-full flex flex-col gap-5 md:px-16 lg:px-24 xl:px-32 mt-8">
            {
                events.map((event,key)=>(
                    <EventCard key={key} title={event.title} time={event.time} period={event.period} description={event.description} />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Schedule;
