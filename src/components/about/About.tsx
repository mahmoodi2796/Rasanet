import Header from "../landing/Header";
import AboutSvg from "../../../public/images/about";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Filimosvg from "../../../public/images/filimo.png";
import Digikalasvg from "../../../public/images/digikala.png";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

function About() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div
      className="item bg-[#A6DEF4] w-[160px] h-[90px] rounded-[6px] mt-[37px] "
      onDragStart={handleDragStart}
    >
      1
    </div>,
    <div
      className="item bg-[#80BE97] w-[160px] h-[90px] rounded-[6px] mt-[37px] "
      onDragStart={handleDragStart}
    >
      2
    </div>,
    <div
      className="item bg-[#E16756] w-[160px] h-[90px] rounded-[6px] mt-[37px] "
      onDragStart={handleDragStart}
    >
      3
    </div>,
    <div
      className="item bg-[#E2B9B5] w-[160px] h-[90px] rounded-[6px] mt-[37px] "
      onDragStart={handleDragStart}
    >
      4
    </div>,
    <div
      className="item bg-[#985858] w-[160px] h-[90px] rounded-[6px] mt-[37px] "
      onDragStart={handleDragStart}
    >
      5
    </div>,
  ];

  return (
    <div className="w-full flex flex-col  items-center">
      <Header />
      <div className="mt-[188px]">
        <AboutSvg />
      </div>
      <div className="w-[637px] mx-auto container flex flex-col justify-center items-end ">
        <div className="text-[21px] flex mt-[81px]">درباره ما</div>
        <div dir="rtl" className="text-[15px] mt-[12px] ">
          رسـانت، مجـموعه‌ای خلاق و پیشـرو در زمینه تولیـد و انتـشار محـتوای
          دیجـیتالی است که از سال 1399 با بهره‌گیری از دانش روز، تجهیزات پیشرفته
          و نیروهای متخصص با هدف ارائه خدمات به کسب و کار های بازار سرمایه شروع
          به کار کرده است .
        </div>
        <div dir="rtl" className="text-[16px] mt-[12px] ">
          چرا رسانت را انتخاب کنیم؟
        </div>
        <div dir="rtl" className="text-[15px] mt-[12px] ">
          رسانت با خلاقـیت و نـوآوری در تولید تـیزرهای تبلیـغاتی می‌تواند در جهت
          رشـد کسـب و کار شما تاثیر فوق العاده‌ای داشته باشد. همچنین استودیو
          رسانت در تمامی تکنیک ها و سبک های ساخت تیزر تبلیغاتی از قبیل ساخت کلیپ
          های محیطی، رئال موشن، استاپ موشن، موشن گرافیک، انیمیشن با شن، کمیک
          موشن، انیمیشن 2D، لایو اکشن، ویدیو موشن و ... نیروهای متخصص و کارآمد
          دارد که می‌تواند جذاب‌ترین تیزر ها را بدون هیچگونه محدودیتی برای شما
          تولید کند.
        </div>
        <div dir="rtl" className="text-[16px] mt-[12px] ">
          روند کار در رسانت چگونه است؟
        </div>
        <div className="w-[669px] h-[221px] bg-[#C4C4C4] mt-[25px] flex justify-center items-center">
          اینـــــــفــــــــــــو مــــــوشـــــــــــــن
        </div>
        <div dir="rtl" className="text-[16px] mt-[86px] ">
          گالری تصاویر
        </div>
        <AliceCarousel
          autoPlay={false}
          autoPlayInterval={500}
          animationDuration={500}
          infinite={true}
          items={items}
          animationType={"slide"}
          autoHeight={true}
          disableSlideInfo={true}
          keyboardNavigation={false}
          mouseTracking={true}
          paddingLeft={235}
          paddingRight={235}
        />
        <div dir="rtl" className="text-[16px] mt-[80px] ">
          برخی از مشتریان برجسته رسانت
        </div>
        <div className="w-full flex justify-center gap-[92px] mt-[26px]">
          <Image
            src={Filimosvg}
            alt="Picture of the author"
            width={176}
            height={88}
          />
          <Image
            src={Filimosvg}
            alt="Picture of the author"
            width={176}
            height={88}
          />
          <Image
            src={Filimosvg}
            alt="Picture of the author"
            width={176}
            height={88}
          />
        </div>
        <div className="w-full flex justify-center gap-[92px] mt-[65px]">
          <Image
            src={Digikalasvg}
            alt="Picture of the author"
            width={164}
            height={82}
          />
          <Image
            src={Digikalasvg}
            alt="Picture of the author"
            width={164}
            height={82}
          />
          <Image
            src={Digikalasvg}
            alt="Picture of the author"
            width={164}
            height={82}
          />
        </div>
        <div dir="rtl" className="text-[16px] mt-[80px] ">
          راه های ارتباط با ما
        </div>
        <div dir="rtl" className="text-[14px] mt-[9px] ">
          شما می‌توانید همه روزه به جز ایام تعطیل از ساعت 9صبح الی 17عصر از با
          کارشناسان رسانت در ارتباط باشید.
          <br />
        </div>
        <div dir="rtl" className="text-[14px] mt-[4px] ">
          آدرس: تهران، خیابان انقلاب، خیابان دانشگاه، مرکز نوآوری دانشگاه، پلاک
          172، طبقه دوم
        </div>
        <div dir="rtl" className="text-[14px] mt-[12px] ">
          شماره تماس: ۹۱۰۷۰۷۷۱-۰۲۱
        </div>
      </div>
    </div>
  );
}

export default About;
