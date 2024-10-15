import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PostHero from '.';

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    return <img src={src} alt={alt} {...rest} />;
  },
}));

// Mock Breadcrumbs
vi.mock('@/app/components/Breadcrumbs', () => ({
  __esModule: true,
  default: () => <nav aria-label="breadcrumb">Breadcrumbs</nav>,
}));

describe('PostHero Component', () => {
  const mockProps = {
    creationDate: 'April 27, 2024',
    title: 'Understanding React Testing',
    introduction:
      'This post delves into the best practices for testing React components using modern tools.',
    image: {
      alt: 'mock image',
      url: '/images/mock-image.png',
    },
  };

  it('renders correctly and matches the snapshot', () => {
    const { asFragment } = render(<PostHero {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
