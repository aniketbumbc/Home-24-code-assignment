import { articles } from '../Test Data/testData';
import { formatter, getFilterSeachResult, getErrorMessage } from './utils';

describe('Utils Functions ', () => {
  test('Should give correct currency', () => {
    const actualResult = formatter.format(129903);
    expect(actualResult.charCodeAt(11)).toBe(8364); // charCode of '€' is 8364
  });

  test('Should filtter out correct result based on search value', () => {
    const searchValue = 'Premium';
    const resultArticle = getFilterSeachResult(articles, searchValue);
    expect(resultArticle.length).toBe(1);
    expect(resultArticle[0].name).toEqual('Premium Komfortmatratze Smood');
  });

  test('Should not filtter out result if no search value is present', () => {
    const searchValue = '';
    const resultArticles = getFilterSeachResult(articles, searchValue);
    expect(resultArticles.length).toBe(2);
    expect(resultArticles[1].name).toEqual('Boxspringbett Kinx');
  });

  test('Should send an error in the string format', () => {
    const error = new TypeError('Error message');
    expect(typeof error).toEqual('object');
    const resultError = getErrorMessage(error);
    expect(typeof resultError).toEqual('string');
  });

  test('Should not send an error in the object format', () => {
    const error = new TypeError('Error message');
    const resultError = getErrorMessage(error);
    expect(typeof resultError).not.toEqual('object');
  });
});
