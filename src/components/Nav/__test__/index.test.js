import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portfolio', description: 'Screenshoots of the functional developed webpages' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();



afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})



describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav 
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        expect(getByLabelText('cool')).toHaveTextContent('😎');
    });
})



describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav 
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
  
      expect(getByTestId('link')).toHaveTextContent('Reyna R Vera');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })