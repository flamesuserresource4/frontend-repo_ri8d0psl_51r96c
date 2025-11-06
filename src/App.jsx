import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
