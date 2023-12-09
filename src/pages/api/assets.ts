// pages/api/assets.js

import type { NextApiRequest, NextApiResponse } from 'next';

import type { ApiAssetResponse } from '~/types';
import { getAssets } from '~/utils';

const apiRouteHandler = (req: NextApiRequest, res: NextApiResponse) => {
    const assets: ApiAssetResponse = getAssets();
    res.status(200).json(assets);
};

export default apiRouteHandler;
