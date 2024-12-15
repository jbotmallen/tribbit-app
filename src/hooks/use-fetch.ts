import axios, { AxiosRequestConfig } from "axios";

export const useFetch = async (url: string, method: string = "GET", data?: any, headers?: Record<string, string>) => {
    try {
        // Construct base URL dynamically based on environment
        const baseURL = import.meta.env.VITE_BASE_API_URL;

        const config: AxiosRequestConfig = {
            method,
            url: baseURL + url,
            data,
            withCredentials: true, // To include cookies for CORS
            headers: {
                "Content-Type": "application/json", // Default to JSON content
                ...headers, // Add any custom headers
            },
        };

        const response = await axios(config);
        return response; // Return only the response data for convenience
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || "Something went wrong");
        } else if (error.request) {
            throw new Error("No response received from server");
        } else {
            throw new Error("Request failed: " + error.message);
        }
    }
};