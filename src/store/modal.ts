import { create } from "zustand";

export type AdminModalStates = "TODO" | null;

interface ModalStore {
    // modals
    modal: {
        state: AdminModalStates;
        payload: string;
    };
    setModal: (m_state: AdminModalStates, origin?: string) => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
    modal: {
        payload: "",
        state: null,
    },
    setModal: (m_state: AdminModalStates, payload?: string) => set(() => ({ modal: { payload: payload ?? "", state: m_state  } })),
}));
