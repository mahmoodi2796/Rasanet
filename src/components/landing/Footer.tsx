import React from "react";
import Logorasanet from "../../../public/images/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className=" w-full h-[500px] relative  overflow-hidden">
      <svg
        className="absolute h-full   bottom-0 -z-10 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1840 320"
      >
        <path
          fill="#3997e9"
          fillOpacity="1"
          d="M0,64L80,80C160,96,320,128,480,117.3C640,107,800,53,960,32C1120,11,1280,21,1360,26.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div className="w-full h-[290px] mx-auto container flex justify-between items-start mt-[180px] md:mt-[170px] px-[15px] md:px-[0px]">
        <div className="h-[160px] w-[300px]">
          <Image
            src={Logorasanet}
            alt="Picture of the author"
            width={300}
            height={160}
          />
          <div className="flex justify-center gap-4">
            <a target="_blank" href="https://www.instagram.com/rasanet24/">
              <Image
                src="/images/twitter.png"
                alt="Picture of the author"
                width={40}
                height={40}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/rasanet24/">
              <Image
                src="/images/instagramFooter.png"
                alt="Picture of the author"
                width={40}
                height={40}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/rasanet24/">
              <Image
                src="/images/linkedin.png"
                alt="Picture of the author"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
        <div className="mt-[75px] text-white text-[25px] " dir="rtl">
          <div>ارتباط با ما</div>
          <div className="text-[15px] mt-[15px]">
            آدرس : تهران، خیابان انقلاب جنب, خیابان فخر رازی پلاک 1260
          </div>
          <div className="text-[15px] mt-[15px]">تلفن : ۸۷۶۴۱ - ۰۲۱</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
