import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Table from '../components/Table';
import { 
  TABLE_KEY_DETAILS, 
  UPCOMING_EXAMS_TEXT,
  LATEST_UPDATES
} from '../data/content';
import { ArrowRight, FileText, Calendar, BookOpen, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Helmet>
        <title>Nursing Previous Year Questions – PYQs for All Nursing Exams in India</title>
        <meta name="description" content="Access Nursing Previous Year Questions (PYQs) for AIIMS NORCET, RRB Staff Nurse, DSSSB, ESIC, and State exams. The best source for nursing exam preparation." />
      </Helmet>

      {/* Hero / Latest PYQs Section */}
      <section className="mb-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Nursing Previous Year Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most reliable archive of memory-based papers for AIIMS NORCET, RRB, DSSSB, and State Nursing Exams.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 m-0 border-none flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Latest PYQs & Updates
            </h2>
            <Link to="/pyqs" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {LATEST_UPDATES.map((update, idx) => (
              <div key={idx} className="p-4 hover:bg-gray-50 flex items-center justify-between group transition-colors">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${update.date === 'New' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {update.date}
                  </span>
                  <Link to={`/pyq/${update.examId}`} className="font-medium text-gray-800 group-hover:text-primary transition-colors">
                    {update.title}
                  </Link>
                </div>
                <Link to={`/pyq/${update.examId}`} className="text-gray-400 group-hover:text-primary">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance of PYQs (Kept brief) */}
      <section className="bg-accent/50 p-6 rounded-lg border-l-4 border-primary mb-12">
        <h2 className="!mt-0 !text-xl !mb-2 !border-none text-gray-900">Why Solve PYQs?</h2>
        <p className="mb-0 text-gray-700">
          Previous Year Questions are the blueprint of your exam. They reveal the <strong>exact difficulty level</strong>, <strong>repeated topics</strong>, and <strong>weightage</strong> of subjects like MSN and OBG. 
        </p>
      </section>

      {/* Syllabus & Admit Card Hub (Authority Links) */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Syllabus Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="!mt-0 !text-xl !mb-0 !border-none">Exam Syllabus</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">Detailed topic-wise syllabus breakdowns.</p>
          <ul className="space-y-3">
            <li>
              <Link to="/blog/rrb-staff-nurse-syllabus-exam-pattern" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium">
                <ArrowRight className="w-4 h-4 text-gray-400" /> RRB Staff Nurse Syllabus 2026
              </Link>
            </li>
            <li>
              <Link to="/blog/aiims-norcet-2026-preparation-strategy" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium">
                <ArrowRight className="w-4 h-4 text-gray-400" /> AIIMS NORCET Syllabus & Weightage
              </Link>
            </li>
            <li>
              <Link to="/blog/dsssb-nursing-officer-strategy" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium">
                <ArrowRight className="w-4 h-4 text-gray-400" /> DSSSB Section A & B Syllabus
              </Link>
            </li>
            <li>
              <Link to="/blog/cho-exam-preparation-guide" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium">
                <ArrowRight className="w-4 h-4 text-gray-400" /> NHM CHO (Community Health) Syllabus
              </Link>
            </li>
          </ul>
        </section>

        {/* Admit Card / Official Updates Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h2 className="!mt-0 !text-xl !mb-0 !border-none">Admit Cards & Updates</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">Check official updates and download links.</p>
          <ul className="space-y-3">
             <li>
              <Link to="/pyq/rrb-staff-nurse" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium">
                <ArrowRight className="w-4 h-4 text-gray-400" /> RRB Staff Nurse Admit Card Info
              </Link>
            </li>
            <li>
              <Link to="/pyq/aiims-norcet" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium">
                <ArrowRight className="w-4 h-4 text-gray-400" /> AIIMS NORCET Admit Card Info
              </Link>
            </li>
            <li>
              <Link to="/pyq/esic-staff-nurse" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium">
                <ArrowRight className="w-4 h-4 text-gray-400" /> ESIC Staff Nurse Updates
              </Link>
            </li>
            <li>
              <Link to="/pyq/dsssb-nursing-officer" className="flex items-center gap-2 text-gray-700 hover:text-primary font-medium">
                <ArrowRight className="w-4 h-4 text-gray-400" /> DSSSB Exam Dates & Admit Card
              </Link>
            </li>
          </ul>
        </section>
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
