import React from 'react';
import PYQExamHub from './PYQExamHub';

export default function EsicNursingPyq() {
  return (
    <PYQExamHub
      title="ESIC Nursing Previous Year Questions"
      description="Practice previous year questions of ESIC Nursing Officer exam."
      papers={['2024 paper', '2023 paper', '2022 paper']}
    />
  );
}
