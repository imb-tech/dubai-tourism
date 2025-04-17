import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "services/axios-instance";

export const postRequest = <T>(
    url: string,
    payload: T,
    config: AxiosRequestConfig = {},
  ) =>
    axiosInstance
      .post(`/${url}/`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
        ...config,
      })
      .then((res) => res.data);