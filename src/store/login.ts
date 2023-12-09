import { create } from "zustand";

import type { User as SupabaseUser } from "@supabase/supabase-js";

interface LoginStore {
    user: SupabaseUser | null;
    setUser: (val: LoginStore["user"]) => void;

    apiLoading: boolean;
    setApiLoading: (val: LoginStore["apiLoading"]) => void;
    message: string;
    setMessage: (val: LoginStore["message"]) => void;
}

export const useLoginStore = create<LoginStore>()((set) => ({
    user: null,
    setUser: (val: LoginStore["user"]) => set(() => ({ user: val })),
    
    apiLoading: false,
    setApiLoading: (val: LoginStore["apiLoading"]) => set(() => ({ apiLoading: val })),
    message: "",
    setMessage: (val: LoginStore["message"]) => set(() => ({ message: val })),
}));