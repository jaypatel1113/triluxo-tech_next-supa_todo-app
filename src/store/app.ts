import { create } from "zustand";

// import { BookType } from "~/types";

interface AppStore {
    // selected_book: BookType,
    // updateBook: (book: BookType) => void
}

export const useAppStore = create<AppStore>()((set) => ({
    // selected_book: null,
    // updateBook: (book: BookType) => set(() => ({selected_book: book}))
}));
