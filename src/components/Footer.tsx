import React from 'react';
import { Link } from 'react-router-dom';
import { EXAMS } from '../data/content';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent mt-20 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-lg mb-4 text-gray-900">NursingPYQ</h4>
            <p className="text-sm text-gray-600 max-w-md mb-4">
              The most reliable source for Nursing Previous Year Questions (PYQs). 
              We provide authentic, exam-oriented content for AIIMS NORCET, RRB, DSSSB, and State Nursing exams.
              Our mission is to simplify nursing exam preparation through structured past papers.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 6377 6391 69</span>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-gray-900 mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/nursing-courses">Nursing Courses</Link></li>
              <li><Link to="/exams">Upcoming Exams</Link></li>
              <li><Link to="/blog">Preparation Blog</Link></li>
              <li><Link to="/mock-tests">Mock Tests</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-4">Popular PYQs</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              {EXAMS.slice(0, 5).map(exam => (
                <li key={exam.id}>
                  <Link to={`/pyq/${exam.id}`}>{exam.name} PYQ</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} NursingPYQ. All rights reserved.</p>
          <p className="text-xs text-gray-400">
            Disclaimer: This website is not an official government portal. It is a help portal designed to assist aspirants with nursing exam preparation. 
            All information is for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
