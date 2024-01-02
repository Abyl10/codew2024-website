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
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="max-w-[1325px] w-full flex">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="font-bold text-[100px] text-white">Agenda</span>
            <span className="font-medium text-[35px] text-white -mt-[25px]">
              March 9th, 2023 | GMT+6
            </span>
          </div>
          <span className="font-light text-[27px] text-white mt-[57px] max-w-[500px]">
            Note: details are subject to change, registration and closing
            ceremony times are final.
          </span>
        </div>
        <div className="flex">
          <div className="text-right w-fit">
            {timetable.map((event) => (
              <div key={event.time} className="flex ">
                <span className="font-medium text-[30px] text-white w-[100%]">
                  {event.time}
                </span>
              </div>
            ))}
          </div>
          <div className="text-right w-fit">
            {timetable.map((event) => (
              <div key={event.time} className="flex ">
                <div className="h-9 w-9 bg-[#EC2B8C] rounded-full ml-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
