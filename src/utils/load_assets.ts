// loadAssets.js

import type { Dispatch, SetStateAction } from "react";

import type { Asset } from "~/types";

export const loadAssets = (assets: Asset[], setLoadingPercentage: Dispatch<SetStateAction<number>>, signal: AbortSignal, setLoaded: (value: boolean) => void) => {
    const totalAssets = assets.length;
    let loadedAssets = 0;

    const onLoad = () => {
        loadedAssets++;
        const progress = (loadedAssets / totalAssets) * 100;
        const roundedProgress = Math.round(progress);
        setLoadingPercentage(roundedProgress);

        if (loadedAssets === totalAssets) {
            // All assets are loaded
            setLoadingPercentage(100);
            setLoaded(true);
        }
    };

    assets.forEach((asset) => {
        const fetchOptions: RequestInit = {
            cache: "default" as RequestCache,
            method: "GET",
            mode: "cors",
            signal,
        };

        fetch(asset.url, fetchOptions)
            .then((response) => {
                if (signal.aborted) return;

                if (response.ok) {
                    return response.blob();
                } else {
                    throw new Error(`Failed to fetch asset: ${asset.url}`);
                }
            })
            .then((blob) => {
                if (signal.aborted) return;

                if (blob instanceof Blob) {
                    if (asset.type === "image") {
                        const image = new Image();
                        image.src = URL.createObjectURL(blob);
                        image.onload = onLoad;
                        image.onerror = onLoad;
                    } else if (asset.type === "video") {
                        const video = document.createElement("video");
                        video.src = URL.createObjectURL(blob);
                        video.addEventListener("loadeddata", onLoad);
                        video.addEventListener("error", onLoad);
                    } else if (asset.type === "font") {
                        const fontName = asset.name ?? "FallbackFontName"; // Provide a default font name
                        const fontFace = new FontFace(fontName, `url('${URL.createObjectURL(blob)}')`);
                        fontFace.load().then(onLoad).catch(onLoad);
                        document.fonts.add(fontFace);
                    } else if (asset.type === "svg") {
                        // Handle SVG assets here
                        const objectURL = URL.createObjectURL(blob);
                        const img = new Image();
                        img.onload = onLoad;
                        img.onerror = onLoad;
                        img.src = objectURL;
                    } else if (asset.type === "generic") {
                        // Process generic asset here if needed                        
                        onLoad();
                    } else {
                        // Handle other asset types as needed
                        onLoad();
                    }
                }
            })
            .catch(onLoad);
    });
};



//   const assetUrls: { url: string; type: 'image' | 'video' | 'font' | 'svg' | 'generic'; name?: string }[] = [
//     { url: 'url1.jpg', type: 'image' },
//     { url: 'url2.jpg', type: 'image' },
//     { url: 'video1.mp4', type: 'video' },
//     { url: 'font.woff', type: 'font', name: 'MyCustomFont' },
//     { url: 'image.svg', type: 'svg' },
//     { url: 'generic_asset.dat', type: 'generic' },
//     // Add more assets with type information here
//   ];



// components/Loader.js

// import { useEffect, useState } from 'react';
// import Router from 'next/router';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// import { loadAssets } from './loadAssets';
// import { Asset, ApiAssetResponse } from '../types';

// NProgress.configure({ showSpinner: false });

// export default function Loader() {
//   const [loadingPercentage, setLoadingPercentage] = useState<number>(0);

//   useEffect(() => {
//     const start = () => {
//       NProgress.start();
//       setLoadingPercentage(0);
//     };

//     const setLoadingPercentage = (progress: number) => {
//       setLoadingPercentage(progress);
//       if (progress === 100) {
//         NProgress.done();
//       }
//     };

//     Router.events.on('routeChangeStart', start);

//     fetch('/api/assets')
//       .then((response) => response.json())
//       .then((assetUrls: ApiAssetResponse) => {
//         const assets: Asset[] = assetUrls;
//         loadAssets(assets, setLoadingPercentage);
//       })
//       .catch(console.error);

//     return () => {
//       Router.events.off('routeChangeStart', start);
//     };
//   }, []);

//   return (
//     <div className="progress-bar" style={{ width: `${loadingPercentage}%` }}>
//       {Math.round(loadingPercentage)}%
//     </div>
//   );
// }
