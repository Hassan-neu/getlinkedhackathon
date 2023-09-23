import Btn from "@/components/shared/button";
import Image from "next/image";
import React from "react";

const Policy = () => {
    return (
        <div className="flex min-h-screen lg:[&>div]:w-1/2 flex-col px-[34px] py-[71px] pb-[83px] lg:py-[169px] lg:pb-[161px] lg:flex-row lg:px-[147px] bg-darkViolet gap-[48px] lg:gap-[50px] bg-[url('/star.svg'),_url('/star.svg'),_url('/wstar.svg'),_url('/wstar.svg'),_url('/pstar.svg'),_url('/pstar.svg'),_url('/istar.svg')] [background-repeat:no-repeat,_no-repeat,_no-repeat,_no-repeat,_no-repeat,_no-repeat,_no-repeat] bg-[position:85%_95%,_75%_2%,_30%_95%,_66%_78%,_83%_18%,_2%_60%,_13%_76%] lg:bg-[position:95%_70%,_30%_15%,_60%_70%,_80%_25%,_50%_25%,_5%_70%,_60%_60%] bg-[size:_8px,_8px,_10px,_10px,_20px,_18px,_15px] lg:bg-[size:_20px,_20px,_15px,_15px,_20px,_20px,_12px]">
            <div className="flex flex-col gap-[69px]">
                <div className="flex flex-col items-center text-center lg:text-left lg:items-start text-white">
                    <div className="flex text-[20px] lg:text-[32px] flex-col font-bold">
                        <h1>Privacy Policy and</h1>
                        <h1 className="text-brightMagenta">Terms</h1>
                    </div>
                    <p className="text-sm">
                        Last updated on September 12, 2023
                    </p>
                    <div className="text-sm leading-[188%] mt-7 lg:mt-[30px]">
                        <p>
                            Below are our privacy & policy, which outline a lot
                            of goodies. it&apos;s our aim to always take of our
                            participant.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col gap-[21px] py-[45px] px-[14px] lg:py-[59px] lg:gap-6 lg:px-[72px] border border-brightMagenta h-full rounded-[5px] text-white after:absolute after:w-[200px] after:h-[200px] lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[100px] after:top-full after:-translate-y-1/2 after:left-0 after:-translate-x-1/2 after:-z-10 z-20 lg:hover:after:top-1/2 lg:after:[transition:top_1s_ease-out]">
                    <p className="text-sm text-center leading-[216%] lg:text-left">
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal
                        information. This Privacy Policy outlines how we
                        collect, use, disclose, and safeguard your data when you
                        participate in our tech hackathon event. By
                        participating in our event, you consent to the practices
                        described in this policy.
                    </p>
                    <div className="flex flex-col gap-4 ">
                        <div className="flex flex-col">
                            <h1 className="text-brightMagenta font-bold">
                                Licensing Policy
                            </h1>
                            <p className="text-sm font-bold">
                                Here are terms of our Standard License:
                            </p>
                        </div>
                        <ul className="flex flex-col gap-4 text-sm leading-[216%]">
                            <li className="flex gap-[14px] before:content-[url('/mark.svg')] before:w-[17px] before:h-[17px]">
                                The Standard License grants you a non-exclusive
                                right to navigate and register for our event
                            </li>
                            <li className="flex gap-[14px] before:content-[url('/mark.svg')] before:w-[17px] before:h-[17px] ">
                                You are licensed to use the item available at
                                any free source sites, for your project
                                developement
                            </li>
                        </ul>
                        <Btn className="pt-2 pb-[11px] pl-[14px] pr-4 text-xs rounded self-center">
                            Read More
                        </Btn>
                    </div>
                </div>
            </div>
            <div className="relative lg:h-screen lg:hover:scale-105 lg:[transition:transform_1s_ease-in]">
                <div className="relative flex justify-center w-full h-[354px] lg:w-[559px] lg:h-[749px] z-30 top-24">
                    <Image
                        src="/policy-man.svg"
                        alt="policy-image"
                        fill={true}
                        className="lg:hover:scale-105 lg:[transition:transform_.8s_ease-in]"
                    />
                </div>
                <div className="lg:w-[530px] w-[249px] h-[311px] lg:h-[648px] absolute top-0 left-1/2 -translate-x-1/2">
                    <Image
                        src="/guard.svg"
                        alt="privacy-symbol"
                        fill={true}
                        className="lg:hover:scale-105 lg:[transition:transform_.8s_ease-in]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Policy;
