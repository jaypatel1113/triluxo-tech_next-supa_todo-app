import { supabase } from "~/supabase";

import { CustomError } from "~/middlewares/custom_error";
import { catchAsyncError } from "~/middlewares/catch_async";

import type { TodoType } from "~/types/index";
import type { CustomErrorType } from "~/types/custom_error";

type DataTypeMap = {
    "todo-list": TodoType;
};

type fetchDataOptions = {
    ascending?: boolean;
    returnSingle?: boolean;
    constraint: string;
};


export const fetch_data = async <T extends keyof DataTypeMap>(db: T, options: fetchDataOptions): Promise<DataTypeMap[T] | CustomErrorType> => {
    return catchAsyncError(async () => {
        const { ascending = false, returnSingle = false, constraint="*" } = options;

        // const { data, error } = await supabase
        const { data } = await supabase
            .from(db)
            .select(constraint)
            .order("created_at", { ascending });

        if (data === null || data === undefined) {
            return new CustomError({ message: `Data is null or undefined (${db})` });
        }

        if (returnSingle) {
            return ((data[0] as unknown) as DataTypeMap[T]) ?? new CustomError({ message: "Data not found" });
        } else {
            return ((data as unknown) as DataTypeMap[T]) ?? new CustomError({ message: "Data not found" });
        }
    });
};