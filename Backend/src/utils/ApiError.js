class ApiError extends Error{
    constructor(
        message= "[APIERROR] something went wrong",
        statuscode,
        error = [],
        stack=""
    ){
        super(message);
        this.name = "ApiError";
        this.statuscode = statuscode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.error= error;
    
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError }