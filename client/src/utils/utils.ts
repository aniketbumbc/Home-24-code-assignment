import { Article } from '../@types/types';

/**
 *  Convert error into error message
 * @param error
 */

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];
export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

export const getFilterSeachResult = (
  articlesData: Article[],
  searchValue: string
): Article[] => {
  if (!searchValue.length) {
    return articlesData;
  }
  const lowerCaseSearchValue: string = searchValue.toLocaleLowerCase();
  return articlesData.filter((article: Article) =>
    article.name.toLocaleLowerCase().includes(lowerCaseSearchValue)
  );
};
