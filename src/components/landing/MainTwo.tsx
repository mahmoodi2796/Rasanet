import React, { useState, useEffect } from "react";

function MainTwo() {
  const [reqtangleOne, setReqtangleOne] = useState(false);
  const [reqtangleTwo, setReqtangleTwo] = useState(false);
  const [reqtangleThree, setReqtangleThree] = useState(false);
  const [reqtangleFour, setReqtangleFour] = useState(false);
  const [reqtangleFive, setReqtangleFive] = useState(false);
  const [reqtangleSix, setReqtangleSix] = useState(false);
  const [reqtangleSeven, setReqtangleSeven] = useState(false);
  const [reqtangleeghit, setreqtangleeghit] = useState(false);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScroll(scrolled * 1000);
  };
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", (e) => console.log(e));
    };
  }, []);

  useEffect(() => {
    scroll >= 146 && setReqtangleOne(true);
    scroll >= 146 && setReqtangleTwo(true);
    scroll >= 146 && setReqtangleThree(true);
    scroll >= 146 && setReqtangleFour(true);
    scroll >= 236 && setReqtangleFive(true);
    scroll >= 236 && setReqtangleSix(true);
    scroll >= 236 && setReqtangleSeven(true);
    scroll >= 236 && setreqtangleeghit(true);
  }, [scroll]);
  return (
    <div className="w-full h-full mt-[200px] flex flex-col items-center">
      {console.log(scroll)}
      <div className="text-[26px]">برخی از خدمات رسانت</div>
      <div className="text-[18px] mt-[12px] text-[#545454]">
        .با خدمات کامل استودیو رسانت با خیال راحت به کسب و کارتان بپردازید
      </div>
      <div className="w-7/12 flex flex-wrap justify-center gap-10 mt-[50px] mx-auto container">
        <div
          className={`border border-black w-[240px] h-[240px]  ${
            reqtangleOne
              ? `visible opacity-100`
              : `invisible opacity-10 -skew-x-30 -skew-y-30 translate-x-6 mt-[40px] `
          } duration-1000`}
        ></div>
        <div
          className={`border border-black w-[240px] h-[240px]  ${
            reqtangleTwo
              ? `visible opacity-100`
              : `invisible opacity-10 -skew-x-30 -skew-y-30 translate-x-6 mt-[40px] `
          } duration-1000`}
        ></div>
        <div
          className={`border border-black w-[240px] h-[240px]  ${
            reqtangleThree
              ? `visible opacity-100`
              : `invisible opacity-10 -skew-x-30 -skew-y-30 translate-x-6 mt-[40px] `
          } duration-1000`}
        ></div>
        <div
          className={`border border-black w-[240px] h-[240px]  ${
            reqtangleFour
              ? `visible opacity-100`
              : `invisible opacity-10 -skew-x-30 -skew-y-30 translate-x-6 mt-[40px] `
          } duration-1000`}
        ></div>
        <div
          className={`border border-black w-[240px] h-[240px]  ${
            reqtangleFive
              ? `visible opacity-100`
              : `invisible opacity-10 -skew-x-30 -skew-y-30 translate-x-6 mt-[40px] `
          } duration-1000`}
        ></div>
        <div
          className={`border border-black w-[240px] h-[240px]  ${
            reqtangleSix
              ? `visible opacity-100`
              : `invisible opacity-10 -skew-x-30 -skew-y-30 translate-x-6 mt-[40px] `
          } duration-1000`}
        ></div>
        <div
          className={`border border-black w-[240px] h-[240px]  ${
            reqtangleSeven
              ? `visible opacity-100`
              : `invisible opacity-10 -skew-x-30 -skew-y-30 translate-x-6 mt-[40px] `
          } duration-1000`}
        ></div>
        <div
          className={`border border-black w-[240px] h-[240px]  ${
            reqtangleeghit
              ? `visible opacity-100`
              : `invisible opacity-10 -skew-x-30 -skew-y-30 translate-x-6 mt-[40px] `
          } duration-1000`}
        ></div>
      </div>
    </div>
  );
}

export default MainTwo;
