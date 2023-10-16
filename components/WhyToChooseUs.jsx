import React from "react";
import { CardData } from "./common/Helper";
import Image from "next/image";
function WhyToChooseUs() {
  return (
    <>
      <div className="lg:pt-[69px] lg:pb-[77px] md:pt-8 md:pb-[53px] py-12 bg-[#141436] relative mt-[32px]">
        <Image
          className="absolute sm:bottom-[-100px] bottom-[-45px] sm:right-[55px] right-[24px] z-20 lg:w-[183px] md:h-[80px] lg:h-[172px] md:w-[92px] w-[66px] h-[57px] pointer-events-none arrowAnimation"
          height={126}
          width={145}
          src="/assets/images/webp/AbstractTrangle-02.webp"
          alt="Abstract"
        />
        <Image
          height={140}
          width={140}
          className="absolute sm:bottom-[-66px] bottom-[-45px] sm:right-[55px] spin right-[24px] z-[4] lg:w-[150px] md:h-[80px] lg:h-[172px] md:w-[92px] w-[66px] h-[57px]"
          alt="AbstractCircle"
          src="/assets/images/webp/AbstractCircle.webp"
        />
        <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4">
          <h2 className="font-Montserrat lg:text-[32px] text-[28px] text-white font-bold leading-[110%] text-center">
            Why To Choose <span className="text-cyan-green">Us</span>
          </h2>
          <div className="flex justify-center flex-wrap 2xl:gap-0 lg:gap-5 lg:flex-nowrap lg:mt-[52px] md:mt-[13px] mt-2 min-h-[504px] md:min-h-[210px]">
            {CardData.map((CardData) => {
              return (
                <div
                  key={CardData.id}
                  className={` w-full mt-6 lg:mt-0 md:w-6/12  :w-4/12 ${CardData.border}`}
                >
                  <div className=" 2xl:max-w-[393px] lg:max-w-[380px] sm:min-h-[197px] min-h-[152px] sm:max-w-[330px] max-w-[328px] hover:translate-y-[-10px] transition-all duration-200 ease-in-out mx-auto h-full lg:ps-[46px] lg:pe-[36px] lg:pt-[18px] lg:pb-[38px] px-6 pt-6 pb-[30px] rounded-[30px] border-[2px] border-cyan-green bg-[#204056]">
                    <div className=" flex gap-3 items-center">
                      <h3 className="font-bold lg:leading-[75px] sm:leading-[52px] leading-[140%] font-Montserrat md:text-2xl lg:text-[17px] xl:text-2xl text-[17px] text-white">
                        {CardData.heading}
                      </h3>
                      <Image
                        height={32}
                        width={32}
                        src={CardData.whyToImg}
                        alt="aboutimage"
                      />
                    </div>
                    <p className=" text-white md:text-md text-[12px] font-medium font-Montserrat opacity-70 sm:max-w-[244px] leading-[25px] ">
                      {CardData.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyToChooseUs;
