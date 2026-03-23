import React from 'react';
import PYQExamHub from './PYQExamHub';

export default function RrbNursingPyq() {
  return (
    <PYQExamHub
      title="RRB Nursing Previous Year Questions"
      description="Practice previous year questions of Railway Nursing Superintendent exam."
      papers={['2024 paper', '2023 paper', '2022 paper']}
    />
  );
}
