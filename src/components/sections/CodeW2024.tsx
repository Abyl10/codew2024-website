import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const CodeW2024 = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center w-full">
      <div className="flex phone:flex-col flex-auto justify-between h-fit w-full max-w-[1655px]">
        <div className="phone:w-full phone:flex phone:flex-col phone:items-center phone:justify-center phone:px-[40px]">
          <p className="font-medium desktop:text-[61px] phone:text-[29px] text-white">5th annual</p>
          <Image className="desktop:hidden" src={logo} alt="invalid image" />
          <p className="font-bold text-[191px] text-white -mt-[70px] phone:text-[42px] phone:mt-0">codeW</p>
          <p className="font-bold text-[181px] text-white -mt-[80px] phone:text-[42px]  phone:-mt-[20px]">2024</p>
          <button className="bg-gradient-to-b from-[#E42D8F] to-[#8948AF] px-16 py-3 shadow-[0px_4.318px_14.033px_0px_rgba(0, 0, 0, 0.30)_inset] font-medium text-[35px] text-white -mt-[80px] rounded-full phone:mt-4 phone:px-8 phone:text-[15.5px]">
            Register
          </button>
        </div>
        <Image className="phone:hidden" src={logo} alt="invalid image" />
      </div>
    </div>
  );
};
