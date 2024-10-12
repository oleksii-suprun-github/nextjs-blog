import { render, screen, fireEvent } from '@testing-library/react';
import Form from '.';

const mockAction = vi.fn().mockResolvedValue(undefined);

describe('Form Component', () => {
  test('renders children correctly', () => {
    render(
      <Form action={mockAction}>
        <div>Test Child</div>
      </Form>,
    );

    const childElement = screen.getByText('Test Child');
    expect(childElement).toBeInTheDocument();
  });

  test('calls action on form submit', async () => {
    render(
      <Form action={mockAction}>
        <button type="submit">Submit</button>
      </Form>,
    );

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(mockAction).toHaveBeenCalled();
  });

  test('applies correct styling', () => {
    render(
      <Form action={mockAction}>
        <div>Test Child</div>
      </Form>,
    );

    const formElement = screen.getByTestId('form');
    expect(formElement).toHaveClass('flex flex-col text-gray-200');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <Form action={mockAction}>
        <div>Test Child</div>
      </Form>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
