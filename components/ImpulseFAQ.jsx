// import Image from "next/image";
// import { useState } from "react";
// import Ring from "./Ring";
// import { AccordianData } from "./common/Helper";
// import Torus from "./common/Torus";

// const ImpulseFAQ = () => {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     if (openAccordion === index) {
//       setOpenAccordion(null);
//     } else {
//       setOpenAccordion(index);
//     }
//   };
//   return (
//     <div
//       id="Faqs"
//       className="bg-[url('/assets/images/png/FAQbg.png')] bg-no-repeat bg-cover bg-center md:pt-28 sm:pt-20 pt-12 md:pb-44 sm:pb-22 pb-16 overflow-hidden relative"
//     >
//       <div className="torus-footer absolute pointer-events-none bottom-[-10px] xl:w-[223px]  xl:h-[223px]  lg:w-[123px] lg:h-[123px] start-0 sm:w-[93px] md:w-[173px] md:h-[173px] w-[73px]  sm:h-[93px] h-[100px]">
//         <Torus />
//       </div>
//       <div className="torus-footer pointer-events-none  absolute lg:top-[-3%] sm:top-[-2%] top-[-3%] end-[-7px] lg:end-0 sm:end-[2%] lg:h-[207px] lg:w-[207px] sm:w-[120px] w-[100px]  sm:h-[175px] h-[100px]">
//         <Ring />
//       </div>
//       <Image
//         height={223}
//         width={223}
//         className="pointer-events-none absolute bottom-[-10px] xl:w-[203px]  xl:h-[223px]  lg:w-[123px] lg:h-[123px] start-0 sm:w-[93px] md:w-[103px] md:h-[103px] w-[73px]  sm:h-[93px] h-[60px]"
//         src="/assets/images/svg/FaqBottom.svg"
//         alt="FaqBottomimage"
//         priority="1"
//       />
//       <Image
//         height={207}
//         width={207}
//         className="pointer-events-none  absolute lg:top-[-15%] sm:top-[-10%] top-[-2%] end-[-10px] lg:end-0 sm:end-[-1%] lg:h-[207px] lg:w-[207px] sm:w-[120px] w-[73px]  sm:h-[175px] h-[60px]"
//         src="/assets/images/svg/FaqRight.svg"
//         alt="faqimage"
//       />
//       <div className="container xl:max-w-[1220px] 2xl:max-w-[1320px] mx-auto xl:px-3 px-4 sm:pt-0 pt-3 sm:pb-0 pb-3">
//         <p className="text-center lg:text-6xl md:text-[35px] text-[25px] text-white font-Montserrat font-bold leading-[121%] tracking-[-0.74px] sm:mb-12 mb-7">
//           Frequently Asked Questions
//         </p>
//         {AccordianData.map((data, index) => (
//           <div
//             key={data.id}
//             className="mt-5 border-[2px] transition-opacity ease-in duration-300 border-cyan-green bg-[#50EED733] rounded-2xl px-4 py-3 overflow-hidden w-full max-w-[694px] mx-auto"
//             open={openAccordion === index}
//           >
            
//             <div
//               onClick={() => toggleAccordion(index)}
//               className="py-1"
//             >
//               <h2 className="w-full flex justify-between items-center text-white focus:outline-none font-Montserrat md:text-2xl sm:text-[17px] text-[15px] font-bold leading-[130%] mb-0 text-start">
//                 {data.heading}
//               </h2>
//               <span>
//                 {openAccordion === index ? (
//                   <Image
//                     src="/assets/images/svg/minus.svg"
//                     alt="minus"
//                     width={30}
//                     height={26}
//                   />
//                 ) : (
//                   <Image
//                     src="/assets/images/svg/AccordianAdd.svg"
//                     alt="add"
//                     width={30}
//                     height={26}
//                   />
//                 )}
//               </span>
//             </div>
//             <div
//               className={`transition-all duration-[1s] ease-linear pt-0 pb-0 ${
//                 openAccordion === index ? "h-full" : "h-0"
//               }`}
//             >
//               <p className="text-[#768A95] font-medium font-Montserrat leading-[178%] text-md max-w-[550px] pb-0">
//                 {data.para}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImpulseFAQ;
import { useState } from "react";
const ImpulseFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that offers features like server-side rendering and static site generation.",
    },
    {
      question: "Why use Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development without writing custom CSS.",
    },
    {
      question: "Why use Transition ?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development without writing custom CSS.",
    },
    {
      question: "Why use Tailwind CSS transition in project?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development without writing custom CSS.",
    },
    // ... add more questions here
  ];
  return (
    <>
      <div className="p-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="mb-4 mt-5 border-[2px] transition-opacity ease-in duration-300 border-cyan-green bg-[#50EED733] rounded-2xl px-4 py-3 overflow-hidden w-full max-w-[694px] mx-auto"
          >
            <button
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              className="w-full flex  relative flex justify-between items-center text-white focus:outline-none font-Montserrat md:text-2xl sm:text-[17px] text-[15px] font-bold leading-[130%] mb-0 text-start"
            >
              {item.question}
              <span className=" absolute z-50 bg-red-500">
                {activeIndex === index ? (
                  <Image
                    src="/assets/images/svg/minus.svg"
                    alt="minus"
                    width={30}
                    height={26}
                  />
                ) : (
                  <Image
                    src="/assets/images/svg/AccordianAdd.svg"
                    alt="add"
                    width={30}
                    height={26}
                  />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all ease-in-out duration-500 ${
                index === activeIndex ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="text-[#768A95] font-medium font-Montserrat leading-[178%] text-md max-w-[550px] pb-0">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ImpulseFAQ;
