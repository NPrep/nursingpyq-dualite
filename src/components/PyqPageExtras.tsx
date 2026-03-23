import React from 'react';

export function SampleQuestionsBlock() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl p-6 mt-8">
      <h2 className="!mt-0 !mb-4 !border-none text-xl">Sample Questions</h2>
      <p className="mb-1">Q1: Example nursing question?</p>
      <p className="mb-1">A. Option 1</p>
      <p className="mb-1">B. Option 2</p>
      <p className="mb-1">C. Option 3</p>
      <p className="mb-0">D. Option 4</p>
    </section>
  );
}

export function NprepCtaBlock() {
  return (
    <section className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
      <h2 className="!mt-0 !mb-3 !border-none text-xl">Practice These Questions on NPrep</h2>
      <p className="text-gray-700 mb-3">
        Attempt previous year questions in test format with detailed explanations.
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Topic-wise PYQs</li>
        <li>Detailed solutions</li>
        <li>Mock tests</li>
        <li>Performance analysis</li>
      </ul>
      <a
        href="https://nprep.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 rounded-md bg-primary text-white font-semibold no-underline"
      >
        Start Practice
      </a>
    </section>
  );
}
