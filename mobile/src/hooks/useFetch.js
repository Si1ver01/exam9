import { useCallback, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const doFetch = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        setLoading(true);
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        const formatData = Object.keys(data).map(el => ({
          ...data[el],
          id: el
        }));
        setResponse(formatData);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);
  const clearResponse = useCallback(() => setResponse(null), []);

  return [{ loading, error, response }, doFetch, clearResponse, clearError];
};

export default useFetch;
