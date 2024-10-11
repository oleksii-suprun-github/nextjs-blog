'use client';

import { useEffect } from 'react';
import ErrorMessage from './components/ErrorMessage';

export const metadata = {
  title: 'Something went wrong | Agora Energiewende',
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('An unexpected error occurred:', error);
  }, [error]);

  return (
    <html>
      <body>
        <ErrorMessage error={error} reset={reset} />
      </body>
    </html>
  );
}