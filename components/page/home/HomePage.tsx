"use client"
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import SliderXScroll from "./components/sliderXScroll";
import BeastSeller from "./components/beastSeller";
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="h-[550px] items-center  w-full flex justify-center">
        <Slider />
      </div>
      <div className="w-full flex items-center justify-center mt-[105px]">
        <SliderXScroll />
      </div>
      <div className="w-full flex items-center justify-center mt-60">
        <BeastSeller/>
      </div>
      <div className="w-full flex items-center justify-center mt-60">
      </div>
    </>
  );
};

export default HomePage;
