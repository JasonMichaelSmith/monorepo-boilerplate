export type HttpBody = { [name: string]: Record<string, unknown> } | string;

export type HttpRequestElement = {
    [name: string]: string;
};

export type HttpRequestHeaders = HttpRequestElement;

export type HttpRequest = {
    url: Record<string, unknown>;
    headers: HttpRequestHeaders;
    query: HttpRequestElement;
    [name: string]: unknown;
};