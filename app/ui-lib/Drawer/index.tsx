'use client';

import { createContext, Dispatch, ReactElement, ReactNode, RefObject, SetStateAction } from 'react';

interface DrawerContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

const Drawer = ({
  icon,
  toggleRef,
  children,
}: {
  icon: ReactElement;
  toggleRef: RefObject<HTMLInputElement>;
  children: ReactNode;
}) => (
  <div className="drawer">
    <input ref={toggleRef} id="drawer-mobile" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content z-50">
      <label htmlFor="drawer-mobile" className="drawer-button">
        {icon}
      </label>
    </div>
    <div className="drawer-side z-50">
      <label htmlFor="drawer-mobile" aria-label="close sidebar" className="drawer-overlay"></label>
      <div className="menu min-h-full w-80 bg-brand-dark-purple p-4">{children}</div>
    </div>
  </div>
);

export default Drawer;
