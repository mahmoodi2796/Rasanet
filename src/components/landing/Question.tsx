import React, { useState } from "react";
import Arow from "../../../public/images/arowQuestion";

function question() {
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);

  return (
    <div className=" h-[500px]  w-7/12 flex flex-col items-center mx-auto container mt-[120px]">
      <div className=" text-[25px] lg:text-[30px] mt-[50px] lg:mt-[50px]">
        سوالات متداول
      </div>
      <div className=" text-[20px] mt-[12px]  mb-[15px] text-[#545454]">
        با استودیو رسانت کسب و کار خود را خلاقانه به نمایش بگذارید
      </div>
      <div
        className="duration-300 overflow-hidden w-full container mx-auto p-[5px] border rounded-md border-[#b5b6bd]"
        onClick={() => setQuestionTwo((prevState) => !prevState)}
        style={{
          maxHeight: questionTwo ? 200 : 53,
          color: questionTwo ? "#3094ea" : "black",
        }}
      >
        <div
          className="text-[12px] md:text-[22px] flex justify-between flex-row-reverse "
          dir="rtl"
        >
          <div className={`border border-black rounded-md duration-300  `}>
            <div
              className={`duration-300 ${
                questionTwo
                  ? "text-[#3094ea] rotate-90 "
                  : "text-black rotate-0"
              }`}
            >
              <Arow />
            </div>
          </div>
          <div className="pr-[5px] pt-[3px]">
            {" "}
            رسانت چه خدماتی ارایه می دهد؟
          </div>
        </div>

        <div dir="rtl" className="mt-[10px]  text-[#737789]">
          رسانت برای مشتریان خود تولید محتوا میکند یعنی با توچه به سفارش کاربراش
          برای اونها ویدیو تولید میکنه.
        </div>
      </div>
      <div
        className="duration-300 overflow-hidden w-full container mx-auto p-[5px] border rounded-md border-[#b5b6bd] mt-[20px]"
        onClick={() => setQuestionThree((prevState) => !prevState)}
        style={{
          maxHeight: questionThree ? 200 : 53,
          color: questionThree ? "#3094ea" : "black",
        }}
      >
        <div
          className="text-[12px] md:text-[22px] flex justify-between flex-row-reverse"
          dir="rtl"
        >
          <div className={`border border-black rounded-md duration-300 `}>
            <div
              className={`duration-300 ${
                questionThree
                  ? "text-[#3094ea] rotate-90 "
                  : "text-black rotate-0"
              }`}
            >
              <Arow />
            </div>
          </div>

          <div className="pr-[5px] pt-[3px]">مزایای رسانت چیست؟</div>
        </div>

        <div dir="rtl" className="mt-[10px]  text-[#737789]">
          رسانت برای مشتریان خود تولید محتوا میکند یعنی با توچه به سفارش کاربراش
          برای اونها ویدیو تولید میکنه.
        </div>
      </div>
      <div
        className="duration-300 overflow-hidden w-full container mx-auto p-[5px] border rounded-md border-[#b5b6bd] mt-[20px]"
        onClick={() => setQuestionOne((prevState) => !prevState)}
        style={{
          maxHeight: questionOne ? 200 : 53,
          color: questionOne ? "#3094ea" : "black",
        }}
      >
        <div
          className="text-[12px] md:text-[22px] flex justify-between flex-row-reverse"
          dir="rtl"
        >
          <div className={`border border-black rounded-md duration-300 `}>
            <div
              className={`duration-300 ${
                questionOne
                  ? "text-[#3094ea] rotate-90 "
                  : "text-black rotate-0"
              }`}
            >
              <Arow />
            </div>
          </div>

          <div className="pr-[5px] pt-[3px]">
            فرایند سفارش از رسانت چگونه است؟
          </div>
        </div>

        <div dir="rtl" className="mt-[10px]  text-[#737789]">
          رسانت برای مشتریان خود تولید محتوا میکند یعنی با توچه به سفارش کاربراش
          برای اونها ویدیو تولید میکنه.
        </div>
      </div>
    </div>
  );
}

export default question;
