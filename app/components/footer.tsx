const links = [
  { label: 'GitHub', href: 'https://github.com/evan-palmer' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/evanfpalmer/' },
  { label: 'Email', href: 'mailto:palmeeva@oregonstate.edu' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=qm0jBGcAAAAJ&hl=en' },
];

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-wrap gap-x-4 gap-y-1 border-t border-greyscale-300 pt-6 text-sm text-greyscale-600">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary-700 hover:underline"
        >
          {link.label}
        </a>
      ))}
    </footer>
  );
}
