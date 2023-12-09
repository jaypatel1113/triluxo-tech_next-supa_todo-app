import type { CustomErrorType } from "~/types/custom_error";

// export const catchAsyncError = async <T>(fn: () => Promise<T>): Promise<T | CustomErrorType> => {
export const catchAsyncError = async <T>(fn: () => Promise<T | CustomErrorType>): Promise<T | CustomErrorType> => {
    try {
        return await fn();
    } catch (error) {
        throw error;
    }
};