import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/norcet-pyq', label: 'NORCET PYQ' },
  { to: '/rrb-nursing-pyq', label: 'RRB PYQ' },
  { to: '/esic-nursing-pyq', label: 'ESIC PYQ' },
  { to: '/nhm-nursing-pyq', label: 'NHM PYQ' },
  { to: '/nursing-pyq-pdf-download', label: 'PYQ PDF' },
  { to: '/nursing-pyq-with-answers', label: 'With Answers' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-black tracking-tight hover:no-underline flex items-center">
          Nursing<span className="text-primary">PYQ</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm font-medium text-gray-600">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden nprep-mobile-drawer">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-600">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
