import type { NextApiRequest, NextApiResponse } from "next";

import { catchAsyncError } from "~/middlewares/catch_async";
import { CustomError } from "~/middlewares/custom_error";
import { fetch_data } from "~/services/supa_request/get";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return catchAsyncError(async () => {
        const data = await fetch_data('todo-list', { constraint: "*" });
        
        if (data instanceof CustomError) {
            res.status(data.statusCode).json(data);
        }  else {
            res.status(200).json(data);
        }
    });
}