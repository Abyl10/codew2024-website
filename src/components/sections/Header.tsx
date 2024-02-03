"use client";
import MenuBurgerIcon from "@/assets/images/SVG/MenuBurgerIcon";
import { LanguageSwitcher } from "..";
import { useState } from "react";
import BackArrowIcon from "@/assets/images/SVG/BackArrowIcon";

const headerContent = [
  {
    title: "About",
  },
  {
    title: "Schedule",
  },
  {
    title: "Sponsors",
  },
  {
    title: "Team",
  },
  {
    title: "FAQ",
  },
  {
    title: "Registration",
  },
];

const Header = () => {
  const [isBurgerHidden, setIsBurgerHidden] = useState(false);

  return (
    <div>
      <div className="flex gap-12 phone:hidden">
        {headerContent.map((item) => {
          return (
            <div className="font-regular text-white" key={item.title}>
              {item.title}
            </div>
          );
        })}
        <LanguageSwitcher />
      </div>
      {isBurgerHidden && (
        <div className="z-50 fixed w-full h-full bg-black overflow-hidden desktop:hidden py-4 mt-10 animate-fadeOut ">
          <div onClick={() => setIsBurgerHidden(false)}>back</div>
          {headerContent.map((item) => {
            return (
              <div
                className="font-regular px-5 py-1 text-[26px] text-white hover:bg-[#68686F]"
                key={item.title}
                onClick={() => setIsBurgerHidden(false)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      )}
      <div
        className={`desktop:hidden w-full flex justify-between px-5 py-4 fixed z-50 ${
          isBurgerHidden
            ? "bg-black"
            : "bg-[url('../../assets/images/bg-image.png')]"
        }`}
      >
        <div onClick={() => setIsBurgerHidden(!isBurgerHidden)}>
          <button>
            {isBurgerHidden ? <BackArrowIcon /> : <MenuBurgerIcon />}
          </button>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
