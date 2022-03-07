import React from "react";
import Image from "next/image";
import Support from "../../../public/images/support.png";

function BlueMain() {
  return (
    <div className=" w-full h-[700px] lg:h-[800px] bg-[#3997e9] mt-[100px] flex-row justify-center items-center gap-32 ">
      <div className="w-full h-full flex-row justify-center items-center mx-auto container">
        <div className="w-full ">
          <Image
            src={Support}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-2 mr-[10px]" dir="rtl">
          <span className="text-[27px] lg:text-[30px] text-white">
            رسانت; همیشه در دسترس است.
          </span>
          <span className="text-[15px] lg:text-[20px] text-white">
            هفت روز هفته ۲۴ ساعت شبانه روز در خدمت شما هستیم
          </span>
          <span className="text-[15px] lg:text-[20px] text-white">
            اگر سوالی دارید در قسمت پشتیبانی انلاین پیام صوتی یا متنی بگذارید و
            یا با شماره ۹۱۰۷۰۷۷-۰۲۱ تماس بگیرید
          </span>
          <span className="text-[15px] lg:text-[20px] text-white">
            کارشناسان خبره رسانت همیشه آماده پاسخگویی به شما عزیزان هستند.
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlueMain;
