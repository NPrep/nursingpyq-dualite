import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MOCK_TESTS } from '../data/content';
import { Layout, ExternalLink } from 'lucide-react';

export default function MockTests() {
  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Free Nursing Mock Tests - NORCET, AIIMS, RRB, KGMU</title>
        <meta name="description" content="Attempt free mock tests for AIIMS NORCET, RRB Staff Nurse, KGMU, SGPGI, and other nursing officer exams. Simulate the real exam experience." />
      </Helmet>

      <h1 className="mb-2">Nursing Exam Mock Tests</h1>
      <p className="text-lg text-gray-600 mb-8">
        Simulate the real exam environment with our comprehensive mock tests. Designed for AIIMS NORCET, RRB, and other major nursing exams.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {MOCK_TESTS.map((test, idx) => (
          <a 
            key={idx} 
            href={test.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <Layout className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <span className="font-bold text-gray-800 block group-hover:text-primary transition-colors">
                  {test.title}
                </span>
                <span className="text-xs text-gray-500">Full Length Mock</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
          </a>
        ))}
      </div>
    </div>
  );
}
