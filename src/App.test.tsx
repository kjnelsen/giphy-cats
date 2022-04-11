import React from 'react';
import {describe, expect, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('My app', () => {
  it('should render the App', () => {
    const view = render(<App />);
    expect(view).toBeTruthy();
  });

});
