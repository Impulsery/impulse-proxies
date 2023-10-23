import React from "react";
import Link from "next/link";
import { aboutBox } from "./common/Helper";
import Image from "next/image";
import { DiscordIcon, TwitterIcon } from "./Icon";
const ImpulseAbout = () => {
  return (
    <>
      <div
        id="AboutUs"
        className="bg-[#141436] select_none lg:pt-[120px] 2xl:pt-[135px]  md:pt-[52px] pt-[35px] z-10 relative"
      >
        <div className="bg_top_bottom sm:hidden block h-[30px] opacity-10 w-full max-w-[1000px] mx-auto absolute top-0 lg:top-[0px] lg:left-[22%]"></div>
        <div className=" w-16 p-0">
          <Image
            src="/assets/images/webp/glass.webp"
            alt="aboutTop"
            width={144}
            height={72}
            className="spin_about_img aboutTop aboutus-about-top-img"
          />
          <Image
            src="/assets/images/webp/Abstract01.webp"
            alt="aboutTop"
            width={99}
            height={50}
            className="spin_about_img_2 aboutus-about-top-img aboutTop"
          />
        </div>
        <div className="container xl:max-w-[1220px] flex flex-col 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 relative">
          <h2 className=" font-Montserrat lg:text-6xl sm:pt-0 pt-3 text-[28px] text-white font-bold leading-[121%] text-center lg:text-start">
            About <span className="text-cyan-green">Us</span>
          </h2>
          <p className="aboutus-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
          </p>
          <div className="about-box-map-div">
            {aboutBox.map((obj, i) => {
              return (
                <div
                  key={i}
                  className={`lg:w-6/12 hover:translate-y-[-4%] duration-200 ease-in-out sm:w-10/12 w-full rounded-[20px] p-[2px] inline-block lg:mt-0 relative max-w-[560px] 2xl:max-w-[648px] ${obj.border}`}
                >
                  <div className="block rounded-[20px] w-full bg-[#080D2D] sm:ps-8 ps-4 pb-7 sm:pt-6 pt-4 sm:pe-6 pe-4">
                    <div className="flex  w-full">
                      <div className="flex items-start justify-between w-full">
                        <Image
                          height={81}
                          width={81}
                          src={obj.aboutImg}
                          alt="aboutimg"
                          priority="1"
                          className=" sm:h-[81px] sm:w-[81px] w-[42px] h-[42px]"
                        />
                        <div>
                          <h3 className="mb-0 text-white font-Montserrat leading-[204%] tracking-[-0.44px] md:text-3xl text-[17px] font-bold">
                            About
                            <span className="text-cyan-green ms-1">
                              {obj.impulse}
                            </span>
                          </h3>
                          <p className="sm:mb-7 text-[#9898A3] font-Montserrat font-medium leading-[178%] text-md max-w-[278px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-start justify-end md:mt-2">
                        <div className="flex items-center pe-6">
                          <Image
                            height={27}
                            width={27}
                            alt="img"
                            src="/assets/images/webp/AboutLogo.webp"
                          />
                          <p className="mb-0 text-white font-Montserrat font-bold tracking-[2.2px] lh_normal text-lg ps-[6px]">
                            IMPULSE
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex gap-4 items-center justify-between sm:justify-end mt-2">
                      <div className=" flex sm:hidden items-center justify-end">
                        <Image
                          height={27}
                          width={27}
                          alt="img"
                          src="/assets/images/webp/AboutLogo.webp"
                        />
                        <p className="mb-0 text-white font-Montserrat font-bold tracking-[2.2px] lh_normal text-[14px] ps-[6px]">
                          IMPULSE
                        </p>
                      </div>
                      <div className=" flex sm:gap-4 text-white gap-2">
                        <Link
                          aria-label="discord"
                          href="https://discord.com/"
                          target="_blank"
                          className=" flex items-center justify-end gap-2 "
                        >
                          <DiscordIcon />
                          <span className=" font-Montserrat text-[14px] sm:text-lg font-bold ">
                            Discord
                          </span>
                        </Link>
                        <Link
                          aria-label="twitter"
                          target="_blank"
                          href="https://twitter.com/i/flow/login?redirect_after_login=%2FOpulentM71934"
                          className=" flex items-center justify-end gap-2 "
                        >
                          <TwitterIcon />

                          <span className=" font-Montserrat text-[14px] sm:text-lg font-bold">
                            Twitter
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ImpulseAbout;
