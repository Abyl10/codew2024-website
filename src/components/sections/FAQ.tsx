import Accordion from "../ui/Accordion";

export const faqs = [
  {
    question: "Who can participate in codeW2024?",
    answer: `Everyone is eligible for online participation! \n
      Offline participation is available for school (16+) and UG students.
      `,
  },
  {
    question: "Is participation free?",
    answer:
      "Yes! Participation is free for both online and offline participants.",
  },
  {
    question: "What's the difference between offline and online participation?",
    answer:
      "Main difference is the eligibility for the prizes. Only offline participants can receive prizes.",
  },
  {
    question: "Why do only the offline participants have prizes?",
    answer: `Since 2020, NU Open has been thoughtfully designed with a focus on catering to the needs and interests of students. It's important to note that all the problems featured in NU Open have been created by students themselves. Our primary objective has consistently been to promote and popularize competitive programming within the student community. This is the main reason why we give prizes only to offline participants. \n 
  
      You still have an opportunity to participate online. By choosing this option, you'll have full access to all the problem sets, and we will also provide you with a live standing to follow. 
      `,
  },
  {
    question: "What are the prizes?",
    answer: `
      We prepared a special merch and cash prize for offline participants, in total there would be seven places as follows:
      1st place: 300k + merch
      2nd place: 200k + merch 
      2nd place: 200k + merch 
      3rd place: 100k + merch
      3rd place: 100k + merch
      Best girl team: merch
      Best school team: merch
      `,
  },
  {
    question: "Who is eligible for the prize?",
    answer:
      "Offline participants (school and undergraduate students who are 16+) are eligible for the prize.",
  },
  {
    question: "I am studying at school, am I eligible for the prize?",
    answer: "If you are older than 16, yes!",
  },
  {
    question: "I am a masters student, am I eligible for the prize?",
    answer: "Unfortunately, not",
  },
  {
    question: "Who is the organizer?",
    answer:
      "The main organizer of the NU Open 2023 is Nazarbayev University Association for Computing Machinery Student Chapter.",
  },
  {
    question: "How to be a part of NU ACM SC?",
    answer: `Please visit our <a href="https://nusc.acm.org/" target="_blank" rel="noopener" class='text-red-600 underline'>website</a>, we will reopen recruitment next Spring semester.`,
  },
];

const FAQ = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="max-w-[1450px]">
        <span className="font-medium text-[100px] text-white flex flex-col">
          FAQs
        </span>
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FAQ;
