import React, { FC, useState, useEffect } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import Loader from '../../Loader/Loader';
import { getFilterSeachResult } from '../../utils/utils';
import Card from '../Card/Card';
import SideNav from '../Side Nav/SideNav';
import { Input } from './SearchInput.styled';

interface SearchInputProps {
  articleCount: number;
  categoryArticles: any;
  name: string;
}

const SearchInput: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterData, setFilterData] = useState<any[]>([]);
  const { productsData, loading, error } = useFetch();
  let debounceTimer: any;

  const { articleCount, categoryArticles, childrenCategories, name } =
    productsData?.length && [...productsData].shift();

  useEffect(() => {
    let tempFilterData: any[] = [];
    if (categoryArticles && categoryArticles.articles) {
      tempFilterData = getFilterSeachResult(
        categoryArticles.articles,
        searchValue
      );
    }
    setFilterData(tempFilterData);
  }, [searchValue, productsData]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setSearchValue(value);
    }, 200);
  };
  return (
    <>
      {loading && !productsData?.length && <Loader />}

      <Input
        type='text'
        placeholder='Search'
        value={searchValue}
        onChange={handleOnChange}
      />
      {productsData && productsData.length && (
        <>
          <SideNav childrenCategories={childrenCategories} />
          <Card articleCount={articleCount} articles={filterData} name={name} />
        </>
      )}
    </>
  );
};
export default React.memo(SearchInput);
