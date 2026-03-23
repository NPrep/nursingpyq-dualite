import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { SampleQuestionsBlock, NprepCtaBlock } from '../components/PyqPageExtras';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Nursing Previous Year Questions (PYQ)</title>
        <meta
          name="description"
          content="Access previous year questions for major nursing exams across India."
        />
      </Head>

      <h1>Nursing Previous Year Questions (PYQ)</h1>

      <p className="text-lg text-gray-700">
        Access previous year questions for major nursing exams across India.
      </p>

      <h2>Popular Exams</h2>
      <ul className="list-disc ml-6">
        <li><Link to="/norcet-pyq">AIIMS NORCET</Link></li>
        <li><Link to="/rrb-nursing-pyq">RRB Nursing Superintendent</Link></li>
        <li><Link to="/esic-nursing-pyq">ESIC Nursing Officer</Link></li>
        <li><Link to="/nhm-nursing-pyq">NHM Nursing Exams</Link></li>
      </ul>

      <h2>Why Solve PYQs?</h2>
      <ul className="list-disc ml-6">
        <li>Understand exam trends</li>
        <li>Identify important topics</li>
        <li>Improve accuracy</li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link to="/norcet-pyq">NORCET → /norcet-pyq</Link>
        <Link to="/rrb-nursing-pyq">RRB → /rrb-nursing-pyq</Link>
        <Link to="/esic-nursing-pyq">ESIC → /esic-nursing-pyq</Link>
        <Link to="/nursing-pyq-pdf-download">PDF → /nursing-pyq-pdf-download</Link>
      </div>

      <SampleQuestionsBlock />
      <NprepCtaBlock />
    </div>
  );
}
