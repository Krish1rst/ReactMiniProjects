import React, { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

export default useFetch;
