import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tours from './pages/Tours';
import CosmicGuide from './pages/CosmicGuide';
import Booking from './pages/Booking';

// Add scroll to top behavior on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/guide" element={<CosmicGuide />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;