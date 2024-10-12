import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Modal from './';

test('should render Modal component with children and close button', () => {
  const modalRef = createRef<HTMLDialogElement>();
  const childrenText = 'This is a modal content';

  render(
    <Modal modalRef={modalRef}>
      <p>{childrenText}</p>
    </Modal>,
  );

  // Assert that the dialog is rendered (including hidden elements)
  const dialogElement = screen.getByRole('dialog', { hidden: true });
  expect(dialogElement).toBeInTheDocument();

  // Assert that the children are rendered
  const childrenElement = screen.getByText(childrenText);
  expect(childrenElement).toBeInTheDocument();

  // Assert that the close button is rendered (including hidden elements)
  const closeButton = screen.getByRole('button', { name: /✕/, hidden: true });
  expect(closeButton).toBeInTheDocument();
});
