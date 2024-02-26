import { useTranslations } from "next-intl";
import Accordion from "../ui/Accordion";


const FAQ = () => {

  const t = useTranslations("faq");

  const faqs = [
    {
      question: t("firstQ"),
      answer: t("firstA"),
    },
    {
      question: t("secondQ"),
      answer: t("secondA"),
    },
    {
      question: t("thirdQ"),
      answer: t("thirdA"),
    },
    {
      question: t("4thQ"),
      answer: t("4thA"),
    },
    {
      question: t("5thQ"),
      answer: t("5thA"),
    },
    {
      question: t("6thQ"),
      answer: t("6thA"),
    },
    {
      question: t("7thQ"),
      answer: t("7thA"),
    },
    {
      question: t("8thQ"),
      answer: t("8thA"),
    },
    {
      question: t("9thQ"),
      answer: t("9thA"),
    },
    {
      question: t("10thQ"),
      answer: t("10thA"),
    },
  ];
  return (
    <div className="w-full flex justify-center items-center desktop:mt-[150px]" id="faq">
      <div className="max-w-[1700px] px-24 phone:px-12">
        <span className="font-mediumC text-[100px] text-white flex flex-col phone:text-[35px] phone:text-center">
          FAQs
        </span>
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FAQ;
