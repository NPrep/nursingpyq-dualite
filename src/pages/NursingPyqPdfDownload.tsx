import React from 'react';
import Head from 'next/head';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

export default function NursingPyqPdfDownload() {
  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>Nursing PYQ PDF Download</title>
        <meta name="description" content="Download previous year question papers for various nursing exams." />
      </Head>

      <section className="py-16 px-6 text-center bg-gray-50 rounded-2xl border border-gray-200">
        <h1 className="text-4xl font-bold mb-4">Nursing PYQ PDF Download</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Download previous year question papers for various nursing exams.
        </p>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">NORCET PDFs</h3>
            <p className="text-gray-600 leading-relaxed mb-0">Find NORCET question papers in downloadable format.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">RRB PDFs</h3>
            <p className="text-gray-600 leading-relaxed mb-0">Access RRB nursing superintendent PYQ PDF files.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">ESIC & NHM PDFs</h3>
            <p className="text-gray-600 leading-relaxed mb-0">Download PYQ files for ESIC and NHM exams.</p>
          </div>
        </div>
      </section>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
