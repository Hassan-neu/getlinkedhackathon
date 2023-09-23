import Link from "next/link";
import React from "react";
import { GrInstagram, GrFacebookOption } from "react-icons/gr";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
    return (
        <div className="flex flex-col gap-[53px] bg-darkViolet items-center pt-[70px] pb-[54px] bg-[url('/istar.svg'),_url('/wstar.svg'),_url('/wstar.svg'),_url('/star.svg')] [background-repeat:no-repeat,_no-repeat,_no-repeat,_no-repeat] bg-[position:30%_88%,_10%_30%,_90%_75%,_50%_50%] lg:bg-[position:50%_70%,_10%_30%,_90%_50%,_70%_30%] bg-[size:_10px,_10px,_10px,_12px] lg:bg-[size:_15px,_15px,_15px,_15px]">
            <div className="flex flex-col gap-8 lg:flex-row w-[70%] justify-between">
                <div className="flex flex-col gap-[39px] text-white justify-between lg:w-[38%] shrink-0">
                    <div className="flex flex-col gap-3 lg:gap-1">
                        <div className="text-xl lg:text-4xl font-bold">
                            <Link href={"/"} className="flex ">
                                <h1>get</h1>
                                <h1 className="text-brightMagenta">linked</h1>
                            </Link>
                        </div>
                        <p className="text-xs leading-[172.4%]">
                            Getlinked Tech Hackathon is a technology innovation
                            program established by a group of organizations with
                            the aim of showcasing young and talented individuals
                            in the field of technology
                        </p>
                    </div>
                    <div className="flex items-center text-xs">
                        <p className="border-r-2 border-brightMagenta pr-2">
                            Terms of Use
                        </p>
                        <p className="pl-2">Privacy Policy</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[6px] shrink-0">
                    <h1 className="text-brightMagenta text-sm font-semibold">
                        Useful Links
                    </h1>
                    <ul className="flex flex-col gap-3 text-white text-xs">
                        <li>
                            <Link href={"#"}>Overview</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Timeline</Link>
                        </li>
                        <li>
                            <Link href={"#"}>FAQs</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Register</Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 mt-[6px]">
                        <h1 className="text-brightMagenta text-xs">
                            Follow us
                        </h1>
                        <div className="flex gap-4 text-white">
                            <GrInstagram size={18} />
                            <FaXTwitter size={18} />
                            <GrFacebookOption size={18} />
                            <FaLinkedinIn size={18} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[19px] shrink-0">
                    <h1 className="text-brightMagenta text-sm font-semibold">
                        Contact
                    </h1>
                    <div className="flex flex-col gap-[22px] text-white text-xs">
                        <div className="flex gap-4 items-center">
                            <BiSolidPhoneCall size={25} />
                            <p>+234 679 81819</p>
                        </div>
                        <div className="flex gap-4">
                            <MdLocationOn size={25} className="shrink-0" />
                            <p className="leading-[157.9%] w-[86px]">
                                27,Alara Street Yaba 100012 Lagos State
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white text-xs">
                All rights reserved. &copy; getlinked Ltd.
            </div>
        </div>
    );
};

export default Footer;
