import { useState, useRef, useEffect } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { RiMenu3Line } from 'react-icons/ri';

import { NavItems } from '~/constants';
import { getId, handleScroll } from '~/utils';
import type { NavItemType } from '~/types';



// search for font- and update fonts

const Navbar = () => {
    const [active, setActive] = useState<number>(-1);
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleScroll("cities");
    }

    const handleChangeActive = (i: number, nav: NavItemType) => {
        // if(nav.url.includes("https://")) {
        if(nav.url) {
            window.open(nav.url, "_blank"); // Replace with your desired URL
        } else {
            setActive(i);
            const scrollTo = getId(nav.name);
            console.log(scrollTo);

            scrollTo && handleScroll(scrollTo);
        }
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(false);
            }
        }

        const handleScroll = () => setOpenDropdown(false);

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 w-full z-10 ">
            {/* advance backdrop */}
            <div className="custom-backdrop" />
            
            <div className="relative font-sans">
                <div className="flex flex-col w-full">
                    <div className="flex w-[90%] md:w-[87.5%] mx-auto py-5 justify-between items-center">
                        <img
                            src="/logo.svg"
                            className="w-[128px] md:w-[153px] h-auto object-contain"
                            alt="logo"
                        />
                        <div className="hidden md:flex items-center gap-7 uppercase">
                            {NavItems.map((nav, i) => (
                                <div
                                    key={nav.name}
                                    className={`relative font-sfmono leading-4 cursor-pointer group`}
                                    onClick={() => handleChangeActive(i, nav)}
                                >
                                    {/* underline  */}
                                    <div className={`absolute top-full h-[2px] bg-white w-0 transition-all duration-200 group-hover:w-full ${active === i ? "!w-full" : "w-0"} rounded-full`} />

                                    {nav.name}
                                </div>
                            ))}

                            <button 
                                className="font-sfmono flex items-center gap-1 p-2 rounded-md uppercase bg-gradient-to-r from-[#19D3EC] via-[#7078FC] to-[#AA39E3] hover:from-[#AA39E3] hover:via-[#7078FC] hover:to-[#19D3EC]"
                                onClick={handleBtnClick}
                            >
                                Register
                                <BiRightArrowAlt className="stroke-[0.3] text-2xl" />
                            </button>
                        </div>

                        {openDropdown ? (
                            <RxCross2
                                className="block md:hidden text-3xl cursor-pointer stroke-[0.5]"
                                onClick={() => setOpenDropdown((prev) => !prev)}
                            />
                        ) : (
                            <RiMenu3Line
                                className="block md:hidden text-3xl cursor-pointer"
                                onClick={() => setOpenDropdown((prev) => !prev)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* mobile dropdown */}
            <div
                className={`block md:hidden fixed top-0 right-0 left-0 bottom-0 ${openDropdown ? "h-screen" : "h-0"} transition-all duration-200 overflow-hidden`}
                onClick={() => setOpenDropdown(false)}
                ref={dropdownRef}
            >
                <div className="w-full h-full flex justify-center items-center flex-col gap-16 bg-[#1B1B1B4F] backdrop-blur-lg p-5 rounded uppercase">
                    {NavItems.map((nav, i) => (
                        <div 
                            key={nav.name}
                            className={`font-offbit text-[36px] tracking-widest relative group cursor-pointer `}
                            onClick={() => handleChangeActive(i, nav)}
                        >
                            {/* underline  */}
                            <div className={`absolute top-full h-[3px] bg-white w-0 transition-all duration-200 group-hover:w-full ${active === i ? "!w-full" : "w-0"} rounded-full`} />
                            
                            {nav.name}
                        </div>
                    ))}

                    <button className="font-sfmono flex items-center gap-3 px-8 py-3 rounded-md uppercase bg-gradient-to-r from-[#19D3EC] via-[#7078FC] to-[#AA39E3] hover:from-[#AA39E3] hover:via-[#7078FC] hover:to-[#19D3EC] text-[28px]">
                        Register
                        <BiRightArrowAlt className="stroke-[0.3] text-[32px]" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

// const Navbar = () => {
//     return (
//         <nav className="fixed top-0 left-0 w-full px-[5%] py-5 z-10">
//             <div className="custom-backdrop" />

//             <div className="relative">
//                 original navbar content
//             </div>
//         </nav>
//     )
// }

// export default Navbar;