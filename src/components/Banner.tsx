import { IoChatbubbleSharp } from "react-icons/io5";

import Animate from "./Wrapper/Animate";

import { smallScaleX } from "~/motion";

const Banner = () => {
    return (
        <div>
            demo
            {/* prevent lenis scroll - to enable scroll  */}
            <div
                className="w-full overflow-y-auto flex justify-between gap-2 pr-[14px] [&::-webkit-scrollbar]:hidden"
                data-lenis-prevent
            >
                to prever lenis scroll
            </div>
            

            {/* animation */}
            <Animate effect={smallScaleX} className={"w-full"}>
                <div className="flex p-3 gap-[10px] font-thunder bg-[#262626] rounded-md cursor-pointer text-[#D5FF00] text-[20px] leading-[1] justify-center items-center w-auto ">
                    <div className="pt-[5px] tracking-wider">
                        CHAT WITH BOOK
                    </div>
                    <IoChatbubbleSharp />
                </div>
            </Animate>
        </div>
    );
};

export default Banner;
