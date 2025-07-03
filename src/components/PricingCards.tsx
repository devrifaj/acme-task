"use client";
import { pricingPlans } from "@/constants";
import { CheckIcon, ChevronCircleRightIcon } from "@/icons";
import Link from "next/link";
import { useState } from "react";

const PricingCards = () => {
  const [selectedPlan, setSelectedPlan] = useState<number>(2);

  return (
    <div>
      {/* header */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-[32px] font-bold sm:pl-0 pl-4 tracking-[-0.96px] sm:text-left text-center">
          Our Pricing
        </h3>
        <div className="flex sm:flex-row flex-col items-center gap-2 mt-3">
          <Link
            href="#"
            className="py-2.5 px-4.5 text-sm text-white font-medium bg-[#171717] rounded-md"
          >
            Get 2 months free (switch to yearly)
          </Link>

          <Link
            href="#"
            className="flex items-center gap-1.5 text-sm text-[#666666] font-medium py-2.5 px-[17px]"
          >
            Compare
            <ChevronCircleRightIcon />
          </Link>
        </div>
      </div>

      {/* pricing cards */}
      <div className="flex flex-col gap-3 md:gap-[19px] w-full">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative py-2 pl-4 xl:pl-10 pr-[22px] rounded-xl border cursor-pointer transition-all duration-300 shadow-pricing hover:shadow-lg ${
              selectedPlan === plan.id
                ? "border-[#0070F3] shadow-lg"
                : "border-[#EAEAEA] bg-white hover:border-[#EAEAEA]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-3 sm:gap-8 md:gap-[46px] lg:gap-7 xl:gap-[51px]">
                {/* price */}
                <div className="flex items-baseline gap-1 xl:pl-5">
                  <span className="text-[20px] sm:text-2xl md:text-[32px] font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-sm sm:text-base text-[#666666]">
                    /mo
                  </span>
                </div>

                <div className="text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2.5 font-medium">
                  {/* vCPU */}
                  <div className="sm:flex-row flex flex-col justify-center items-center md:gap-1">
                    <span>{plan.specs.vCPU}</span>
                    <span>vCPU</span>
                  </div>

                  <div className="hidden sm:block w-px h-5 bg-[#666666]"></div>

                  {/* ram */}
                  <div className="sm:block flex flex-col items-center sm:text-left text-center">
                    <span>{plan.specs.ram} GB</span>
                    <span className="text-[#666666] pl-1">DDR4 RAM</span>
                  </div>

                  <div className="hidden sm:block w-px h-5 bg-[#666666]"></div>

                  {/* storage */}
                  <div className="sm:block flex flex-col items-center sm:text-left text-center">
                    <span>{plan.specs.storage} GB</span>
                    <span className="text-[#666666] pl-1">NVMe Storage</span>
                  </div>
                </div>
              </div>

              {/* select button */}
              <div
                className={`w-5 h-5 rounded-full  flex items-center justify-center ${
                  selectedPlan === plan.id
                    ? "border-0"
                    : "border-gray-700 border-2"
                }`}
              >
                {selectedPlan === plan.id && <CheckIcon />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
