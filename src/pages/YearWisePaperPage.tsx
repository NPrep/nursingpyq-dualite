import React from 'react';
import Head from 'next/head';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

type YearWisePaperPageProps = {
  title: string;
  description: string;
};

export default function YearWisePaperPage({ title, description }: YearWisePaperPageProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <h1>{title}</h1>
      <p className="text-lg text-gray-700">{description}</p>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
