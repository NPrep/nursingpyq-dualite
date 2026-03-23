import React from 'react';

export function SampleQuestionsBlock() {
  return (
    <section className="py-12 px-6 bg-white border border-gray-200 rounded-2xl mt-8 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mt-0 mb-4">Sample Questions</h2>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-2">Q1: Example nursing question?</p>
          <ul className="space-y-2 text-gray-600 mb-0 list-none pl-0">
            <li>• A. Option 1</li>
            <li>• B. Option 2</li>
            <li>• C. Option 3</li>
            <li>• D. Option 4</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function NprepCtaBlock() {
  return (
    <section className="py-12 px-6 bg-gray-50 border border-primary/20 rounded-2xl mt-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mt-0 mb-3">Practice These Questions on NPrep</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Attempt previous year questions in test format with detailed explanations.
        </p>
        <ul className="space-y-2 text-gray-600 mb-4 list-none pl-0">
          <li>• Topic-wise PYQs</li>
          <li>• Detailed solutions</li>
          <li>• Mock tests</li>
          <li>• Performance analysis</li>
        </ul>
        <a
          href="https://nprep.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 no-underline"
        >
          Start Now
        </a>
      </div>
    </section>
  );
}
