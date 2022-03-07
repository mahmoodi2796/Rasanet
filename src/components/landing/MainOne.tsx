import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const MainOne = () => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="mt-[130px] lg:mt-[200px] w-full h-[600px] lg:h-[300px] block lg:flex justify-center gap-10">
      <div className="w-full lg:w-[500px] flex lg:block justify-center px-[25px] mt-[0px] lg:mt-[80px]">
        <div className="embla  w-[500px] h-[300px] ">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <div className="embla__slide__inner">
                  <div>
                    <div
                      className="text-[22px] text-[#3094ea] mt-[50px]"
                      dir="rtl"
                    >
                      تبلیغات در اینستاگرام به دو روش انجام می‌شود!
                    </div>
                    <div
                      className="text-[20px] text-gray-400 mt-[20px]"
                      dir="rtl"
                    >
                      تبلیغات انتشار محتوا: در این نوع از تبلیغات، عکس یا ویدیو
                      آماده شما توسط پیج‌ها
                    </div>
                  </div>
                </div>
              </div>
              <div className="embla__slide">
                <div className="embla__slide__inner">
                  <div
                    className="text-[20px] text-[#3094ea] mt-[50px]"
                    dir="rtl"
                  >
                    تبلیغات شما توسط پیج‌ها یا اینفلوئنسرها منتشر می‌شود و شما
                    تنها به اندازه‌ای که تبلیغتان در این رسانه‌ها بازدید خواهد
                    داشت، هزینه پرداخت می‌کنید.
                  </div>
                </div>
              </div>
              <div className="embla__slide">
                <div className="embla__slide__inner">
                  <div
                    className="text-[20px] text-[#3094ea] mt-[50px] bg-[#ebf4fc] p-[10px] rounded-[16px] h-[200px]"
                    dir="rtl"
                  >
                    شما می‌توانید اطلاعات کامل پیج‌ها اعم از دسته‌بندی، تعداد
                    فالوور، نرخ تعامل و تعرفه‌های آنان را داخل پلتفرم جریان
                    مشاهده کنید و باتوجه به بودجه و هدف خود بهترین گزینه‌ها را
                    انتخاب نمایید.
                  </div>
                </div>
              </div>
            </div>
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
