import Link from 'next/link';
import { footerNavLinks } from '@/app/utils';
import { YouTubeIcon, FacebookIcon, TwitterIcon } from '@/app/ui-lib/Icons';

const Footer = () => (
  <footer className="footer footer-center relative z-10 bg-brand-dark pb-16 pt-20 text-white">
    <nav className="flex flex-col gap-4 sm:flex-row">
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

export default Footer;
