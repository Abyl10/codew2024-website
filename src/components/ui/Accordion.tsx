import AccordionItem from "./AccordionItem";

const Accordion = ({ faqs }: { faqs: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-48 md:w-full mx-auto phone:gap-y-1">
      {faqs.map((faq: any, index: any) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
