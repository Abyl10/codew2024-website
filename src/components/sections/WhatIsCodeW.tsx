"use client";

export const WhatIsCodeW = () => {
  return (
    <div className="w-full flex justify-center items-center" id="about">
      <div className="max-w-[1700px] desktop:h-[100vh] px-36 phone:px-6 phone:mt-20 flex flex-col justify-center items-center">
        <span className="font-semibold text-[32px] underline text-white flex phone:text-[15.6px] w-full text-left">
          WHAT IS CODE<span className="text-[#FF62B1]">W</span>2024?
        </span>
        <div className="font-medium text-white text-[32px] mt-[45px] phone:text-[14.9px] phone:mt-[30px]">
          <span className="text-[#FF62B1]">codeW2024</span> is the 5th annual
          national competition in
          <span className="text-[#FF62B1]">competitive programming</span> for
          the university and high school{" "}
          <span className="text-[#FF62B1]">female students</span>. During the
          competition, the participants will solve problems on{" "}
          <span className="text-[#FF62B1]">algorithms</span> and{" "}
          <span className="text-[#FF62B1]">data structures</span>
          in any <span className="text-[#FF62B1]">programming language</span>.
          Contest problems are provided in 3 languages: English, Kazakh, and
          Russian.
          <br /> <br />
          codeW2024 will take place at{" "}
          <span className="text-[#FF62B1]">Nazarbayev University</span>, on{" "}
          <span className="text-[#FF62B1]">March 9th 2024</span>.
        </div>
      </div>
    </div>
  );
};
