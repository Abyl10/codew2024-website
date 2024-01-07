import InstaIcon from "@/assets/images/SVG/InstaIcon";
import InstaIconMobile from "@/assets/images/SVG/InstaIconMobile";
import TelegaIcon from "@/assets/images/SVG/TelegaIcon";
import TelegaIconMobile from "@/assets/images/SVG/TelegaIconMobile";
import YouTubeIconMobile from "@/assets/images/SVG/YouTubeIconMobile";
import YoutubeIcon from "@/assets/images/SVG/YoutubeIcon";
import ImageTop from "@/assets/images/Vector 346.png";
import ImageButtom from "@/assets/images/Vector 347.png";
import Image from "next/image";

const CodeWinNetwork = () => {
  return (
    <div className="w-full phone:h-[100vh] relative flex flex-col justify-center items-center">
      <div className="w-full h-[390px] absolute top-0">
        <Image fill alt="" src={ImageTop} />
      </div>
      <span className="font-semibold text-[74px] text-white phone:text-[18px]">
        code. win. network.
      </span>
      <button className="bg-gradient-to-b from-[#E42D8F] to-[#8948AF] px-16 py-3 shadow-[0px_4.318px_14.033px_0px_rgba(0, 0, 0, 0.30)_inset] font-medium text-[35px] text-white rounded-full phone:text-[13.5px]">
        Register
      </button>

      <div className="w-full flex justify-center items-center absolute bottom-8 z-10">
        <div className="flex justify-between w-full max-w-[1590px]  phone:pl-[40px] phone:pr-[25px]">
          <span className="font-regular text-[29px] text-white phone:text-[8px]">
            © 2023 NU ACM-Women SC All rights reserved.
            <br />
            Made with ❤️ by developer designer names
          </span>
          <div className=" flex mt-10 justify-center items-center gap-6 phone:hidden">
            <InstaIcon />
            <TelegaIcon />
            <YoutubeIcon />
          </div>
          <div className=" flex justify-center items-center gap-2 desktop:hidden">
            <InstaIconMobile />
            <TelegaIconMobile />
            <YouTubeIconMobile />
          </div>
        </div>
      </div>

      <div className="w-full h-[280px] absolute bottom-0">
        <Image fill alt="" src={ImageButtom} />
      </div>
    </div>
  );
};

export default CodeWinNetwork;
