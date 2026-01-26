import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans bg-white text-text-main">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
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
      </Router>
    </HelmetProvider>
  );
}

export default App;
