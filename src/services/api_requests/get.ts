import axios, { type AxiosError } from "axios";

import { CustomError } from "../../middlewares/custom_error";

import type { CustomErrorType } from "~/types/custom_error";

const axiosInstance = axios.create({
    baseURL: "/api",
});

export const getData = async <T>(url: "get"): Promise<T> => {
    try {
        const response = await axiosInstance.get<T>(`/${url}`);
        
        if(response.status === 200) {
            return response.data;
        } else {
            throw new CustomError({ message: "error while fetching data" });
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<CustomErrorType>;
            if (axiosError.response) {
                throw new CustomError({ ...axiosError.response.data } as CustomErrorType);
            } else {
                throw new CustomError({ message: "something went wrong while fetching data" });
            }
        }

        // If there's an unhandled error, you can return CustomErrorType or an appropriate error
        throw new CustomError({ message: "Unhandled error occurred", statusCode: 400 },);
    }
};
