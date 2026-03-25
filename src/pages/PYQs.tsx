import React, { useState } from 'react';
import Head from 'next/head';
import { EXAMS, EXAM_SPECIFIC_LINKS } from '../data/content';
import { FileText, ExternalLink, FolderOpen, Filter } from 'lucide-react';

export default function PYQs() {
  const [filter, setFilter] = useState('All');

  // Filter exams that actually have links
  const examsWithLinks = EXAMS.filter(exam => EXAM_SPECIFIC_LINKS[exam.id] && EXAM_SPECIFIC_LINKS[exam.id].length > 0);

  // Apply category filter
  const filteredExams = filter === 'All' 
    ? examsWithLinks 
    : examsWithLinks.filter(exam => {
        if (filter === 'AIIMS') return exam.id.includes('aiims');
        if (filter === 'RRB') return exam.id.includes('rrb');
        if (filter === 'State') return exam.category === 'State';
        return true;
      });

  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Nursing Previous Year Question Papers (PYQ) - All Exams</title>
        <meta name="description" content="Download Nursing Previous Year Questions for AIIMS NORCET, RRB, CHO, ESIC, DSSSB and more. Authentic memory-based papers." />
      </Head>

      <div className="mb-8">
        <h1 className="mb-3">Nursing Previous Year Question Papers</h1>
        <p className="text-lg text-gray-600">
          Access authentic memory-based papers and official question papers. Select a category below to filter.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', 'AIIMS', 'RRB', 'State'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              filter === cat 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredExams.length > 0 ? (
          filteredExams.map((exam) => (
            <section key={exam.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-yellow-50/50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                <FolderOpen className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-gray-900 m-0 border-none">{exam.name} PYQ</h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {EXAM_SPECIFIC_LINKS[exam.id].map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                      <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">
                        {link.title}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No papers found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
