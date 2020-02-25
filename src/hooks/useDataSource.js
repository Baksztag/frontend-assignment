import { useState, useEffect } from 'react';

function useDataSource({ uri }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let status;

    fetch(uri)
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then(
        (responseData) => {
          if (status >= 400) {
            setError({
              status,
              error: responseData,
            });
          } else {
            setData(responseData);
          }
          setLoading(false);
        },
        (responseError) => {
          setError({
            status,
            error: responseError,
          });
          setLoading(false);
        },
      );
  }, [uri]);

  return {
    data,
    error,
    loading,
  };
}

export default useDataSource;
