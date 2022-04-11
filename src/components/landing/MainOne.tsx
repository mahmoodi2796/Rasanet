import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import logo from "../../../public/images/rasanetHroof.png";

import Jobs from "../../../public/images/jobs.png";
const MainOne = () => {
  return (
    <div className="mt-[130px] lg:mt-[200px] w-full h-[600px] lg:h-[300px] block lg:flex justify-center ">
      <div className="w-full lg:w-[500px] flex lg:block justify-center px-[25px] mt-[0px] lg:mt-[80px]">
        <div className="text-[20px] text-right">
          <div>
            <Image
              src={logo}
              alt="Picture of the author"
              width={110}
              height={45}
            />
          </div>
          <Typewriter
            options={{
              strings: [" کار درست ", "خلاق ، نوآور ، پیشرو "],
              autoStart: true,
              deleteSpeed: 22,
              skipAddStyles: true,
              loop: true,
            }}
          />
          <div className="text-right text-[20px]">
            در زمینه تولیـد و انتـشار محـتوای دیجـیتالی است که از سال ۱۳۹۹ با
            بهره گیری از دانش روز , تجهیزات پیشرفته و نیروهای متخصص با هدف ارائه
            خدمات به کسب و کار های بازار سرمایه شروع به کار کرده است
          </div>
        </div>
        <div className="flex justify-end mt-[20px]">
          <div className="text-[14px] w-[100px] bg-[#4fadd6] text-white flex justify-center py-[8px] rounded-[4px] cursor-pointer">
            شروع کنید
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[500px] flex lg:block justify-center">
        <div className="w-[300px] h-[600px] flex justify-center items-center p-2 rounded-[20px] bg-heropattern bg-cover">
          <iframe
            className="w-11/12 h-6/12"
            src="https://www.instagram.com/p/CaW9xkLgPvn/embed"
            title="instagram"
            width="300px"
            height="520px"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainOne;
