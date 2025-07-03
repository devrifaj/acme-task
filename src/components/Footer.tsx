import { CrossIcon } from "@/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="wrapper relative">
        <div className="md:grid md:grid-cols-3 flex flex-col items-between h-full md:pt-0 pt-6 gap-4 border border-[#EBEBEB] border-t-0 relative">
          {/* footer left start */}
          {/* this is empty div for bg styling */}
          <div className="md:block hidden"></div>
          <div className="md:block hidden border-l border-[#EBEBEB] border-dashed"></div>

          {/* footer left text */}
          <div className="md:absolute md:left-8 lg:left-12 md:top-8 lg:top-[50px] md:bottom-12 md:text-left text-center mx-auto max-w-[400px] lg:max-w-[520px] mt-auto ">
            <h2 className="text-2xl leading-8 tracking-[-0.9px] text-[#666666] font-medium md:mx-0 mx-3">
              <span className="font-semibold text-[#171717]">
                Ready to profit?
              </span>{" "}
              <span className="font-medium">
                Start journaling your trades. Check
              </span>{" "}
              out <span className="text-[#171717] font-medium">VPS Lite</span>{" "}
              or <span className="text-[#0068D6] font-semibold">VPS Pro</span>{" "}
              or <span className="text-[#7820BC] font-semibold">VPS Max</span>
            </h2>

            {/* footer left link */}
            <div className="mt-6 flex sm:flex-row flex-col items-center md:justify-start justify-center gap-4">
              <Link
                href="#"
                className="bg-foreground text-sm font-medium text-white rounded-md py-2.5 px-4 inline-block shadow-footer-button"
              >
                Deploy Now
              </Link>

              <Link
                href="#"
                className="text-sm text-foreground font-medium rounded-md py-2.5 px-[17.5px] inline-block shadow-footer-button bg-white"
              >
                View Dedicated Servers
              </Link>
            </div>
          </div>

          {/* footer right */}
          <div className="max-w-[358px] w-full py-6 lg:py-12 px-4 lg:px-9.5 md:border-l border-[#EBEBEB] border-dashed mx-auto md:text-left text-center">
            <p className="mb-6 text-[#666666] text-base">
              <span className="font-medium text-[#171717]">Trial acme</span> to
              see how our performance and ease of use through our Control Panel.
            </p>
            <Link
              href="#"
              className="bg-white py-3 lg:py-[10px] px-3 lg:px-[21px] text-sm font-medium shadow-footer-button rounded-md inline-block"
            >
              Money Back Guarantee
            </Link>
          </div>
        </div>

        {/* cross icon left */}
        <div className="absolute -bottom-2.5 -left-2.5">
          <CrossIcon />
        </div>

        {/* cross icon right */}
        <div className="absolute -bottom-2.5 -right-2.5">
          <CrossIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
