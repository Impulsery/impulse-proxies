import Current from "@/components/Current";
import Hero from "@/components/Hero";
import ImpulseAbout from "@/components/ImpulseAbout";
import ImpulseFAQ from "@/components/ImpulseFAQ";
import Head from "next/head";
import ImpulseFooter from "@/components/ImpulseFooter";
import OurProxies from "@/components/OurProxies";
import WhyToChooseUs from "@/components/WhyToChooseUs";
export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        {/* <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative"></div> */}
        <Head>
          <title>Impulse Proxies</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <Current />
        <WhyToChooseUs />
        <OurProxies />
        <ImpulseAbout />
        <ImpulseFAQ />
        <ImpulseFooter />
      </div>
    </>
  );
}
