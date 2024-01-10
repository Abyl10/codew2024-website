import { LanguageSwitcher } from "@/components";
import { Agenda } from "@/components/sections/Agenda";
import { ApplicationTimeline } from "@/components/sections/ApplicationTimeline";
import { CodeW2024 } from "@/components/sections/CodeW2024";
import CodeWinNetwork from "@/components/sections/CodeWinNetwork";
import FAQ from "@/components/sections/FAQ";
import OurPartners from "@/components/sections/OurPartners";
import OurTeam from "@/components/sections/OurTeam";
import { WhatIsCodeW } from "@/components/sections/WhatIsCodeW";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("test");
  return (
    // <main>
    //   {/* this should be in header component*/}
    //   <LanguageSwitcher />
    //   <WhatIsCodeW />

    //   <p>{t("title")}</p>
    // </main>

    //TODO: HEADER and other not ready parts
    //TODO for me(Sanzhar): Change styled of codeW2024, and make some fixes at ApplicationTimeline part; add mobile version, and add i18n; fix: background;
    <div className="bg-[url('../../assets/images/bg-image.png')] w-full bg-no-repeat bg-cover	">
      <CodeW2024 />
      <WhatIsCodeW />
      <ApplicationTimeline />
      <Agenda />
      {/* <OurPartners /> */}
      <OurTeam />
      <FAQ />
      <CodeWinNetwork />
    </div>
  );
}
