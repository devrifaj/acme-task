import { PlayIcon } from "@/icons";
import Link from "next/link";

const HeaderNotification = () => {
  return (
    <div className="bg-primary text-white mx-auto py-2.5 gap-20 text-[13px] font-medium">
      <div className="max-w-[400px] mx-10 sm:mx-auto flex gap-10 justify-between sm:pl-[93px]">
        <p className="inline-block">Restocked Today</p>

        <Link
          href="#"
          className="flex items-center gap-2 border-l border-[#FFFFFF33] pl-4 -mr-1"
        >
          Read more <PlayIcon />
        </Link>
      </div>
    </div>
  );
};

export default HeaderNotification;
