'use client';

import { MouseEventHandler } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { navigationLinks } from '@/app/utils';

const Navigation = ({ onClick = () => {} }: { onClick?: MouseEventHandler<HTMLAnchorElement> }) => {
  const path = usePathname();
  const isActiveLink = (href: string) => path.split('/').slice(1).includes(href.slice(1));

  return (
    <div className="mb-12 mt-16 flex flex-col items-center lg:mb-0 lg:mt-0 lg:flex-row lg:items-start">
      <ul className="menu menu-vertical lg:menu-horizontal">
        {navigationLinks.map((el) => (
          <>
            {el?.submenu?.length ? (
              <li>
                <details>
                  <summary
                    className={clsx(
                      'mb-5 text-xl hover:text-stone-100 lg:mb-0 lg:mr-8 lg:text-lg',
                      isActiveLink(el.href) && 'font-bold',
                    )}
                  >
                    {el.label}
                  </summary>
                  <ul className="rounded-t-none bg-brand-dark-purple p-2">
                    {el.submenu.map((subEl) => (
                      <li key={subEl.uid}>
                        <Link onClick={onClick} href={subEl.href}>
                          {subEl.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={el.uid}>
                <Link
                  className={clsx(
                    'mb-5 text-xl lg:mb-0 lg:mr-8 lg:text-lg',
                    isActiveLink(el.href) && 'font-bold',
                  )}
                  href={el.href}
                  onClick={onClick}
                >
                  <span className="hover:text-stone-100">{el.label}</span>
                </Link>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
