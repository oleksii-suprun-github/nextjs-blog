import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NotFound from '.';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

describe('NotFound Component', () => {
  const link = '/publications';

  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(<NotFound link={link} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the correct error messages', () => {
    render(<NotFound link={link} />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(screen.getByText('Sorry, we can`t find that publication.')).toBeInTheDocument();
  });

  it('should have a link back to the publications page', () => {
    render(<NotFound link={link} />);

    const backLink = screen.getByRole('link', {
      name: /Back to Latest Publications page/i,
    });
    expect(backLink).toHaveAttribute('href', link);
  });
});
