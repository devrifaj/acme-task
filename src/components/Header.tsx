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
    <HeaderNotification />
    <header className="pl-6 pr-8 py-1 border-b border-[#E4E4E766] bg-[#FFFFFF99] backdrop-blur-sm relative z-50">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2 lg:gap-22">
          {/* Logo */}
          <Link href="/" className="flex">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            <div>
              <h5 className="text-base font-bold text-primary">acme.com</h5>
              <h6 className="text-xs text-[#26262666] font-bold">
                By acme.com
              </h6>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <DeskNavItems />
        </div>

        <div className="flex items-center gap-4">
          {/* Header Actions for desktop & tablet */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/login" className="text-sm text-primary">
              Login
            </Link>

            <div className="border-[#E4E4E7] border rounded-[5px] flex items-center gap-2.5 px-2 py-1 text-sm">
              <Link href="/start-now" className="text-primary">
                Start Now
              </Link>

              <button className="bg-primary px-[11px] py-[5px] flex items-center text-white rounded-md">
                <LogoIcon className="mr-2" /> Lorem Ipsum
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button className="lg:hidden" onClick={toggleMobileMenu}>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-30 lg:hidden block pb-4">
          <MobNavItems />

          {/* Mobile Header Actions */}
          <div className="sm:hidden flex items-center justify-center gap-4">
            <Link href="/login" className="text-sm text-primary">
              Login
            </Link>

            <div className="border-[#E4E4E7] border rounded-[5px] flex items-center gap-[10px] px-3 py-1.5 text-sm">
              <Link href="/start-now" className="text-primary">
                Start Now
              </Link>

              <button className="bg-primary px-[11px] py-[5px] flex items-center text-white rounded-md">
                <LogoIcon className="mr-2" /> Lorem Ipsum
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
