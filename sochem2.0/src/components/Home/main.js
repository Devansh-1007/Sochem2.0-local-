import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const main = () => {
  return (
    <div className="mt-16 flex flex-col space-y-10 max-w-[58.75rem] sm:max-w-[73.375rem] mx-auto">
        <div className="hidden sm:flex justify-between">
          <div className="flex flex-col items-center">
            <Image
              src="/images/about_us.svg"
              width={230}
              height={230}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-[1.25rem] font-custom text-[#0A315B] font-medium">
              About Us
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/what_we_offer.svg"
              width={230}
              height={230}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-[1.25rem] font-custom text-[#0A315B] font-medium">
              What We Offer
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/testimonials.svg"
              width={230}
              height={230}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-[1.25rem] font-custom text-[#0A315B] font-medium">
              Testimonials
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:hidden">
          <div className="mr-2 flex flex-col items-center">
            <Image
              src="/images/about_us.svg"
              width={100}
              height={100}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-xs font-custom text-[#0A315B] font-semibold">
              About Us
            </span>
          </div>
          <div className="mx-2 flex flex-col items-center">
            <Image
              src="/images/what_we_offer.svg"
              width={100}
              height={100}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-xs font-custom text-[#0A315B] font-semibold">
              What We offer
            </span>
          </div>
          <div className="ml-2 flex flex-col items-center">
            <Image
              src="/images/testimonials.svg"
              width={100}
              height={100}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-xs font-custom text-[#0A315B] font-semibold">
              Testimonials
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-[#03001E] px-8 sm:text-lg font-light font-custom text-justify">
            {/* {data.legacyText} */}
          </p>
        </div>
      </div>
  )
}

export default main