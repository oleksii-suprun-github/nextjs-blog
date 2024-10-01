import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '.';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, width, height, ...rest } = props;
    return (
      // Use a simple img tag for testing purposes
      <img src={src} alt={alt} width={width} height={height} {...rest} />
    );
  },
}));

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

describe('Hero Component', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the heading and description', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', {
        name: /NextJS Newsletter Demo Project/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /This demo application, built with NextJS, TypeScript & Tailwind allows users to check latest company`s news and events.\./i,
      ),
    ).toBeInTheDocument();
  });

  it('should have a Get Started button that links to /publications', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /Get Started/i });
    expect(link).toHaveAttribute('href', '/publications');
  });
});
