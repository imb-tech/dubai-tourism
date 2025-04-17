import { onError } from "lib/onError";
import {
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { deleteRequest } from "lib/api/delete-request";



export const useDelete = (
  options?: Partial<UseMutationOptions<any, any, string>>,
  config?: AxiosRequestConfig,
) => {
  return useMutation<any, any, string>({
    mutationFn: (url) => deleteRequest(url, config),
    onError,
    ...(options || {}),
  });
};
