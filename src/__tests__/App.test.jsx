import App from '../App';

import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

describe('App', () => {
  it('renders learn react link', () => {
    expect(App).toBeTruthy();

    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
