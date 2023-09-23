"use client";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
const Accordion = ({ children, title }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="pb-3 flex flex-col gap-2 border-b border-brightMagenta text-xs lg:text-sm">
            <div
                className="flex items-center justify-between cursor-pointer gap-1"
                onClick={() => setOpen(!open)}
            >
                <p>{title}</p>{" "}
                <BiPlus size={15} className="text-brightMagenta" />
            </div>
            <div>{open && children}</div>
        </div>
    );
};

export default Accordion;
