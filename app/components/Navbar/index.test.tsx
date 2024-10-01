import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '.';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, width, height, ...rest } = props;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} width={width} height={height} {...rest} />
    );
  },
}));

describe('Navbar Component', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the logo with correct attributes', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.svg');
    expect(logo).toHaveAttribute('width', '150');
    expect(logo).toHaveAttribute('height', '50');
  });

  it('should render navigation links in desktop view', () => {
    render(<Navbar />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks).toHaveLength(9);

    expect(navLinks[0]).toHaveTextContent('');
    expect(navLinks[0]).toHaveAttribute('href', '/');

    expect(navLinks[1]).toHaveTextContent('Home');
    expect(navLinks[1]).toHaveAttribute('href', '/');

    expect(navLinks[2]).toHaveTextContent('About');
    expect(navLinks[2]).toHaveAttribute('href', '#');

    expect(navLinks[3]).toHaveTextContent('Events');
    expect(navLinks[3]).toHaveAttribute('href', '#');

    expect(navLinks[4]).toHaveTextContent('Contact');
    expect(navLinks[4]).toHaveAttribute('href', '#');
  });

  it('should display the Feedback button on desktop view', () => {
    render(<Navbar />);
    const feedbackButton = screen.getByText('Feedback');
    expect(feedbackButton).toBeInTheDocument();
    expect(feedbackButton).toHaveClass(
      'btn hidden bg-brand-pink text-stone-900 hover:bg-brand-light-pink md:flex',
    );
  });
});
