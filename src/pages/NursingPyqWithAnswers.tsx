import React from 'react';
import Head from 'next/head';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

export default function NursingPyqWithAnswers() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Nursing PYQ with Answers</title>
        <meta
          name="description"
          content="Basic answer keys are provided for reference. Detailed explanations are available on NPrep."
        />
      </Head>

      <h1>Nursing PYQ with Answers</h1>
      <p className="text-lg text-gray-700">
        Basic answer keys are provided for reference. Detailed explanations are available on NPrep.
      </p>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
