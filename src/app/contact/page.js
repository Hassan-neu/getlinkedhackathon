"use client";
import Btn from "@/components/shared/button";
import React, { useState } from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { IoChevronBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const [contact, setContact] = useState({
        first_name: "",
        email: "",
        phone_number: "",
        message: "",
    });
    const handleChange = (e) => {
        setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <main className="flex justify-center items-baseline gap-56 lg:px-[190px] lg:pt-[140px] lg:pb-[115px] bg-darkViolet bg-[url('/wstar.svg'),_url('/pstar.svg'),_url('/pstar.svg'),_url('/star.svg')] [background-repeat:_no-repeat,_no-repeat,_no-repeat,_no-repeat] bg-[position:94%_70%,_59%_5%,_15%_80%,_85%_10%] bg-[size:_15px,_15px,_15px,_15px] lg:bg-[position:90%_80%,_15%_8%,_47%_70%,_80%_5%] lg:bg-[size:_20px,_20px,_20px,_20px]">
            <div className="relative hidden lg:flex flex-col mt-4 after:absolute after:h-[400px] after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[100px] after:top-0 after:-translate-y-10 after:left-0 after:-translate-x-1/2 after:-z-10 z-20">
                <h1 className="text-[32px] font-semibold text-brightMagenta">
                    Get in touch
                </h1>
                <div className="flex flex-col mt-[17px] text-white">
                    <p className="w-min">Contact Information</p>
                    <p className="mt-[17px] w-[119px]">
                        27,Alara Street Yaba 100012 Lagos State
                    </p>
                    <p className="mt-[21px]">Call Us : 07067981819</p>
                    <p className="mt-[22px] w-[272px]">
                        we are open from Monday-Friday 08:00am - 05:00pm
                    </p>
                </div>
                <div className="flex flex-col gap-[14px] mt-[35px]">
                    <p className="text-brightMagenta">Share on</p>
                    <div className="flex gap-4 text-white">
                        <GrInstagram size={18} />
                        <FaXTwitter size={18} />
                        <GrFacebookOption size={18} />
                        <FaLinkedinIn size={18} />
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col justify-center items-center px-[46px] lg:w-1/2 lg:max-w-[617px] pt-[75px] pb-[67px] lg:shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:bg-brightMagenta lg:bg-opacity-5 lg:px-[90px] lg:rounded-xl after:absolute lg:after:h-[400px] lg:after:w-[400px] after:w-[250px] after:h-[250px] after:rounded-full after:bg-gradient-radial after:from-lightViolet lg:after:blur-[100px] after:blur-[60px] after:top-4 after:left-0 after:-translate-x-5 lg:after:top-full lg:after:-translate-y-1/2 lg:after:left-full lg:after:-translate-x-1/2 after:-z-10 z-20">
                <Btn
                    className="lg:hidden w-[23px] h-[23px] flex items-center justify-center self-start text-white px- bg-gradient-to-t from-[#FF26B9] to-lightViolet rounded-full absolute top-6"
                    onClick={() => router.back()}
                >
                    <div className="bg-darkViolet w-[20px] h-[20px] rounded-full flex items-center justify-center">
                        <IoChevronBackSharp size={12} />
                    </div>
                </Btn>
                <div className="flex flex-col lg:w-full">
                    <div className="flex flex-col w-[195px]  lg:w-auto lg:gap-[7px] font-semibold text-xl text-brightMagenta">
                        <h1>Questions or need assistance?</h1>
                        <h1>Let us know about it!</h1>
                    </div>
                    <h2 className="text-xs mt-6 lg:hidden text-white">
                        Email us below to any question related to our event
                    </h2>
                    <form
                        action=""
                        className="flex flex-col gap-6 lg:gap-10 mt-[34px] text-white"
                    >
                        <div className="block bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                            <input
                                type="text"
                                name="first_name"
                                id="firstname"
                                placeholder="First Name"
                                value={contact.first_name}
                                onChange={handleChange}
                                className="w-full px-[24px] lg:px-[29px] pt-[13px] pb-[14px] focus:outline-none border-0 bg-transparent placeholder:text-white"
                            />
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={contact.email}
                                onChange={handleChange}
                                className="w-full px-[24px] lg:px-[29px] pt-[13px] pb-[14px] focus:outline-none border-0 bg-transparent placeholder:text-white"
                            />
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                            <input
                                type="tel"
                                name="phone_number"
                                id="phone_number"
                                placeholder="Phone"
                                value={contact.phone_number}
                                onChange={handleChange}
                                className="w-full px-[24px] lg:px-[29px] pt-[13px] pb-[14px] focus:outline-none border-0 bg-transparent placeholder:text-white"
                            />
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="5"
                                value={contact.message}
                                onChange={handleChange}
                                placeholder="Message"
                                className="w-full px-[24px] lg:px-[29px] pt-[27px] pb-[14px] border-0 bg-transparent focus:outline-none placeholder:text-white resize-none"
                            ></textarea>
                        </div>
                        <Btn
                            type="submit"
                            className="py-[14px] px-14 rounded self-center mt-[7px]"
                        >
                            Submit
                        </Btn>
                    </form>
                </div>

                <div className="lg:hidden flex flex-col self-center items-center gap-[14px] mt-[35px]">
                    <p className="text-brightMagenta">Share on</p>
                    <div className="flex gap-4 text-white">
                        <GrInstagram size={18} />
                        <FaXTwitter size={18} />
                        <GrFacebookOption size={18} />
                        <FaLinkedinIn size={18} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
