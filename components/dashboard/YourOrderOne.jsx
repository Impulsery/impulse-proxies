import React from "react";
const copyText = () => {
  const textToCopy = document.getElementById("textToCopy").innerText;
  // Try to use the modern clipboard API
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  } else {
    // For older browsers, fallback to the execCommand method
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Text copied to clipboard!");
  }
};
const YourOrderOne = () => {
  return (
    <>
      <div className="bg-[#1E1E43] yourbox_border relative pb-[28px] sm:ps-6 px-4 pt-6 rounded-2xl lg:h-full custom_scrollbar_y">
        <div className="flex sm:items-center items-start justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row lg:flex-col justify-between">
              <div className="flex md:flex-row flex-col lg:flex-col">
                <p className="text-white font-Montserrat text-[11px] leading-normal font-bold tracking-[1.1px] mb-0 whitespace-nowrap mr-3">
                  YOUR ORDER
                </p>
                <p className="lg:ps-0 md:ps-4 font-Montserrat text-[#505082] lg:pt-1 pt-0 leading-normal text-sm text-bold tracking-[1.2px]">
                  #48848191
                </p>
              </div>
              <p className=" font-Montserrat lg:ps-0 ps-10 lg:hidden md:block hidden  text-[#505082] sm:pt-0 pt-4 leading-normal text-xs  md:text-md  text-bold tracking-[1.2px]">
                500 PROXIES
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col">
            <button className="text-[#7777AD] bg-[#292956] transition-all duration-150 hover:bg-[#50EED7] hover:text-[#040426] rounded-md text_12 font-Montserrat text-md font-semibold tracking-[-0.28px] px-4 py-2">
              Download.txt
            </button>
            <button
              onClick={copyText}
              className="text-[#040426] sm:mt-0 mt-3 bg-white transition-all duration-150 hover:bg-[#50EED7] rounded-md font-Montserrat text-xs xl:text-md font-bold tracking-[-0.28px] px-3.5 py-2 sm:ms-4 whitespace-nowrap"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-start mt-6 dashboard_heigh max-h-[640px] overflow-y-auto custom_scrollbar_y">
            <div
              id="textToCopy"
              className="your_order font-Montserrat xl:text-[16px] max-w-[250px] text-[12px] font-medium leading-normal text-[#9D9DBB]"
            >
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
              83.242.248.2314:3817:jfksldnfd:ppoowifnjasn347
            </div>
          </div>
          <div className="sm:flex  justify-end ">
            <p className="text-[#505082] font-Montserrat text-sm text-end leading-normal tracking-[1.2px] font-bold pt-6">
              500 PROXIES
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourOrderOne;
