import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from ".."

const portfolio = { name: "portfolio", description: "Samples of the webpages I have developed" };

afterEach(cleanup)

describe('Portfolio component', () => {

  it('renders', () => {
    render(<Portfolio currentCategory={portfolio} />);
  });
})

it('matches snapshot', () => {
    const { asFragment } = render(<Portfolio currentCategory={portfolio} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders', () => {
    const { getByTestId } = render(<Portfolio currentCategory={portfolio} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portfolio')
  })