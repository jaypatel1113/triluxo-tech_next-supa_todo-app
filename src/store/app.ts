import { create } from "zustand";

// import { BookType } from "~/types";

interface AppStore {
    // selected_book: BookType,
    // updateBook: (book: BookType) => void
    var_1: boolean;
    setValue: (value: boolean) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
    // selected_book: null,
    // updateBook: (book: BookType) => set(() => ({selected_book: book}))
    var_1: false,
    setValue: (value: boolean) => set(() => ({var_1: value}))
}));
