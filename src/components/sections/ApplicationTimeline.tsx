const textes = [
  "Registration Deadline, no applications will be accepted after 23:59",
  "Link to the qualification contest will be sent to those who are eligible to participate",
  "Deadline to complete qualification contest",
  "Confirmation of participation with track based on qualification contest will be sent",
];

const dates = ["February 25th", "February 28th", "March 3rd", "March 5th"];

export const ApplicationTimeline = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="max-w-[1750px] w-full px-[88px]">
        <span className="font-semibold text-[100px] text-white">
          Application Timeline
        </span>

        <div className="flex flex-col items-center">
          <div className="flex items-end gap-20 mt-16">
            {textes.map((text) => {
              return (
                <div
                  key={text}
                  className="flex flex-col justify-center items-center"
                >
                  <div className=" bg-gradient-to-r from-[#7F4BB2] to-[#E52D8E] py-6 px-6 font-medium text-[27px] text-white rounded-[20px] h-fit">
                    {text}
                  </div>
                  <div className="w-[4px] h-[67px] bg-[#ECECECB2] mt-5 rounded-[5px]" />
                </div>
              );
            })}
          </div>
          <div className="w-[90%] bg-[#ECECECB2] h-[4px] mt-5 rounded-[5px]" />
        </div>
        <div className=" flex justify-center items-center mt-16">
          <div className=" w-[95%] flex justify-between items-center">
            {dates.map((date) => {
              return (
                <div key={date} className="font-regular text-[40px] text-white">
                  {date}
                </div>
              );
            })}
          </div>
        </div>
        <div className="font-light text-white text-[27px] mt-[100px]">
          Note: Your participation depends entirely on accurate registration and
          completion of the qualification round, so make sure to be careful when
          filling out all the forms!
        </div>
      </div>
    </div>
  );
};
