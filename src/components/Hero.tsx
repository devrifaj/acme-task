import { ArrowRightIcon, CrossIcon, LogoIcon } from "@/icons";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-3 ">
      {/* Promotion text */}
      <div className="flex sm:flex-nowrap flex-wrap items-center justify-center gap-3">
        <span className="bg-[#D4F7F0] text-[#067A6E] py-[4.5px] px-[9px] rounded-[9999px] text-xs font-medium inline-block">
          🎉 New
        </span>
        <p className="text-sm font-medium text-primary">
          Get 2 months free with annual plans!
        </p>

        <Link
          href="#"
          className="text-sm font-medium border py-[5px] px-2.5 border-[#E4E4E7] rounded-[100px] flex items-center gap-1"
        >
          Claim Promotion
          <ArrowRightIcon />
        </Link>
      </div>

      {/* Banner Grid */}
      <div className="w-full h-[400px] md:h-[455px] flex flex-col justify-center relative">
        <h1 className="text-[32px] leading-9 sm:text-4xl sm:leading-10 md:text-[40px] md:leading-12 font-medium text-center text-[#666666]">
          <span className="font-semibold text-[#171717]">Lorem Ipsum.</span>{" "}
          Testing, testing, <br /> and testing on our fast, low latency
          hardware.
        </h1>

        {/* Hero Buttons */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 text-sm sm:text-base font-medium">
          <button className="bg-primary px-4 sm:px-[27px] py-2 flex items-center sm:gap-1 text-white rounded-md">
            <LogoIcon className="mr-2" /> Lorem Ipsum
          </button>

          <button
            className="border border-[#0000000D] px-4 sm:px-11.5 py-[7px] text-[#171717] rounded-md"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px 0px rgba(0, 0, 0, 0.04)",
            }}
          >
            Lorem Ipsum
          </button>
        </div>

        {/* Cross Icon */}
        <div className="absolute -top-1 -left-2.5">
          <CrossIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;
