import React from 'react';
import PYQExamHub from './PYQExamHub';

export default function NorcetPyq() {
  return (
    <PYQExamHub
      title="AIIMS NORCET Previous Year Questions"
      description="Practice previous year questions of AIIMS NORCET nursing officer exam."
      papers={['2024 paper', '2023 paper', '2022 paper']}
    />
  );
}
