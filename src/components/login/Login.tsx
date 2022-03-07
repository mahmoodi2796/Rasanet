import React from "react";
import Image from "next/image";
import CloudeUP from "../../../public/images/cloudeLoginUp";
import CloudeDown from "../../../public/images/cloudeDown.js";
import CloudeDownMobile from "../../../public/images/cloudeDownMobile.js";
import Header from "./HeaderLogin";

import Logo from "../../../public/images/logoWrood.png";

function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="absolute top-0 left-0 z-50">
        <Header />
      </div>
      <div className=" w-[330px] h-[450px] mt-[50px]   z-40  rounded-[12px] shadow-shadow">
        <div className="rounded-[50px] flex justify-end mr-[30px] mt-[20px]">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={60}
            height={60}
          />
        </div>
        <div className="flex justify-center w-full mt-[20px]">
          <div dir="rtl" className="text-[25px] text-[#3094ea]">
            به رسانت خوش امدید
          </div>
        </div>
        <div className="w-full h-[40px] flex justify-center mt-[50px] relative">
          <input
            type="text"
            className=" border-b border-gray-600 w-[250px] h-[40px] px-[10px] focus:borders"
          />
          <label className="absolute top-[-25px] left-[50px] text-slate-400 text-[15px] ">
            نام کاربری
          </label>
        </div>
        <div className="w-full h-[40px] flex justify-center mt-[30px] relative">
          <input
            type="password"
            className="border-b border-gray-600 w-[250px] h-[40px] px-[10px]"
          />
          <label className="absolute top-[-25px] left-[50px] text-slate-400 text-[15px] ">
            رمز عبور
          </label>
        </div>
        <div className="w-full flex justify-center">
          <button className="border bg-[#3094ea] text-white w-[100px] h-[40px] rounded-[7px] mt-[20px]">
            ورود
          </button>
        </div>
      </div>

      <div className="absolute hidden top-0 right-0 -z-50 md:block">
        <CloudeUP />
      </div>
      <div className="absolute bottom-[0px] left-0 hidden  sm:block ">
        <CloudeDown />
      </div>
      {/* <div className="w-full  absolute bottom-[0px] left-0 block  sm:hidden  text-[#3094ea]">
        <CloudeDownMobile />
      </div> */}
    </div>
  );
}

export default Login;
