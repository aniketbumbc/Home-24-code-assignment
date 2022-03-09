import React, { FC, useState } from 'react';
import { Article } from '../../@types/types';
import { articlePerPage } from '../../constant /constant';
import { formatter } from '../../utils/utils';
import Pagination from '../Pagination/Pagination';
import {
  BuyButtonStyled,
  CardContainerStyled,
  CardContentBxStyled,
  CardHeaderStyled,
  CardImageStyled,
  CardNotFound,
  CardStyled,
} from './Card.styled';

export interface CardProps {
  articleCount: number;
  articles: Article[];
  name: string;
}

const Card: FC<CardProps> = ({ articleCount, articles, name }) => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const pagesVisited: number = pageNumber * articlePerPage;

  const showArticles = articles.length ? (
    articles
      .slice(pagesVisited, pagesVisited + articlePerPage)
      .map((article: Article, index: number) => (
        <CardStyled key={article.name + index}>
          <CardImageStyled>
            <img src={article.images[0].path} alt={article.name} />
          </CardImageStyled>
          <CardContentBxStyled>
            <h3>{article.name}</h3>
            <p className='price'>
              {formatter.format(article.prices.regular.value / 100)}
            </p>
            <BuyButtonStyled> Add to Cart </BuyButtonStyled>
          </CardContentBxStyled>
        </CardStyled>
      ))
  ) : (
    <CardNotFound>
      Produkt nicht gefunden, bitte suchen Sie nach einem anderen Text!!!
    </CardNotFound>
  );

  return (
    <>
      <CardHeaderStyled>
        {name} ({articleCount})
      </CardHeaderStyled>
      <CardContainerStyled>{showArticles}</CardContainerStyled>
      {!!articles.length && (
        <Pagination
          articlesLength={articles.length}
          articlePerPage={articlePerPage}
          setPageNumber={setPageNumber}
        />
      )}
    </>
  );
};

export default Card;
