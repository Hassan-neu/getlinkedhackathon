import Image from "next/image";
import React from "react";

const Rewards = () => {
    return (
        <div className="flex flex-col px-[34px] py-[74px] gap-[10px] lg:gap-[83px] lg:px-[106px] bg-darkViolet bg-[url('/star.svg'),_url('/istar.svg'),_url('/wstar.svg'),_url('/istar.svg'),_url('/wstar.svg'),_url('/wstar.svg')] [background-repeat:no-repeat,_no-repeat,_no-repeat,_no-repeat,_no-repeat,_no-repeat] bg-[position:75%_95%,_15%_5%,_15%_55%,_80%_10%,_50%_35%,_85%_65%] lg:bg-[position:75%_95%,_20%_10%,_90%_50%,_80%_25%,_50%_35%,_30%_95%] bg-[size:_10px,_10px,_10px,_10px,_10px,_10px] lg:bg-[size:_20px,_20px,_20px,_20px,_20px,_20px]">
            <div className="flex flex-col gap-4 items-center lg:items-start lg:self-end text-white">
                <div className="flex flex-col font-bold  text-[20px] text-center lg:text-[32px] lg:text-left">
                    <h1>Prizes and </h1>
                    <h1 className="text-brightMagenta">Rewards</h1>
                </div>
                <div className="text-sm leading-[170%] text-center">
                    <p>
                        Highlight of the prizes or rewards for winners and for
                        participants.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-[51px] h-[80vh] lg:gap-[37px] lg:flex-row lg:h-[50vh]">
                <div className="w-full h-1/2 lg:w-[35%] lg:h-full relative after:absolute after:h-[200px] after:w-[200px] lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[50px] lg:after:blur-[100px] after:-top-1/2  after:left-10 lg:after:left-1/2 after:-translate-x-1/2 after:-z-10 z-20 lg:hover:after:top-0 lg:after:[transition:top_1s_ease-out]">
                    <Image
                        src="/trophy.png"
                        alt="trophy-image"
                        fill={true}
                        className="lg:hover:scale-110 lg:[transition:transform_.8s_ease-in]"
                    />
                </div>
                <div className="w-full h-1/2 lg:w-3/5 lg:h-full relative after:absolute after:h-[200px] after:w-[200px] lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet  after:blur-[50px]  lg:after:blur-[100px] after:top-1/2 after:-translate-y-1/2 after:left-full after:-translate-x-1/2 after:-z-10 z-20 lg:hover:after:left-1/2 lg:after:[transition:left_1s_ease-out]">
                    <Image
                        src="/rewards.svg"
                        alt="rewards-image"
                        fill={true}
                        className="lg:hover:scale-105 lg:[transition:transform_.8s_ease-in]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Rewards;
