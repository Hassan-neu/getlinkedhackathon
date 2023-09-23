import Image from "next/image";
import React from "react";

const Partners = () => {
    return (
        <div className="flex flex-col px-[30px] py-[74px] gap-[41px] lg:gap-[65px] lg:px-[106px] bg-darkViolet bg-[url('/pstar.svg'),_url('/istar.svg'),_url('/wstar.svg')]  [background-repeat:no-repeat,_no-repeat,_no-repeat] bg-[position:15%_55%,_53%_67%,_80%_82%] lg:bg-[position:10%_22%,_57%_40%,_57%_80%]  bg-[size:_10px,_10px,_10px] lg:bg-[size:_20px,_20px,_20px]">
            <div className="flex flex-col gap-[22px] items-center text-xl text-center lg:text-[32px] text-white">
                <div className="font-bold">
                    <h1>Partners and Sponsors </h1>
                </div>
                <div className="text-sm leading-[28px]">
                    <p>
                        Getlinked Hackathon 1.0 is honored to have the following
                        major companies as its partners and sponsors
                    </p>
                </div>
            </div>
            <div
                className="relative border rounded-[5px] border-brightMagenta py-[38px] px-[46px] lg:py-36 lg:px-44 bg-[rgba(255, 255, 255, 0.01)] after:absolute after:w-[200px] after:h-[200px]  lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[50px] lg:after:blur-[100px] after:top-full after:-translate-y-1/2 after:left-full after:-translate-x-1/2 after:-z-10 before:absolute before:w-[200px] before:h-[200px] lg:before:h-[400px] lg:before:w-[400px] before:rounded-full before:bg-gradient-radial before:from-lightViolet before:blur-[50px] lg:before:blur-[100px] before:-top-1/2 before:-translate-y-1/2 lg:before:-top-1/2 lg:before:translate-y-1/2 before:left-0 before:-translate-x-1/2 before:-z-10 z-20 lg:hover:after:top-0 lg:hover:before:top-1/2 lg:before:[transition:top_2s_ease-out] lg:after:[transition:top_2s_ease-out]
            "
            >
                <div className="w-full h-[72px] lg:h-[272px] grid grid-cols-3 grid-rows-2">
                    <div className="relative flex items-center justify-center after:w-[2px] lg:after:w-1 after:absolute after:top-0 after:left-full after:h-[calc(100%_-_0.5em)] lg:after:h-[calc(100%_-_1em)] after:bg-brightMagenta">
                        <div className="relative m-[0.8em] w-[32px] h-[30px] lg:w-[120px] lg:h-[113px]">
                            <Image
                                src="/liberty-assured.svg"
                                alt="liberty-assured-logo"
                                fill={true}
                                className="mx-auto lg:hover:scale-105 lg:[transition:transform_.5s_ease-in]"
                            />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center after:w-[2px] lg:after:w-1 after:absolute after:top-0 after:left-full after:h-[calc(100%_-_0.5em)] lg:after:h-[calc(100%_-_1em)] after:bg-brightMagenta">
                        <div className="relative m-[0.8em] w-[56px] h-[11px] lg:w-[213px] lg:h-[40px]">
                            <Image
                                src="/libertypay.svg"
                                alt="libertypay-logo"
                                fill={true}
                                className="mx-auto lg:hover:scale-105 lg:[transition:transform_.5s_ease-in]"
                            />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="relative m-[0.8em] w-[35px] h-[28px] lg:w-[133px] lg:h-[107px]">
                            <Image
                                src="/winwise.svg"
                                alt="winwise-logo"
                                fill={true}
                                className="mx-auto lg:hover:scale-105 lg:[transition:transform_.5s_ease-in]"
                            />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center before:w-[calc(100%_-_.5em)] lg:before:w-[calc(100%_-_1em)] before:absolute before:top-0  before:left-0 before:h-[2px] lg:before:h-1 before:bg-brightMagenta after:w-[2px] lg:after:w-1 after:absolute after:left-full after:bottom-0 after:h-[calc(100%_-_0.5em)] lg:after:h-[calc(100%_-_1em)] after:bg-brightMagenta">
                        <div className="relative m-[0.8em] w-[35px] h-[28px] lg:w-[147px] lg:h-[109px]">
                            <Image
                                src="/whispersms.svg"
                                alt="whispersms-logo"
                                fill={true}
                                className="mx-auto lg:hover:scale-105 lg:[transition:transform_.5s_ease-in]"
                            />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center before:w-[calc(100%_-_1em)] lg:before:w-[calc(100%_-_2em)] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-[2px] lg:before:h-1 before:bg-brightMagenta after:w-[2px] lg:after:w-1 after:absolute after:left-full after:bottom-0 after:h-[calc(100%_-_0.5em)] lg:after:h-[calc(100%_-_1em)] after:bg-brightMagenta">
                        <div className="relative m-[0.8em] w-[54px] h-[20px] lg:w-[204px] lg:h-[52px]">
                            <Image
                                src="/paybox.svg"
                                alt="paybox-logo"
                                fill={true}
                                className="mx-auto lg:hover:scale-105 lg:[transition:transform_.5s_ease-in]"
                            />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center before:w-[calc(100%_-_.5em)] lg:before:w-[calc(100%_-_1em)] before:absolute before:top-0 before:right-0 before:h-[2px] lg:before:h-1 before:bg-brightMagenta">
                        <div className="relative m-[0.8em] w-[69px] h-[21px] lg:w-[231px] lg:h-[45px]">
                            <Image
                                src="/vuzualplus.svg"
                                alt="vuzualplus-logo"
                                fill={true}
                                className="m-auto lg:hover:scale-105 lg:[transition:transform_.5s_ease-in]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
