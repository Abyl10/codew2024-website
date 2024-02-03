import Accordion from "../ui/Accordion";

export const faqs = [
  {
    question: "Who can participate in codeW2024?",
    answer: `All female undergraduate students of universities and female high school students can apply to participate in codeW2024.`,
  },
  {
    question: "Is it free?",
    answer: "Yes, it is absolutely free of charge",
  },
  {
    question: "What if I am not from Astana?",
    answer: "You are still able to apply and travel to Astana for the contest.",
  },
  {
    question: "What is the qualification round?",
    answer: `It is a set of competitive programming tasks similar to the actual contest for us to identify the most suitable track for you and for you to practice.`,
  },
  {
    question: "What if I am a complete beginner?",
    answer: `It is great! codeW2024 is a great opportunity for you to discover the world of competitive programming and get hands-on experience.`,
  },
  {
    question: "Which track do I get?",
    answer:
      "We identify your track based on your qualification round results, so make sure to take it in time.",
  },
  {
    question: "If I competed before, does it affect my track this year?",
    answer: "Yes, if you won 1st, 2nd or 3rd place in certain track of previous years’ codeW, you will compete only in tracks higher this year.",
  },
  {
    question: "Do I have to know English?",
    answer: "Not at all, tasks will be given in 3 languages: English, Kazakh and Russian languages",
  },
  {
    question: "What is the format of codeW2024?",
    answer:
      "Contest will be held offline in Nazarbayev University, Astana, Kazakhstan",
  },
  {
    question: "What programming languages are available?",
    answer: `The contest will be held on Codeforces, and the accepted programming languages are those accepted by the platform.`,
  },
];

const FAQ = () => {
  return (
    <div className="w-full flex justify-center items-center desktop:mt-[150px]" id="faq">
      <div className="max-w-[1700px] px-24 phone:px-12">
        <span className="font-medium text-[100px] text-white flex flex-col phone:text-[35px] phone:text-center">
          FAQs
        </span>
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FAQ;
