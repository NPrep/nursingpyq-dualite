import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { EXAMS } from '../data/content';

export default function Exams() {
  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>List of Nursing Exams in India 2026</title>
        <meta name="description" content="Complete list of Nursing Exams in India for 2026. AIIMS, RRB, JIPMER, DSSSB, and State Nursing Officer exams." />
      </Helmet>

      <h1 className="mb-8">Nursing Exams in India</h1>
      
      <div className="grid gap-6">
        {EXAMS.map((exam) => (
          <div key={exam.id} className="border border-gray-200 p-6 rounded-lg hover:border-primary/50 transition-colors bg-white">
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-2 border-none">{exam.name}</h2>
            <p className="text-gray-600 mb-4">{exam.label}</p>
            <div className="flex gap-4">
              <Link to={`/pyq/${exam.id}`} className="text-primary font-medium hover:underline">
                View PYQs
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 text-sm">Upcoming 2026</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
