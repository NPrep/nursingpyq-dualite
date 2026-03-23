import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>Nursing Previous Year Questions (PYQ)</title>
        <meta name="description" content="Access previous year questions for major nursing exams across India." />
      </Head>

      <section className="py-16 px-6 text-center bg-gray-50 rounded-2xl border border-gray-200">
        <h1 className="text-4xl font-bold mb-4">Nursing Previous Year Questions (PYQ)</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Access previous year questions for major nursing exams across India.
        </p>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-4">Popular Exams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/norcet-pyq" className="p-6 rounded-2xl shadow-sm border border-gray-200 bg-white no-underline hover:border-primary/50">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AIIMS NORCET</h3>
              <p className="text-gray-600 leading-relaxed mb-0">Browse previous year NORCET papers and question previews.</p>
            </Link>
            <Link to="/rrb-nursing-pyq" className="p-6 rounded-2xl shadow-sm border border-gray-200 bg-white no-underline hover:border-primary/50">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">RRB Nursing</h3>
              <p className="text-gray-600 leading-relaxed mb-0">Railway nursing superintendent PYQ collection by year.</p>
            </Link>
            <Link to="/esic-nursing-pyq" className="p-6 rounded-2xl shadow-sm border border-gray-200 bg-white no-underline hover:border-primary/50">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">ESIC Nursing</h3>
              <p className="text-gray-600 leading-relaxed mb-0">Access ESIC nursing officer previous question papers.</p>
            </Link>
            <Link to="/nhm-nursing-pyq" className="p-6 rounded-2xl shadow-sm border border-gray-200 bg-white no-underline hover:border-primary/50">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">NHM Nursing</h3>
              <p className="text-gray-600 leading-relaxed mb-0">NHM nursing exam PYQs for quick browsing and revision.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50 rounded-2xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold mt-0 mb-3">Why Solve PYQs?</h2>
            <ul className="space-y-2 text-gray-600 list-none pl-0 mb-0">
              <li>• Understand exam trends</li>
              <li>• Identify important topics</li>
              <li>• Improve accuracy</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold mt-0 mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-600 list-none pl-0 mb-0">
              <li>• <Link to="/norcet-pyq">NORCET → /norcet-pyq</Link></li>
              <li>• <Link to="/rrb-nursing-pyq">RRB → /rrb-nursing-pyq</Link></li>
              <li>• <Link to="/esic-nursing-pyq">ESIC → /esic-nursing-pyq</Link></li>
              <li>• <Link to="/nursing-pyq-pdf-download">PDF → /nursing-pyq-pdf-download</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
