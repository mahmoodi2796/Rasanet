import React from "react";
import Logorasanet from "../../../public/images/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className=" w-full h-[400px]  bg-[#3997e9]">
      <div className="w-full h-[400px] mx-auto container flex justify-between items-center  px-[15px]">
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
