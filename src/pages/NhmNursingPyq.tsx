import React from 'react';
import PYQExamHub from './PYQExamHub';

export default function NhmNursingPyq() {
  return (
    <PYQExamHub
      title="NHM Nursing Previous Year Questions"
      description="Practice previous year questions of NHM nursing exams."
      papers={['2024 paper', '2023 paper', '2022 paper']}
    />
  );
}
