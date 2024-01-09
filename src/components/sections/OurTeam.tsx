import InstaIcon from "@/assets/images/SVG/InstaIcon";
import InstaIconMobile from "@/assets/images/SVG/InstaIconMobile";
import TelegaIcon from "@/assets/images/SVG/TelegaIcon";
import TelegaIconMobile from "@/assets/images/SVG/TelegaIconMobile";
import YouTubeIconMobile from "@/assets/images/SVG/YouTubeIconMobile";
import YoutubeIcon from "@/assets/images/SVG/YoutubeIcon";

const OurTeam = () => {
  return (
    <div className="w-full desktop:h-[100vh] flex items-center justify-center phone:mt-[290px] desktop:px-[120px] desktop:mt-[400px]">
      <div className="max-w-[1600px]">
        <span className="font-medium text-[100px] text-white flex flex-col justify-center items-center phone:text-[36px]">
          Our Team
        </span>

        <div className="grid grid-cols-2 gap-10 mt-[65px] phone:grid-cols-1 phone:mt-[21px] phone:mx-[55px]">
          <span className="font-light text-[30px] text-white phone:text-[11px]">
            NU ACM-W Student Chapter is the first and only branch of the largest
            international organisation of ACM-Women in Kazakhstan and Central
            Asia. Our goal is to provide women with social and professional
            support in the field of computer technology, informatics and
            engineering, as well as to promote their technical growth by
            organising various events.
            <br /> <br />
            Starting from Fall 2017, our Student Chapter has been showing great
            professionalism in the organisation of university, city, and
            nation-level events. Current team of 25 designers, copywriters,
            event managers, and marketing specialists is led by Aruzhan
            Ryssayeva (Chair) and Diana Sovetova (Vice-Chair).{" "}
          </span>
          <div>
            <div className="w-[550px] h-[368px] bg-[#C6E8B1] phone:w-[252px] phone:h-[129px]" />
            <div className="w-full flex mt-10 justify-center items-center gap-6 phone:hidden">
              <InstaIcon />
              <TelegaIcon />
              <YoutubeIcon />
            </div>
            <div className="w-full flex mt-10 justify-center items-center gap-6 desktop:hidden">
              <InstaIconMobile />
              <TelegaIconMobile />
              <YouTubeIconMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
