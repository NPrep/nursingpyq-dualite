import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-accent mt-20 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-900">NursingPYQ</h4>
            <p className="text-sm text-gray-600 max-w-md mb-4">
              All Nursing Exams PYQ Library for browsing and downloading previous year question papers.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-4">Exam Hubs</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/norcet-pyq">NORCET PYQ</Link></li>
              <li><Link to="/rrb-nursing-pyq">RRB Nursing PYQ</Link></li>
              <li><Link to="/esic-nursing-pyq">ESIC Nursing PYQ</Link></li>
              <li><Link to="/nhm-nursing-pyq">NHM Nursing PYQ</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-gray-900 mb-4">Resources</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/nursing-pyq-pdf-download">Nursing PYQ PDF Download</Link></li>
              <li><Link to="/nursing-pyq-with-answers">Nursing PYQ with Answers</Link></li>
              <li><a href="https://nprep.in" target="_blank" rel="noopener noreferrer">Practice on NPrep</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NursingPYQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
