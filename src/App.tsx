import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ContactForm } from './components/ContactForm';
import { MarketAnalysis } from './pages/MarketAnalysis';
import { Finance } from './pages/Finance';
import { AiChat } from './pages/AiChat';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions/market-analysis" element={<MarketAnalysis />} />
          <Route path="/solutions/finance" element={<Finance />} />
          <Route path="/solutions/ai-chat" element={<AiChat />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;  // Add this line to export the App component
