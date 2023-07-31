// Home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../src/pages/Home'

describe('Home Component', () => {
  it('renders the component without errors', () => {
    render(<Home />);
  });

  it('displays the first paragraph correctly', () => {
    const { getByText } = render(<Home />);
    const firstParagraph = getByText('JDM, which stands for Japanese Domestic Market, refers to vehicles manufactured in Japan and intended for sale in the Japanese market. JDM car sales have become increasingly popular in recent years, with car enthusiasts around the world seeking out unique and high-performance Japanese cars that were never officially sold in their home countries.');
    expect(firstParagraph).toBeInTheDocument();
  });

  it('displays the second paragraph correctly', () => {
    const { getByText } = render(<Home />);
    const secondParagraph = getByText('The JDM car market includes a wide range of vehicles, including sports cars, sedans, SUVs, and trucks, from popular brands such as Toyota, Honda, Nissan, Mazda, and Mitsubishi. Many of these vehicles are highly sought-after for their performance, reliability, and unique styling. JDM car sales can take various forms, including private sales between individuals, auctions, and imports through specialized dealerships.');
    expect(secondParagraph).toBeInTheDocument();
  });

  it('displays the third paragraph correctly', () => {
    const { getByText } = render(<Home />);
    const thirdParagraph = getByText('Importing JDM cars can be a complex process, as these vehicles often need to meet certain safety and emissions regulations before they can be legally driven on the roads. Despite the challenges of importing JDM cars, the popularity of these vehicles has continued to grow, with many enthusiasts willing to go through the process to get their hands on a rare and exciting piece of automotive history.');
    expect(thirdParagraph).toBeInTheDocument();
  });
});


