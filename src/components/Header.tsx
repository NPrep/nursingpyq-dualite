import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-black tracking-tight hover:no-underline flex items-center">
          Nursing<span className="text-primary">PYQ</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm font-medium text-gray-600">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/pyqs" className="hover:text-primary transition-colors">PYQs</Link></li>
            <li><Link to="/exams" className="hover:text-primary transition-colors">Exams</Link></li>
            <li><Link to="/subject-tests" className="hover:text-primary transition-colors">Subject Tests</Link></li>
            <li><Link to="/mock-tests" className="hover:text-primary transition-colors">Mock Tests</Link></li>
            <li><Link to="/nursing-courses" className="hover:text-primary transition-colors">Courses</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-600">
            <li><Link to="/" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/pyqs" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>PYQs</Link></li>
            <li><Link to="/exams" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>Exams</Link></li>
            <li><Link to="/subject-tests" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>Subject Tests</Link></li>
            <li><Link to="/mock-tests" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>Mock Tests</Link></li>
            <li><Link to="/nursing-courses" className="block hover:text-primary" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
