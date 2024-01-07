const timetable = [
  {
    time: "9:30-10:00",
    title: "Registration",
  },
  {
    time: "10:00-11:00",
    title: "Opening",
  },
  {
    time: "11:00-13:00",
    title: "Workshop",
  },
  {
    time: "13:00-14:00",
    title: "Lunch Break",
  },
  {
    time: "14:00-17:00",
    title: "Main Contest",
  },
  {
    time: "17:00-18:00",
    title: "Networking",
  },
  {
    time: "18:00-18:30",
    title: "Closing Ceremony",
  },
];

export const Agenda = () => {
  return (
    <div className="w-full tablet:h-[100vh] flex justify-center items-center phone:flex-col mt-[140px]">
      <div className="max-w-[1325px] w-full grid grid-cols-2 gap-28 phone:grid-cols-1 phone:gap-12">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="flex flex-col phone:justify-center phone:items-center">
            <span className="font-bold text-[100px] text-white phone:text-[36px]">
              Agenda
            </span>
            <span className="font-medium text-[35px] text-white -mt-[25px] phone:text-[13.5px] phone:mt-0">
              March 9th, 2023 | GMT+6
            </span>
          </div>
          <span className="font-light text-[27px] text-white mt-[57px] max-w-[500px] phone:hidden">
            Note: details are subject to change, registration and closing
            ceremony times are final.
          </span>
        </div>
        <div className="flex phone:w-full phone: phone:justify-center">
          <div className="text-right w-fit">
            {timetable.map((event) => (
              <div key={event.time} className="flex ">
                <span className="font-medium text-[30px] text-white w-[100%] mb-[66.5px] phone:text-[12px] phone:mb-[32px]">
                  {event.time}
                </span>
              </div>
            ))}
          </div>
          <div className="text-right w-fit">
            {timetable.map((event, index) => (
              <div
                key={event.time}
                className="flex flex-col justify-center items-center"
              >
                <div className="h-9 w-9 bg-[#EC2B8C] rounded-full mx-10 drop-shadow-[0_2.33px_8px_rgba(236,43,140,0.40)] phone:h-[15px] phone:w-[15px] phone:mx-4" />

                {index + 1 != timetable.length && (
                  <div className="h-[75px] w-[5px] bg-white phone:h-[35px] phone:w-[2px]" />
                )}
              </div>
            ))}
          </div>
          <div className="text-left w-fit">
            {timetable.map((event) => (
              <div key={event.time} className="flex ">
                <span className="font-medium text-[30px] text-white w-[100%] mb-[66.5px] phone:text-[12px] phone:mb-[32px]">
                  {event.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="font-light text-[10px] text-white mt-[57px] tablet:hidden max-w-[280px]">
        Note: details are subject to change, registration and closing ceremony
        times are final.
      </span>
    </div>
  );
};
