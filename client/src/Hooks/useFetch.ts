import { useState, useEffect } from 'react';
import { getErrorMessage } from '../utils/utils';

export const useFetch = () => {
  const [productsData, setProductsData] = useState<any[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/graphql');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(
          JSON.stringify({
            query: `{
              categories(ids: "156126", locale: de_DE) {
                name
                articleCount
                childrenCategories {
                  name
                  urlPath
                }
                categoryArticles(first: 50) {
                  articles {
                    name
                    variantName
                    prices {
                      currency
                      regular {
                        value
                      }
                    }
                    images(
                      format: WEBP
                      maxWidth: 200
                      maxHeight: 200
                      limit: 1
                    ) {
                      path
                    }
                  }
                }
              }
            }`,
          })
        );

        xhr.onload = () => {
          if (xhr.status === 200) {
            const categoriesResp = JSON.parse(xhr.response);
            setLoading(false);
            setProductsData(categoriesResp.data.categories);
          } else {
            throw new Error(
              `Something Went Wrong, ${xhr.status} ${xhr.statusText}`
            );
          }
        };
      } catch (error) {
        setLoading(false);
        console.error(error);
        setError(getErrorMessage(error));
      }
    };

    fetchData();
  }, []);

  return { productsData, loading, error };
};
