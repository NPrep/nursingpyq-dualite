import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from 'next/head';
import Table from '../components/Table';
import {
  TABLE_KEY_DETAILS,
  UPCOMING_EXAMS_TEXT,
} from '../data/content';
import { ArrowRight, FileText, Calendar, BookOpen, ShieldCheck, ChevronDown } from 'lucide-react';

type ExamFilter = 'All' | 'NORCET' | 'RRB' | 'ESIC' | 'DSSSB' | 'CHO' | 'State Exams';

type PyqCard = {
  title: string;
  examType: Exclude<ExamFilter, 'All'>;
  examId: string;
  year: string;
  shift?: string;
  questionCount: number;
  paperType: 'Official' | 'Memory-based';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'New' | 'Recent';
};

const EXAM_FILTERS: ExamFilter[] = ['All', 'NORCET', 'RRB', 'ESIC', 'DSSSB', 'CHO', 'State Exams'];

const PYQ_CARDS: PyqCard[] = [
  { title: 'AIIMS NORCET 7 Prelims', examType: 'NORCET', examId: 'aiims-norcet', year: '2024', shift: 'Shift II', questionCount: 200, paperType: 'Official', difficulty: 'Hard', status: 'New' },
  { title: 'AIIMS NORCET 3', examType: 'NORCET', examId: 'aiims-norcet', year: '2022', shift: 'Shift I', questionCount: 200, paperType: 'Memory-based', difficulty: 'Medium', status: 'Recent' },
  { title: 'RRB Staff Nurse', examType: 'RRB', examId: 'rrb-staff-nurse', year: '2024', shift: 'Shift I', questionCount: 100, paperType: 'Official', difficulty: 'Medium', status: 'New' },
  { title: 'RRB Nursing Superintendent', examType: 'RRB', examId: 'rrb-staff-nurse', year: '2019', shift: 'Shift III', questionCount: 100, paperType: 'Memory-based', difficulty: 'Medium', status: 'Recent' },
  { title: 'UPSC ESIC Nursing Officer', examType: 'ESIC', examId: 'esic-staff-nurse', year: '2024', questionCount: 125, paperType: 'Official', difficulty: 'Hard', status: 'Recent' },
  { title: 'ESIC Staff Nurse', examType: 'ESIC', examId: 'esic-staff-nurse', year: '2019', shift: 'Shift I', questionCount: 125, paperType: 'Memory-based', difficulty: 'Easy', status: 'Recent' },
  { title: 'DSSSB Nursing Officer', examType: 'DSSSB', examId: 'dsssb-nursing-officer', year: '2019', shift: 'Shift II', questionCount: 200, paperType: 'Official', difficulty: 'Medium', status: 'Recent' },
  { title: 'Rajasthan CHO', examType: 'CHO', examId: 'nhm-cho', year: '2024', questionCount: 100, paperType: 'Official', difficulty: 'Medium', status: 'Recent' },
  { title: 'Haryana NHM CHO', examType: 'CHO', examId: 'nhm-cho', year: '2023', questionCount: 100, paperType: 'Memory-based', difficulty: 'Easy', status: 'Recent' },
  { title: 'BTSC Staff Nurse', examType: 'State Exams', examId: 'btsc-staff-nurse', year: '2025', questionCount: 100, paperType: 'Official', difficulty: 'Medium', status: 'New' },
];

