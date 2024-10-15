import Link from 'next/link';
import { YouTubeIcon, FacebookIcon, TwitterIcon } from '@/app/ui-lib/Icons';

const Footer = () => {
  const footerNavLinks = [
    { uid: 'about', href: '/about', label: 'About me' },
    { uid: 'nextjs', href: '/publications/nextjs', label: 'NextJS topics' },
    { uid: 'nodejs', href: '/publications/nodejs', label: 'NodeJS topics' },
    { uid: 'python', href: '/publications/python', label: 'Python topics' },
  ];

  return (
    <footer className="footer footer-center relative z-10 bg-brand-purple p-10 text-white">
      <nav className="grid grid-flow-col gap-4">
        {footerNavLinks.map((link) => (
          <Link className="link-hover link" href={link.href} key={link.uid}>
            {link.label}
          </Link>
        ))}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#" title="Follow me on X" target="_blank">
            <TwitterIcon />
          </a>
          <a href="#" title="Follow on YouTube" target="_blank">
            <YouTubeIcon />
          </a>
          <a href="#" title="Follow on Facebook" target="_blank">
            <FacebookIcon />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
