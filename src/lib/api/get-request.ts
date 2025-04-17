import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "services/axios-instance";

export const getRequest = (url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get(`/${url}/`, config).then((res) => res.data);