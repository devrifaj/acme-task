"use client";
import Image from "next/image";
import Link from "next/link";
import DeskNavItems from "./DeskNavItems";
import { LogoIcon, MenuIcon } from "@/icons";
import { useState } from "react";
import MobNavItems from "./MobNavItems";
import HeaderNotification from "./HeaderNotification";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    {/* header notification */}
      <HeaderNotification />
      <header className="pl-6 pr-8 py-[1px] border-b border-[#E4E4E766] bg-[#FFFFFF99] backdrop-blur-sm relative z-50">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-22">
            {/* logo */}
            <Link href="/" className="flex">
              <Image src="/logo.svg" alt="Logo" width={53} height={53} />
              <div className="flex flex-col justify-center">
                <span className="text-base font-bold text-primary -mb-[3px]">
                  acme.com
                </span>
                <span className="text-xs text-[#26262666] font-bold mb-0">
                  By acme.com
                </span>
              </div>
            </Link>

            {/* desktop navigation links */}
            <DeskNavItems />
          </div>

          <div className="flex items-center gap-4">
            {/* header actions for desktop & tablet */}
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login" className="text-sm text-primary">
                Login
              </Link>

              <div className="border-[#E4E4E7] border rounded-[5px] flex items-center gap-2.5 px-3 py-1.5 text-sm">
                <Link href="/start-now" className="text-primary">
                  Start Now
                </Link>

                <Link
                  href="#"
                  className="bg-primary px-[8.5px] py-[2px] flex items-center text-white rounded-md text-[13.672px] font-normal"
                >
                  <LogoIcon className="mr-2" /> Lorem Ipsum
                </Link>
              </div>
            </div>

            {/* mobile menu toggle button */}
            <button className="lg:hidden" onClick={toggleMobileMenu}>
              <MenuIcon />
            </button>
          </div>
        </nav>

        {/* mobile navigation links */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-30 lg:hidden block pb-4">
            {/* mobile navigation items */}
            <MobNavItems />

            {/* mobile header actions */}
            <div className="sm:hidden flex items-center justify-center gap-4">
              <Link href="/login" className="text-sm text-primary">
                Login
              </Link>

              <div className="border-[#E4E4E7] border rounded-[5px] flex items-center gap-[10px] px-3 py-1.5 text-sm">
                <Link href="/start-now" className="text-primary">
                  Start Now
                </Link>

                <Link
                  href="#"
                  className="bg-primary px-[9px] py-[5px] flex items-center text-white rounded-md"
                >
                  <LogoIcon className="mr-2" /> Lorem Ipsum
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
