import React from "react";
import MainSlider from "../../components/mainPage/slider/Slider";
import Companies from "../../components/mainPage/companies/Companies";
import Stocks from "../../components/mainPage/stocks/Stocks";

const MainPage: React.FC = () => {
  return (
    <>
      <MainSlider />
      <Companies />
      <Stocks />
    </>
  );
};

export default MainPage;
