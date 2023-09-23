"use client";
import Btn from "@/components/shared/button";
import Success from "@/components/success";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RegForm = ({ list }) => {
    const router = useRouter();
    const [isChecked, setisChecked] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [status, setStatus] = useState({
        error: false,
        message: "",
    });
    const [details, setDetails] = useState({
        team_name: "",
        email: "",
        phone_number: "",
        project_topic: "",
        group_size: 1,
        category: 0,
        privacy_poclicy_accepted: false,
    });
    const handleChange = (e) => {
        setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isChecked)
            return setStatus((prev) => ({
                ...prev,
                error: true,
                message: "Please accept terms and conditions",
            }));
        try {
            const res = await fetch(
                "https://backend.getlinked.ai/hackathon/registration",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        team_name: details.team_name,
                        email: details.email,
                        phone_number: details.phone_number,
                        project_topic: details.project_topic,
                        group_size: parseInt(details.group_size),
                        category: parseFloat(details.category),
                        privacy_poclicy_accepted:
                            details.privacy_poclicy_accepted,
                    }),
                }
            );
            const data = await res.json();
            res.ok && setSuccessful(true);
            setStatus((prev) => ({
                ...prev,
                error: false,
                message: "account successfully registered",
            }));
            setDetails({
                team_name: "",
                email: "",
                phone_number: "",
                project_topic: "",
                group_size: 1,
                category: 0,
                privacy_poclicy_accepted: false,
            });
            setisChecked(false);
            router.push("/");
            setTimeout(() => setSuccessful(false), 5000);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
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
                            required={true}
                            placeholder="Enter the name of your group"
                            className="w-full bg-transparent focus:outline-0 px-[29px] pt-[13px] pb-[14px] border-0  placeholder:text-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[11px] text-white">
                    <label htmlFor="phone" className="text-[13px] lg:text-sm">
                        Phone
                    </label>
                    <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                        <input
                            type="tel"
                            name="phone_number"
                            id="phone"
                            value={details.phone_number}
                            onChange={handleChange}
                            required={true}
                            placeholder="Enter your phone number"
                            className="w-full bg-transparent focus:outline-0 px-[29px] pt-[13px] pb-[14px] border-0  placeholder:text-sm"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[11px] text-white">
                    <label htmlFor="email" className="text-[13px] lg:text-sm">
                        Email
                    </label>
                    <div className="bg-[rgba(255, 255, 255, 0.01)] border border-white rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={details.email}
                            onChange={handleChange}
                            required={true}
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
                            required={true}
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
                                required={true}
                                defaultValue={"Select your category"}
                                className="w-full px-[10px] py-3 lg:px-[29px] lg:pt-[13px] lg:pb-[14px] border-0 outline-0 bg-transparent text-sm"
                            >
                                <option
                                    value="Select your category"
                                    disabled
                                    className="text-black"
                                >
                                    Select your category
                                </option>
                                {list?.map((lst) => (
                                    <option
                                        key={lst.id}
                                        value={parseInt(lst.id)}
                                        className="text-black"
                                    >
                                        {lst.name}
                                    </option>
                                ))}
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
                            <input
                                type="number"
                                name="group_size"
                                id="group_size"
                                value={details.group_size}
                                onChange={handleChange}
                                required={true}
                                min={1}
                                placeholder="Select size"
                                className="w-full bg-transparent focus:outline-0 px-[29px] pt-[13px] pb-[14px] border-0  placeholder:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[12px] lg:gap-4 mt-[23px]">
                <p className="text-brightMagenta text-[9px] italic lg:text-xs">
                    Please review your registration details before submitting
                </p>
                <div className="flex gap-[10px]">
                    <input
                        type="checkbox"
                        name="privacy_policy"
                        id="privacy_policy"
                        checked={isChecked}
                        onChange={() => {
                            setisChecked(!isChecked);
                            setDetails((prev) => ({
                                ...prev,
                                privacy_poclicy_accepted:
                                    !prev.privacy_poclicy_accepted,
                            }));
                        }}
                    />
                    <p className="text-[10px] lg:text-xs text-white">
                        I agreed with the event terms and conditions and privacy
                        policy
                    </p>
                </div>
            </div>
            {status.error && (
                <div className="p-1 px-2 w-full text-center rounded text-red-500 text-xs">
                    {status.message}
                </div>
            )}
            <Btn className="py-[17px] px-[56px] rounded self-center mt-[14px] lg:mt-[22px] lg:self-stretch">
                Register Now
            </Btn>
            {successful && <Success />}
        </form>
    );
};

export default RegForm;
