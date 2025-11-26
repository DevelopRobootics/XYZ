import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Tours } from './pages/Tours';
import { Observatory } from './pages/Observatory';
import { Contact } from './pages/Contact';
import { StarGuide } from './components/StarGuide';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/observatory" element={<Observatory />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StarGuide />
      </div>
    </Router>
  );
}

export default App;