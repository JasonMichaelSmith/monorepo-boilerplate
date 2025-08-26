export const getData = async (): Promise<unknown> => {
    const url = new URL("https://api.restful-api.dev/objects");

    const headers = new Headers({
        "Content-Type": "application/json",
    });

    const params = new URLSearchParams({
        type: "test"
    });

    url.search = params.toString();

    const response = await fetch(url, { headers });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}