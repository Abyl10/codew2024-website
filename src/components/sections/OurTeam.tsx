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
        {/* <div className="bg-black h-full w-full">

        </div> */}
      </div>
    </div>

    // <div className="w-full desktop:mt-[280px] flex items-center justify-center phone:mt-[290px] desktop:px-[120px]">
    //   <div className="max-w-[1600px]">
    // <span className="font-medium text-[100px] text-white flex flex-col justify-center items-center phone:text-[36px]">
    //   Our Team
    // </span>

    //     <div className="grid grid-cols-2 gap-10 mt-[65px] phone:grid-cols-1 phone:mt-[21px] phone:mx-[55px]">
    // <span className="font-light text-[30px] text-white phone:text-[11px]">
    //   NU ACM-W Student Chapter is the first and only branch of the largest
    //   international organisation of ACM-Women in Kazakhstan and Central
    //   Asia. Our goal is to provide women with social and professional
    //   support in the field of computer technology, informatics and
    //   engineering, as well as to promote their technical growth by
    //   organising various events.
    //   <br /> <br />
    //   Starting from Fall 2017, our Student Chapter has been showing great
    //   professionalism in the organisation of university, city, and
    //   nation-level events. Current team of 25 designers, copywriters,
    //   event managers, and marketing specialists is led by Aruzhan
    //   Ryssayeva (Chair) and Diana Sovetova (Vice-Chair).{" "}
    // </span>
    //       <div>
    //         <div className="w-[550px] h-[368px] phone:w-[252px] phone:h-[129px]">
    //           <Image className="object-fill" alt="board" src={Board} />
    //         </div>
    //         <div className="w-full flex mt-10 justify-center items-center gap-6 phone:hidden">
    // <a href="https://www.instagram.com/nuacmsc/">
    //   <InstaIcon />
    // </a>
    // <a href="https://t.me/nuacmsc">
    //   <TelegaIcon />
    // </a>
    // <a href="https://www.youtube.com/@nuacmsc">
    //   <YoutubeIcon />
    // </a>
    //         </div>
            // <div className="w-full flex mt-10 justify-center items-center gap-6 desktop:hidden">
            //   <a href="https://www.instagram.com/nuacmsc/">
            //     <InstaIconMobile />
            //   </a>
            //   <a href="https://t.me/nuacmsc">
            //     <TelegaIconMobile />
            //   </a>
            //   <a href="https://www.youtube.com/@nuacmsc">
            //     <YouTubeIconMobile />
            //   </a>
            // </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default OurTeam;
