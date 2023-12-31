import { useEffect, useState } from "react";

import useClickOutside from "~/hooks/useClickOutside";
import { getData } from "~/services/api_requests/get";
import { insert_data } from "~/services/api_requests/insert";
import { update_data } from "~/services/api_requests/update";
import { useTodoStore } from "~/store/app";
import { useLoginStore } from "~/store/login";
import { useModalStore } from "~/store/modal";
import type { TodoType } from "~/types";

const TodoModal: React.FC = () => {
    const [task, setTask] = useState<string>("");

    const { isEdit, selected_todo, setTodos } = useTodoStore();
    const { user, setMessage, setApiLoading } = useLoginStore();
    const { setModal } = useModalStore();
    
    const modalRef = useClickOutside(() => setModal(null));

    useEffect(() => {
        if(selected_todo) {
            setTask(selected_todo.task)
        }
    }, [selected_todo]);

    const handleAdd = async () => {
        if(!task) {
            alert("please enter task");
            return;
        }

        setMessage("Adding");
        setApiLoading(true);


        if(!user?.id) return;

        const object = { task, user_id: user.id };
        const final_data = {...object} as TodoType;
    
        setMessage("Adding todo")
        await insert_data<TodoType>({ item: final_data, route: "add" });

        setApiLoading(false)
        setModal(null);

        void handleGet();
    }

    const handleUpdate = async () => {
        if(!task || task.trim() === "") {
            alert("dont be so smart");
            return;
        }

        setMessage("Updating");
        setApiLoading(true);

        if(!user?.id) return;
        if(!selected_todo) return;

        const object = { id: selected_todo.id, task, user_id: user.id };
        const final_data = {...object} as TodoType;
    
        setMessage("Updating todo");
        await update_data<TodoType>({ item: final_data, route: "update" });

        setApiLoading(false);
        setModal(null);

        void handleGet();
    }

    const handleGet = async () => {
        setMessage("Fetching todos");
        setApiLoading(true);

        try {
            const todos = await getData<TodoType[]>("get");
            setTodos(todos);
        } catch (error) {
            console.log(error);
        } finally {
            setApiLoading(false);
            setMessage("");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-screen z-[5] bg-black/40 flex justify-center items-center font-sans">
            <div 
                className="font-medium tracking-wider mx-3 w-full max-w-[300px] p-6 rounded-md bg-[#191919] invert grid grid-cols-2 gap-3"
                ref={modalRef}
            >

                {/* Type */}
                <div className="flex flex-col gap-1 text-sm text-white/60 col-span-2">
                    <label>Todo</label>
                    <input 
                        type="text" 
                        value={task ?? ""}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="enter task"
                        className="bg-black/80 outline-none border-none px-3 py-1 text-xs font-semibold tracking-wider"
                    />
                </div>

                <button 
                    className="justify-self-start mt-8 text-[#ff3045] bg-[#f6abb0] px-6 py-2 rounded-full text-sm uppercase font-bold tracking-widest invert" 
                    onClick={() =>  setModal(null)}
                >
                    Close
                </button>

                {
                    isEdit ? 
                        <button 
                            className="justify-self-end mt-8 text-[#797a31] bg-[#efeba9] px-6 py-2 rounded-full text-sm uppercase font-bold tracking-widest disabled:cursor-not-allowed disabled:opacity-40 invert" 
                            onClick={() => void handleUpdate()}
                        >
                            Update
                        </button> :
                        <button 
                            className="justify-self-end mt-8 text-[#45C077] bg-[#97e6cd] px-6 py-2 rounded-full text-sm uppercase font-bold tracking-widest disabled:cursor-not-allowed disabled:opacity-40 invert" 
                            onClick={() => void handleAdd()}
                        >
                            Add
                        </button>
                }
            </div>
        </div>
    )
}

export default TodoModal;
