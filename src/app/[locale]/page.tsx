import { LanguageSwitcher } from "@/components";
import { Agenda } from "@/components/sections/Agenda";
import { ApplicationTimeline } from "@/components/sections/ApplicationTimeline";
import { CodeW2024 } from "@/components/sections/CodeW2024";
import CodeWinNetwork from "@/components/sections/CodeWinNetwork";
import FAQ from "@/components/sections/FAQ";
import Header from "@/components/sections/Header";
import OurPartners from "@/components/sections/OurPartners";
import OurTeam from "@/components/sections/OurTeam";
import { WhatIsCodeW } from "@/components/sections/WhatIsCodeW";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("header");
  return (
    <div className="bg-[url('../../assets/images/bg-image.png')] w-full bg-no-repeat bg-cover">
      <div className="flex flex-col items-center fixed w-full bg-[#070919] z-50">
        <Header team={t("team")} about={t("about")} register={t("registration")} schedule={t("schedule")} />
      </div>
      <CodeW2024 />
      <WhatIsCodeW />
      <ApplicationTimeline />
      <Agenda />
      <OurTeam />    
      <FAQ />
      <CodeWinNetwork />
    </div>
  );
}
