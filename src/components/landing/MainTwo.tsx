import React from "react";

function MainTwo() {
  return (
    <div className="mt-[300px] mb-[100px] w-full h-[200px]  flex flex-col-reverse lg:flex-row justify-center items-center">
      <div className=" lg:block"></div>

      <div>
        <ul dir="rtl" className="px-[20px] text-blue-500 mt-[70px] ">
          <li className="text-[18px] md:text-[24px]">
            - رسانت فقط در حوضه استاپ موشن فعال نیست!
          </li>
          <li className="text-[16px] md:text-[20px]">
            -فعالیت در تمام حوضه های تولید محتوا
          </li>
          <li className="text-[16px] md:text-[20px]">
            -اپلیکیشن رسانت به زودی ارائه داده میشود
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainTwo;
