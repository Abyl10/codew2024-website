import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const CodeW2024 = () => {
  return (
    <div className="h-[100vh] px-[112px] flex items-center w-full">
      <div className="flex justify-between h-fit w-full">
        <div>
          <p className="font-medium text-[61px] text-white">5th annual</p>
          <p className="font-bold text-[191px] text-white -mt-[70px]">codeW</p>
          <p className="font-bold text-[181px] text-white -mt-[80px]">2024</p>
          <button className="bg-gradient-to-b from-[#E42D8F] to-[#8948AF] px-16 py-3 shadow-[0px_4.318px_14.033px_0px_rgba(0, 0, 0, 0.30)_inset] font-medium text-[35px] text-white -mt-[80px] rounded-full">
            Register
          </button>
        </div>
        <Image src={logo} alt="invalid image" />
      </div>
    </div>
  );
};
