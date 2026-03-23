import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

type PYQExamHubProps = {
  title: string;
  description: string;
  papers: string[];
};

export default function PYQExamHub({ title, description, papers }: PYQExamHubProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <section className="py-16 px-6 text-center bg-gray-50 rounded-2xl border border-gray-200">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-4">Year-wise Papers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {papers.map((paper) => (
              <div key={paper} className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{paper}</h3>
                <p className="text-gray-600 leading-relaxed mb-0">Previous year paper with quick answer key access.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50 rounded-2xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-0 mb-3">Explore More PYQ Hubs</h2>
          <ul className="space-y-2 text-gray-600 list-none pl-0 mb-0">
            <li>• <Link to="/norcet-pyq">NORCET PYQ</Link></li>
            <li>• <Link to="/rrb-nursing-pyq">RRB Nursing PYQ</Link></li>
            <li>• <Link to="/esic-nursing-pyq">ESIC Nursing PYQ</Link></li>
            <li>• <Link to="/nursing-pyq-pdf-download">PYQ PDF Download</Link></li>
          </ul>
        </div>
      </section>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
