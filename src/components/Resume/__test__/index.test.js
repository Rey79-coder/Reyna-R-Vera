import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Resume from '..';

afterEach(cleanup);


describe('Resume component', () => {
    // First Test
    it('renders', () => {
        render(<Resume />);
      });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render Resume
        const { asFragment } = render(<Resume />);
        expect(asFragment()).toMatchSnapshot();
      });

    
  })