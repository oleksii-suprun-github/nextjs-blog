import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { usePathname } from 'next/navigation';
import Breadcrumbs from '.';

// Mock usePathname from next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Breadcrumbs Component', () => {
  it('should render correctly and match snapshot', () => {
    (usePathname as Mock).mockReturnValue('/about/team');
    const { asFragment } = render(<Breadcrumbs />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Home link', () => {
    (usePathname as Mock).mockReturnValue('/about');
    render(<Breadcrumbs />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should render breadcrumbs based on pathname', () => {
    (usePathname as Mock).mockReturnValue('/about/team');
    render(<Breadcrumbs />);

    const breadcrumbLinks = screen.getAllByRole('link');
    expect(breadcrumbLinks).toHaveLength(2);

    expect(breadcrumbLinks[0]).toHaveTextContent('Home');
    expect(breadcrumbLinks[0]).toHaveAttribute('href', '/');

    expect(breadcrumbLinks[1]).toHaveTextContent('About');
    expect(breadcrumbLinks[1]).toHaveAttribute('href', '/about');

    const teamText = screen.getByText('Team');
    expect(teamText).toBeInTheDocument();
  });

  it('should display correct breadcrumb labels', () => {
    (usePathname as Mock).mockReturnValue('/publications/blog');
    render(<Breadcrumbs />);

    const breadcrumbLinks = screen.getAllByRole('link');
    expect(breadcrumbLinks).toHaveLength(2);

    expect(breadcrumbLinks[1]).toHaveTextContent('Publications');
    expect(breadcrumbLinks[1]).toHaveAttribute('href', '/publications');

    const webDevText = screen.getByText('Blog');
    expect(webDevText).toBeInTheDocument();
  });
});
