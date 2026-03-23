import React from 'react';
import Head from 'next/head';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

export default function NursingPyqWithAnswers() {
  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>Nursing PYQ with Answers</title>
        <meta
          name="description"
          content="Basic answer keys are provided for reference. Detailed explanations are available on NPrep."
        />
      </Head>

      <section className="py-16 px-6 text-center bg-gray-50 rounded-2xl border border-gray-200">
        <h1 className="text-4xl font-bold mb-4">Nursing PYQ with Answers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Basic answer keys are provided for reference. Detailed explanations are available on NPrep.
        </p>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h2 className="text-2xl font-semibold mt-0 mb-3">What You Get Here</h2>
            <ul className="space-y-2 text-gray-600 list-none pl-0 mb-0">
              <li>• PYQ sets from major nursing exams</li>
              <li>• Short and basic answer keys</li>
              <li>• Quick question previews</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl shadow-sm bg-gray-50 border border-gray-200">
            <h2 className="text-2xl font-semibold mt-0 mb-3">For Detailed Learning</h2>
            <p className="text-gray-600 leading-relaxed mb-0">
              Detailed explanations and deep analysis are intentionally hosted on NPrep.
            </p>
          </div>
        </div>
      </section>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
