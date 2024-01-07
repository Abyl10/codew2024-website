"use client";
import { useState } from "react";
import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ArrowUp from "@/assets/images/arrowUp.svg";
import ArrowDown from "@/assets/images/arrowDown.svg";

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const answerLines = answer.split("\n");

  return (
    <div className="rounded-[8px] bg-[#DCDCDC] text-[100px]">
      <div className="p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center text-lg lg:text-2xl font-medium">
          <div className="flex items-center space-x-6  phone:text-[10px]">
            <span>{question}</span>
          </div>

          <span>
            {isOpen ? (
              <Image alt="arrow up" src={ArrowUp} />
            ) : (
              <Image alt="arrow down" src={ArrowDown} />
            )}
          </span>
        </div>
        {isOpen && (
          <div className="mt-2">
            {answerLines.map((line, index) => {
              if (/<.*>.*<\/.*>/.test(line)) {
                return (
                  <p
                    key={index}
                    className="text-sm lg:text-md font-medium tracking-wider leading-5"
                    dangerouslySetInnerHTML={{ __html: line }}
                  ></p>
                );
              }
              return (
                line.trim() !== "" && (
                  <p
                    key={index}
                    className="text-sm lg:text-md font-medium tracking-wider leading-5"
                  >
                    {line}
                  </p>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
