import Lenis from "@studio-freight/lenis";
import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect } from "react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return <Component {...pageProps} />;
};

export default MyApp;
