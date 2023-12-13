import { LanguageSwitcher } from "@/components";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("test");
  return (
    <main>
      {/* this should be in header component*/}
      <LanguageSwitcher />

      <p>{t("title")}</p>
    </main>
  );
}
