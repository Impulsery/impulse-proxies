import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DashboardTweeter,
  HeaderCrossIcons,
  RewardGift,
  ToggleIcon,
  WhiteDiscord,
} from "../common/Icons";
import Image from "next/image";
import DashboardMobileNav from "./DashboardMobileNav";
const DashboardNav = () => {
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  const [isToggleIconVisible, setIsToggleIconVisible] = useState(true);
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden");
      setIsToggleIconVisible(false);
    } else {
      document.body.classList.remove("overflow-y-hidden");
      setIsToggleIconVisible(true);
    }
  }, [activeNavOverlay]);
  // ROUTER CODE HERE
  const router = useRouter();
  console.log("router.query.typerouter.query.type", router.query.type);
  const shouldDisplayContent = router.pathname === "/dashboard-data-usage";
  return (
    <>
      <DashboardMobileNav
        activeNavOverlay={activeNavOverlay}
        add
        setActiveNavOverlay={setActiveNavOverlay}
      />
      <nav className="dark-blue xl:py-6 lg:py-5 py-3 flex-grow-0">
        <div className="2xl:w-full 2xl:px-24 xl:px-12 lg:px-8 px-6 mx-auto">
          <div className="flex-1 flex items-center justify-between  lg:items-center">
            <div className="flex-1 flex items-center lg:justify-between lg:ms-0 ms-12 justify-center">
              <div className="flex-shrink-0 flex items-center justify-between">
                <Link
                  href="/"
                  className="text-white text-xl font-semibold flex items-center relative z-[100]"
                >
                  <Image
                    height={62}
                    width={65}
                    src="/assets/images/svg/FooterLogo.svg"
                    alt="aboutimage"
                    className="lg:w-[67px] lg:h-[67px] md:w-[45px] md:h-[55px] w-[30px] h-[37px]"
                  />
                  <div className="ms-3">
                    <p className="mb-0 lg:text-[17px] sm:text-[15px] text-[10px] text-white font-bold lh_normal font-Montserrat tracking-[3.3px]">
                      IMPULSE
                    </p>
                    <p className="lg:text-[14px] sm:text-[12px] text-[8px] text-cyan-green font-Montserrat font-medium lh_normal mb-0 tracking-[2.55px]">
                      PROXIES
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="flex lg:gap-9 items-center">
                  <Link
                    href="/dashboard-data-usage?type=residential"
                    className={`text-[#5E5E80] hover:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-[0%] active:after:start-0 after:bottom-0 ${
                      router.query.type === "residential" ? "text-white" : ""
                    }`}
                  >
                    Residential
                  </Link>
                  <Link
                    href="/dashboard-data-usage?type=isp-datacenter"
                    className={`text-[#5E5E80] hover:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-[0%] active:after:start-0 after:bottom-0 ${
                      router.query.type === "isp-datacenter" ? "text-white" : ""
                    }`}
                  >
                    ISP & Datacenter
                  </Link>
                  <Link
                    href="/dashboard-data-usage?type=rewards"
                    className={`text-[#5E5E80] hover:text-white font-semibold tracking-[-0.38px] font-Montserrat text-[17px] after:transition-all after:ease-in-out after:duration-200 after:contents-[''] after:absolute after:h-[2px] after:w-0  active:after:w-full hover:after:w-full relative after:bg-white overflow-hidden after:start-[50%] hover:after:start-[0%] active:after:start-0 after:bottom-0 flex items-center gap-2 svg_fill ${
                      router.query.type === "rewards" ? "text-white" : ""
                    }`}
                  >
                    <span className="mb-1">
                      <RewardGift />
                    </span>
                    Rewards
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex items-center">
                {shouldDisplayContent ? (
                  <div style={{ display: "block" }}>
                    <div className="hidden lg:flex items-center">
                      <Link href="https://discord.com/" target="blank">
                        <WhiteDiscord />
                      </Link>
                      <Link
                        href="https://twitter.com/"
                        target="blank"
                        className="ms-5 hover:translate-y-[-5px] transition-all ease-in-out duration-200"
                      >
                        <DashboardTweeter />
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="bg-[#1D1D42] py-4 pe-5 ps-9 rounded-[10px] flex items-center justify-between ms-6">
                  <p className="text-md text-[#626296] font-Montserrat font-semibold lh_normal tracking-[-0.28px] mb-0">
                    Welcome Back
                    <span className="text-white block">Jack#1983</span>
                  </p>
                  <div className="rounded-full bg-white h-[37px] w-[37px] ms-7"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:hidden ">
              <div className="relative z-[200]">
                {isToggleIconVisible && (
                  <button
                    onClick={() => setActiveNavOverlay(true)}
                    type="button"
                    className="w-[46px] inline-flex items-center justify-center rounded-md "
                  >
                    <HeaderCrossIcons />
                  </button>
                )}
                {!isToggleIconVisible && (
                  <button
                    className="w-[22px] h-[33px] sm:me-14 sm:translate-x-[157%]"
                    onClick={() => setActiveNavOverlay(false)}
                  >
                    <ToggleIcon />
                  </button>
                )}
              </div>
              <div className="bg-[#202046] h-[65px] w-[65px] rounded-[10px] flex items-center justify-center ms-4">
                <div className="rounded-full bg-white h-[37px] w-[37px]"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
