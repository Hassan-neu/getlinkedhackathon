import React from "react";

const Timeline = () => {
    return (
        <div
            className="flex flex-col px-[34px] py-[74px] gap-14 lg:gap-[109px] lg:items-center lg:px-[184px] bg-darkViolet bg-[url('/star.svg'),_url('/pstar.svg'),_url('/wstar.svg')] [background-repeat:no-repeat,_no-repeat,no-repeat,_no-repeat] bg-[position:5%_97%,_20%_18%,_70%_54%] lg:bg-[position:5%_88%,_20%_18%,_90%_52%] bg-[size:_10px,_10px,_10px] lg:bg-[size:_20px,_20px,_20px]"
            id="timeline"
        >
            <div className="flex flex-col items-center text-center text-white">
                <h1 className="text-xl lg:text-[32px] font-bold">Timeline</h1>
                <p className="text-sm leading-[172%]">
                    Here is the breakdown of the time we anticipate using for
                    the upcoming event.
                </p>
            </div>
            <div className="grid grid-col-1 auto-rows-fr gap-[27px] [&>div]:justify-between [&>div_div]:pl-5 lg:gap-0 lg:[&>div:nth-child(even)]:flex-row-reverse lg:[&>div:nth-child(odd)_div:first-child]:text-right lg:[&>div:nth-child(odd)_div:first-child]:pr-[118px] lg:[&>div:nth-child(odd)_div:nth-child(2)]:pl-[118px] lg:[&>div:nth-child(even)_div:first-child]:pl-[118px] lg:[&>div:nth-child(even)_div:nth-child(2)]:pr-[118px] text-white">
                <div className="relative flex flex-col lg:flex-row  lg:[&>div]:w-1/2 lg:items-center before:absolute before:bg-brightMagenta before:w-1 before:h-full before:left-0 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:-top-1/2 ">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xs lg:text-2xl text-brightMagenta">
                            Hackathon Announcement
                        </h1>
                        <p className="text-xs leading-[160%] lg:text-sm lg:leading-[170%]">
                            The getlinked tech hackathon 1.0 is formally
                            announced to the general public and teams begin to
                            get ready to register
                        </p>
                    </div>
                    <div className="relative font-bold text-xs lg:text-2xl text-brightMagenta before:absolute before:text-white before:content-['1'] before:z-10 before:w-[19px] before:h-[19px] before:p-3 lg:before:w-[53px] lg:before:h-[53px] before:border-4 before:border-darkViolet before:rounded-full before:bg-gradient-to-l before:from-10% before:from-lightViolet before:to-brightMagenta before:flex before:items-center before:justify-center before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 lg:hover:before:scale-110 lg:before:[transition:transform_.5s_ease-out]">
                        November 18, 2023
                    </div>
                </div>
                <div className="relative flex flex-col lg:flex-row  lg:[&>div]:w-1/2 lg:items-center before:absolute before:bg-brightMagenta before:w-1 before:h-full before:left-0 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:-top-1/2">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xs lg:text-2xl text-brightMagenta ">
                            Teams Registration begins
                        </h1>
                        <p className="text-xs leading-[160%] lg:text-sm lg:leading-[170%]">
                            Interested teams can now show their interest in the
                            getlinked tech hackathon 1.0 2023 by proceeding to
                            register
                        </p>
                    </div>
                    <div className="relative font-bold text-xs lg:text-2xl text-brightMagenta before:absolute before:text-white before:content-['2'] before:z-10 before:w-[19px] before:h-[19px] before:p-3 lg:before:w-[53px] lg:before:h-[53px] before:border-4 before:border-darkViolet before:rounded-full before:bg-gradient-to-l before:from-10% before:from-lightViolet before:to-brightMagenta before:flex before:items-center before:justify-center before:left-0 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 lg:before:left-full lg:hover:before:scale-110 lg:before:[transition:transform_.5s_ease-out]">
                        November 18, 2023
                    </div>
                </div>
                <div className="relative flex flex-col lg:flex-row  lg:[&>div]:w-1/2 lg:items-center before:absolute before:bg-brightMagenta before:w-1 before:h-full before:left-0 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:-top-1/2">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xs lg:text-2xl text-brightMagenta">
                            Teams Registration ends
                        </h1>
                        <p className="text-xs leading-[160%] lg:text-sm lg:leading-[170%]">
                            Interested Participants are no longer allowed to
                            register
                        </p>
                    </div>
                    <div className="relative font-bold text-xs lg:text-2xl text-brightMagenta before:absolute before:text-white before:content-['3'] before:z-10 before:w-[19px] before:h-[19px] before:p-3 lg:before:w-[53px] lg:before:h-[53px] before:border-4 before:border-darkViolet before:rounded-full before:bg-gradient-to-l before:from-10% before:from-lightViolet before:to-brightMagenta before:flex before:items-center before:justify-center before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 lg:hover:before:scale-110 lg:before:[transition:transform_.5s_ease-out]">
                        November 18, 2023
                    </div>
                </div>
                <div className="relative flex flex-col lg:flex-row  lg:[&>div]:w-1/2 lg:items-center before:absolute before:bg-brightMagenta before:w-1 before:h-full before:left-0 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:-top-1/2">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xs lg:text-2xl text-brightMagenta">
                            Announcement of the accepted teams and ideas
                        </h1>
                        <p className="text-xs leading-[160%] lg:text-sm lg:leading-[170%]">
                            All teams whom idea has been accepted into getlinked
                            tech hackathon 1.0 2023 are formally announced
                        </p>
                    </div>
                    <div className="relative font-bold text-xs lg:text-2xl text-brightMagenta before:absolute before:text-white before:content-['4'] before:z-10 before:w-[19px] before:h-[19px] before:p-3 lg:before:w-[53px] lg:before:h-[53px] before:border-4 before:border-darkViolet before:rounded-full before:bg-gradient-to-l before:from-10% before:from-lightViolet before:to-brightMagenta before:flex before:items-center before:justify-center before:left-0 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 lg:before:left-full lg:hover:before:scale-110 lg:before:[transition:transform_.5s_ease-out]">
                        November 18, 2023
                    </div>
                </div>
                <div className="relative flex flex-col lg:flex-row  lg:[&>div]:w-1/2 lg:items-center before:absolute before:bg-brightMagenta before:w-1 before:h-full before:left-0 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:-top-1/2">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xs lg:text-2xl text-brightMagenta">
                            Getlinked Hackathon 1.0 Offically Begins
                        </h1>
                        <p className="text-xs leading-[160%] lg:text-sm lg:leading-[170%]">
                            Accepted teams can now proceed to build their ground
                            breaking skill driven solutions
                        </p>
                    </div>
                    <div className="relative font-bold text-xs lg:text-2xl text-brightMagenta before:absolute before:text-white before:content-['5'] before:z-10 before:w-[19px] before:h-[19px] before:p-3 lg:before:w-[53px] lg:before:h-[53px] before:border-4 before:border-darkViolet before:rounded-full before:bg-gradient-to-l before:from-10% before:from-lightViolet before:to-brightMagenta before:flex before:items-center before:justify-center before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 lg:hover:before:scale-110 lg:before:[transition:transform_.5s_ease-out]">
                        November 18, 2023
                    </div>
                </div>
                <div className="relative flex flex-col lg:flex-row  lg:[&>div]:w-1/2 lg:items-center before:absolute before:bg-brightMagenta before:w-1 before:h-full before:left-0 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:-top-1/2">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-xs lg:text-2xl text-brightMagenta">
                            Demo Day
                        </h1>
                        <p className="text-xs leading-[160%] lg:text-sm lg:leading-[170%]">
                            Teams get the opportunity to pitch their projects to
                            judges. The winner of the hackathon will also be
                            announced on this day
                        </p>
                    </div>
                    <div className="relative font-bold text-xs lg:text-2xl text-brightMagenta before:absolute before:text-white before:content-['6'] before:z-10 before:w-[19px] before:h-[19px] before:p-3 lg:before:w-[53px] lg:before:h-[53px] before:border-4 before:border-darkViolet before:rounded-full before:bg-gradient-to-l before:from-10% before:from-lightViolet before:to-brightMagenta before:flex before:items-center before:justify-center before:left-0 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 lg:before:left-full lg:hover:before:scale-110 lg:before:[transition:transform_.5s_ease-out]">
                        November 18, 2023
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
