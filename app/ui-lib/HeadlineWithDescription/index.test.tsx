import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeadlineWithDescription from '.';

describe('HeadlineWithDescription Component', () => {
  it('should render correctly without link and match snapshot', () => {
    const { asFragment } = render(
      <HeadlineWithDescription headline="Test Headline" description="Test Description" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with link and match snapshot', () => {
    const { asFragment } = render(
      <HeadlineWithDescription
        headline="Test Headline"
        description="Test Description"
        link="/test-link"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render headline and description', () => {
    render(<HeadlineWithDescription headline="Test Headline" description="Test Description" />);

    const headlineElement = screen.getByText('Test Headline');
    const descriptionElement = screen.getByText('Test Description');

    expect(headlineElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should render the link when link prop is provided', () => {
    render(
      <HeadlineWithDescription
        headline="Test Headline"
        description="Test Description"
        link="/test-link"
      />,
    );

    const linkElement = screen.getByRole('link', { name: 'Go to category' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test-link');
  });

  it('should apply category styles when category prop is true', () => {
    render(
      <HeadlineWithDescription
        headline="Test Headline"
        description="Test Description"
        category={true}
      />,
    );

    const headlineElement = screen.getByText('Test Headline');
    const descriptionElement = screen.getByText('Test Description');

    expect(headlineElement).toHaveClass('text-5xl');
    expect(descriptionElement).toHaveClass('text-xl');
  });
});
