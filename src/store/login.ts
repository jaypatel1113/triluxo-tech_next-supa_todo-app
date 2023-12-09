import type { User as SupabaseUser } from "@supabase/supabase-js";
import { create } from "zustand";

interface LoginStore {
    user: SupabaseUser | null;
    setUser: (val: LoginStore["user"]) => void;

    apiLoading: boolean;
    setApiLoading: (val: LoginStore["apiLoading"]) => void;
    message: string;
    setMessage: (val: LoginStore["message"]) => void;
}

export const useLoginStore = create<LoginStore>()((set) => ({
    apiLoading: false,
    message: "",
    
    setApiLoading: (val: LoginStore["apiLoading"]) => set(() => ({ apiLoading: val })),
    setMessage: (val: LoginStore["message"]) => set(() => ({ message: val })),
    setUser: (val: LoginStore["user"]) => set(() => ({ user: val })),
    user: null,
}));