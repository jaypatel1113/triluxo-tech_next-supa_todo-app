import axios from "axios";

import type { BackendDataType, BackendResponse } from "~/types/services/api_requests";
// import type { AxiosResponse, AxiosError } from "axios";

// Define a generic function to send data to the backend
export const insert_data = async <T>(data: { item: T; route: BackendDataType<T>['route'] }): Promise<BackendResponse<T>> => {
    try {
        const { item, route } = data;
        
        const payload = { todo: item };
        const response = await axios.post(`/api/${route}`, payload);

        return response.data as BackendResponse<T>;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error in axios error:", error);
        } else {
            console.error("Error in send data:", error);
        }
        throw error;
    }
};
