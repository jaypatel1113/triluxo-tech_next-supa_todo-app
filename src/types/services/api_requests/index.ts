// Define a generic type for the data you want to send to the backend
export type BackendDataType<T> = {
    route: "add" | "update" | "delete";
} & Record<string, T>;

// Define a generic type for the response data from the backend
export type BackendResponse<T> = {
    data: T;
};

// // Define a generic type for the error response from the backend
// export type BackendError = {
//     error: string;
// };
