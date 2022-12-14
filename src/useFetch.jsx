import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
          .then((response) => {
            if(!response.ok) {
              throw Error('Could not fetch data for that resource');
            }
            return response.json();
          })
          .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setIsLoading(false);
          })
      }, [url]);

      return { data, isLoading, error }
}

export default useFetch;