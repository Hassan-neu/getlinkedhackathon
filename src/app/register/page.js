"use client";
import Btn from "@/components/shared/button";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
    const [details, setDetails] = useState({
        team_name: "",
        email: "",
        phone_number: "",
        project_topic: "",
        group_size: 0,
        category: "",
        privacy_policy: false,
    });
    const handleChange = (e) => {
        setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

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
                    src={"/register-image.svg"}
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
                    <form
                        action=""
                        className="flex flex-col mt-[23px] lg:mt-[33px]"
                    >
                        <div className="grid grid-cols-1 grid-rows-5 gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-8 lg:gap-y-[29px]">
                            <div className="flex flex-col gap-[11px] text-white">
                                <label
                                    htmlFor="teamname"
                                    className="text-[13px] lg:text-sm"
                                >
                                    Team&apos;s Name
                                </label>
                                <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                                    <input
                                        type="text"
                                        name="team_name"
                                        id="teamname"
                                        value={details.team_name}
                                        onChange={handleChange}
                                        placeholder="Enter the name of your group"
                                        className="w-full bg-transparent focus:outline-0 px-[29px] pt-[13px] pb-[14px] border-0  placeholder:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-[11px] text-white">
                                <label
                                    htmlFor="phone"
                                    className="text-[13px] lg:text-sm"
                                >
                                    Phone
                                </label>
                                <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        id="phone"
                                        value={details.phone_number}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full bg-transparent focus:outline-0 px-[29px] pt-[13px] pb-[14px] border-0  placeholder:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[11px] text-white">
                                <label
                                    htmlFor="email"
                                    className="text-[13px] lg:text-sm"
                                >
                                    Email
                                </label>
                                <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={details.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className="w-full bg-transparent focus:outline-0 px-[29px] pt-[13px] pb-[14px] border-0  placeholder:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[11px] text-white">
                                <label
                                    htmlFor="project"
                                    className="text-[13px] lg:text-sm "
                                >
                                    Project Topic
                                </label>
                                <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                                    <input
                                        type="text"
                                        name="project_topic"
                                        id="project"
                                        value={details.project_topic}
                                        onChange={handleChange}
                                        placeholder="What is your group project topic?"
                                        className="w-full bg-transparent focus:outline-0 px-[29px] pt-[13px] pb-[14px] border-0  placeholder:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full grid grid-cols-[1.7fr_1fr] lg:grid-cols-2  gap-[19px] lg:gap-8 text-white">
                                <div className="flex flex-col gap-[11px]">
                                    <label
                                        htmlFor="category"
                                        className="text-[13px] lg:text-sm"
                                    >
                                        Category
                                    </label>
                                    <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                                        <select
                                            name="category"
                                            id="category"
                                            onChange={handleChange}
                                            defaultValue={
                                                "Select your category"
                                            }
                                            className="w-full px-[10px] py-3 lg:px-[29px] lg:pt-[13px] lg:pb-[14px] border-0 outline-0 bg-transparent text-sm"
                                        >
                                            <option
                                                value="Select your category"
                                                disabled
                                                className="text-black"
                                            >
                                                Select your category
                                            </option>
                                            {/* {lists.map((list) => (
                                                <option
                                                    key={list.id}
                                                    className="text-black"
                                                >
                                                    {list.name}
                                                </option>
                                            ))} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[11px]">
                                    <label
                                        htmlFor="groupsize"
                                        className="text-[13px] lg:text-sm "
                                    >
                                        Group size
                                    </label>
                                    <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                                        <select
                                            name="group_size"
                                            id="groupsize"
                                            onChange={handleChange}
                                            defaultValue={"Select size"}
                                            className="w-full px-[10px] py-3 lg:px-[29px] lg:pt-[13px] lg:pb-[14px] border-0 outline-0 text-sm bg-transparent"
                                        >
                                            <option
                                                value="Select size"
                                                disabled
                                            >
                                                Select
                                            </option>
                                            <option
                                                value="1"
                                                className="text-black"
                                            >
                                                1
                                            </option>
                                            <option
                                                value="1"
                                                className="text-black"
                                            >
                                                1
                                            </option>
                                            <option
                                                value="1"
                                                className="text-black"
                                            >
                                                1
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[12px] lg:gap-4 mt-[23px]">
                            <p className="text-brightMagenta text-[9px] italic lg:text-xs">
                                Please review your registration details before
                                submitting
                            </p>
                            <div className="flex gap-[10px]">
                                <input
                                    type="checkbox"
                                    name="privacy_policy"
                                    id="privacy_policy"
                                    onChange={handleChange}
                                />
                                <p className="text-[10px] lg:text-xs text-white">
                                    I agreed with the event terms and conditions
                                    and privacy policy
                                </p>
                            </div>
                        </div>
                        <Btn className="py-[17px] px-[56px] rounded self-center mt-[14px] lg:mt-[22px] lg:self-stretch">
                            Register Now
                        </Btn>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Page;
