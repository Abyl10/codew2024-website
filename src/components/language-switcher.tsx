"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales } from "@/consts/locales";
import { useLocale, useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useSearchParams } from "next/navigation";
import { Icons } from "./icons";
import { useState } from "react";

const { usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = (locale: string) => {
    router.replace(pathname + "?" + searchParams, {
      locale,
    });
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex flex-row uppercase items-center bg-[#BA3A9E] py-1 px-3 rounded-[50px] font-regular">
            <p className="text-white mr-1.5">{locale}</p>
            <Icons.languageArrowDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="uppercase rounded-[14px] bg-[#BA3A9E] !text-white font-regular border-none">
          <DropdownMenuRadioGroup
            value={locale}
            onValueChange={(val) => handleClick(val)}
          >
            {locales.map((locale: string) => (
              <DropdownMenuRadioItem key={locale} value={locale} >
                {locale}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
