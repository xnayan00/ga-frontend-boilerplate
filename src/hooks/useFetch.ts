import { useState, useEffect } from "react";
import api from "../api/axios";
import type { AxiosError } from "axios";

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(
    function fetchData() {
      let isMounted = true;

      async function getData(): Promise<void> {
        try {
          setState((prev) => ({ ...prev, loading: true, error: null }));
          const response = await api.get<T>(url);

          if (isMounted) {
            setState({
              data: response.data,
              loading: false,
              error: null,
            });
          }
        } catch (err) {
          if (isMounted) {
            const error = err as AxiosError;
            setState({
              data: null,
              loading: false,
              error: error.message || "An error occurred",
            });
          }
        }
      }

      getData();

      return function cleanup() {
        isMounted = false;
      };
    },
    [url]
  );

  return state;
}
