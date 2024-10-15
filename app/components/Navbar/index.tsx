'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import Navigation from '../Navigation';
import { Drawer, Modal } from '@/app/ui-lib';
import FeedbackForm from '../FeedbackForm';
import clsx from 'clsx';

const Navbar = ({ transparent }: { transparent?: boolean }) => {
  const feedbackModalFormRef = useRef<HTMLDialogElement>(null);
  const drawerToggleRef = useRef<HTMLInputElement>(null);

  const drawerToggleHandler = () => {
    if (drawerToggleRef.current) {
      drawerToggleRef.current.checked = false;
    }
  };

  const feedbackFormRefHandler = () => {
    if (feedbackModalFormRef.current) {
      feedbackModalFormRef.current.showModal();
    }
  };

  return (
    <>
      <nav
        className={clsx(
          'navbar px-4 pb-20 pt-12',
          transparent ? 'bg-transparent' : 'bg-brand-purple',
        )}
      >
        <div className="container">
          <div className="navbar-start">
            <Link className="flex text-xl font-bold" href="/">
              NextJS Blog ©
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <Navigation />
          </div>
          <div className="navbar-end flex">
            <div className="lg:hidden">
              <Drawer toggleRef={drawerToggleRef} icon={<FiMenu size={38} />}>
                <Navigation onClick={drawerToggleHandler} />
                <a
                  onClick={feedbackFormRefHandler}
                  className="btn no-animation mx-auto w-2/3 border-0 bg-brand-pink text-stone-900 hover:bg-brand-light-pink"
                >
                  Leave a Feedback
                </a>
              </Drawer>
            </div>
            <a
              onClick={feedbackFormRefHandler}
              className="btn no-animation hidden border-0 bg-brand-pink text-stone-900 hover:bg-brand-light-pink lg:flex"
            >
              Leave a Feedback
            </a>
          </div>
        </div>
      </nav>
      <Modal modalRef={feedbackModalFormRef}>
        <FeedbackForm />
      </Modal>
    </>
  );
};

export default Navbar;
