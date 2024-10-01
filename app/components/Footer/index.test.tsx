import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import Footer from './index';

describe('Footer Component', () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-01'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
