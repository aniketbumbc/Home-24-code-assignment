import React, { FC, useState, useEffect } from 'react';
import { Article } from '../../@types/types';
import { getFilterSeachResult } from '../../utils/utils';
import { useFetch } from '../../Hooks/useFetch';
import { Input } from './SearchInput.styled';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import SideNav from '../Side Nav/SideNav';

const SearchInput: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterData, setFilterData] = useState<Article[]>([]);
  const { productsData, loading, error } = useFetch();

  const { articleCount, categoryArticles, childrenCategories, name } =
    productsData?.length && [...productsData].shift();

  useEffect(() => {
    let tempArticles: Article[] = [];
    if (categoryArticles && categoryArticles.articles) {
      tempArticles = getFilterSeachResult(
        categoryArticles.articles,
        searchValue
      );
    }
    setFilterData(tempArticles);
  }, [searchValue, productsData, categoryArticles]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchValue(value);
  };
  return (
    <>
      {!!error.length && !loading && <ErrorBoundary error={error} />}

      {loading && !productsData?.length && <Loader />}

      <Input
        type='text'
        placeholder='Search'
        data-testid='search-input'
        value={searchValue}
        onChange={handleOnChange}
      />
      {productsData && !!productsData.length && (
        <>
          <SideNav childrenCategories={childrenCategories} />
          <Card articleCount={articleCount} articles={filterData} name={name} />
        </>
      )}
    </>
  );
};
export default React.memo(SearchInput);
