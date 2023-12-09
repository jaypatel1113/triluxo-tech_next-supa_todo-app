import { create } from "zustand";

import type { TodoType } from "~/types";

interface TodoStore {
    loaded: boolean;
    setLoaded: (value: boolean) => void;

    isEdit: boolean;
    setIsEdit: (val: TodoStore["isEdit"]) => void;

    selected_todo: TodoType | null;
    setSelectedTodo: (val: TodoStore["selected_todo"]) => void;
    
    todos: TodoType[] | null;
    setTodos: (val: TodoStore["todos"]) => void;
}

export const useTodoStore = create<TodoStore>()((set) => ({
    isEdit: false,
    loaded: false,

    selected_todo: null,
    setIsEdit: (val: TodoStore["isEdit"]) => set(() => ({ isEdit: val })),
    
    setLoaded: (value: boolean) => set(() => ({ loaded: value })),
    setSelectedTodo: (val: TodoStore["selected_todo"]) => set(() => ({ selected_todo: val })),
    
    setTodos: (val: TodoStore["todos"]) => set(() => ({ todos: val })),
    todos: null,
}));
