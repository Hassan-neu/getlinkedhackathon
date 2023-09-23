import React from "react";
import Btn from "./shared/button";
import Image from "next/image";

const Success = () => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0  flex justify-center items-center bg-opacity-90 bg-darkViolet bg-[url('/wstar.svg'),_url('/pstar.svg'),_url('/star.svg')] [background-repeat:_no-repeat,_no-repeat,_no-repeat] bg-[position:80%_90%,_80%_10%,_20%_45%] bg-[size:_10px,_10px,_10px] lg:bg-[size:_20px,_20px,_20px] lg:bg-[position:70%_90%,_70%_5%,_35%_40%]">
            <div className="flex flex-col items-center w-[317px] h-[467px] px-8 pb-7 pt-[18px] lg:px-14 lg:pb-[72px] lg:pt-[34px] lg:w-[699px] lg:h-[664px] border rounded-[5px]  bg-brightMagenta bg-opacity-[0.01] border-brightMagenta">
                <div className="w-full h-1/2 relative">
                    <Image
                        src={"/congratulation.svg"}
                        alt={"registration-success"}
                        fill={true}
                    />
                </div>
                <div className="flex items-center flex-col text-white">
                    <div className="flex flex-col text-center items-center  lg:gap-4 lg:text-[32px] font-semibold">
                        <h1>Congratulations </h1>
                        <h1>you have successfully Registered!</h1>
                    </div>
                    <div className="flex flex-col items-center text-xs lg:text-sm font-semibold mt-[29px] lg:mt-4">
                        <p className="">Yes, it was easy and you did it!</p>
                        <div className="flex items-end lg:gap-1">
                            <p>check your mail box for next step</p>
                            <Image
                                src={"/wink.svg"}
                                width={20}
                                height={20}
                                alt="wink"
                                className="w-[14] h-[14px]"
                            />
                        </div>
                    </div>
                </div>
                <Btn className="py-[17px] self-stretch rounded mt-[23px] lg:mt-10">
                    Back
                </Btn>
            </div>
        </div>
    );
};

export default Success;
