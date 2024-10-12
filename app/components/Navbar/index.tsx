'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import Drawer from '@/app/ui-lib/Drawer';
import Navigation from '../Navigation';

const Navbar = () => {
  const drawerToggleRef = useRef<HTMLInputElement>(null);

  const drawerToggleHandler = () => {
    if (drawerToggleRef.current) {
      drawerToggleRef.current.checked = false;
    }
  };

  return (
    <nav className="navbar mb-20 bg-brand-purple px-4 pt-12">
      <div className="container mx-auto">
        <div className="navbar-start">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={150} height={50} priority />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Navigation />
        </div>
        <div className="navbar-end flex">
          <div className="lg:hidden">
            <Drawer toggleRef={drawerToggleRef} icon={<FiMenu size={38} />}>
              <Navigation onClick={drawerToggleHandler} />
              <a className="btn mx-auto w-2/3 bg-brand-pink text-stone-900 hover:bg-brand-light-pink">
                Feedback
              </a>
            </Drawer>
          </div>
          <a className="btn hidden bg-brand-pink text-stone-900 hover:bg-brand-light-pink lg:flex">
            Feedback
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
