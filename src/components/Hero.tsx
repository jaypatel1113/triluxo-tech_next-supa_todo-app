import { useEffect, useState } from "react";
import {FaEdit} from 'react-icons/fa';
import {MdDelete, MdOutlineAdd} from 'react-icons/md';
import {TbLogout2} from 'react-icons/tb';

import FetchLoader from "./loaders/FetchLoader";

import { useAuth } from "~/hooks/useAuth";
import Layout from "~/layout";
import { delete_data } from "~/services/api_requests/delete";
import { getData } from "~/services/api_requests/get";
import { useTodoStore } from "~/store/app";
import { useLoginStore } from "~/store/login";
import { useModalStore } from "~/store/modal";
import type { TodoType } from "~/types";

const Hero = () => {
    const { setTodos } = useTodoStore();
    const [loading, setLoading] = useState<boolean>(false);

    const { logout } = useAuth();
    const { setApiLoading, setMessage } = useLoginStore();
    const { setModal } = useModalStore();
    const { setIsEdit, setSelectedTodo, todos } = useTodoStore();

    const handleLogout = async () => {
        setMessage("Logging out");
        setApiLoading(true);

        await logout();
        
        setMessage("");
        setApiLoading(false);
    }

    const handleDelete = async (todo: TodoType) => {
        setMessage("deleting todo")
        setApiLoading(true);

        await delete_data<TodoType["id"]>({id: todo.id, route: "delete"})

        setApiLoading(false);
        setMessage("");

        void handleGet();
    }

    const handleEdit = (todo: TodoType) => {
        setModal("TODO");
        setIsEdit(true);
        setSelectedTodo(todo);
    }
    
    const handleOpenModal = () => {
        setModal("TODO");
        setIsEdit(false);
        setSelectedTodo(null);
    }


    const handleGet = async () => {
        setMessage("Fetching todos");
        setApiLoading(true);

        const todos = await getData<TodoType[]>("get");
        setTodos(todos);
        
        setApiLoading(false);
        setMessage("");
    };
    
    useEffect(() => {
        const fetch_data = async () => {
            setLoading(true)
            const todos = await getData<TodoType[]>("get");
            setTodos(todos)
            setLoading(false)
        }

        void fetch_data()
    }, [setTodos]);

    return (
        <Layout>
            {loading ?  
                <div className="w-full relative h-[calc(100vh-160px)]">
                    <FetchLoader message="Fetching Todos" />
                </div> :
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-flow-row md:grid-flow-col w-full ">
                    {todos && todos.length > 0 ? (
                        todos.map((data) => (
                            <div
                                className="relative bg-[#ddd]/40 p-5 rounded-lg group font-sans"
                                key={data.id}
                            >
                                <div className="font-mono font-bold tracking-wide text-lg">
                                    {data.task}
                                </div>
                                <div className="lg:absolute left-0 top-0 w-full h-full bg-transparent lg:bg-black/20 lg:opacity-0 group-hover:opacity-100 transition-all duration-150 rounded-lg">
                                    <div className="w-full h-full flex justify-end lg:justify-center items-center gap-3 lg:gap-5">
                                        <button
                                            className="p-2 lg:px-3 lg:py-1 flex gap-1 items-center cursor-pointer text-[#797a31] bg-[#efeba9] rounded-full text-xs"
                                            onClick={() => handleEdit(data)}
                                        >
                                            <div>
                                                <FaEdit />
                                            </div>
                                            <div className="font-semibold tracking-wider hidden lg:block">
                                                Edit
                                            </div>
                                        </button>
                                        <button
                                            className="p-2 lg:px-3 lg:py-1 flex gap-1 items-center cursor-pointer text-[#ff3045] bg-[#f6abb0] rounded-full text-xs disabled:cursor-not-allowed disabled:opacity-40"
                                            onClick={() => void handleDelete(data)}
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
                        ))
                    ) : (
                        <div className="font-sans tracking-wide ">no todo found</div>
                    )}

                    <div
                        className="fixed bottom-10 md:bottom-5 left-5 md:left-10 text-[#45C077] bg-[#89f1d04f]  cursor-pointer rounded-md p-3 text-2xl"
                        onClick={handleOpenModal}
                    >
                        <MdOutlineAdd />
                    </div>

                    <button
                        className="fixed bottom-10 md:bottom-5 right-5 md:right-10 bg-[#222]/[0.75] text-white/80 rounded-md p-3 text-2xl h-[50px]"
                        onClick={() => void handleLogout()}
                    >
                        <TbLogout2 />
                    </button>
                </div>
            }
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