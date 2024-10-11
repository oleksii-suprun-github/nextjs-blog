'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = pathname.split('/').slice(1);

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {breadcrumbs.map((item, index) => {
          const isActive = breadcrumbs.length - 1 == index;
          const label = item[0].toUpperCase() + item.replaceAll('-', ' ').slice(1);
          const link = (index == 1 && `${breadcrumbs[0]}/${breadcrumbs[1]}`) || item;
          return <li key={index}>{isActive ? label : <Link href={`/${link}`}>{label}</Link>}</li>;
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
