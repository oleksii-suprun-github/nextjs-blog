import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <div className="container navbar mx-auto mb-20 bg-brand-purple pt-12">
    <div className="navbar-start">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={150} height={50} />
      </Link>
    </div>
    <div className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1 text-lg text-stone-200">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Events</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <div className="dropdown dropdown-left bg-brand-dark-purple">
        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-brand-dark-purple p-2 shadow"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Events</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <a className="btn hidden bg-brand-pink text-stone-900 hover:bg-brand-light-pink md:flex">
        Feedback
      </a>
    </div>
  </div>
);

export default Navbar;
