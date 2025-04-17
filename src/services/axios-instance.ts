import axios from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
export const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
});


axiosInstance.interceptors.request.use((config) => {
    const language = localStorage.getItem('i18nextLng') || 'en';
    config.headers['Accept-Language'] = language;
    return config;
}, (error) => {
    return Promise.reject(error);
});