"use client";
import Btn from "@/components/shared/button";
import React, { useEffect, useState } from "react";

const ContactForm = () => {
    const [info, setInfo] = useState({
        first_name: "",
        email: "",
        phone_number: "",
        message: "",
    });
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                "https://backend.getlinked.ai/hackathon/contact-form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(info),
                }
            );
            const data = await res.json();
            setInfo({
                first_name: "",
                email: "",
                phone_number: "",
                message: "",
            });
            console.log(res.ok);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 lg:gap-10 mt-[34px] text-white"
        >
            <div className="block bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                <input
                    type="text"
                    name="first_name"
                    id="firstname"
                    required={true}
                    placeholder="First Name"
                    value={info.first_name}
                    onChange={handleChange}
                    className="w-full px-[24px] lg:px-[29px] pt-[13px] pb-[14px] focus:outline-none border-0 bg-transparent placeholder:text-white"
                />
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                <input
                    type="email"
                    name="email"
                    id="email"
                    required={true}
                    placeholder="Email"
                    value={info.email}
                    onChange={handleChange}
                    className="w-full px-[24px] lg:px-[29px] pt-[13px] pb-[14px] focus:outline-none border-0 bg-transparent placeholder:text-white"
                />
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                <input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    required={true}
                    placeholder="Phone"
                    value={info.phone_number}
                    onChange={handleChange}
                    className="w-full px-[24px] lg:px-[29px] pt-[13px] pb-[14px] focus:outline-none border-0 bg-transparent placeholder:text-white"
                />
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                <textarea
                    name="message"
                    id="message"
                    required={true}
                    cols="30"
                    rows="5"
                    value={info.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full px-[24px] lg:px-[29px] pt-[27px] pb-[14px] border-0 bg-transparent focus:outline-none placeholder:text-white resize-none"
                ></textarea>
            </div>
            <Btn
                type="submit"
                className="py-[14px] px-14 rounded self-center mt-[7px] active:scale-95"
            >
                Submit
            </Btn>
        </form>
    );
};

export default ContactForm;
