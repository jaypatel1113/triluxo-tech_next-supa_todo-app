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
        state: null,
        payload: "",
    },
    setModal: (m_state: AdminModalStates, payload?: string) => set(() => ({ modal: { state: m_state, payload: payload ?? ""  } })),
}));
