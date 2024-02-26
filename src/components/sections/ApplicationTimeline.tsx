// const textes = [
//   "Registration Deadline, no applications will be accepted after 23:59",
//   "Link to the qualification contest will be sent to those who are eligible to participate",
//   "Deadline to complete qualification contest",
//   "Confirmation of participation with track based on qualification contest will be sent",
// ];

import { useTranslations } from "next-intl";

// const dates = ["February 25th", "February 28th", "March 3rd", "March 5th"];


export const ApplicationTimeline = () => {
  
  const t = useTranslations("applicationTimeline");
  
  const textes = [
    {
      text: t("firstDataContent"),
      date: t("firstData"),
    },
    {
      text: t("secondDataContent"),
      date: t("secondData"),
    },
    {
      text: t("thirdDataContent"),
      date: t("thirdData"),
    },
    {
      text: t("forthDataContent"),
      date: t("forthData"),
    },
  ];

  return (
    <div id="schedule" className="w-full desktop:min-h-[100vh] h-auto flex flex-col items-center justify-center phone:mt-[280px] desktop:mt-[140px]">
      <div className="max-w-[1700px] w-full px-24 phone:px-[35px]">
        <span className="font-semibold text-[80px] text-white phone:text-[24px]">
          {t("title")}
        </span>

        <div className="flex flex-col items-center">
          <div className="flex phone:flex-col items-end gap-20 mt-16 phone:gap-8">
            {textes.map((event) => {
              return (
                <div
                  key={event.text}
                  className="flex flex-col justify-center items-center"
                >
                  <div className=" bg-gradient-to-r from-[#7F4BB2] to-[#E52D8E] py-6 px-6 font-medium text-[20px] text-white rounded-[20px] h-fit phone:text-[14px] phone:max-w-[240px]">
                    {event.text}
                  </div>
                  <div className="phone:hidden w-[4px] h-[67px] bg-[#ECECECB2] mt-5 rounded-[5px]" />
                  <div className="desktop:hidden font-regular text-[40px] text-white phone:text-[14px] phone:mt-2">
                    {event.date}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[90%] bg-[#ECECECB2] h-[4px] mt-5 rounded-[5px] phone:hidden" />
        </div>
        <div className=" flex justify-center items-center mt-8 phone:hidden">
          <div className=" w-[95%] flex justify-between items-center">
            {textes.map((event) => {
              return (
                <div
                  key={event.date}
                  className="font-regular text-[30px] text-white"
                >
                  {event.date}
                </div>
              );
            })}
          </div>
        </div>
        <div className="font-light text-white text-[20px] mt-[60px] phone:text-[10px] phone:mt-[30px]">
          {t("note")}
        </div>
      </div>
    </div>
  );
};
