import React from "react";
import Header from "../components/landing/Header";
import MainOne from "../components/landing/MainOne";
import MainTwo from "../components/landing/MainTwo";
import BlueMain from "../components/landing/BlueMain";
import Media from "../components/landing/Media";
import Question from "../components/landing/Question";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <Header />
      <MainOne />
      <MainTwo />
      <BlueMain />
      <Question />
      <Media />
      <Footer />
    </div>
  );
}

export default Landing;
