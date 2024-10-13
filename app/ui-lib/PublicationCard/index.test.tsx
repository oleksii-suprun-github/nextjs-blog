import { render, screen } from '@testing-library/react';
import PublicationCard from '.';
import { describe, it, expect, vi } from 'vitest';
import { SanityPostPreview } from '@/app/types';

// Mock the urlFor function from Sanity
vi.mock('@/sanity/lib/image', () => ({
  urlFor: () => ({
    width: () => ({
      url: () => '/mock-image-url.jpg',
    }),
  }),
}));

const mockPost: SanityPostPreview = {
  title: 'Test Title',
  category: { title: 'Test Category', url: 'test-category' },
  previewText: 'This is a preview of the post.',
  slug: 'test-slug',
  image: {
    url: '/test-image.jpg',
    alt: 'Test Image',
  },
  publishedAt: '2024-10-12T12:00:00Z',
};

describe('PublicationCard Component', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(<PublicationCard {...mockPost} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the title, preview text, and creation date', () => {
    render(<PublicationCard {...mockPost} />);

    const titleElement = screen.getByText('Test Title');
    const previewTextElement = screen.getByText('This is a preview of the post.');
    const creationDateElement = screen.getByText('12 October 2024');

    expect(titleElement).toBeInTheDocument();
    expect(previewTextElement).toBeInTheDocument();
    expect(creationDateElement).toBeInTheDocument();
  });

  it('should render the image with correct attributes', () => {
    render(<PublicationCard {...mockPost} />);

    const imageElement = screen.getByAltText('Test Image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('mock-image-url.jpg'));
    expect(imageElement).toHaveAttribute('width', '400');
    expect(imageElement).toHaveAttribute('height', '400');
  });

  it('should render the link with the correct href', () => {
    render(<PublicationCard {...mockPost} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/publications/test-category/test-slug');
  });

  it('should render the Read More button', () => {
    render(<PublicationCard {...mockPost} />);

    const buttonElement = screen.getByRole('button', { name: 'Read More' });
    expect(buttonElement).toBeInTheDocument();
  });
});
