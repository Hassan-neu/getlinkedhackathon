import React from "react";

const Btn = ({ children, className, ...props }) => {
    return (
        <button
            className={`text-white bg-gradient-to-r from-[#FE34B9] to-lightViolet lg:text-base lg:bg-[size:200%_200%] lg:bg-[position:50%_50%] lg:hover:bg-[position:100%_0] [transition:background_.2s_linear] ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Btn;
