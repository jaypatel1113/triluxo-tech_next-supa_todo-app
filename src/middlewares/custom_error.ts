// type ErrorType = "GET_DETAILS_ERROR" | "POST_DETAILS_ERROR";

export class CustomError extends Error {
    // name: ErrorType;
    message: string;
    statusCode: number;
    success: boolean;

    constructor({message, statusCode}: {message?: string, statusCode?: number}) {
        super();
        // this.name = name;
        this.message = message ?? "Internal server_error";
        this.statusCode = statusCode ?? 500;
        this.success = false;
    }
}
