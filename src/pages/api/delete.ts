import type { NextApiRequest, NextApiResponse } from "next";
import type { TodoType } from "~/types";

import { catchAsyncError } from "~/middlewares/catch_async";
import { CustomError } from "~/middlewares/custom_error";
import { delete_data } from "~/services/supa_request/delete";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return catchAsyncError(async () => {
        const { id } = req.body as { id: TodoType["id"] };

        const data = await delete_data<TodoType["id"]>(id, "todo-list");

        if (data instanceof CustomError) {
            res.status(data.statusCode).json(data);
        } else {
            res.status(200).json(data);
        }
    });
}
