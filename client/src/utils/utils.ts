import { Article } from '../@types/types';
import {
  portalCurrency,
  portalLanguage,
  portalStyle,
} from '../constant /constant';

/**
 *  Convert error into error message
 * @param error
 */

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const formatter = new Intl.NumberFormat(portalLanguage, {
  style: portalStyle,
  currency: portalCurrency,
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
