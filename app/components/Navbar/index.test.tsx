import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '.';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

describe('Navbar Component', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the correct navigation links', () => {
    render(<Navbar />);
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);

    expect(links[0]).toHaveTextContent('Home');
    expect(links[0]).toHaveAttribute('href', '/');

    expect(links[1]).toHaveTextContent('About');
    expect(links[1]).toHaveAttribute('href', '#');

    expect(links[2]).toHaveTextContent('Events');
    expect(links[2]).toHaveAttribute('href', '#');

    expect(links[3]).toHaveTextContent('Contact');
    expect(links[3]).toHaveAttribute('href', '#');
  });
});
