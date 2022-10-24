import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'

import Article from './';

describe('The Article Component', () => {
  it('renders as expected', () => {
    render(<Article />);

    let article = screen.getByTestId('article');
    let h4 = screen.getByTestId('article-M');
    // let p = screen.getByTestId
    expect(article).toBeTruthy();
    expect(h4).toHaveTextContent('Lorem Ipsum');

  })

})