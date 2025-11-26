import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import PropertyDetail from './pages/PropertyDetail';
import { Geminiair } from './components/Geminiair';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propiedades" element={<Properties />} />
          <Route path="/propiedad/:id" element={<PropertyDetail />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Geminiair />
      </Layout>
    </HashRouter>
  );
};

export default App;