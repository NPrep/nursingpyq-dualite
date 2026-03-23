import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

export default function PYQs() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>All Nursing Exams PYQ Library</title>
        <meta name="description" content="Exam-wise and year-wise nursing previous year question papers." />
      </Head>

      <h1>All Nursing Exams PYQ Library</h1>
      <p className="text-lg text-gray-700">
        Browse exam-wise and year-wise previous year question papers from one place.
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-1">
        <li><Link to="/norcet-pyq">NORCET PYQ</Link></li>
        <li><Link to="/rrb-nursing-pyq">RRB Nursing PYQ</Link></li>
        <li><Link to="/esic-nursing-pyq">ESIC Nursing PYQ</Link></li>
        <li><Link to="/nhm-nursing-pyq">NHM Nursing PYQ</Link></li>
        <li><Link to="/nursing-pyq-pdf-download">Nursing PYQ PDF Download</Link></li>
        <li><Link to="/nursing-pyq-with-answers">Nursing PYQ with Answers</Link></li>
      </ul>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
