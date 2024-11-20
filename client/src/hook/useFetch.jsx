import { useState, useEffect, useCallback } from "react";
import { toastSucces, toastError } from "../utils/toasAlert";
const useFetch = (url, options = { method: "GET" }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (customOptions) => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetch(`http://localhost:3000/${url}`, {
          ...options,
          ...customOptions,
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
            ...(customOptions?.headers || {}),
          },
        });
          
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
        toastSucces(result.message);
      } catch (err) {
        toastError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [url, options]
  );

  useEffect(() => {
    if (options.method === "GET") {
      fetchData();
    }
  }, [fetchData, options.method]);

  return { data, error, loading, fetchData };
};

export default useFetch;
