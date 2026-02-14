import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Head from 'next/head';
import { EXAMS, EXAM_SPECIFIC_LINKS } from '../data/content';
import { FileText, AlertCircle, ExternalLink } from 'lucide-react';

export default function PYQDirectory() {
  const { examId } = useParams();
  const exam = EXAMS.find(e => e.id === examId) || { name: 'Nursing Exams', label: 'All Nursing Exams' };

  // Check if we have specific links for this exam
  const specificLinks = examId && EXAM_SPECIFIC_LINKS[examId] ? EXAM_SPECIFIC_LINKS[examId] : null;

  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>{`${exam.name} Previous Year Questions (PYQ) - Download PDF`}</title>
        <meta name="description" content={`Download ${exam.name} Previous Year Questions. Subject wise and Year wise PYQs for ${exam.label}.`} />
      </Head>

      <div className="mb-8">
        <div className="text-sm breadcrumbs mb-4 text-gray-500">
          <Link to="/">Home</Link> / <Link to="/exams">Exams</Link> / <span className="text-gray-900">{exam.name}</span>
        </div>
        <h1 className="mb-2">{exam.name} Previous Year Questions</h1>
        <p className="text-lg text-gray-600">{exam.label}</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-blue-800 mb-0">
          <strong>Note:</strong> These PYQs are categorized based on memory-based papers and official releases. 
          Practicing these will give you a direct insight into the difficulty level of the {exam.name} exam.
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        {/* Year-wise / Specific Papers Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4 mt-0">
            {specificLinks ? 'Official Papers & Tests' : 'Year-wise Papers'}
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {specificLinks ? (
              // Render Specific Links if available
              specificLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-gray-100 last:border-0 p-4 hover:bg-gray-50 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                    <span className="font-medium text-gray-700 group-hover:text-primary">
                      {link.title}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>
              ))
            ) : (
              // Render Generic Message if no specific links found
               <div className="p-8 text-center text-gray-500">
                  <p>No specific papers currently uploaded for this category.</p>
                  <Link to="/pyqs" className="text-primary hover:underline">View all available PYQs</Link>
               </div>
            )}
          </div>
        </section>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-bold mb-4">About {exam.name} Exam</h3>
        <p>
          The {exam.label} ({exam.name}) is a highly competitive examination. 
          Candidates are advised to thoroughly review the syllabus and exam pattern before attempting these previous year questions.
          Consistent practice of these papers will improve speed and accuracy.
        </p>
      </div>
    </div>
  );
}
