import Image from "next/image";
import React from "react";

const Introduction = () => {
    return (
        <div className="flex flex-col min-h-screen py-[29px] px-[34px] lg:pt-[62px] lg:px-[184px] bg-darkViolet">
            <div
                className="flex flex-col gap-[58px] lg:items-center lg:gap-[109px] lg:flex-row lg:[&>div]:w-1/2 bg-[url('/pstar.svg'),_url('/istar.svg')] [background-repeat:no-repeat,_no-repeat] bg-[position:0%_15%,_100%_60%]  lg:bg-[position:95%_30%,_0%_35%] bg-[size:_10px,_10px] lg:bg-[size:_20px,_20px]"
                id="overview"
            >
                <div className="relative w-full h-[327px] lg:h-[477px]">
                    <Image
                        src="/big-idea.png"
                        alt="big-idea-image"
                        fill={true}
                        className="lg:hover:scale-105 lg:[transition:transform_.5s_ease-in]"
                    />
                    <Image
                        src="/twirl.svg"
                        alt="twirl"
                        width={49}
                        height={58}
                        className="absolute top-full left-1/2 -translate-x-1/2 lg:top-full lg:left-full"
                    />
                </div>
                <div className="flex flex-col gap-4 text-white">
                    <div className="flex flex-col items-center text-[20px] lg:items-start lg:text-[32px] font-bold">
                        <h1>Introduction to getlinked</h1>
                        <h1 className="text-brightMagenta">
                            tech Hackathon 1.0
                        </h1>
                    </div>
                    <p className="text-[13px] text-center leading-[28px] lg:text-left lg:text-[14px]">
                        Our tech hackathon is a melting pot of visionaries, and
                        its purpose is as clear as day: to shape the future.
                        Whether you&apos;re a coding genius, a design maverick,
                        or a concept wizard, you&apos;ll have the chance to
                        transform your ideas into reality. Solving real-world
                        problems, pushing the boundaries of technology, and
                        creating solutions that can change the world, tha&apos;s
                        what we&apos;re all about!
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse gap-[10px] lg:items-center lg:gap-[109px] lg:flex-row lg:[&>div]:w-1/2 bg-[url('/star.svg'),_url('/wstar.svg')] [background-repeat:no-repeat,_no-repeat] bg-[position:90%_57%,_10%_100%] lg:bg-[position:25%_25%,_50%_70%] bg-[size:_12px,_10px] lg:bg-[size:_20px,_20px]">
                <div className="relative flex flex-col gap-4 text-white after:absolute after:w-[200px] after:h-[200px] lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[50px] lg:after:blur-[100px] after:-top-1/2 after:left-full lg:after:left-1/2 after:-translate-x-1/2 after:-z-10 z-20 ">
                    <div className="flex flex-col items-center text-[20px] lg:items-start lg:text-[32px] font-bold">
                        <h1>Rules and </h1>
                        <h1 className="text-brightMagenta">Guidelines</h1>
                    </div>
                    <p className="text-[13px] text-center leading-[28px] lg:text-left lg:text-[14px]">
                        Our tech hackathon is a melting pot of visionaries, and
                        its purpose is as clear as day: to shape the future.
                        Whether you&apos;re a coding genius, a design maverick,
                        or a concept wizard, you&apos;ll have the chance to
                        transform your ideas into reality. Solving real-world
                        problems, pushing the boundaries of technology, and
                        creating solutions that can change the world,
                        that&apos;s what we&apos;re all about!
                    </p>
                </div>
                <div className="relative w-full h-[382px] lg:h-[500px] after:absolute after:w-[200px] after:h-[200px] lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[50px] lg:after:blur-[100px] after:top-0 after:-translate-x-1/2 lg:after:top-full lg:after:-translate-y-1/2 lg:after:left-full lg:after:-translate-x-0 after:-z-10 z-20 lg:hover:after:left-1/2 lg:hover:after:top-1/2 lg:after:[transition:all_1s_ease-out]">
                    <Image
                        src="/reading-girl.png"
                        alt="redaing-girl-image"
                        fill={true}
                        className="lg:hover:scale-105 lg:[transition:transform_.8s_ease-in]"
                    />
                    <Image
                        src="/ellipse.svg"
                        alt="ellipse"
                        width={134}
                        height={134}
                        className="hidden lg:block absolute -z-[1] top-16 right-24"
                    />
                </div>
            </div>
        </div>
    );
};

export default Introduction;
