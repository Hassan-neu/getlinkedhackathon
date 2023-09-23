import RegForm from "@/components/pages/register/form";
import Image from "next/image";
import React from "react";
import Success from "@/components/success";

const Page = async () => {
    const res = await fetch(
        "https://backend.getlinked.ai/hackathon/categories-list",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await res.json();

    return (
        <main
            className="flex flex-col px-[46px] py-6 lg:flex-row lg:py-[57px] lg:px-[104px] bg-darkViolet 
            bg-[url('/pstar.svg'),_url('/pstar.svg'),_url('/star.svg')] lg:bg-[url('/star.svg'),_url('/pstar.svg'),_url('/pstar.svg'),_url('/star.svg'),_url('/wstar.svg')] [background-repeat:no-repeat,_no-repeat,_no-repeat] lg:[background-repeat:no-repeat,_no-repeat,_no-repeat,_no-repeat,_no-repeat] bg-[position:80%_15%,_95%_75%,_5%_35%] bg-[size:_15px,_15px,_15px] lg:bg-[position:15%_84%,_15%_8%,_40%_70%,_80%_10%,_80%_95%] lg:bg-[size:_20px,_20px,_20px,_20px,_10px]"
        >
            <h1 className="lg:hidden text-[15px] font-bold text-brightMagenta">
                Register
            </h1>
            <div className="w-[195px] self-center  h-[155px] lg:w-full lg:self-stretch lg:h-auto relative after:absolute lg:after:h-[450px] lg:after:w-[450px] after:w-[250px] after:h-[250px] after:rounded-full after:bg-gradient-radial after:from-lightViolet lg:after:blur-[100px] after:blur-[60px] after:top-4 after:left-0 after:-translate-x-5 lg:after:top-0 lg:after:left-0 lg:after:-translate-x-1/2 after:-z-10 z-20">
                <Image
                    src={"/register-image.png"}
                    alt={"register-page-image"}
                    fill={true}
                ></Image>
            </div>
            <div className="flex justify-center items-center lg:w-[55%] lg:max-w-[740px] lg:h-[740px]  relative lg:shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:bg-brightMagenta lg:bg-opacity-5 lg:rounded-xl lg:px-[91px] lg:py-[65px] after:absolute lg:after:h-[500px] lg:after:w-[500px] after:rounded-full after:bg-gradient-radial after:from-lightViolet lg:after:blur-[100px] lg:after:top-full lg:after:-translate-y-1/2 lg:after:left-full lg:after:-translate-x-1/2 after:-z-10 z-20">
                <div className="flex flex-col lg:w-[558px]">
                    <h1 className="hidden lg:block lg:text-[32px] font-semibold text-brightMagenta">
                        Register
                    </h1>
                    <div className="flex flex-col gap-[7px] lg:gap-[21px] mt-[29px] text-white">
                        <div className="flex gap-[7px] items-baseline">
                            <p className="text-xs lg:text-sm">
                                Be part of this movement!
                            </p>
                            <span className="border-b border-dashed border-brightMagenta w-[89px] lg:w-[101px] flex justify-center">
                                <Image
                                    src={"/walking-girl.svg"}
                                    width={26}
                                    height={26}
                                    alt={"join-the-movement-girl"}
                                />
                                <Image
                                    src={"/walking-boy.svg"}
                                    width={26}
                                    height={26}
                                    alt={"join-the-movement-boy"}
                                />
                            </span>
                        </div>
                        <h1 className="text-xl lg:text-2xl">
                            CREATE YOUR ACCOUNT
                        </h1>
                    </div>
                    <RegForm list={data} />
                </div>
            </div>
        </main>
    );
};

export default Page;
