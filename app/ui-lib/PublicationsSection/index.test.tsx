import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PublicationsSection from '.';

describe('PublicationsSection Component', () => {
  it('should render correctly and match snapshot', () => {
    const { asFragment } = render(
      <PublicationsSection>
        <div>Sample Content For Test</div>
      </PublicationsSection>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    render(
      <PublicationsSection>
        <div>Sample Content For Test</div>
      </PublicationsSection>,
    );

    const childElement = screen.getByText('Sample Content For Test');
    expect(childElement).toBeInTheDocument();
  });
});
