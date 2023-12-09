import { Data } from "~/constants";
import {FaEdit} from 'react-icons/fa';
import {TbLogout2} from 'react-icons/tb';
import {MdDelete, MdOutlineAdd} from 'react-icons/md';
import { useEffect } from "react";
import { useAuth } from "~/hooks/useAuth";
import Layout from "~/layout";
import { useLoginStore } from "~/store/login";


const Hero = () => {
    const { logout, checkAuth } = useAuth();
    const { setApiLoading, setMessage } = useLoginStore();

    const checkUser = async () => {
        const isAuthenticated = await checkAuth();

        if (!isAuthenticated) {

        } else {

        }
    };

    
    const handleLogout = async () => {
        setMessage("Logging out");
        setApiLoading(true);
        await logout();
        setMessage("");
        setApiLoading(false);
    }


    useEffect(() => {
        void checkUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Layout>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-flow-col w-full ">
                {Data.map(data => (
                    <div className="relative bg-[#222]/70 p-5 rounded-lg group font-sans ">
                        {data.todo}


                        <div className="lg:absolute left-0 top-0 w-full h-full bg-transparent lg:bg-black/40 lg:opacity-0 group-hover:opacity-100 transition-all duration-150 rounded-lg">
                            <div className="w-full h-full flex justify-end lg:justify-center items-center gap-3 lg:gap-5  ">
                                <button 
                                    className="p-2 lg:px-3 lg:py-1 flex gap-1 items-center cursor-pointer text-[#BEC045] bg-[#44421B] rounded-full text-xs"
                                    // onClick={() => handleEdit(detail)}
                                >
                                    <div>
                                        <FaEdit />
                                    </div>
                                    <div className="font-semibold tracking-wider hidden lg:block">
                                        Edit
                                    </div>
                                </button>
                                <button 
                                    className="p-2 lg:px-3 lg:py-1 flex gap-1 items-center cursor-pointer text-[#dc3545] bg-[#461419] rounded-full text-xs disabled:cursor-not-allowed disabled:opacity-40"
                                    // onClick={() => void handleDelete(detail)}
                                    // disabled={isDisabled}
                                >
                                    <div>
                                        <MdDelete />
                                    </div>
                                    <div className="font-semibold tracking-wider hidden lg:block">
                                        Delete
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <div 
                    className="fixed bottom-20 md:bottom-5 left-10 bg-[#1B4437] text-[#45C077] cursor-pointer rounded-md p-3 text-2xl" 
                    // onClick={handleOpenModal}
                >
                    <MdOutlineAdd />
                </div>

                <button 
                    className="fixed bottom-20 md:bottom-5 right-10 bg-[#222]/[0.75] text-white/80 rounded-md p-3 text-2xl h-[50px]"
                    onClick={() => void handleLogout()}
                >
                    <TbLogout2 />
                </button>
            </div>
        </Layout>
    );
};

export default Hero;




            {/* prevent lenis scroll - to enable scroll  */}
            {/* <div
                className="w-full overflow-y-auto flex justify-between gap-2 pr-[14px] [&::-webkit-scrollbar]:hidden"
                data-lenis-prevent
            >
                to prever lenis scroll
            </div> */}
            

            {/* animation */}
            {/* <Animate effect={smallScaleX} className={"w-full"}>
                <div className="flex p-3 gap-[10px] font-thunder bg-[#262626] rounded-md cursor-pointer text-[#D5FF00] text-[20px] leading-[1] justify-center items-center w-auto ">
                    <div className="pt-[5px] tracking-wider">
                        CHAT WITH BOOK
                    </div>
                    <IoChatbubbleSharp />
                </div>
            </Animate> */}