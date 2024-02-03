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
    <div className="w-full flex justify-center items-center relative mt-[200px]">
      <div className="w-full h-[390px] absolute top-0 phone:hidden">
        <Image src={ImageTop} alt="invalid photo" />
      </div>
      <div className="w-full h-[240px] absolute top-0 desktop:hidden">
        <Image fill alt="" src={MobileTopImage} />
      </div>
      <div className="flex flex-col items-center justify-center h-[100vh] w-full">
        <span className="font-semibold text-[50px] text-white phone:text-[18px]">
          code. win. network.
        </span>
        <a
          href="https://forms.gle/Lj9QEtEVEpkZi9Fz9"
          target="_blank"
          rel="noopener"
        >
          <button className="bg-gradient-to-b bg-[#2E3252] px-16 py-3 shadow-[0px_4.318px_14.033px_0px_rgba(0, 0, 0, 0.30)_inset] font-medium text-[20px] text-white rounded-full phone:text-[13.5px] phone:px-6 phone:mt-2 transform hover:scale-110 transition-all ease-in-out duration-200">
            Register
          </button>
        </a>
      </div>
      <div className="w-full flex justify-center items-center absolute bottom-8 z-10">
        <div className="flex justify-between w-full max-w-[1590px]  phone:pl-[40px] phone:pr-[25px]  desktop:px-[100px] items-center">
          <span className="font-regular text-[18px] text-white phone:text-[8px]">
            © 2023 NU ACM-Women SC All rights reserved.
            <br />
            Made with ❤️ by NU ACM-W SC Team
          </span>
          {/* <div className=" flex mt-10 justify-center items-center gap-6 phone:hidden">
            <a href="https://www.instagram.com/nuacmsc/">
              <InstaIcon />
            </a>
            <a href="https://t.me/nuacmsc">
              <TelegaIcon />
            </a>
            <a href="https://www.youtube.com/@nuacmsc">
              <YoutubeIcon />
            </a>
          </div> */}
          <div className=" flex justify-center items-center gap-2 ">
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
      <div className="w-full h-[200px] absolute bottom-0 phone:hidden">
        <Image fill alt="" src={ImageButtom} />
      </div>
      <div className="w-full h-[150px] absolute bottom-0 desktop:hidden">
        <Image fill alt="" src={MobileBottomImage} />
      </div>
    </div>
  );
};

export default CodeWinNetwork;
