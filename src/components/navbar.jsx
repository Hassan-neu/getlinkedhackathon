"use client";
import React, { useState } from "react";
import Btn from "./shared/button";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import Burger from "./shared/burger";
import { useRouter, usePathname } from "next/navigation";
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const router = useRouter();
    const slideNav = openNav
        ? "left-0 z-50 transition-[left_.5s_linear]"
        : "left-[-100vw]";
    const path = usePathname();
    const isContact = path === "/contact";
    return (
        <div
            className={`${
                isContact ? "hidden lg:flex" : ""
            } flex items-center justify-between px-12 pt-[30px] pb-[21px] lg:px-32 lg:pb-[25px] lg:pt-[63px] bg-darkViolet relative`}
        >
            <div className="text-xl lg:text-4xl font-bold">
                <Link href={"/"} className="flex ">
                    <h1 className="text-white">get</h1>
                    <h1 className="text-brightMagenta">linked</h1>
                </Link>
            </div>
            <div
                className={`flex absolute top-0 ${slideNav} pl-[47px] pr-[51px] py-[39px] flex-col bg-darkViolet w-full gap-[29px] lg:w-fit lg:py-0 lg:px-0 lg:static lg:flex-row lg:justify-between lg:items-center`}
            >
                <Btn
                    className="lg:hidden w-[23px] h-[23px] flex items-center justify-center self-end text-white px- bg-gradient-to-t from-[#FE34B9] to-lightViolet rounded-full"
                    onClick={() => setOpenNav(false)}
                >
                    <div className="bg-darkViolet w-[20px] h-[20px] rounded-full flex items-center justify-center">
                        <RxCross2 />
                    </div>
                </Btn>
                <ul className="flex flex-col gap-5 lg:flex-row lg:gap-14 text-white text-lg font-medium lg:text-base lg:font-normal">
                    <li className="hover:grad-text">
                        <Link href={"/#timeline"}>Timeline</Link>
                    </li>
                    <li>
                        <Link href={"/#overview"}>Overview</Link>
                    </li>
                    <li>
                        <Link href={"/#faq"}>FAQs</Link>
                    </li>
                    <li className={`${isContact ? "grad-text" : ""}`}>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
                <Btn
                    className="self-start flex items-center px-[52px] py-[16px] rounded"
                    onClick={() => router.push("/register")}
                >
                    Register
                </Btn>
            </div>
            <div className="lg:hidden" onClick={() => setOpenNav(true)}>
                <Burger />
            </div>
        </div>
    );
};

export default Navbar;
