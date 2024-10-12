import { BaseSyntheticEvent, ReactNode } from 'react';

function Form({
  action,
  children,
}: {
  action: (e?: BaseSyntheticEvent) => Promise<void>;
  children: ReactNode;
}) {
  return (
    <form data-testid="form" onSubmit={action} className="flex flex-col text-gray-200">
      {children}
    </form>
  );
}

export default Form;
