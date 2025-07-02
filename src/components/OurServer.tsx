import {
  ServerIcon1,
  ServerIcon2,
  ServerIcon3,
  ServerIcon4,
  ServerIcon5,
} from "@/icons";
import Link from "next/link";

const OurServer = () => {
  return (
    <section className="px-2 py-[25px] lg:p-6 xl:p-12 border border-[#EBEBEB] border-t-0 bg-back">
      <div className="flex lg:flex-row flex-col gap-4 xl:gap-7 items-center justify-end xl:pl-10 xl:pr-[47.5px]">
        <h3 className="text-2xl font-semibold tracking-[-0.96px]">Our Servers:</h3>
        <div className="flex items-center justify-center md:justify-start md:flex-nowrap flex-wrap gap-3 lg:gap-4">
          <Link className="server-button" href="#">
            <ServerIcon1 />
            Our Services
          </Link>

          <Link className="server-button" href="#">
            <ServerIcon2 />
            Our Services
          </Link>

          <Link className="server-button" href="#">
            <ServerIcon3 />
            Our Services
          </Link>

          <Link className="server-button" href="#">
            <ServerIcon4 />
            Our Services
          </Link>

          <Link className="server-button" href="#">
            <ServerIcon5 />
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServer;
