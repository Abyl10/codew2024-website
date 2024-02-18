import { useTranslations } from "next-intl";

export const Agenda = () => {

  const t = useTranslations("agenda")

  const timetable = [
    {
      time: "9:30-10:00",
      title: t("firstEvent"),
    },
    {
      time: "10:00-11:00",
      title: t("secondEvent"),
    },
    {
      time: "11:00-13:00",
      title: t("thirdEvent"),
    },
    {
      time: "13:00-14:00",
      title: t("4thEvent"),
    },
    {
      time: "14:00-17:00",
      title: t("5thEvent"),
    },
    {
      time: "17:00-18:00",
      title: t("6thEvent"),
    },
    {
      time: "18:00-18:30",
      title: t("7thEvent"),
    },
  ];
  return (
    <div className="w-full flex justify-center items-center phone:mt-[160px] desktop:mt-[220px]">
      <div className="max-w-[1700px] px-32 w-full phone:px-8">
        <div className="w-full grid grid-cols-2 gap-20 phone:grid-cols-1 phone:gap-12">
          <div className="flex flex-col h-full justify-center items-center">
            <div className="flex flex-col phone:justify-center phone:items-center">
              <span className="font-bold text-[100px] text-white phone:text-[36px]">
                {t("agenda")}
              </span>
              <span className="font-medium text-[35px] text-white -mt-[25px] phone:text-[13.5px] phone:mt-0">
                {t("data")} | GMT+5
              </span>
            </div>

            <span className="font-light text-[27px] text-white mt-[57px] max-w-[500px] phone:hidden">
              {t("note")}
            </span>
          </div>
          <div className="flex phone:w-full phone: phone:justify-center">
            <div className="text-right w-fit">
              {timetable.map((event) => (
                <div key={event.time} className="flex ">
                  <span className="font-medium text-[20px] text-white w-[100%] mb-[62px] phone:text-[12px] phone:mb-[32px]">
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
                  <div className="h-7 w-7 bg-[#EC2B8C] rounded-full mx-10 drop-shadow-[0_2.33px_8px_rgba(236,43,140,0.40)] phone:h-[15px] phone:w-[15px] phone:mx-4" />

                  {index + 1 != timetable.length && (
                    <div className="h-[63px] w-[5px] bg-white phone:h-[35px] phone:w-[2px]" />
                  )}
                </div>
              ))}
            </div>
            <div className="text-left w-fit">
              {timetable.map((event) => (
                <div key={event.time} className="flex ">
                  <span className="font-medium text-[20px] text-white w-[100%] mb-[62px] phone:text-[12px] phone:mb-[32px]">
                    {event.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <span className="font-light text-[10px] text-white mt-[57px] desktop:hidden max-w-[280px] leading-[0px]">
        {t("note")}
        </span>
      </div>
    </div>
  );
};
