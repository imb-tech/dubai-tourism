import { onError } from "lib/onError";
import {
  MutateOptions,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { postRequest } from "lib/api/post-request";



export const usePost = <P = any, D = any>(
  options?: Partial<UseMutationOptions<D, any, { url: string; payload: P }>>,
  config?: AxiosRequestConfig,
) => {
  const mutation = useMutation<D, any, { url: string; payload: P }>({
    mutationFn: ({ url, payload }) => postRequest(url, payload, config),
    onError,
    ...(options || {}),
  });

  const mutate = (
    url: string,
    payload: P,
    mutateOptions?: MutateOptions<D, any, { url: string; payload: P }, unknown>,
  ) => {
    mutation.mutate({ url, payload }, mutateOptions);
  };

  const mutateAsync = (
    url: string,
    payload: P,
    mutateOptions?: MutateOptions<D, any, { url: string; payload: P }, unknown>,
  ) => mutation.mutateAsync({ url, payload }, mutateOptions);

  return { ...mutation, mutate, mutateAsync };
};
