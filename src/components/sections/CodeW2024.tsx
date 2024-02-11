import logo from "@/assets/images/LogoNew (1).png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const CodeW2024 = () => {

  const button = useTranslations("button");
  const codew = useTranslations("codeW2024");

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1700px] h-[100vh] w-full px-24 phone:px-12 flex items-center gap-10 justify-between">
        <div className="flex flex-col phone:items-center">
          <div className="font-medium text-white text-[50px] phone:text-[30px] ">{codew("subtitle")}</div>
          <Image src={logo} alt="invalid image" className="bg-contain desktop:hidden"/>
          <span className="font-bold text-white text-[150px] phone:text-[45px] leading-[140px] phone:leading-[45px] whitespace-nowrap phone:text-center mt-6">
            code
            <span className="phone:text-[#EE707A]">W</span>
            <br /> 2024
          </span>
          <a href="https://forms.gle/Lj9QEtEVEpkZi9Fz9" target="_blank" rel="noopener">
            <button className="bg-gradient-to-b from-[#E42D8F] to-[#8948AF] px-16 mt-8 phone:mt-4 phone:px-8 py-3 shadow-[0px_4.318px_14.033px_0px_rgba(0, 0, 0, 0.30)_inset] font-medium text-[35px] phone:text-[18px] text-white rounded-full transform hover:scale-110 transition-all ease-in-out duration-200">
              {button("register")}
            </button>
          </a>
        </div>
        <Image src={logo} alt="invalid image" className="bg-contain phone:hidden"/>
      </div>
    </div>
  );
};
