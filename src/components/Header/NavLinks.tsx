import React from 'react';

const links = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'Blog', href: '#blog' },
];

export default function NavLinks({ mobile }: { mobile?: boolean }) {
  const baseClasses = "text-gray-700 hover:text-blue-500 transition-colors duration-200";
  const mobileClasses = "block px-3 py-2 text-base font-medium";
  const desktopClasses = "text-sm font-medium";

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
        >
          {link.name}
        </a>
      ))}
    </>
  );
}