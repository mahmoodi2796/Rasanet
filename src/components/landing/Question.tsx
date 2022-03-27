import React, { useState } from "react";

function question() {
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);

  return (
    <div className="bg-[#fbfafb] h-[500px] lg:h-[500px] w-full flex flex-col items-center ">
      <div className="text-[#3997e9] text-[25px] lg:text-[35px] mt-[50px] lg:mt-[50px]">
        سوالات متداول
      </div>

      <div
        className="duration-300 overflow-hidden w-2/3 container mx-auto p-[5px] border-b border-[#b5b6bd] mt-[40px] lg:mt-[0px]"
        onClick={() => setQuestionOne((prevState) => !prevState)}
        style={{
          maxHeight: questionOne ? 200 : 42,
          color: questionOne ? "#3094ea" : "black",
        }}
      >
        <div className="text-[12px] md:text-[22px]" dir="rtl">
          رسانت چیست؟
        </div>
        <div dir="rtl" className="mt-[20px]  text-[#737789]  sm:mt-[0px]">
          رسانت یک بستر برای راحت تر کردن فضای تبلیغاتی و تولید محتواست.
        </div>
      </div>
      <div
        className="duration-300 overflow-hidden w-2/3 container mx-auto p-[5px] border-b border-[#b5b6bd] "
        onClick={() => setQuestionTwo((prevState) => !prevState)}
        style={{
          maxHeight: questionTwo ? 200 : 62,
          color: questionTwo ? "#3094ea" : "black",
        }}
      >
        <div className="text-[12px] md:text-[22px] mt-[20px]" dir="rtl">
          رسانت چه خدماتی به مشتریان ارایه می دهد؟
        </div>
        <div dir="rtl" className="mt-[20px]  text-[#737789]">
          رسانت برای مشتریان خود تولید محتوا میکند یعنی با توچه به سفارش کاربراش
          برای اونها ویدیو تولید میکنه.
        </div>
      </div>
      <div
        className="duration-300 overflow-hidden w-2/3 container mx-auto p-[5px] border-b border-[#b5b6bd] "
        onClick={() => setQuestionThree((prevState) => !prevState)}
        style={{
          maxHeight: questionThree ? 200 : 62,
          color: questionThree ? "#3094ea" : "black",
        }}
      >
        <div className="text-[12px] md:text-[22px] mt-[20px]" dir="rtl">
          مزایای رسانت چیست؟
        </div>
        <div dir="rtl" className="mt-[20px]  text-[#737789]">
          تولید سریع و باکیفیت ویدیو با قیمت بسیار عاقلانه
        </div>
      </div>
      <div
        className="duration-300 overflow-hidden w-2/3 container mx-auto p-[5px] border-b border-[#b5b6bd] "
        onClick={() => setQuestionFour((prevState) => !prevState)}
        style={{
          maxHeight: questionFour ? 200 : 62,
          color: questionFour ? "#3094ea" : "black",
        }}
      >
        <div className="text-[12px] md:text-[22px] mt-[20px]" dir="rtl">
          چگونه با رسانت تماس بگیریم؟
        </div>
        <div dir="rtl" className="mt-[20px]  text-[#737789]">
          <div>راه ارتباطی :</div>
          <div> ۰۲۱-۹۱۰۷۰۷۷</div>
        </div>
      </div>
    </div>
  );
}

export default question;
