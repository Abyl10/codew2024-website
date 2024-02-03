"use client";
import MenuBurgerIcon from "@/assets/images/SVG/MenuBurgerIcon";
import { LanguageSwitcher } from "..";
import { useState } from "react";
import BackArrowIcon from "@/assets/images/SVG/BackArrowIcon";
import { Item } from "@radix-ui/react-dropdown-menu";

const headerContent = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Schedule",
    href: "#schedule"
  },
  {
    title: "Team",
    href: "#team"
  },
  {
    title: "FAQ",
    href: "#faq"
  },
  {
    title: "Registration",
    href: "https://forms.gle/Lj9QEtEVEpkZi9Fz9"
  },
];

const Header = () => {
  const [isBurgerHidden, setIsBurgerHidden] = useState(false);

  return (
    <div className="w-full flex justify-end max-w-[1700px]">
      <div className="flex gap-12 phone:hidden items-center py-4 px-24">
        {headerContent.map((item) => {
          return (
            <a key={item.title} href={item.href}>
              <button className="font-regular text-white hover:underline" key={item.title}>
                {item.title}
              </button>
            </a>
          );
        })}
        <LanguageSwitcher />
      </div>
      {isBurgerHidden && (
        <div className="z-50 fixed w-full h-full bg-black overflow-hidden desktop:hidden py-4 mt-10 animate-fadeOut ">
          <div onClick={() => setIsBurgerHidden(false)}>back</div>
          {headerContent.map((item) => {
            return (
              <a key={item.title} href={item.href}>
                <div
                  className="font-regular px-5 py-1 text-[26px] text-white hover:bg-[#68686F]"
                  onClick={() => setIsBurgerHidden(false)}
                >
                  {item.title}
                </div>
              </a>
            );
          })}
        </div>
      )}
      <div
        className={`desktop:hidden w-full flex justify-between px-5 py-4 fixed z-50 bg-[#070919]`}
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
