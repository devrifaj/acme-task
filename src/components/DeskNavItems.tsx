"use client";
import { navItems } from "@/constants";
import { DropDownIcon } from "@/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex gap-[23px]">
      {navItems.map((item, index) => {
        const isActive = pathname === item.route;

        return (
          <li key={index} className="relative group/item">
            {/* main nav item link */}
            <Link
              href={item.route}
              className={`text-sm py-[7.5px] transition-colors duration-200 group flex gap-[3px] ${
                isActive
                  ? "text-[#09090B]"
                  : "text-[#09090B99] hover:text-[#09090B]"
              }`}
            >
              {item.label}
              {/* dropdown icon */}
              {item.children && item.children.length > 0 && (
                <span className="group-hover:rotate-180 transition-all">
                  <DropDownIcon />
                </span>
              )}
            </Link>

            {/* dropdown menu */}
            {item.children && item.children.length > 0 && (
              <ul className="absolute left-0 top-full bg-white border border-[#E4E4E766] rounded-lg shadow-lg p-4 w-48 z-10 flex flex-col gap-2 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100">
                {item.children.map((child, childIndex) => {
                  const isChildActive = pathname === child.route;
                  return (
                    <li key={childIndex} className="">
                      {/* dropdown menu link */}
                      <Link
                        href={child.route}
                        className={`text-sm transition-colors duration-200 font-normal ${
                          isChildActive
                            ? "text-[#09090B]"
                            : "text-[#09090B99] hover:text-[#09090B]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
