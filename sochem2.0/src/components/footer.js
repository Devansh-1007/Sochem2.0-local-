import React from "react";
import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <div className="bg-[#1A1E21] w-full">
      <div className="hidden flex-col mt-[8.75rem] text-white sm:flex  max-w-[90%] 2xl:max-w-[80%] mx-auto ">
        <div className="flex flex-row  justify-between mt-[3.75rem]">
          {" "}
          <div className="max-w-1/4">
            <div className="flex flex-col">
              <div className="font-medium text-gray-900 p-2 dark:text-white text-xl">
                Explore
              </div>
              <div className="mt-[1.25rem] flex-wrap space-y-3 space-x-0 md:flex justify-between md:space-x-3 font-custom text-[1rem] sm:text-[1.125rem] 2xl:text-lg font-medium">
                <div className="flex ">
                  <Link href="/home">
                    <button className="text-[#0569FF] p-2 transition hover:opacity-75 dark:text-gray-200">
                      Home
                    </button>
                  </Link>
                  <Link href="">
                    <button className="text-[#0569FF]  p-2 transition hover:opacity-75 dark:text-gray-200">
                      Events
                    </button>
                  </Link>
                  <Link href="/secretariat">
                    <button className="text-[#0569FF]  p-2 transition hover:opacity-75 dark:text-gray-200">
                      Funds
                    </button>
                  </Link>
                  <Link href="/gallery">
                    <button className="text-[#0569FF] p-2  transition hover:opacity-75 dark:text-gray-200">
                      Gallery
                    </button>
                  </Link>
                  <Link href="/faq">
                    <button className="text-[#0569FF]  p-2 transition hover:opacity-75 dark:text-gray-200">
                      Cloud
                    </button>
                  </Link>
                  <Link href="/faq">
                    <button className="text-[#0569FF] p-2  transition hover:opacity-75 dark:text-gray-200">
                      Family
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="font-medium mt-4 text-gray-900 dark:text-white text-xl">
                Resources
              </div>
              <div className="mt-[0.25rem]  flex-wrap space-y-3 space-x-0 md:flex justify-between md:space-x-3 font-custom text-[1rem] sm:text-[1.125rem] 2xl:text-lg font-medium">
                <div className="flex ">
                  <Link href="/home">
                    <button className="text-[#0569FF] p-2 transition hover:opacity-75 dark:text-gray-200">
                      Become a teacher{" "}
                    </button>
                  </Link>
                  <Link href="">
                    <button className="text-[#0569FF] p-2 transition hover:opacity-75 dark:text-gray-200">
                      Blogs
                    </button>
                  </Link>
                  <Link href="/secretariat">
                    <button className="text-[#0569FF] p-2 transition hover:opacity-75 dark:text-gray-200">
                      Courses
                    </button>
                  </Link>
                  <Link href="/gallery">
                    <button className="text-[#0569FF] p-2 transition hover:opacity-75 dark:text-gray-200">
                      License
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="text-[#0569FF] mt-4 transition text-xl hover:opacity-75 dark:text-gray-200">
                  Contact us
                </div>
                <div className="mt-[0.25rem] flex flex-col font-custom text-lg font-medium">
                  <a className="flex" href="mailto:sochem@iitbhu.com">
                    <p className="text-[#0569FF] p-2 transition hover:opacity-75 dark:text-gray-200">
                      sochem@iitbhu.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex m-auto pr-24 justify-center">
            <div className="text-teal-600 m-auto mr-28 dark:text-teal-300">
              <Image
                src="/images/sochem_logo.svg"
                width={150}
                height={150}
                alt="legacy"
              />
            </div>
          </div>
          <div className=" px-4   space-y-8 sm:px-6 lg:space-y-16 lg:px-8 justify-center">
            <div className="mt-[3.75rem]">
              <div className="font-custom text-[1.5rem] font-bold mt-[3.75rem]">
                Follow us
              </div>
              <div className="mt-[1.25rem] flex flex-row space-x-5">
                <div>
                  <Link href="">
                    <button>
                      <Image
                        src="/images/instagram.svg"
                        width={24.08}
                        height={24.08}
                        alt="icons"
                      />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="">
                    <button>
                      <Image
                        src="/images/linkedin.svg"
                        width={24}
                        height={21}
                        alt="icons"
                      />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="">
                    <button>
                      <Image
                        src="/images/twitter.svg"
                        width={28}
                        height={22}
                        alt="icons"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex margin-auto justify-center">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Copyright &copy; 2023. Sochem. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default footer;
