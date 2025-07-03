import { pricingFeatures } from "@/constants";
import { ArrowRightLarge, CrossIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import PricingCards from "./PricingCards";

const OurPricing = () => {
  return (
    <section className="pt-[70px] pb-12 sm:px-4 md:px-8 border border-[#EBEBEB] border-t-0 relative -mt-[1px]">
      <div className="flex lg:flex-row flex-col items-center lg:gap-8">
        {/* pricing cards */}
        <div className="md:flex-1 w-full">
          <PricingCards />
        </div>

        {/* server details card */}
        <div className="max-w-[530px] lg:max-w-[320px] xl:max-w-[356px] w-full bg-white rounded-xl shadow-pricing px-6.5 pt-[15px] pb-[23px] h-full mt-15">
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

          {/* pricing features */}
          <div className="mt-7 mb-6 flex flex-col gap-2.5">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-[7px]">
                <feature.icon />
                <span className="text-sm md:text-xs text-gray/600">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* pricing button */}
          <Link
            href="#"
            className="bg-[#171717] text-white rounded-md py-[9px] px-2 flex items-center justify-between lg:mx-2.5"
          >
            Deploy Server
            <ArrowRightLarge />
          </Link>
        </div>
      </div>

      {/* promotion text */}
      <p className="text-sm text-gray-500 text-center mt-6.5">
        *All pricing is in USD and renews automatically unless cancelled.{" "}
      </p>

      {/* cross icon */}
      <div className="absolute -bottom-2.5 -left-2.5">
        <CrossIcon />
      </div>
    </section>
  );
};

export default OurPricing;
