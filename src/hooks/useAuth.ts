import { useState } from "react";
import { useRouter } from "next/router";

import { supabase } from "~/supabase";
import { useLoginStore } from "~/store/login";

const useAuth = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>();

    const { setUser } = useLoginStore()

    const checkAuth = async () => {
        try {
            setLoading(true);
            const { data: { user: logged_user } } = await supabase.auth.getUser();

            if (logged_user !== null) {
                setUser(logged_user);
                setError(null);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            setError("Something went wrong");
            console.error(error);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error("Login failed:", error.message);
                setError(error.message);
                return false;
            }
            
            const { user: logged_user } = data;

            await router.replace("/");
            setUser(logged_user);
            setError(null);
            // console.log(logged_user.email);
            
            return true;
        } catch (error) {
            console.error("Error during login:", error);
            setError("An error occurred during login");
            return false;
        } finally {
            setLoading(false);
        }
    };

    const signup = async (email: string, password: string) => {
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error("Sign up failed:", error.message);
                setError(error.message);
                return false;
            }

            const { user: signed_up_user } = data;

            await router.replace("/");
            setUser(signed_up_user);
            setError(null);

            return true;
        } catch (error) {
            console.error("Error during signup:", error);
            setError("An error occurred during signup");
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true)
        await supabase.auth.signOut();
        await router.replace("/login");
        setUser(null);
        setError(null); 
        setLoading(false);
    };

    return {
        loading,
        error,
        login,
        signup,
        logout,
        checkAuth,
    };
};

export { useAuth };
