import Image from "next/image";
import React from "react";

const Faq = () => {
    return (
        <div
            className="flex flex-col min-h-screen px-[34px] py-[74px] gap-[86px] lg:gap-[109px] lg:items-center lg:flex-row lg:[&>div]:w-1/2 lg:px-[184px] bg-darkViolet bg-[url('/wstar.svg'),_url('/pstar.svg'),_url('/star.svg'),_url('/istar.svg'),_url('/istar.svg')] [background-repeat:no-repeat,_no-repeat,_no-repeat,_no-repeat,_no-repeat] bg-[position:80%_95%,_10%_5%,_15%_80%,_25%_75%,_48%_65%] lg:bg-[position:80%_80%,_10%_10%,_55%_50%,_70%_15%,_60%_30%] bg-[size:_15px,_20px,_10px,_10px,_10px] lg:bg-[size:_20px,_20px,_20px,_20px,_20px]"
            id="faq"
        >
            <div className="flex flex-col gap-[68px]">
                <div className="flex flex-col gap-4 text-white">
                    <div className="flex items-center flex-col text-[20px] lg:items-start lg:text-[32px] font-bold">
                        <h1>Frequently Asked</h1>
                        <h1 className="text-brightMagenta">Question</h1>
                    </div>
                    <div className="text-sm text-center lg:text-left leading-[28px]">
                        <p>
                            We got answers to the questions that you might want
                            to ask about &nbsp;
                            <span className="font-bold">
                                getlinked Hackathon 1.0
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-[25px] text-white">
                    <div className="py-2 border-b border-brightMagenta text-xs lg:text-sm">
                        Can I work on a project I started before the hackathon?
                    </div>
                    <div className="py-2 border-b border-brightMagenta text-xs lg:text-sm">
                        What happens if I need help during the hackathon?
                    </div>
                    <div className="py-2 border-b border-brightMagenta text-xs lg:text-sm">
                        What happens if I don&apos;t have an idea for a project?
                    </div>
                    <div className="py-2 border-b border-brightMagenta text-xs lg:text-sm">
                        Can I join a team or do I have to come with one?
                    </div>
                    <div className="py-2 border-b border-brightMagenta text-xs lg:text-sm">
                        What happens after the hackathon ends
                    </div>
                    <div className="py-2 border-b border-brightMagenta text-xs lg:text-sm">
                        Can I work on a project I started before the hackathon?
                    </div>
                </div>
            </div>
            <div className="w-full h-[327px] lg:h-screen relative">
                <div className="flex w-[47%] lg:w-[65%] h-[60px] translate-x-10 -translate-y-5 -top-6 lg:h-36 items-end lg:gap-10 justify-between">
                    <div className="w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] relative ">
                        <Image
                            src="question.svg"
                            alt="question-mark"
                            fill={true}
                        />
                    </div>
                    <div className="w-[50px] h-[50px] lg:w-[120px] lg:h-[120px] relative self-start">
                        <Image
                            src="question.svg"
                            alt="question-mark"
                            fill={true}
                        />
                    </div>
                    <div className="w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] relative">
                        <Image
                            src="question.svg"
                            alt="question-mark"
                            fill={true}
                        />
                    </div>
                </div>
                <Image
                    src="/faq-image.svg"
                    alt={"thinkng-man"}
                    fill={true}
                    className="lg:hover:scale-105 lg:[transition:transform_.8s_ease-in]"
                />
            </div>
        </div>
    );
};

export default Faq;
