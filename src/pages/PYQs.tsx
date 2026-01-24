import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EXAMS, EXAM_SPECIFIC_LINKS } from '../data/content';
import { FileText, ExternalLink, FolderOpen } from 'lucide-react';

export default function PYQs() {
  // Filter exams that actually have links
  const examsWithLinks = EXAMS.filter(exam => EXAM_SPECIFIC_LINKS[exam.id] && EXAM_SPECIFIC_LINKS[exam.id].length > 0);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Nursing Previous Year Question Papers (PYQ) - All Exams</title>
        <meta name="description" content="Download Nursing Previous Year Questions for AIIMS NORCET, RRB, CHO, ESIC, DSSSB and more. Authentic memory-based papers." />
      </Helmet>

      <div className="mb-8">
        <h1 className="mb-3">Nursing Previous Year Question Papers</h1>
        <p className="text-lg text-gray-600">
          Access authentic memory-based papers and official question papers for all major nursing exams in India. 
          Click on the links below to view the tests.
        </p>
      </div>

      <div className="space-y-8">
        {examsWithLinks.map((exam) => (
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
        ))}
      </div>
    </div>
  );
}
