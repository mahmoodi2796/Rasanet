import React from "react";

function MainTwo() {
  return (
    <div className="mt-[300px] w-full h-[500px]  flex flex-col-reverse lg:flex-row justify-center items-center gap-20">
      <div className=" flex justify-center items-end rounded-md  ">
        <video
          loop
          muted
          autoPlay
          src="/videos/shen.mp4"
          className="w-[400px] lg:w-full h-[226px] lg:h-[300px] rounded-[16px] border"
        ></video>
      </div>
      <div>
        <ul dir="rtl" className="text-blue-500 mt-[100px] lg:mt-[0px]">
          <li className="text-[30px]">
            - رسانت فقط در حوضه استاپ موشن فعال نیست!
          </li>
          <li className="text-[20px]">-فعالیت در تمام حوضه های تولید محتوا</li>
          <li className="text-[20px]">
            -اپلیکیشن رسانت به زودی ارائه داده میشود
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainTwo;
