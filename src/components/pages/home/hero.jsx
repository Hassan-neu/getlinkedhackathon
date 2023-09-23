import Btn from "@/components/shared/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col pt-8 gap-[26px] lg:gap-[36px] text-white bg-darkViolet bg-[url('/wstar.svg'),_url('/star.svg'),_url('/star.svg')] [background-repeat:no-repeat,_no-repeat,_no-repeat] bg-[position:30%_10%,_90%_38%,_80%_9%] lg:bg-[position:13%_10%,_40%_80%,_55%_20%] bg-[size:_10px,_10px,_10px] lg:bg-[size:_20px,_20px,_20px]">
            <div className="font-bold italic self-center lg:self-end lg:mr-[55px] lg:text-4xl">
                Igniting a Revolution in HR Innovation
                <div className="relative w-[115px] lg:w-[253px] h-[11px] ml-auto">
                    <Image
                        src={"/swish.svg"}
                        alt={"swish-underline"}
                        fill={true}
                        // width={253}
                        // height={11}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[11px] h-full lg:[&>div]:w-1/2 lg:gap-0 lg:flex-row">
                <div className=" relative flex flex-col items-center lg:items-start lg:ml-32 after:absolute after:h-[200px] after:w-[200px] lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[50px] lg:after:blur-[100px] after:-top-5 lg:after:-top-1/2 lg:after:left-1/2 after:-translate-x-1/2 after:-z-10 z-20 lg:after:hover:top-0 lg:after:hover:blur-[80px] lg:after:[transition:all_2s_linear]">
                    <div className="flex flex-col items-center text-[32px] font-bold relative lg:items-start lg:text-[80px]">
                        <h1>getlinked Tech</h1>
                        <div className="flex items-center">
                            <h1>Hackathon</h1>
                            <span className="text-brightMagenta">1.0</span>
                            <div className="w-[32px] h-[32px] lg:h-[86px] lg:w-[86px] relative">
                                <Image
                                    src="/chain.svg"
                                    alt={"connecting-chain"}
                                    fill={true}
                                />
                            </div>
                            <div className="w-[22px] h-[22px] lg:h-[58px] lg:w-[58px] relative">
                                <Image
                                    src="/spark.svg"
                                    alt={"fire-spark"}
                                    fill={true}
                                />
                            </div>
                        </div>
                        <div className="w-[18px] h-6 absolute -top-2 right-8 lg:w-[53px] lg:h-[73px]  lg:-top-10 lg:right-32">
                            <Image
                                src="/creative.svg"
                                alt="creative-bulb"
                                fill={true}
                            />
                        </div>
                    </div>
                    <p className="text-[13px] w-[264px] leading-[166%] lg:w-auto lg:text-xl">
                        Participate in getlinked tech Hackathon 2023 stand a
                        chance to win a Big prize
                    </p>
                    <Btn className="py-4 px-[52px] lg:self-start rounded mt-6 lg:mt-10 text-sm">
                        Register
                    </Btn>
                    <div className="flex gap-[19px] text-5xl lg:text-[64px] mt-[14px] lg:mt-[77px]">
                        <div>
                            00
                            <sub className="text-sm">H</sub>
                        </div>
                        <div>
                            00
                            <sub className="text-sm">M</sub>
                        </div>
                        <div>
                            00
                            <sub className="text-sm">S</sub>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[367px] lg:h-[600px] relative  after:absolute after:h-[300px] after:w-[300px] lg:after:h-[450px] lg:after:w-[450px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[50px] lg:after:blur-[80px] after:bg-opacity-60 after:top-0 after:left-1/2 after:-translate-x-1/2">
                    <Image
                        src={"/hero-man.png"}
                        alt="hero-image-hero"
                        fill={true}
                    />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[338px] h-[325px] lg:w-[600px] lg:h-[600px] lg:top-1/2 lg:-translate-y-1/2">
                        <Image
                            src="/glow.png"
                            fill={true}
                            alt={"glow"}
                            className="lg:hover:scale-105 lg:[transition:transform_.8s_ease-in]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
