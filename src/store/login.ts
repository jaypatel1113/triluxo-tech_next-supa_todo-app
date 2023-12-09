import { create } from "zustand";

import type { User as SupabaseUser } from "@supabase/supabase-js";

interface LoginStore {
    user: SupabaseUser | null;
    setUser: (val: LoginStore["user"]) => void;

}

export const useLoginStore = create<LoginStore>()((set) => ({
    user: null,
    setUser: (val: LoginStore["user"]) => set(() => ({ user: val })),
}));