import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { BLOG_POSTS } from '../data/blogs';
import { Calendar, User, Clock, ChevronRight, BookOpen } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Generate Table of Contents from Markdown content
  const generateTOC = (content: string) => {
    const lines = content.split('\n');
    const toc = [];
    for (const line of lines) {
      if (line.startsWith('## ')) {
        const title = line.replace('## ', '').trim();
        const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        toc.push({ id, title, level: 2 });
      } else if (line.startsWith('### ')) {
        const title = line.replace('### ', '').trim();
        const id = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        toc.push({ id, title, level: 3 });
      }
    }
    return toc;
  };

  const toc = generateTOC(post.content);

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
      </Head>

      {/* Sidebar / TOC */}
      <aside className="lg:w-1/4 order-2 lg:order-1">
        <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold border-b border-gray-100 pb-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Table of Contents
          </div>
          <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {toc.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.id}`}
                className={`block text-sm py-1.5 px-2 rounded-md transition-colors ${
                  item.level === 2 
                    ? 'font-medium text-gray-700 hover:bg-yellow-50 hover:text-primary' 
                    : 'ml-4 text-gray-500 hover:text-gray-900 border-l border-gray-200 pl-3'
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 order-1 lg:order-2">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 truncate max-w-[200px]">{post.title}</span>
        </div>

        {/* Header */}
        <header className="mb-8">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span>Originally published {post.date} • Content verified for 2026 cycle</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-blockquote:bg-yellow-50 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gray-700">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeSlug]}
            components={{
              table: ({node, ...props}) => (
                <div className="overflow-x-auto my-8 border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200" {...props} />
                </div>
              ),
              thead: ({node, ...props}) => <thead className="bg-gray-50" {...props} />,
              th: ({node, ...props}) => <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" {...props} />,
              td: ({node, ...props}) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border-t border-gray-100" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-100 pb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Related Articles Block */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Read More Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "RRB Staff Nurse 2026 Complete Guide", link: "#" },
              { title: "Top 10 Nursing Books Reviewed", link: "#" },
              { title: "How to Clear ESIC Nursing Exam", link: "#" },
              { title: "Subject Wise Weightage for NORCET", link: "#" },
              { title: "Best Online Coaching for Nursing", link: "#" },
              { title: "Download Previous Year Papers PDF", link: "/pyqs" },
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.link}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-sm transition-all group"
              >
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
