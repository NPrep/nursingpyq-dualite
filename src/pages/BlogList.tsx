import React from 'react';
import { Link } from 'react-router-dom';
import Head from 'next/head';
import { BLOG_POSTS } from '../data/blogs';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Nursing Exam Preparation Blog - Tips, Strategies & Guides</title>
        <meta name="description" content="Read expert articles on Nursing Exam preparation, study strategies, book reviews, and exam updates for AIIMS NORCET, RRB, and more." />
      </Head>

      <div className="text-center mb-12">
        <h1 className="mb-4">Nursing Exam Insights & Strategies</h1>
        <p className="text-lg text-gray-600">
          In-depth guides, study plans, and expert advice to help you crack your nursing exams.
        </p>
      </div>

      <div className="grid gap-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <Link to={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors border-none mt-0">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <User className="w-4 h-4 text-gray-400" />
                  {post.author}
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
