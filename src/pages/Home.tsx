import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Table from '../components/Table';
import { 
  TABLE_KEY_DETAILS, 
  TABLE_ELIGIBILITY, 
  TABLE_PATTERN, 
  UPCOMING_EXAMS_TEXT,
  EXAMS 
} from '../data/content';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Nursing Previous Year Questions – PYQs for All Nursing Exams in India</title>
        <meta name="description" content="Access Nursing Previous Year Questions (PYQs) for AIIMS NORCET, RRB Staff Nurse, DSSSB, ESIC, and State exams. The best source for nursing exam preparation." />
        <meta name="keywords" content="nursing previous year questions, nursing exam pyq, staff nurse previous year papers, nursing officer pyq" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
        Nursing Previous Year Questions – PYQs for All Nursing Exams in India
      </h1>

      {/* Importance of PYQs */}
      <section className="bg-accent/30 p-6 border-l-4 border-primary mb-10">
        <h2 className="!mt-0 !text-xl !mb-3 !border-none">Importance of Previous Year Questions</h2>
        <p className="mb-2">
          Previous Year Questions (PYQs) are widely considered the most reliable source for nursing exam preparation. 
          They serve as a compass for aspirants, revealing the exact <strong>exam pattern</strong>, <strong>topic weightage</strong>, and the nature of questions asked by different recruiting bodies.
        </p>
        <p className="mb-0">
          For both beginners and repeat aspirants, solving PYQs is non-negotiable. 
          They highlight frequently repeated questions and help identify high-yield topics. 
          In competitive Nursing Officer exams like AIIMS NORCET and RRB, where precision is key, mastering PYQs can significantly boost confidence and accuracy.
        </p>
      </section>

      {/* Section 1: What is Nursing? */}
      <section className="mb-10">
        <h2>What is Nursing?</h2>
        <p>
          Nursing is a distinct and vital professional discipline within the healthcare sector, focused on the care of individuals, families, and communities. 
          It serves as the backbone of healthcare systems worldwide, ensuring that patients maintain or recover optimal health and quality of life.
        </p>
        <p>
          Nurses play a multifaceted role in hospitals, clinics, and community health centers. 
          Their responsibilities extend far beyond basic care; they are tasked with patient monitoring, medication administration, assisting in complex clinical procedures, and providing essential health education to patients and their families.
        </p>
        <p>
          The profession demands a unique blend of rigorous clinical knowledge, ethical integrity, effective communication skills, and profound compassion. 
          From critical care units to rural health missions, nurses are often the first point of contact for patients, bridging the gap between doctors and the community. 
          Nursing is not just a job; it is a commitment to preserving life and dignity.
        </p>
      </section>

      {/* Section 2: Nursing Exams 2026 */}
      <section className="mb-10">
        <h2>Nursing Exams 2026</h2>
        <p>
          The year 2026 is poised to be a significant year for nursing aspirants in India, with numerous opportunities opening up across central and state government sectors. 
          Nursing exams are conducted at various levels, catering to different educational qualifications ranging from ANM and GNM to B.Sc. and M.Sc. Nursing.
        </p>
        <p>
          These exams are the gateway to stable and prestigious careers as Nursing Officers, Staff Nurses, and Community Health Officers. 
          Major recruitment drives are expected for positions in AIIMS, Railways (RRB), ESIC, and State Health Missions.
        </p>
        <p>
          The core curriculum tested in these exams generally spans Anatomy, Physiology, Medical-Surgical Nursing, Pediatrics, and Obstetrics & Gynecology. 
          However, the difficulty level varies significantly. 
          This is where <strong>Nursing PYQs</strong> become essential. 
          By analyzing papers from previous years, candidates can understand the evolving trends, the shift towards clinical-scenario based questions, and the specific demands of each examining authority.
        </p>
      </section>

      {/* Section 3: Key Details Table */}
      <section className="mb-10">
        <h3>Nursing Exam 2026 – Key Details</h3>
        <Table 
          headers={['Nursing Exam', 'Purpose', 'Subjects Focus']}
          rows={TABLE_KEY_DETAILS.map(item => [item.exam, item.purpose, item.focus])}
        />
      </section>

      {/* Section 4: Eligibility Table */}
      <section className="mb-10">
        <h3>Nursing Exams 2026 Eligibility</h3>
        <p className="text-sm mb-4">
          Eligibility criteria vary strictly based on the recruiting authority and the level of the post. Below is a general overview for major exams.
        </p>
        <Table 
          headers={['Exam Name', 'Age Limit', 'Educational Qualification', 'Registration']}
          rows={TABLE_ELIGIBILITY.map(item => [item.exam, item.age, item.qual, item.reg])}
        />
      </section>

      {/* Section 5: Exam Pattern */}
      <section className="mb-10">
        <h3>Nursing Exams 2026 Exam Pattern</h3>
        <p>
          Most nursing exams follow an objective type (Multiple Choice Questions) format. 
          Understanding the marking scheme, especially negative marking, is crucial. PYQs help decode these patterns clearly.
        </p>
        <Table 
          headers={['Nursing Exam', 'Mode', 'Duration', 'Syllabus', 'Marking Scheme']}
          rows={TABLE_PATTERN.map(item => [item.exam, item.mode, item.duration, item.syllabus, item.marking])}
        />
      </section>

      {/* Section 6: Syllabus */}
      <section className="mb-10">
        <h2>Nursing Exams 2026 Syllabus</h2>
        <p>
          The syllabus for nursing exams is vast, covering the entire 4-year B.Sc Nursing or 3-year GNM curriculum. 
          Core subjects include <strong>Medical-Surgical Nursing</strong>, <strong>Community Health Nursing</strong>, <strong>Pediatrics</strong>, <strong>Mental Health Nursing</strong>, and <strong>Midwifery</strong>.
        </p>
        <p>
          Apart from technical subjects, many exams like DSSSB and RRB also test General Aptitude, Reasoning, and Language skills. 
          Mapping the syllabus with PYQs allows students to prioritize high-weightage topics and avoid wasting time on low-yield areas.
        </p>
      </section>

      {/* Section 7: Admit Card */}
      <section className="mb-10">
        <h2>Nursing Exams 2026 Admit Card</h2>
        <p>
          Admit cards are typically released 7-10 days before the examination date on the official websites of the respective conducting bodies. 
          Candidates must download them using their registration number and password.
        </p>
        <p>
          It is critical to verify all details such as name, roll number, exam center, and timing immediately after downloading. 
          Any discrepancy should be reported to the authorities instantly to avoid last-minute panic.
        </p>
      </section>

      {/* UPCOMING EXAMS IN INDIA 2026 */}
      <section className="mb-12">
        <h2 className="text-black border-b-0 mb-6">Upcoming Nursing Exams in India 2026</h2>
        
        <div className="space-y-8">
          <article>
            <h3 className="text-primary mt-0">RRB Staff Nurse Exam 2026</h3>
            <p>{UPCOMING_EXAMS_TEXT.rrb}</p>
            <Link to="/pyq/rrb-staff-nurse" className="text-sm font-semibold">View RRB Staff Nurse PYQs &rarr;</Link>
          </article>

          <article>
            <h3 className="text-primary">AIIMS NORCET Exam 2026</h3>
            <p>{UPCOMING_EXAMS_TEXT.aiims}</p>
            <Link to="/pyq/aiims-norcet" className="text-sm font-semibold">View AIIMS NORCET PYQs &rarr;</Link>
          </article>

          <article>
            <h3 className="text-primary">DSSSB Staff Nurse Exam 2026</h3>
            <p>{UPCOMING_EXAMS_TEXT.dsssb}</p>
            <Link to="/pyq/dsssb-nursing-officer" className="text-sm font-semibold">View DSSSB PYQs &rarr;</Link>
          </article>

          <article>
            <h3 className="text-primary">JIPMER Nursing Officer Exam 2026</h3>
            <p>{UPCOMING_EXAMS_TEXT.jipmer}</p>
            <Link to="/pyq/jipmer-nursing-officer" className="text-sm font-semibold">View JIPMER PYQs &rarr;</Link>
          </article>

          <article>
            <h3 className="text-primary">ESIC Staff Nurse Exam 2026</h3>
            <p>{UPCOMING_EXAMS_TEXT.esic}</p>
            <Link to="/pyq/esic-staff-nurse" className="text-sm font-semibold">View ESIC PYQs &rarr;</Link>
          </article>

          <article>
            <h3 className="text-primary">OSSSC Nursing Officer Exam 2026</h3>
            <p>{UPCOMING_EXAMS_TEXT.osssc}</p>
            <Link to="/pyq/state-staff-nurse" className="text-sm font-semibold">View State Exam PYQs &rarr;</Link>
          </article>

          <article>
            <h3 className="text-primary">NHM State CHO Exam 2026</h3>
            <p>{UPCOMING_EXAMS_TEXT.nhm}</p>
            <Link to="/pyq/nhm-cho" className="text-sm font-semibold">View NHM CHO PYQs &rarr;</Link>
          </article>

          <article>
            <h3 className="text-primary">UPPSC / UPSSSC Staff Nurse Exam 2026</h3>
            <p>{UPCOMING_EXAMS_TEXT.uppsc}</p>
            <Link to="/pyq/state-staff-nurse" className="text-sm font-semibold">View UP State PYQs &rarr;</Link>
          </article>
        </div>
      </section>
    </div>
  );
}
