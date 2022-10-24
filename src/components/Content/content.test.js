import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'

import Content from './index.jsx';

describe('The Content Component', () => {
  it('Renders h1 with props as expected', () => {
    render(<Header greeting="Test"/>);

    let h1 = screen.getByTestId('header-h1');
    expect(h1).toHaveTextContent('Hello Test');

    let anotherh1Example = screen.getByText('Hello Test');
    expect(anotherh1Example).toBeTruthy();
    expect(anotherh1Example).toBeInTheDocument();

  })

})