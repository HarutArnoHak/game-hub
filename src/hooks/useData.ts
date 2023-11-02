import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Genre {
    id: number;
    name: string;
}

interface Response<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setGenres] = useState<T[]>([]);

    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<Response<T>>(endpoint)
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);

    return { data, error, isLoading };
};
export default useData;
