import { useCallback, useEffect, useState } from "react";

const useFetchCountries = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error };
};

export default useFetchCountries;
