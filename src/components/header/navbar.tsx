import { cn } from 'lib/utils';
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
function Navbar({ pathname = '/' }: { pathname: string | null }) {
  return (
    <div className="space-x-6 lg:block hidden">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href.startsWith('#') ? `/${link.href}` : link.href}
          className={cn(`hover:text-primary  transition-all lg:px-0 px-6 duration-300 font-medium text-sm sm:text-md 2xl:text-lg`,
            pathname==="/" ? "text-[#FFFFFFCC]" : ""
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
