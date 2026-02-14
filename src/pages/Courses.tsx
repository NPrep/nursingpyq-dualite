import React from 'react';
import Head from 'next/head';
import { COURSES_LIST } from '../data/content';
import { CheckCircle, ExternalLink, Star } from 'lucide-react';

export default function Courses() {
  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>Nursing Exam Courses - Gold Batch, Rapid Revision & Test Series</title>
        <meta name="description" content="Join our premium nursing courses: Gold Batch for complete theory, Rapid Revision 2.0 for quick prep, and Test Series for extensive practice." />
      </Head>

      <div className="text-center mb-12">
        <h1 className="mb-4">Premium Nursing Exam Preparation</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the right plan for your preparation journey. Whether you need comprehensive theory, quick revision, or extensive practice, we have you covered.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {COURSES_LIST.map((course, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            <div className="p-6 bg-accent/30 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">{course.title}</h3>
              <div className="flex items-center gap-1 text-yellow-500 mb-0">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            
            <div className="p-6 flex-grow">
              <ul className="space-y-3 mb-6">
                {course.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <a 
                href={course.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Enroll Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
