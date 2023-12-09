import type { NextApiRequest, NextApiResponse } from "next";

import { catchAsyncError } from "~/middlewares/catch_async";
import { CustomError } from "~/middlewares/custom_error";
import { update_data } from "~/services/supa_request/update";
import { TodoType } from "~/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return catchAsyncError(async () => {
        const { todo } = req.body as { todo: TodoType };

        const data = await update_data<TodoType>(todo, "todo-list");

        if (data instanceof CustomError) {
            res.status(data.statusCode).json(data);
        } else {
            res.status(200).json(data);
        }
    });
}
