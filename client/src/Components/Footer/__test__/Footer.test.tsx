import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('Should have render correct Footer text', () => {
    render(<Footer />);
    const footerPara = screen.getByText(/Alle Preise sind/i);
    expect(footerPara).toBeInTheDocument();
  });

  test('Should not render incorrect Footer text', () => {
    render(<Footer />);
    const footerPara = screen.queryByText(/hello/i);
    expect(footerPara).not.toBeInTheDocument();
  });
});
