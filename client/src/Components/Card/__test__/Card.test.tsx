import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { articleCount, name, articles } from '../../../Test Data/testData';

describe('Card Component', () => {
  test('Should render correct header text with article count.', () => {
    render(
      <Card articleCount={articleCount} name={name} articles={articles} />
    );

    const cardHeader = screen.getByText(/Möbel/i);
    const cardArticleCount = screen.getByText(/78268/i);
    expect(cardHeader).toBeInTheDocument();
    expect(cardArticleCount).toBeInTheDocument();
  });

  test('Should render correct number of images.', () => {
    render(
      <Card articleCount={articleCount} name={name} articles={articles} />
    );

    const productImage = screen.getAllByRole('img');

    expect(productImage.length).toBe(2);
  });

  test('Should render correct cards with Names.', () => {
    render(
      <Card articleCount={articleCount} name={name} articles={articles} />
    );

    const productNameOne = screen.getByRole('heading', {
      name: /Premium Komfortmatratze Smood/i,
    });
    const productNameTwo = screen.getByRole('heading', {
      name: /Boxspringbett Kinx/i,
    });

    expect(productNameOne).toBeInTheDocument();
    expect(productNameTwo).toBeInTheDocument();
  });

  test('Should render multiple buttons', () => {
    render(
      <Card articleCount={articleCount} name={name} articles={articles} />
    );
    const addToCartBtns = screen.getAllByText(/Add to Cart/i, {
      selector: 'button',
    });
    expect(addToCartBtns.length).toBe(2);
  });

  test('Should render correct products price.', () => {
    render(
      <Card articleCount={articleCount} name={name} articles={articles} />
    );

    const producPriceOne = screen.getByText(/549,99 €/i);
    const producPriceTwo = screen.getByText(/1.649,99 €/i);

    expect(producPriceOne).toBeInTheDocument();
    expect(producPriceTwo).toBeInTheDocument();
  });
});
