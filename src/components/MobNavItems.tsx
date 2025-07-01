import { navItems } from "@/constants";
import Link from "next/link";

const MobNavItems = () => {
  return (
    <ul className="flex flex-col gap-4 p-4 text-center sm:mb-0 mb-4 border-t border-[#E4E4E766]">
      {navItems.map((item, index) => (
        <li
          key={index}
          className="text-sm font-medium text-gray-700 hover:text-primary"
        >
          <Link href={item.route}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MobNavItems;
