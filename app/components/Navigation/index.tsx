'use client';

import { MouseEventHandler } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const Navigation = ({ onClick = () => {} }: { onClick?: MouseEventHandler<HTMLAnchorElement> }) => {
  const path = usePathname();
  const isActiveLink = (href: string) => path === href;

  const navigationLinks = [
    { uid: 'home', label: 'Home', href: '/' },
    { uid: 'about', label: 'About', href: '/about' },
    { uid: 'publications', label: 'Publications', href: '/publications' },
  ];

  return (
    <div className="mb-12 mt-16 flex flex-col items-center lg:mb-0 lg:mt-0 lg:flex-row lg:items-start">
      {navigationLinks.map((link) => (
        <Link
          className={clsx(
            'mb-5 text-xl lg:mb-0 lg:mr-12 lg:text-lg',
            isActiveLink(link.href) && 'font-bold',
          )}
          key={link.uid}
          href={link.href}
          onClick={onClick}
        >
          <span className="text-stone-300 hover:text-stone-100">{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
