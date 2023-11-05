import { useEffect, useRef, useState } from "react";

import { useAppStore } from "~/store/app";
import { loadAssets } from "~/utils";
import type { ApiAssetResponse, Asset } from "~/types";

export const useLoaderLogic = () => {
    const [loadingPercentage, setLoadingPercentage] = useState<number>(0);
    const { setLoaded, loaded } = useAppStore();

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;

        const loadPublicAssets = async () => {
            await fetch('/api/assets')
            .then((response) => response.json())
            .then((assetUrls: ApiAssetResponse) => {
                const assets: Asset[] = assetUrls;
                console.log(assets);
                
                loadAssets(assets, setLoadingPercentage, signal, setLoaded);
            })
            .catch(console.error)
        }

        setLoaded(false);
        loadPublicAssets();

        return () => abortController.abort();
    }, []);

    useEffect(() => {
        console.log(loadingPercentage);
    }, [loadingPercentage]);

    // useEffect(() => {
    //     console.log(loaded);
    // }, [loaded]);
    
    return { loadingPercentage };
};
