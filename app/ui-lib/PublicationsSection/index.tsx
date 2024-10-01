import { ReactNode } from 'react';

function PublicationsSection({ children }: { children: ReactNode }) {
  return <div className="mb-24">{children}</div>;
}

export default PublicationsSection;
