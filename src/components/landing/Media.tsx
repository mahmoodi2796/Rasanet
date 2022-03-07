import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const carts = [
  {
    id: 0,
    profile: "/images/profile.jpeg",
    idIntagram: "mahmoodi2795",
    type: "/images/instagram.png",
    coment:
      " سلام خسته نباشید کلیپتون واقعا ریبا بود سپاس بابت زحماتتون خداقوت🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻",
  },
  {
    id: 1,
    profile: "/images/profileOne.jpeg",
    idIntagram: "reza_mombeyni.5173",
    type: "/images/instagram.png",

    coment: " عالی عالی واقعا کارتون درسته🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻",
  },
  {
    id: 2,
    profile: "/images/profileTwo.jpeg",
    idIntagram: "mahmoudi7843",
    type: "/images/instagram.png",

    coment: "بسیار زیبا🌹🌹🌹🌹🌹🌹🌹",
  },
  {
    id: 2,
    profile: "/images/profileThree.jpeg",
    idIntagram: "_zynb_lb",
    type: "/images/instagram.png",

    coment: " خیلی خوجله😍😍",
  },
  {
    id: 2,
    profile: "/images/profileFour.jpeg",
    idIntagram: "ronaldiniho",
    type: "/images/instagram.png",

    coment: " oh my god 👏🏾👏🏾👏🏾",
  },
];

function Media() {
  return (
    <div className="w-full h-full flex items-center flex-col mt-[100px] ">
      <div className="text-[#3094ea] text-[19px] md:text-[25px] flex items-center">
        :ما را در شبکه‌های اجتماعی دنبال کنید
      </div>

      <Marquee gradientWidth={10}>
        {carts.map((cart) => (
          <div className="w-[300px] md:w-[450px] h-[220px] rounded-[15px] shadow-shadow relative mt-[100px] mb-[100px] mx-[20px]">
            <div className="w-full flex justify-end items-center pr-[15px] pt-[10px]">
              <div className="text-[15px] absolute top-[70px] md:top-[70px] left-[100px] md:left-[185px]">
                {cart.idIntagram}
              </div>

              <Image
                className=""
                src={cart.type}
                alt="Picture of the author"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[100px] h-[100px] rounded-[50px] absolute left-[100px] md:left-[185px] top-[-35px] border-4 border-[#e7406d] ">
              <Image
                className="rounded-[50px]"
                src={cart.profile}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="mt-[70px] w-full h-[120px] flex justify-center">
              <div className="text-[14px] px-[10px]" dir="auto">
                {cart.coment}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Media;
