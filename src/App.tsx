import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PYQs from './pages/PYQs';
import NorcetPyq from './pages/NorcetPyq';
import RrbNursingPyq from './pages/RrbNursingPyq';
import EsicNursingPyq from './pages/EsicNursingPyq';
import NhmNursingPyq from './pages/NhmNursingPyq';
import YearWisePaperPage from './pages/YearWisePaperPage';
import NursingPyqPdfDownload from './pages/NursingPyqPdfDownload';
import NursingPyqWithAnswers from './pages/NursingPyqWithAnswers';
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
            <Route path="/norcet-pyq" element={<NorcetPyq />} />
            <Route path="/rrb-nursing-pyq" element={<RrbNursingPyq />} />
            <Route path="/esic-nursing-pyq" element={<EsicNursingPyq />} />
            <Route path="/nhm-nursing-pyq" element={<NhmNursingPyq />} />
            <Route
              path="/rrb-nursing-2024-question-paper"
              element={<YearWisePaperPage title="RRB Nursing 2024 Question Paper" description="Download and review previous year questions." />}
            />
            <Route
              path="/norcet-2024-question-paper"
              element={<YearWisePaperPage title="NORCET 2024 Question Paper" description="Download and review previous year questions." />}
            />
            <Route
              path="/esic-2023-question-paper"
              element={<YearWisePaperPage title="ESIC 2023 Question Paper" description="Download and review previous year questions." />}
            />
            <Route path="/nursing-pyq-pdf-download" element={<NursingPyqPdfDownload />} />
            <Route path="/nursing-pyq-with-answers" element={<NursingPyqWithAnswers />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </RouterWrapper>
  );
}

export default App;
