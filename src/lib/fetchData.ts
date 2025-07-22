import { baseURL } from "services/axios-instance";
interface FetchOptions {
  params?: Record<string, string | number | boolean>;
  revalidate?: number;
  headers?: Record<string, string>;
}

export async function fetchData<T = any>(
  endpoint: string,
  { params = {}, revalidate = 60, headers = {} }: FetchOptions = {}
): Promise<T | null> {
  try {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    const url = `${baseURL}${endpoint}${queryString ? `?${queryString}` : ''}`;

    const res = await fetch(url, {
      next: { revalidate },
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    if (!res.ok) {
      throw new Error(`Fetch failed for ${url} - status ${res.status}`);
    }

    const data: T = await res.json();
    return data;
  } catch (error) {
    console.error(`Fetch error for ${endpoint}:`, error);
    return null;
  }
}
