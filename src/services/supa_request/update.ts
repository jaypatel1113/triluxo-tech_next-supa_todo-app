import { catchAsyncError } from "../../middlewares/catch_async";
import { CustomError } from "../../middlewares/custom_error";

import { supabase } from "~/supabase";
import type { CustomErrorType } from "~/types/custom_error";
import type { databaseName,UpdateType } from "~/types/services/supa_request";


export const update_data = async <T extends { id: string }>(new_data: T, db: databaseName): Promise<UpdateType | CustomErrorType> => {
    return catchAsyncError<UpdateType>(async () => {
        // console.log(new_data);
        // const { data, error } = await supabase
        const { error } = await supabase
            .from(db)
            .update(new_data)
            .eq('id', new_data.id);

        if (error) {
            console.log(error);
            return new CustomError({ message: `Error updating data (${db})` });
        } else {
            return { message: "Data updated" };
        }
    });
}
