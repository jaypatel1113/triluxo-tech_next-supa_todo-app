import { supabase } from "~/supabase";

import { catchAsyncError } from "~/middlewares/catch_async";
import { CustomError } from "~/middlewares/custom_error";

import type { CustomErrorType } from "~/types/custom_error";
import type { UpdateType, databaseName } from "~/types/services/supa_request";

export const insert_data = async <T>(new_data: T, db: databaseName): Promise<UpdateType | CustomErrorType> => {
    return catchAsyncError<UpdateType>(async () => {
        // console.log(new_data);
        // const { data, error } = await supabase
        const { error } = await supabase
            .from(db)
            .upsert([new_data]);

        if (error) {
            // console.log(error);
            return new CustomError({ message: `Error inserting data (${db})` });
        } else {
            // console.log(data);
            return { message: "Data inserted" };
        }
    });
}
