// animate props
export type AnimateProps = {
    children: React.ReactNode,
    effect: {
        whileHover: {
            scale?: number,
            scaleX?: number,
        }, 
        whileTap: {
            scale?: number,
            scaleX?: number,
        }
    },
    className?: string,
}

export type TodoType = {
    id: string;
    created_at: string;
    user_id: string;
    task: string;
}


// for loading all assets
export type AssetType = 'image' | 'video' | 'font' | 'svg' | 'generic';

export type Asset = {
    url: string;
    type: AssetType;
    name?: string | null;
};

export type ApiAssetResponse = Asset[];