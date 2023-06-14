import { useCallback, useEffect, useState } from "react";

const useCountryCode = (border) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const url = `https://restcountries.com/v3.1/alpha?codes=${border}`;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error };
};

export default useCountryCode;
