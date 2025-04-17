import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "services/axios-instance";

export const patchRequest = <T>(
    url: string,
    payload: T,
    config?: AxiosRequestConfig,
  ) => axiosInstance.patch(`/${url}/`, payload, config).then((res) => res.data);
  
  export const putRequest = <T>(
    url: string,
    payload: T,
    config?: AxiosRequestConfig,
  ) => axiosInstance.put(`/${url}/`, payload, config).then((res) => res.data);