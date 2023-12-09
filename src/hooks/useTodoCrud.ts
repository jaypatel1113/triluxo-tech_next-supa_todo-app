import { useState } from "react";
import { delete_data } from "~/services/api_requests/delete";
import { getData } from "~/services/api_requests/get";
import { insert_data } from "~/services/api_requests/insert";
import { update_data } from "~/services/api_requests/update";
import { useTodoStore } from "~/store/app";
import { useLoginStore } from "~/store/login";
import { TodoType } from "~/types";

const useTodoCRUD = () => {
    const { user } = useLoginStore();
    const [apiLoading, setApiLoading] = useState(false);
    const [message, setMessage] = useState("");
    const { setTodos } = useTodoStore();

    const handleDelete = async (todo: TodoType) => {
        setMessage("Deleting todo");
        setApiLoading(true);

        try {
            await delete_data<TodoType["id"]>({
                id: todo.id,
                route: "delete",
            });
        } catch (error) {
            console.log(error);
        } finally {
            setApiLoading(false);
            setMessage("");
        }
    };

    const handleGet = async () => {
        setMessage("Fetching todo");
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

    const handleAdd = async (task: string) => {
        setMessage("Adding");
        setApiLoading(true);

        if (!user?.id) return;

        const object = { task, user_id: user.id };
        const final_data = { ...object } as TodoType;

        try {
            setMessage("Adding todo");
            await insert_data<TodoType>({ item: final_data, route: "add" });
        } catch (error) {
            console.log(error);
        } finally {
            setApiLoading(false);
            setMessage("");
        }
    };

    const handleUpdate = async (task: string) => {
        setMessage("Updating");
        setApiLoading(true);

        if (!user?.id) return;

        const object = { task, user_id: user.id };
        const final_data = { ...object } as TodoType;

        try {
            setMessage("Updating todo");
            await update_data<TodoType>({ item: final_data, route: "update" });
        } catch (error) {
            console.log(error);
        } finally {
            setApiLoading(false);
            setMessage("");
        }
    };

    return { apiLoading, message, handleAdd, handleUpdate, handleDelete, setMessage, setApiLoading, handleGet };
};

export default useTodoCRUD;
