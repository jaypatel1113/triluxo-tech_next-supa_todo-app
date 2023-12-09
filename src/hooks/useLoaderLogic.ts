import { useEffect, useState } from "react";

import { useTodoStore } from "~/store/app";
import { loadAssets } from "~/utils";
import type { ApiAssetResponse, Asset } from "~/types";

export const useLoaderLogic = () => {
    const [loadingPercentage, setLoadingPercentage] = useState<number>(0);
    const { setLoaded } = useTodoStore();

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
        void loadPublicAssets();

        return () => abortController.abort();
    }, [setLoaded]);

    useEffect(() => {
        console.log(loadingPercentage);
    }, [loadingPercentage]);

    // useEffect(() => {
    //     console.log(loaded);
    // }, [loaded]);
    
    return { loadingPercentage };
};
