export type HttpBody = { [name: string]: any } | string;

export type HttpRequestElement = {
    [name: string]: string;
};

export type HttpRequestHeaders = HttpRequestElement;

export type HttpRequest = {
    url: Record<string, any>;
    headers: HttpRequestHeaders;
    query: HttpRequestElement;
    [name: string]: any;
};