import React, { useState } from "react";
import Image from "next/image";
import Logorasanet from "../../../public/images/rasanet.gif";
import Link from "next/link";
import Menu from "../../../public/images/menu.js";
import Close from "../../../public/images/close.js";

function HeaderLogin() {
  const [draver, setDraver] = useState(false);

  return (
    <div className="w-full h-[100px] shadow-2xl bg-white fixed z-20 ">
      <div className="w-full h-full px-[20px]  lg:px-0 flex justify-between lg:justify-around items-center  mx-auto container ">
        <div className="w-[150px] h-[50px]">
          <Image
            src={Logorasanet}
            alt="Picture of the author"
            width={150}
            height={50}
          />
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="hidden lg:block">
            <div className="flex justify-center items-center gap-8 ">
              <div className="text-[16px] cursor-pointer">درباره ما</div>
              <div
                className="text-[16px] cursor-pointer"
                onClick={() =>
                  window.scrollTo({ top: 2230, behavior: "smooth" })
                }
              >
                سوالات متداول
              </div>
              <div className="text-[16px] cursor-pointer">موقعیت شغلی</div>
            </div>
          </div>
          <Link href="/">
            <div className="text-[16px] bg-[#3094ea] text-white flex justify-center px-[23px] py-[7px] rounded-md cursor-pointer">
              خانه
            </div>
          </Link>
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
                      window.scrollTo({ top: 2230, behavior: "smooth" })
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

export default HeaderLogin;
