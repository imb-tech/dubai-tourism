import { baseURL } from "services/axios-instance";

interface FetchOptions {
    params?: Record<string, string | number | boolean>;
    revalidate?: number;
}


export async function fetchData<T = any>(
    endpoint: string,
    { params = {}, revalidate = 60 }: FetchOptions = {}
): Promise<T> {
    const queryString = new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {} as Record<string, string>)
    ).toString();

    const url = `${baseURL}${endpoint}${queryString ? `?${queryString}` : ''}`;

    const res = await fetch(url, {
        next: { revalidate },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data: T = await res.json();
    return data;
}
