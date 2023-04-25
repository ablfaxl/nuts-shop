import Image from "next/image";
import { GiTrophyCup } from "react-icons/gi";
import aboutNutsImg from "/public/img/healthy-foods-concept-white-background.png";
// change position of icons
const AboutNuts = () => {
    return (
        <div className="h-[447px]">
            <div className="relative">
                <Image
                    className="w-full object-cover"
                    src={aboutNutsImg}
                    alt="/"
                />
                <div className="absolute top-0 left-0">
                    <div className="p-6 pb-4">
                        <div className="rounded-full flex justify-end">
                            <GiTrophyCup size={30} className="text-[#D96B14]" />
                        </div>
                        <h1 className="text-right font-bold py-2 px-2">
                            We Ensure Great Quality
                        </h1>
                        <div className="border-r-2 border-[#D96B14] pb-2">
                            <p className="text-right text-sm text-[#000000] pr-2">
                                Offering good quality products is something
                                everyone in the
                            </p>
                            <p className="text-right text-sm text-[#000000] pr-2">
                                business can do. But our job doesn’t end until
                                we help you make
                            </p>
                            <p className="text-right text-sm text-[#000000] pr-2">
                                great quality, nutritious meals with these nuts
                                and dry fruits.
                            </p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="absolute top-0 right-0">
                    <div className="p-6 pb-4">
                        <div className="">
                            <GiTrophyCup
                                size={30}
                                className="text-[#D96B14] mr-32"
                            />
                        </div>
                        <h1 className="text-left font-bold py-2 px-2">
                            We Ensure Great Quality
                        </h1>
                        <div className="border-l-2 border-[#D96B14] pl-2">
                            <p className="text-left text-sm text-[#000000] pr-2">
                                Offering good quality products is something
                                everyone in the
                            </p>
                            <p className="text-left text-sm text-[#000000] pr-2">
                                business can do. But our job doesn’t end until
                                we help you make
                            </p>
                            <p className="text-left text-sm text-[#000000] pr-2">
                                great quality, nutritious meals with these nuts
                                and dry fruits.
                            </p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="absolute bottom-0 left-0">
                    <div className="p-6 pb-4">
                        <div className="flex justify-end">
                            <GiTrophyCup
                                size={30}
                                className="text-[#D96B14]"
                            />
                        </div>
                        <h1 className="text-right font-bold py-2 px-2">
                            We Ensure Great Qualityi
                        </h1>
                        <div className="border-r-2 border-[#D96B14] pb-2">
                            <p className="text-right text-sm text-[#000000] pr-2">
                                Offering good quality products is something
                                everyone in the
                            </p>
                            <p className="text-right text-sm text-[#000000] pr-2">
                                business can do. But our job doesn’t end until
                                we help you make
                            </p>
                            <p className="text-right text-sm text-[#000000] pr-2">
                                great quality, nutritious meals with these nuts
                                and dry fruits.
                            </p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="absolute bottom-0 right-0">
                    <div className="p-6 pb-4">
                        <div className="">
                            <GiTrophyCup
                                size={30}
                                className="text-[#D96B14] mr-32"
                            />
                        </div>
                        <h1 className="text-left font-bold py-2 px-2">
                            We Ensure Great Quality
                        </h1>
                        <div className="border-l-2 border-[#D96B14] p-2">
                            <p className="text-left text-sm text-[#000000] pr-2">
                                Offering good quality products is something
                                everyone in the
                            </p>
                            <p className="text-left text-sm text-[#000000] pr-2">
                                business can do. But our job doesn’t end until
                                we help you make
                            </p>
                            <p className="text-left text-sm text-[#000000] pr-2">
                                great quality, nutritious meals with these nuts
                                and dry fruits.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutNuts;
