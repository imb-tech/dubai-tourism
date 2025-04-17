import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "services/axios-instance";

export const deleteRequest = (url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete(`/${url}/`, config).then((res) => res.data);