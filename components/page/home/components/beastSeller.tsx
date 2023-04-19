import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { BiBookmarkPlus } from "react-icons/bi";
const BeastSeller = () => {
  const arr = [
    {
      picture: "/img/Screen Shot 1401-09-03 at 10.46.47.png",
      name: "Raw Pistachios",
      sellprice: 13.59,
      about: "Roasted with tangy lime and saffron",
      rate: 4.2,
      comment: 32,
    },
    {
      picture: "/img/best 2.png",
      name: "Raw Hazelnuts",
      sellprice: 16.59,
      about: "Fresh & healthy",
      rate: 4.2,
      comment: 32,
    },
    {
      picture: "/img/best 3.png",
      name: "Safron Cashews",
      sellprice: 15.59,
      about: "Roasted with tangy lime and saffron",
      rate: 4.2,
      comment: 32,
    },
    {
      picture: "/img/best 4.png",
      name: "Raw Peanuts",
      sellprice: 11.59,
      about: "Distinctively rich, earthy and creamy",
      rate: 4.2,
      comment: 32,
    },
  ];
  return (
    <>
      <div className="flex gap-10 " >
        {arr &&
          arr.map((item) => {
            return (
              <div
                style={{ fontFamily: "Poppins" }}
                className="h-[338px] w-[293px] relative transition-all duration-500 rounded-[16px] flex group justify-center"
              >
                <button className="absolute hidden duration-300 z-10 group-hover:inline w-[263px] group-hover:mt-[350px] bg-[#D96B14] hover:bg-[#ce6412]  text-white font-bold py-2 px-4 rounded ">
                  View
                </button>
                <div>
                  <img
                    className="rounded-[16px] w-[293px] h-full group-hover:h-[245px] group-hover:rounded-bl-none group-hover:rounded-br-none  transition-all duration-500"
                    src={item.picture}
                  />
                </div>
                <div className="absolute  bg-[#393939] transition-all duration-500 group-hover:bg-opacity-100 mt-[245px] rounded-bl-[16px] rounded-br-[16px] p-3 bg-opacity-60 text-white w-[293px] h-[94px] group-hover:h-[160px]">
                  <div className=" gap-1 hidden group-hover:flex transition-all duration-500">
                    <div className="flex gap-2">
                      <BsStar className="text-white text-[18px] headerNavbar" />
                      <label>{item.rate}</label>
                      <FaRegCommentAlt className="text-white  text-[16px] mt-[3px] headerNavbar" />
                      <label>{item.comment}</label>
                    </div>
                    <div className="flex gap-4 ml-auto">
                      <MdFavoriteBorder className="text-white text-[20px] headerNavbar" />
                      <BiBookmarkPlus className="text-white text-[20px] headerNavbar" />
                    </div>
                  </div>
                  <div className="flex">
                    <p className="text-[16px] font-[700]">{item.name}</p>
                    <div className="ml-auto flex gap-[2px]">
                      <p className="text-[16px]">{item.sellprice}$</p>
                      <label className="text-[10px] font-[300] mt-[6px]">
                        per kilo
                      </label>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center mt-3">
                    <p className="text-[16px] font-[200]">{item.about}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BeastSeller;
