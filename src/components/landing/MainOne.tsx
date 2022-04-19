import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import logo from "../../../public/images/rasanetHroof.png";
const MainOne = () => {
  const [circleOne, setcircleOne] = useState(false);
  const [circleTwo, setcircleTwo] = useState(false);
  const [circleThree, setcircleThree] = useState(false);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScroll(scrolled * 1000);
  };
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", (e) => console.log(e));
    };
  }, []);

  useEffect(() => {
    if (scroll >= 0) {
      setcircleOne(true);
    } else {
      setcircleOne(false);
    }
    if (scroll >= 510) {
      setcircleTwo(true);
      setcircleOne(false);
      setcircleThree(false);
    } else {
      setcircleTwo(false);
    }
    if (scroll >= 950) {
      setcircleThree(true);
      setcircleOne(false);
      setcircleTwo(false);
    } else {
      setcircleThree(false);
    }
  }, [scroll]);
  return (
    <div className="mt-[130px] lg:mt-[200px] w-full h-full  block lg:flex justify-center ">
      <div className="w-full lg:w-[500px] flex lg:block justify-center px-[25px] mt-[0px] lg:mt-[80px]">
        <div className="text-[20px] text-right ">
          <div>
            <Image
              src={logo}
              alt="Picture of the author"
              width={110}
              height={45}
            />
          </div>

          <div className="flex justify-start flex-row-reverse gap-2 text-[18px] mt-[12px]">
            مجموعه ای
            <div dir="rtl" className="text-[#ff563f]">
              <Typewriter
                options={{
                  strings: [" خلاق  ", "پیشرو ", "نوآور"],
                  autoStart: true,
                  deleteSpeed: 20,
                  delay: 80,
                  skipAddStyles: false,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div dir="rtl" className=" text-[20px] ">
            در زمینه تولیـد و انتـشار محـتوای دیجـیتالی است که از سال ۱۳۹۹ با
            بهره گیری از دانش روز , تجهیزات پیشرفته و نیروهای متخصص باهدف ارائه
            خدمات ‌به کسب وکارهای بازار سرمایه شروع به کار کرده است.
          </div>
        </div>
        <div className="flex justify-end mt-[24px]">
          <div className="text-[14px] w-[100px] bg-[#4fadd6] text-white flex justify-center py-[8px] rounded-[4px] cursor-pointer">
            شروع کنید
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[500px] flex lg:block justify-center">
        <div className="w-[300px] h-[607px] flex justify-center items-center p-2 rounded-[20px] bg-heropattern bg-cover">
          <iframe
            className="w-11/12 h-6/12"
            src="https://www.instagram.com/p/CaW9xkLgPvn/embed"
            title="instagram"
            width="300px"
            height="520px"
          ></iframe>
        </div>
      </div>
      <div className="h-full flex flex-col gap-5 fixed right-10 top-1/2">
        <div className=" border border-black rounded-full flex justify-center items-center">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`  rounded-full   ${
              circleOne
                ? ` w-[9px] h-[9px] bg-black mx-[1px] my-[1px]  border border-black`
                : `w-[12px] h-[12px]`
            }`}
          ></div>
        </div>
        <div className=" border border-black rounded-full flex justify-center items-center">
          <div
            onClick={() => window.scrollTo({ top: 850, behavior: "smooth" })}
            className={`  rounded-full     ${
              circleTwo
                ? ` w-[9px] h-[9px] bg-black mx-[1px] my-[1px]`
                : `w-[12px] h-[12px]`
            }`}
          ></div>
        </div>
        <div className=" border border-black rounded-full flex justify-center items-center">
          <div
            onClick={() => window.scrollTo({ top: 1600, behavior: "smooth" })}
            className={` rounded-full     ${
              circleThree
                ? ` w-[9px] h-[9px] bg-black mx-[1px] my-[1px]`
                : `w-[12px] h-[12px]`
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainOne;
