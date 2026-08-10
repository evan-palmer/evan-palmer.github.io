import { Link, useLocation } from 'react-router';

import Cv from '~/assets/pdfs/cv.pdf';
import { cn } from '~/lib/utils';

const links = [
  { title: 'About', dest: '/' },
  { title: 'Publications', dest: '/publications' },
];

const navLinkClassName = 'text-greyscale-600 hover:text-primary-700 hover:underline';

function NavLink({ link }: { link: (typeof links)[number] }) {
  const location = useLocation();
  const isActive = link.dest === location.pathname;

  return (
    <Link
      to={link.dest}
      className={cn(navLinkClassName, isActive && 'font-medium text-greyscale-900')}
    >
      {link.title}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="mb-10">
      <Link to="/" className="text-xl font-semibold tracking-tight text-greyscale-900">
        Evan Palmer
      </Link>
      <p className="mt-1 text-sm text-greyscale-600">
        Robotics Ph.D. Student, Oregon State University
      </p>
      <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
        <a href={Cv} className={navLinkClassName}>CV</a>
      </nav>
    </header>
  );
}