const difficultyLabel = (difficulty: PyqCard['difficulty']) => {
  if (difficulty === 'Easy') return '★☆☆ Easy';
  if (difficulty === 'Medium') return '★★☆ Medium';
  return '★★★ Hard';
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<ExamFilter>('All');

  const groupedCards = useMemo(() => {
    const filtered = activeFilter === 'All'
      ? PYQ_CARDS
      : PYQ_CARDS.filter((card) => card.examType === activeFilter);

    return filtered.reduce<Record<string, PyqCard[]>>((acc, card) => {
      if (!acc[card.examType]) acc[card.examType] = [];
      acc[card.examType].push(card);
      return acc;
    }, {});
  }, [activeFilter]);

  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>Nursing Previous Year Questions – PYQs for All Nursing Exams in India</title>
        <meta name="description" content="Access Nursing Previous Year Questions (PYQs) for AIIMS NORCET, RRB Staff Nurse, DSSSB, ESIC, and State exams. The best source for nursing exam preparation." />
      </Head>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8">
        <main>
          <section className="mb-12">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
              <div className="rounded-[28px] border border-amber-100 bg-gradient-to-br from-white via-white to-amber-50 p-6 shadow-sm md:p-8 lg:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                  <ShieldCheck className="h-4 w-4" />
                  Trusted PYQ hub for nursing exams
                </div>

                <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-[1.05] text-gray-950 md:text-6xl">
                  Nursing Previous Year Questions
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
                  Solve exam-level PYQs for AIIMS NORCET, RRB, DSSSB, ESIC, CHO, and state nursing exams from one clean revision dashboard.
                </p>

                <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/pyqs"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white no-underline shadow-sm transition-colors hover:bg-primary/90"
                  >
                    Browse All PYQs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/exams"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 no-underline transition-colors hover:border-primary hover:text-primary"
                  >
                    Upcoming Exams
                    <Calendar className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mb-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <FileText className="h-4 w-4 text-primary" />
                      Updated Papers
                    </div>
                    <p className="mb-0 text-sm text-gray-600">
                      Year-wise and exam-wise PYQs arranged for fast solving.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Exam Coverage
                    </div>
                    <p className="mb-0 text-sm text-gray-600">
                      NORCET, RRB, ESIC, DSSSB, CHO, and state nursing exams.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Quick Revision
                    </div>
                    <p className="mb-0 text-sm text-gray-600">
                      Filter by exam instantly and jump straight into the latest papers.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="mb-0 text-sm font-semibold text-gray-900">Explore by exam</p>
                    <p className="mb-0 text-xs uppercase tracking-wide text-gray-400">Quick filters</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {EXAM_FILTERS.map((filter) => (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                          activeFilter === filter
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 bg-primary/10 px-6 py-4">
                  <h2 className="m-0 flex items-center gap-2 border-none text-lg font-bold text-gray-900">
                    <FileText className="h-5 w-5 text-primary" />
                    Latest PYQs & Updates
                  </h2>
                  <Link to="/pyqs" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                    View All <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-4 p-4">
                  {Object.entries(groupedCards).map(([examType, cards], groupIndex) => (
                    <details key={examType} open={groupIndex === 0} className="rounded-lg border border-gray-200 bg-gray-50/60">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold text-gray-800">
                        <span>{examType}</span>
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      </summary>
                      <div className="grid gap-3 p-3 md:grid-cols-2">
                        {cards.map((card) => (
                          <article key={`${card.examId}-${card.title}`} className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-sm">
                            <div className="mb-2 flex items-center justify-between gap-2">
                              <h3 className="m-0 text-base font-bold text-gray-900">{card.title}</h3>
                              <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${card.status === 'New' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                {card.status}
                              </span>
                            </div>
                            <div className="mb-3 space-y-1 text-sm text-gray-600">
                              <p className="mb-0"><strong>Year:</strong> {card.year}</p>
                              <p className="mb-0"><strong>Shift:</strong> {card.shift ?? 'N/A'}</p>
                              <p className="mb-0"><strong>Questions:</strong> {card.questionCount}</p>
                              <p className="mb-0"><strong>Type:</strong> {card.paperType}</p>
                              <p className="mb-0"><strong>Difficulty:</strong> {difficultyLabel(card.difficulty)}</p>
                            </div>
                            <Link
                              to={`/pyq/${card.examId}`}
                              className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white no-underline hover:bg-primary/90"
                            >
                              Solve <ArrowRight className="h-4 w-4" />
                            </Link>
                          </article>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-accent/50 p-6 rounded-lg border-l-4 border-primary mb-12">
            <h2 className="!mt-0 !text-xl !mb-2 !border-none text-gray-900">Why Solve PYQs?</h2>
            <p className="mb-0 text-gray-700">
              Previous Year Questions are the blueprint of your exam. They reveal the <strong>exact difficulty level</strong>, <strong>repeated topics</strong>, and <strong>weightage</strong> of subjects like MSN and OBG.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h2 className="!mt-0 !text-xl !mb-0 !border-none">Admit Cards & Updates</h2>
            </div>
            <p className="text-sm text-gray-500 mb-4">Official portals and trusted guidance links.</p>
            <ul className="space-y-4">
              <li className="border-b border-gray-100 pb-3">
                <a href="https://www.rrbcdg.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium no-underline">
                  <ArrowRight className="w-4 h-4 text-gray-400" /> RRB Staff Nurse Admit Card (Official)
                </a>
                <p className="text-xs text-gray-500 mb-0 mt-1">https://www.rrbcdg.gov.in/</p>
              </li>
              <li className="border-b border-gray-100 pb-3">
                <a href="https://www.aiimsexams.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium no-underline">
                  <ArrowRight className="w-4 h-4 text-gray-400" /> AIIMS NORCET Admit Card (Official)
                </a>
                <p className="text-xs text-gray-500 mb-0 mt-1">https://www.aiimsexams.ac.in/</p>
              </li>
              <li className="border-b border-gray-100 pb-3">
                <a href="https://upsconline.nic.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium no-underline">
                  <ArrowRight className="w-4 h-4 text-gray-400" /> ESIC Nursing Officer Admit Card (Official)
                </a>
                <p className="text-xs text-gray-500 mb-0 mt-1">https://upsconline.nic.in/</p>
              </li>
              <li>
                <Link to="/blog/dsssb-nursing-officer-strategy" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium no-underline">
                  <ArrowRight className="w-4 h-4 text-gray-400" /> How to download DSSSB Nursing Officer Admit Card
                </Link>
                <p className="text-xs text-gray-500 mb-0 mt-1">https://dsssbonline.nic.in/</p>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-2">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="!mt-0 !mb-0 !border-none text-2xl">Upcoming Exams Calendar</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <article className="border border-gray-200 p-5 rounded-lg hover:border-primary transition-colors">
                <h3 className="text-primary mt-0 text-lg">RRB Staff Nurse 2026</h3>
                <p className="text-sm mb-3 line-clamp-2">{UPCOMING_EXAMS_TEXT.rrb}</p>
                <Link to="/pyq/rrb-staff-nurse" className="text-sm font-bold underline decoration-primary/50">Get RRB PYQs &rarr;</Link>
              </article>

              <article className="border border-gray-200 p-5 rounded-lg hover:border-primary transition-colors">
                <h3 className="text-primary mt-0 text-lg">AIIMS NORCET 2026</h3>
                <p className="text-sm mb-3 line-clamp-2">{UPCOMING_EXAMS_TEXT.aiims}</p>
                <Link to="/pyq/aiims-norcet" className="text-sm font-bold underline decoration-primary/50">Get NORCET PYQs &rarr;</Link>
              </article>

              <article className="border border-gray-200 p-5 rounded-lg hover:border-primary transition-colors">
                <h3 className="text-primary mt-0 text-lg">DSSSB Staff Nurse</h3>
                <p className="text-sm mb-3 line-clamp-2">{UPCOMING_EXAMS_TEXT.dsssb}</p>
                <Link to="/pyq/dsssb-nursing-officer" className="text-sm font-bold underline decoration-primary/50">Get DSSSB PYQs &rarr;</Link>
              </article>

              <article className="border border-gray-200 p-5 rounded-lg hover:border-primary transition-colors">
                <h3 className="text-primary mt-0 text-lg">ESIC Staff Nurse</h3>
                <p className="text-sm mb-3 line-clamp-2">{UPCOMING_EXAMS_TEXT.esic}</p>
                <Link to="/pyq/esic-staff-nurse" className="text-sm font-bold underline decoration-primary/50">Get ESIC PYQs &rarr;</Link>
              </article>
            </div>

            <div className="mt-6 text-center">
              <Link to="/exams" className="inline-block px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                View Full Exam Calendar
              </Link>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-lg font-bold mb-4">Exam Quick Reference</h3>
            <Table
              headers={['Nursing Exam', 'Purpose', 'Subjects Focus']}
              rows={TABLE_KEY_DETAILS.map(item => [item.exam, item.purpose, item.focus])}
            />
          </section>
        </main>

        <aside className="order-last lg:order-none">
          <section className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="!mt-0 !text-lg !mb-0 !border-none">Exam Syllabus</h2>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wide bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Syllabus</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">SEO-friendly guides with updated topic-wise coverage.</p>
            <ul className="space-y-2">
              <li><Link to="/blog/rrb-staff-nurse-syllabus-exam-pattern" className="text-sm text-gray-700 hover:text-primary no-underline">→ RRB Staff Nurse Syllabus 2026</Link></li>
              <li><Link to="/blog/aiims-norcet-2026-preparation-strategy" className="text-sm text-gray-700 hover:text-primary no-underline">→ AIIMS NORCET Syllabus & Weightage</Link></li>
              <li><Link to="/blog/dsssb-nursing-officer-strategy" className="text-sm text-gray-700 hover:text-primary no-underline">→ DSSSB Section A & B Syllabus</Link></li>
              <li><Link to="/blog/cho-exam-preparation-guide" className="text-sm text-gray-700 hover:text-primary no-underline">→ NHM CHO Syllabus</Link></li>
            </ul>
          </section>
        </aside>
      </div>
      {/* UPCOMING EXAMS IN INDIA 2026 (Calendar Context) */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-2">
          <Calendar className="w-6 h-6 text-primary" />
          <h2 className="!mt-0 !mb-0 !border-none text-2xl">Upcoming Exams Calendar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <article className="border border-gray-200 p-5 rounded-lg hover:border-primary transition-colors">
            <h3 className="text-primary mt-0 text-lg">RRB Staff Nurse 2026</h3>
            <p className="text-sm mb-3 line-clamp-2">{UPCOMING_EXAMS_TEXT.rrb}</p>
            <Link to="/pyq/rrb-staff-nurse" className="text-sm font-bold underline decoration-primary/50">Get RRB PYQs &rarr;</Link>
          </article>

          <article className="border border-gray-200 p-5 rounded-lg hover:border-primary transition-colors">
            <h3 className="text-primary mt-0 text-lg">AIIMS NORCET 2026</h3>
            <p className="text-sm mb-3 line-clamp-2">{UPCOMING_EXAMS_TEXT.aiims}</p>
            <Link to="/pyq/aiims-norcet" className="text-sm font-bold underline decoration-primary/50">Get NORCET PYQs &rarr;</Link>
          </article>

          <article className="border border-gray-200 p-5 rounded-lg hover:border-primary transition-colors">
            <h3 className="text-primary mt-0 text-lg">DSSSB Staff Nurse</h3>
            <p className="text-sm mb-3 line-clamp-2">{UPCOMING_EXAMS_TEXT.dsssb}</p>
            <Link to="/pyq/dsssb-nursing-officer" className="text-sm font-bold underline decoration-primary/50">Get DSSSB PYQs &rarr;</Link>
          </article>

          <article className="border border-gray-200 p-5 rounded-lg hover:border-primary transition-colors">
            <h3 className="text-primary mt-0 text-lg">ESIC Staff Nurse</h3>
            <p className="text-sm mb-3 line-clamp-2">{UPCOMING_EXAMS_TEXT.esic}</p>
            <Link to="/pyq/esic-staff-nurse" className="text-sm font-bold underline decoration-primary/50">Get ESIC PYQs &rarr;</Link>
          </article>
        </div>
        
        <div className="mt-6 text-center">
           <Link to="/exams" className="inline-block px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
             View Full Exam Calendar
           </Link>
        </div>
      </section>

      <section className="mb-12">
        <div className="nprep-testimonial-cta">
          <h2 className="text-3xl font-semibold text-[var(--text-primary)]">Hear from real students</h2>
          <a className="cta" href="https://nprep.in/blogs?filter=NORCET+Success+Story" target="_blank" rel="noopener noreferrer">
            Read verified success stories on NPrep
          </a>
        </div>
      </section>

      {/* Key Details Table (Kept for quick info) */}
      <section className="mb-10">
        <h3 className="text-lg font-bold mb-4">Exam Quick Reference</h3>
        <Table 
          headers={['Nursing Exam', 'Purpose', 'Subjects Focus']}
          rows={TABLE_KEY_DETAILS.map(item => [item.exam, item.purpose, item.focus])}
        />
      </section>
    </div>
  );
}
