import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

import AuthLoader from './loaders/AuthLoader';

import { useAuth } from '~/hooks/useAuth';
import { useLoginStore } from '~/store/login';

const ProtectedRoute = ({children, redirect}: {children: React.ReactNode, redirect: string}) => {
    const { loading, checkAuth } = useAuth();
    const { user } = useLoginStore();

    const router = useRouter();

    const redirectUser = async () => {
        const isAuthenticated = await checkAuth();

        if (!isAuthenticated) {
            await router.push(`/${redirect}`);
        } else {
            await router.push(`/`);
        }
    };

    useEffect(() => {
        void redirectUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`w-screen h-screen flex justify-center items-center bg-black text-white `}>
            <AnimatePresence>
                {loading && !user && <AuthLoader />}
            </AnimatePresence>
            <Image 
                src={`/backgrounds/bg.jpg`}
                alt="wallpaper"
                width={1000}
                height={1000}
                className={`w-full h-full object-cover pointer-events-none absolute top-0 left-0 z-[0] bg-fixed `}
            />

            <div className={`w-full h-full  backdrop-blur-xl z-[1] relative overflow-x-hidden`}>
                {children}
            </div>
        </div>
    );
}

export default ProtectedRoute;
