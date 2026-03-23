import React from 'react';
import Head from 'next/head';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

export default function NursingPyqPdfDownload() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Nursing PYQ PDF Download</title>
        <meta name="description" content="Download previous year question papers for various nursing exams." />
      </Head>

      <h1>Nursing PYQ PDF Download</h1>
      <p className="text-lg text-gray-700">
        Download previous year question papers for various nursing exams.
      </p>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
