import InstaIcon from "@/assets/images/SVG/InstaIcon";
import InstaIconMobile from "@/assets/images/SVG/InstaIconMobile";
import TelegaIcon from "@/assets/images/SVG/TelegaIcon";
import TelegaIconMobile from "@/assets/images/SVG/TelegaIconMobile";
import YouTubeIconMobile from "@/assets/images/SVG/YouTubeIconMobile";
import YoutubeIcon from "@/assets/images/SVG/YoutubeIcon";
import Image from "next/image";
import Board from "@/assets/images/Board.png";
import { useTranslations } from "next-intl";

const OurTeam = () => {

  const t = useTranslations("team");

  return (
    <div id="team" className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1700px] px-24 phone:px-12 min-h-[100vh] flex flex-col justify-center">
        <span className="font-medium text-[80px] text-white flex flex-col justify-center items-center phone:text-[36px]">
          {t("team")}
        </span>

        <div className="grid gap-10 grid-cols-2 mt-[40px] phone:grid-cols-1">
          <span className="font-light text-[20px] text-white phone:text-[11px]">
            {t("first")}
            <br /> <br />
            {t("second")}
          </span>
          <div className="flex flex-col justify-center items-center">
            <Image alt="board" src={Board} className="bg-contain grow-0 rounded-[8px]" />
            <div className="flex mt-[40px] gap-12 items-center phone:hidden">
              <a href="https://www.instagram.com/nuacm_wsc/">
                <InstaIcon />
              </a>
              <a href="https://t.me/nu_acm_w">
                <TelegaIcon />
              </a>
              <a href="https://www.youtube.com/watch?v=H2HUSqHp_zw&list=PL71s7KOHU4EpMVgH_C0klBQamfVzYdJ2i">
                <YoutubeIcon />
              </a>
            </div>
            <div className="w-full flex mt-10 justify-center items-center gap-6 desktop:hidden">
              <a href="https://www.instagram.com/nuacm_wsc/">
                <InstaIconMobile />
              </a>
              <a href="https://t.me/nu_acm_w">
                <TelegaIconMobile />
              </a>
              <a href="https://www.youtube.com/watch?v=H2HUSqHp_zw&list=PL71s7KOHU4EpMVgH_C0klBQamfVzYdJ2i">
                <YouTubeIconMobile />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
