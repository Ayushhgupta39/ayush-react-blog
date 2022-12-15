import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortConst = new AbortController();

    fetch(url, { signal: abortConst.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => abortConst.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
