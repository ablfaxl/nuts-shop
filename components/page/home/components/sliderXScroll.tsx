import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
const SliderXScroll = () => {
  const [array, setArray] = useState([
    { img: "/img/collection2.png", hover: false },
    { img: "/img/collection3.png", hover: false },
    { img: "/img/collection4.png", hover: false },
    { img: "/img/Rectangle83(2).png", hover: false },
    { img: "/img/Rectangle83(3).png", hover: false },
    { img: "/img/Rectangle83(1).png", hover: false },
    { img: "/img/Rectangle83(3).png", hover: false },
    { img: "/img/Rectangle83(1).png", hover: false },
    { img: "/img/Rectangle83.png", hover: false },
  ]);
  const effectBox = (i: number) => {
    const clone = [...array];
    clone[i].hover = true;
    setArray(clone);
  };
  const unEffectBox = (i: number) => {
    const clone = [...array];
    clone[i].hover = false;
    setArray(clone);
  };
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="w-[98%]"
    >
      {array.map((item, i) => {
        return (
          <SwiperSlide
            onMouseEnter={() => effectBox(i)}
            onMouseLeave={() => unEffectBox( i)}
            className=" active:cursor-grabbing rounded-[30px] cursor-grab  h-40 w-[40%] inline-block overflow-hidden "
          >
            <div className="flex justify-center items-center duration-500 transition-all group">
                <div className="bg-orange-500 z-50 opacity-0 group-hover:opacity-30 w-0 h-0 rounded-[30px] group-hover:h-full group-hover:w-full absolute transition-all duration-500"></div>
              <img
                src={item.img}
                className="h-40 object-cover duration-500 group-hover:scale-125 w-[200px] rounded-[30px]"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderXScroll;
