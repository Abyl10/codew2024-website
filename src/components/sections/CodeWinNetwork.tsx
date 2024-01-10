import InstaIcon from "@/assets/images/SVG/InstaIcon";
import InstaIconMobile from "@/assets/images/SVG/InstaIconMobile";
import TelegaIcon from "@/assets/images/SVG/TelegaIcon";
import TelegaIconMobile from "@/assets/images/SVG/TelegaIconMobile";
import YouTubeIconMobile from "@/assets/images/SVG/YouTubeIconMobile";
import YoutubeIcon from "@/assets/images/SVG/YoutubeIcon";
import ImageTop from "@/assets/images/Vector 346.png";
import ImageButtom from "@/assets/images/Vector 347.png";
import Image from "next/image";
import MobileTopImage from "@/assets/images/TopMobile.png";
import MobileBottomImage from "@/assets/images/buttomMobile.png";

const CodeWinNetwork = () => {
  return (
    <div className="w-full  phone:h-[110vh] desktop:min-h-[1200px] relative flex flex-col justify-center items-center mt-[150px]">
      <div className="w-full h-[390px] absolute top-0 phone:hidden">
        <Image fill alt="" src={ImageTop} />
      </div>
      <div className="w-full h-[300px] absolute top-0 desktop:hidden">
        <Image fill alt="" src={MobileTopImage} />
      </div>
      <span className="font-semibold text-[74px] text-white phone:text-[18px]">
        code. win. network.
      </span>
      <button className="bg-gradient-to-b bg-[#2E3252] px-16 py-3 shadow-[0px_4.318px_14.033px_0px_rgba(0, 0, 0, 0.30)_inset] font-medium text-[35px] text-white rounded-full phone:text-[13.5px] phone:px-6 phone:mt-2">
        Register
      </button>

      <div className="w-full flex justify-center items-center absolute bottom-8 z-10">
        <div className="flex justify-between w-full max-w-[1590px]  phone:pl-[40px] phone:pr-[25px]  desktop:px-[100px]">
          <span className="font-regular text-[29px] text-white phone:text-[8px]">
            © 2023 NU ACM-Women SC All rights reserved.
            <br />
            Made with ❤️ by NU ACM-W SC Team
          </span>
          <div className=" flex mt-10 justify-center items-center gap-6 phone:hidden">
            <a href="https://www.instagram.com/nuacmsc/">
              <InstaIcon />
            </a>
            <a href="https://t.me/nuacmsc">
              <TelegaIcon />
            </a>
            <a href="https://www.youtube.com/@nuacmsc">
              <YoutubeIcon />
            </a>
          </div>
          <div className=" flex justify-center items-center gap-2 desktop:hidden">
            <a href="https://www.instagram.com/nuacmsc/">
              <InstaIconMobile />
            </a>
            <a href="https://t.me/nuacmsc">
              <TelegaIconMobile />
            </a>
            <a href="https://www.youtube.com/@nuacmsc">
              <YouTubeIconMobile />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[280px] absolute bottom-0 phone:hidden">
        <Image fill alt="" src={ImageButtom} />
      </div>
      <div className="w-full h-[228px] absolute bottom-0 desktop:hidden">
        <Image fill alt="" src={MobileBottomImage} />
      </div>
    </div>
  );
};

export default CodeWinNetwork;
