import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trails from './pages/Trails';
import Contact from './pages/Contact';
import Community from './pages/Community';

// Layout component to wrap pages with Navbar and Footer
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-stone-900">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trails" element={<Trails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="community" element={<Community />} />
          {/* Fallback for unknown routes */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-[50vh]">
              <h1 className="text-4xl font-bold text-stone-300 mb-4">404</h1>
              <p className="text-stone-500">Parece que te has salido del sendero.</p>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;