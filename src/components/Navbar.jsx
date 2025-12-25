'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? 'font-bold text-blue-600 underline'
      : 'hover:text-blue-500';

  return (
    <nav className="p-4 bg-gray-800 shadow-md flex justify-between items-center">
      <h1 className="text-white text-lg font-semibold">Artikel</h1>
      <div className="flex gap-4">
        <Link href="/" className={linkClass('/')}>Home</Link>
        <Link href="/blog" className={linkClass('/blog')}>Blog</Link>
        <Link href="/about" className={linkClass('/about')}>About</Link>
      </div>
    </nav>
  );
}
