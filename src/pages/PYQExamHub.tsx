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
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <h1>{title}</h1>
      <p className="text-lg text-gray-700">{description}</p>

      <ul className="list-disc ml-6 mt-5">
        {papers.map((paper) => (
          <li key={paper}>{paper}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link to="/norcet-pyq">NORCET PYQ</Link>
        <Link to="/rrb-nursing-pyq">RRB Nursing PYQ</Link>
        <Link to="/esic-nursing-pyq">ESIC Nursing PYQ</Link>
        <Link to="/nursing-pyq-pdf-download">PYQ PDF Download</Link>
      </div>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
