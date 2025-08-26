import { useEffect, useState } from "react"

type Response<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export const useRouteApi = <T = unknown>(endpoint: string): Response<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(endpoint)
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, [endpoint]);

    return { data, loading, error };
}