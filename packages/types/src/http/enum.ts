export enum HTTPMethod {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
}

export enum Action {
    Mutate = "mutate",
    Create = "create",
    Delete = "delete",
}

export enum StatusCodes {
    Ok = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    MultiStatus = 207,
    NotModified = 304,
    TemporaryRedirect = 307,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    PreconditionFailed = 412,
    RequestEntityTooLarge = 413,
    RequestedRangeNotSatisfiable = 416,
    Locked = 423,
    TooManyRequests = 429,
    RetryWith = 449,
    InternalServerError = 500,
    NotImplemented = 501,
    ServiceUnavailable = 503,
    ENOTFOUND = "ENOTFOUND",
    OperationPaused = 1200,
    OperationCancelled = 1201,
}