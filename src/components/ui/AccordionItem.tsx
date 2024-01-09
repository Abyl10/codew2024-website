"use client";
import { useState } from "react";
import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ArrowUp from "@/assets/images/arrowUp.svg";
import ArrowDown from "@/assets/images/arrowDown.svg";
import ArrowUpMobile from "@/assets/images/MobileArrowUpButton.svg";
import ArrowDownMobile from "@/assets/images/MobileArrowDownButton.svg";

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
          <div className="flex items-center space-x-6 phone:text-[12px] phone:leading-none">
            <span>{question}</span>
          </div>

          <span>
            {isOpen ? (
              <div>
                <Image alt="arrow up" className="phone:hidden" src={ArrowUp} />
                <Image alt="arrow up" className="desktop:hidden" src={ArrowUpMobile} />
              </div>
            ) : (
              <div>
                <Image alt="arrow down" className="phone:hidden" src={ArrowDown} />
                <Image alt="arrow up" className="desktop:hidden" src={ArrowDownMobile} />
              </div>
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
                    className="text-sm lg:text-md font-medium tracking-wider leading-5 phone:!text-[10px] phone:leading-none"
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
