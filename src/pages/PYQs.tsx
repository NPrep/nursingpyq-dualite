import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

export default function PYQs() {
  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>All Nursing Exams PYQ Library</title>
        <meta name="description" content="Exam-wise and year-wise nursing previous year question papers." />
      </Head>

      <section className="py-16 px-6 text-center bg-gray-50 rounded-2xl border border-gray-200">
        <h1 className="text-4xl font-bold mb-4">All Nursing Exams PYQ Library</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Browse exam-wise and year-wise previous year question papers from one place.
        </p>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-4">Exam-wise Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { to: '/norcet-pyq', title: 'NORCET PYQ' },
              { to: '/rrb-nursing-pyq', title: 'RRB Nursing PYQ' },
              { to: '/esic-nursing-pyq', title: 'ESIC Nursing PYQ' },
              { to: '/nhm-nursing-pyq', title: 'NHM Nursing PYQ' },
              { to: '/nursing-pyq-pdf-download', title: 'Nursing PYQ PDF Download' },
              { to: '/nursing-pyq-with-answers', title: 'Nursing PYQ with Answers' },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="p-6 rounded-2xl shadow-sm border border-gray-200 bg-white no-underline hover:border-primary/50">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-0">Open curated PYQ papers and quick references.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
