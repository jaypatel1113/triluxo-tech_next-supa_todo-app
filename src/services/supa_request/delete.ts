import { catchAsyncError } from "~/middlewares/catch_async";
import { CustomError } from "~/middlewares/custom_error";
import { supabase } from "~/supabase";
import type { CustomErrorType } from "~/types/custom_error";
import type { databaseName,UpdateType } from "~/types/services/supa_request";

export const delete_data = async <T>(id: T, db: databaseName): Promise<UpdateType | CustomErrorType> => {
    return catchAsyncError<UpdateType>(async () => {
        // console.log(projectData);
        const { error } = await supabase
            .from(db)
            .delete()
            .eq('id', id);

        if (error) {
            // console.log(error);
            return new CustomError({ message: `Error deleting data (${db})` });
        } else {
            return { message: "Data deleted" };
        }
    });
}
