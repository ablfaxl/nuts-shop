import React from "react";

const SpecialSaleSlideShow = () => {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center space-x-2">
                <div
                    className="h-[480px] flex flex-col-reverse justify-end gap-2"
                    dir="rtl"
                >
                    <img
                        src="/img/best 2.png"
                        alt=""
                        className="rounded-lg rounded-bl-3xl shadow-xl w-[142px] h-[142px] hover:w-[350px] hover:h-[350px] object-cover transition-all duration-500 peer"
                    />
                    <img
                        src="/img/best 3.png"
                        alt=""
                        className="rounded-lg rounded-tl-3xl shadow-xl w-[240px] h-[240px] hover:w-[320px] hover:h-[320px] object-cover transition-all duration-500 peer-hover:w-[120px] peer-hover:h-[120px]"
                    />
                </div>
                <div className="h-[480px] w-[480px] transition-all duration-500 hover:w-[680px]">
                    <img
                        src="/img/collection2.png"
                        alt=""
                        className="rounded-lg w-[480px] h-[480px] object-cover object-right transition-all duration-500 hover:w-[680px]"
                    />
                </div>
                <div className="h-[480px] flex flex-col justify-end gap-2">
                    <img
                        src="/img/best 3.png"
                        alt=""
                        className="rounded-lg rounded-tr-3xl shadow-xl w-[142px] h-[142px] hover:w-[340px] hover:h-[340px] hover:-translate-y-4 object-cover transition-all duration-500 peer"
                    />
                    <img
                        src="/img/best 2.png"
                        alt=""
                        className="rounded-lg rounded-br-3xl shadow-xl w-[240px] h-[240px] hover:w-[320px] hover:h-[320px] object-cover transition-all duration-500 peer-hover:w-[120px] peer-hover:h-[120px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SpecialSaleSlideShow;
