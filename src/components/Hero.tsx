import { ArrowRightIcon, CrossIcon, LogoIcon } from "@/icons";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-3">
      {/* promotion text */}
      <div className="flex sm:flex-nowrap flex-wrap items-center justify-center gap-2.5 mb-[4px]">
        <span className="bg-[#D4F7F0] text-[#067A6E] py-[4.5px] px-[9px] rounded-[9999px] text-xs font-medium inline-block">
          🎉 New
        </span>
        <p className="text-sm font-medium text-primary">
          Get 2 months free with annual plans!
        </p>

        <Link
          href="#"
          className="text-sm font-medium border py-[6px] px-[7px] border-[#E4E4E7] rounded-[100px] flex items-center gap-2.5 leading-[20px] bg-white"
        >
          Claim Promotion
          <ArrowRightIcon />
        </Link>
      </div>

      {/* banner grid */}
      <div className="relative ">
        {/* grid background */}
        <div className="grid lg:grid-cols-12 h-[350px] sm:h-[400px] md:h-[455px] w-full bg-white z-20 relative overflow-hidden">
          <div className="grid-item-class "></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0 border-b-0"></div>
          <div className="grid-item-class border-l-0"></div>
          <div className="grid-item-class border-t-0 border-r-0"></div>
          {/* hero card */}
          <div className="grid-item-class col-span-10 row-span-3 w-full h-full flex-col flex-center lg:border border-0">
            <h1 className="text-[24px] leading-[26px] sm:text-4xl sm:leading-10 md:text-[40px] md:leading-12 font-medium text-center text-[#666666] tracking-[-2.1px]">
              <span className="font-semibold text-[#171717]">Lorem Ipsum.</span>{" "}
              Testing, testing, <br /> and testing on our fast, low latency
              hardware.
            </h1>

            {/* hero buttons */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-sm sm:text-base font-medium">
              <button className="bg-primary px-4 sm:pr-[32px] sm:pl-6 py-2 flex items-center text-white rounded-md">
                <LogoIcon className="mr-2" /> Lorem Ipsum
              </button>

              <button className="border border-[#0000000D] px-4 sm:px-11.5 py-[7px] text-[#171717] rounded-md shadow-hero-button">
                Lorem Ipsum
              </button>
            </div>
          </div>
          <div className="grid-item-class border-t-0 border-l-0"></div>
          <div className="grid-item-class border-t-0 border-r-0"></div>
          <div className="grid-item-class border-t-0 border-l-0"></div>
          <div className="grid-item-class border-t-0 border-r-0"></div>
          <div className="grid-item-class border-t-0 border-l-0"></div>
          <div className="grid-item-class border-t-0 border-r-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-r-0 border-t-0"></div>
          <div className="grid-item-class border-t-0"></div>
        </div>

        {/* cross icon */}
        <div className="absolute -top-2.5 -left-2.5 z-30 hidden lg:block">
          <CrossIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;
