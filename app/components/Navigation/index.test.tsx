import { render } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { vi, Mock } from 'vitest';
import Navigation from '.';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Navigation Component', () => {
  it('renders correctly when no link is active', () => {
    (usePathname as Mock).mockReturnValue('/');

    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly when journal link is active', () => {
    (usePathname as Mock).mockReturnValue('/journal');

    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly when statistics link is active', () => {
    (usePathname as Mock).mockReturnValue('/statistics');

    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
