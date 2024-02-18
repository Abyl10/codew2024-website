import { useTranslations } from "next-intl";

export const WhatIsCodeW = () => {

  const t = useTranslations("whatIsCodeW")

  return (
    <div className="w-full flex justify-center items-center" id="about">
      <div className="max-w-[1700px] desktop:h-[100vh] px-36 phone:px-6 phone:mt-20 flex flex-col justify-center items-center">
        <span className="font-semibold text-[32px] underline text-white flex phone:text-[15.6px] w-full text-left">
          {t("title")}
        </span>
        <div className="font-medium text-white text-[32px] mt-[45px] phone:text-[14.9px] phone:mt-[30px]">
          <span className="text-[#FF62B1]">codeW2024</span> {t("sectionOne")}{" "}
          <span className="text-[#FF62B1]">{t("sectionOneRed")}</span> {t("sectionTwo")}{" "}
          <span className="text-[#FF62B1]">{t("sectionTwoRed")}</span>{" "}
          {t("sectionThree")}
          <br /> <br />
          {t("location")}
        </div>
      </div>
    </div>
  );
};
