import Link from 'next/link';
import React from 'react';

const navLinks = [
  { href: '/', label: 'Bosh sahifa' },
  { href: '#about', label: 'Biz haqimizda' },
  { href: '#services', label: 'Xizmatlar' },
  { href: '#mygroup', label: 'MyGroup bron qilish' },
  { href: '#reviews', label: 'Foydalanuvchilar fikrlari' },
  { href: '#contact', label: 'Aloqa' },
];
function Navbar() {

  return (
    <div className="space-x-6">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href.startsWith('#') ? `/${link.href}` : link.href}
          className={`hover:text-green-600 text-white transition-all lg:px-0 px-6 duration-300 font-medium text-sm sm:text-md 2xl:text-lg`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
