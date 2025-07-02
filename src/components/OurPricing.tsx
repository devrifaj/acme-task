import { pricingFeatures } from "@/constants";
import { ArrowRightLarge, CrossIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import PricingCards from "./PricingCards";

const OurPricing = () => {
  return (
    <section className="pt-[75px] pb-12 sm:px-4 md:px-8 border border-[#EBEBEB] border-t-0 relative">
      <div className="flex lg:flex-row flex-col items-center lg:gap-8">
        {/* Pricing Cards */}
        <div className="md:flex-1 w-full">
          <PricingCards />
        </div>

        {/* Server Details Card */}
        <div className="max-w-[530px] lg:max-w-[320px] xl:max-w-[356px] w-full bg-white rounded-xl shadow-pricing px-7 py-7 h-full mt-14">
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

          {/* Pricing Features */}
          <div className="mt-10 mb-6 flex flex-col gap-1.5">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-[7px]">
                <feature.icon />
                <span className="text-xs text-gray/600">{feature.text}</span>
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="bg-[#171717] text-white rounded-md py-2.5 px-3 flex items-center justify-between"
          >
            Deploy Server
            <ArrowRightLarge />
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center mt-7">
        *All pricing is in USD and renews automatically unless cancelled.{" "}
      </p>

      {/* Cross Icon */}
        <div className="absolute -bottom-2.5 -left-2.5">
          <CrossIcon />
        </div>
    </section>
  );
};

export default OurPricing;
