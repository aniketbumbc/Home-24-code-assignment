import { useState, useEffect } from 'react';
import { fetchQuery } from '../graphQL/query';
import { getErrorMessage } from '../utils/utils';

export const useFetch = () => {
  const [productsData, setProductsData] = useState<any[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/graphql');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(
        JSON.stringify({
          query: fetchQuery,
        })
      );

      xhr.onload = () => {
        if (xhr.status === 200) {
          const categoriesResp = JSON.parse(xhr.response);

          setLoading(false);
          setProductsData(categoriesResp.data.categories);
        } else {
          setLoading(false);
          setError(
            getErrorMessage(
              ` Something Went Wrong ,${xhr.status} ${xhr.statusText}`
            )
          );
          throw new Error(
            `Something Went Wrong, ${xhr.status} ${xhr.statusText}`
          );
        }
      };
    };
    fetchData();
  }, []);

  return { productsData, loading, error };
};
