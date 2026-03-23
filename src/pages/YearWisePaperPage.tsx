import React from 'react';
import Head from 'next/head';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

type YearWisePaperPageProps = {
  title: string;
  description: string;
};

export default function YearWisePaperPage({ title, description }: YearWisePaperPageProps) {
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Question Preview</h3>
            <p className="text-gray-600 leading-relaxed mb-0">Paper pattern snapshot and section-wise question mix.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Basic Answer Key</h3>
            <p className="text-gray-600 leading-relaxed mb-0">Short answer references for quick verification.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">PDF Access</h3>
            <p className="text-gray-600 leading-relaxed mb-0">Download and review this paper for revision sessions.</p>
          </div>
        </div>
      </section>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
