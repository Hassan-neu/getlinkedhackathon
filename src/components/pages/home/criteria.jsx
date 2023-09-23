import Btn from "@/components/shared/button";
import Image from "next/image";
import React from "react";

const Criteria = () => {
    return (
        <div className="flex flex-col px-[34px] py-[74px] gap-[10px] lg:gap-[109px] lg:items-center lg:flex-row lg:[&>div]:w-1/2 lg:px-[184px] bg-darkViolet bg-[url('/wstar.svg'),_url('/pstar.svg'),_url('/star.svg')] [background-repeat:no-repeat,_no-repeat,_no-repeat] bg-[position:85%_92%,_45%_2%,_55%_18%] lg:bg-[position:50%_90%,_20%_15%,_32%_50%] bg-[size:_10px,_15px,_12px] lg:bg-[size:_20px,_20px,_20px]">
            <div className="relative w-full h-[275px] lg:h-screen after:absolute after:w-[200px] after:h-[200px] lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[50px] lg:after:blur-[100px] after:top-3/4 after:-translate-y-1/2 after:-left-10 lg:after:left-0 after:-z-10 z-20 lg:hover:after:top-1/2 lg:after:[transition:top_1s_ease-out]">
                <Image
                    src="/criteria-image.svg"
                    alt="criteria-image"
                    fill={true}
                    className="lg:hover:scale-105 lg:[transition:transform_.8s_ease-in]"
                />
            </div>
            <div className="relative flex flex-col gap-4 text-white after:absolute after:w-[200px] after:h-[200px] lg:after:h-[400px] lg:after:w-[400px] after:rounded-full after:bg-gradient-radial after:from-lightViolet after:blur-[50px] lg:after:blur-[100px] after:bottom-0  lg:after:top-full lg:after:-translate-y-1/2 after:left-full after:-translate-x-1/2 after:-z-10 z-20 lg:hover:after:top-1/2 lg:hover:after:left-1/2 lg:after:[transition:all_1s_ease-out]">
                <div className="flex flex-col items-center text-[20px] lg:items-start lg:text-[32px] font-bold">
                    <h1>Judging Criteria</h1>
                    <h1 className="text-brightMagenta">Key attribute</h1>
                </div>
                <div className="flex flex-col gap-7 ">
                    <div className="flex text-center leading-[175%] text-xs lg:text-sm lg:text-left">
                        <p className="leading-[173%]">
                            <span className="text-[#FF26B9] text-base font-bold">
                                Innovation and Creativity:&nbsp;
                            </span>
                            Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world
                            problem in a novel way or introduces innovative
                            features.
                        </p>
                    </div>
                    <div className="flex text-center leading-[175%] text-xs lg:text-sm lg:text-left">
                        <p className="leading-[173%]">
                            <span className="text-[#FF26B9] text-base font-bold">
                                Functionality:&nbsp;
                            </span>
                            Assess how well the solution works. Does it perform
                            its intended functions effectively and without major
                            issues? Judges would consider the completeness and
                            robustness of the solution.
                        </p>
                    </div>
                    <div className="flex text-center leading-[175%] text-xs lg:text-sm lg:text-left">
                        <p className="leading-[173%]">
                            <span className="text-[#FF26B9] text-base font-bold">
                                Impact and Relevance:&nbsp;
                            </span>
                            Determine the potential impact of the solution in
                            the real world. Does it address a significant
                            problem, and is it relevant to the target audience?
                            Judges would assess the potential social, economic,
                            or environmental benefits.
                        </p>
                    </div>
                    <div className="flex text-center leading-[175%] text-xs lg:text-sm lg:text-left">
                        <p className="leading-[173%]">
                            <span className="text-[#FF26B9] text-base font-bold">
                                Technical Complexity:&nbsp;
                            </span>
                            Evaluate the technical sophistication of the
                            solution. Judges would consider the complexity of
                            the code, the use of advanced technologies or
                            algorithms, and the scalability of the solution
                        </p>
                    </div>
                    <div className="flex text-center leading-[175%] text-xs lg:text-sm lg:text-left">
                        <p className="leading-[173%]">
                            <span className="text-[#FF26B9] text-base font-bold">
                                Adherence to Hackathon Rules::&nbsp;
                            </span>
                            Judges will Ensure that the team adhered to the
                            rules and guidelines of the hackathon, including
                            deadlines, use of specific technologies or APIs, and
                            any other competition-specific requirements.
                        </p>
                    </div>
                </div>
                <Btn className="pt-2 pb-[11px] pl-[14px] pr-4 text-xs rounded self-center lg:self-start mt-4 lg:mt-[55px] lg:px-[42px] lg:py-4">
                    Read More
                </Btn>
            </div>
        </div>
    );
};

export default Criteria;
