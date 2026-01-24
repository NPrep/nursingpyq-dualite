import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SUBJECT_TESTS } from '../data/content';
import { FileText, ExternalLink } from 'lucide-react';

export default function SubjectTests() {
  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Subject Wise Nursing Tests - MSN, OBG, CHN, Pedia</title>
        <meta name="description" content="Practice subject-wise nursing tests for MSN, OBG, CHN, Pediatrics, Psychiatry, and more. Boost your preparation with focused topic tests." />
      </Helmet>

      <h1 className="mb-2">Subject Wise Nursing Tests</h1>
      <p className="text-lg text-gray-600 mb-8">
        Focus on specific subjects to strengthen your weak areas. These tests cover individual topics like Medical Surgical Nursing, Obstetrics, and more.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {SUBJECT_TESTS.map((test, idx) => (
          <a 
            key={idx} 
            href={test.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-gray-800 group-hover:text-primary transition-colors">
                {test.title} Test
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
          </a>
        ))}
      </div>
    </div>
  );
}
