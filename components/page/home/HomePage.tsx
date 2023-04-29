<<<<<<< HEAD
"use client";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import SliderXScroll from "./components/sliderXScroll";
import BeastSeller from "./components/beastSeller";
import AboutNuts from "./components/aboutNuts";
import Recipies from "@/components/Recipies";
import SpecialSaleSlideShow from "@/components/SpecialSaleSlideShow";
import OurServices from "./components/OurServices";
const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="h-[550px] items-center  w-full flex justify-center">
                <Slider />
            </div>
            <div className="w-full flex items-center justify-center mt-[80px]">
                <SliderXScroll />
            </div>
            <div className="w-full flex items-center justify-center mt-[200px]">
                <BeastSeller />
            </div>
            <div className="w-full  flex items-center justify-center mt-[160px]">
                <AboutNuts />
            </div>
            <div className="w-full mt-[160px]">
                <Recipies />
            </div>
            <div className="w-full flex items-center justify-center mt-[200px]">
                <SpecialSaleSlideShow />
            </div>
            <div className="w-full flex items-center justify-center mt-[400px]">
                <OurServices/>
            </div>
        </>
    );
=======
'use client';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import SliderXScroll from './components/sliderXScroll';
import BeastSeller from './components/beastSeller';
import AboutNuts from './components/aboutNuts';
import Recipies from '@/components/Recipies';
import SpecialSaleSlideShow from '@/components/SpecialSaleSlideShow';
import OurServices from './components/OurServices';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="h-[550px] items-center  w-full flex justify-center">
        <Slider />
      </div>
      <div className="w-full mt-[80px]">
        <SliderXScroll />
      </div>
      <div className="w-full flex items-center justify-center mt-[200px]">
        <BeastSeller />
      </div>
      <div className="w-full  flex items-center justify-center mt-[160px]">
        <AboutNuts />
      </div>
      <div className="w-full mt-[160px]">
        <Recipies />
      </div>
      <div className="w-full flex items-center justify-center mt-[200px]">
        <SpecialSaleSlideShow />
      </div>
      <div className="w-full flex items-center justify-center mt-[200px]">
        <OurServices /> 
      </div>
      <div className="w-full flex items-center justify-center mt-[200px]">
      </div>
    </>
  );
>>>>>>> 4dd6f910250b001cfbf3e1e7011f44e1a9f0a8d0
};

export default HomePage;
