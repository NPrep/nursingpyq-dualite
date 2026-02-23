import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PYQDirectory from './pages/PYQDirectory';
import PYQs from './pages/PYQs';
import Courses from './pages/Courses';
import Exams from './pages/Exams';
import SubjectTests from './pages/SubjectTests';
import MockTests from './pages/MockTests';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-white text-text-main">
        <Header />
        <main id="main-content" className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pyqs" element={<PYQs />} />
            <Route path="/pyq/:examId" element={<PYQDirectory />} />
            <Route path="/nursing-courses" element={<Courses />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/subject-tests" element={<SubjectTests />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </RouterWrapper>
  );
}

export default App;
