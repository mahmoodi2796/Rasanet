import React, { useState } from "react";
import Image from "next/image";
import Logorasanet from "../../../public/images/rasanet.gif";
import Link from "next/link";
import Menu from "../../../public/images/menu.js";
import Close from "../../../public/images/close.js";
import Serach from "../../../public/images/search.js";

function header() {
  const [draver, setDraver] = useState(false);
  return (
    <div className="w-full h-[86px] shadow-2xl bg-white fixed z-20 ">
      <div className="w-full h-full px-[20px]  lg:px-0 flex justify-between lg:justify-around items-center  mx-auto container ">
        <Link href="/login">
          <div className="text-[16px] bg-[#4fadd6] text-white flex justify-center px-[18px] py-[7px] rounded-[4px] cursor-pointer">
            <span className="text-[13px]">ثبت نام</span>
            <span className="px-[4px] text-[14px]">/</span>
            <span className="text-[13px]">ورود</span>
          </div>
        </Link>

        <div className="flex items-center justify-center gap-6">
          <div className="hidden lg:block">
            <div className="flex justify-center items-center gap-8 ">
              <div className="text-red-500 cursor-pointer">
                <Serach />
              </div>
              <div className="text-[16px] cursor-pointer">درباره ما</div>
              <div className="text-[16px] cursor-pointer">سفارش</div>
              <div className="text-[16px] cursor-pointer">نمونه کار</div>
              <div className="text-[16px] cursor-pointer">خدمات</div>
              <div className="text-[16px] cursor-pointer">خانه</div>
            </div>
          </div>
          <div className="w-[110px] h-[50px] ">
            <Image
              src={Logorasanet}
              alt="Picture of the author"
              width={110}
              height={45}
            />
          </div>
          <div className="block lg:hidden ">
            <div
              className="top-0 right-0 overflow-hidden duration-300 bg-[#3094ea] absolute h-screen text-white"
              style={{ width: draver ? 375 : 0 }}
            >
              <div className="w-full h-full flex flex-col justify-start items-start mt-[20px]">
                <div onClick={() => setDraver(false)} className=" ml-[20px]">
                  <Close />{" "}
                </div>
                <div className="w-full h-full flex flex-col justify-start mt-[150px] items-center gap-8 ">
                  <div className="text-[17px] cursor-pointer">درباره ما</div>
                  <div
                    className="text-[17px] cursor-pointer"
                    onClick={() =>
                      window.scrollTo({ top: 1690, behavior: "smooth" })
                    }
                  >
                    <div onClick={() => setDraver(false)}>سوالات متداول</div>
                  </div>
                  <div className="text-[17px] cursor-pointer">موقعیت شغلی</div>
                </div>
              </div>
            </div>
            <div onClick={() => setDraver(true)}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
