import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HomepageHero from '.';

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

describe('HomepageHero Component', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(<HomepageHero />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the heading and description', () => {
    render(<HomepageHero />);
    expect(
      screen.getByRole('heading', {
        name: /NextJS Blog Demo Project/i,
      }),
    ).toBeInTheDocument();
  });

  it('should have a Get Started button that links to /publications', () => {
    render(<HomepageHero />);
    const link = screen.getByRole('link', { name: /Get Started/i });
    expect(link).toHaveAttribute('href', '/publications');
  });
});
