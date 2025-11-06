import React from 'react';
import { Shoe, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Shoe size={18} />
            </div>
            <span className="font-semibold text-xl tracking-tight text-blue-700">Shoe Care Services</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-slate-700 hover:text-blue-700 transition-colors">Services</a>
            <a href="#process" className="text-slate-700 hover:text-blue-700 transition-colors">Our Process</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-700 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Sparkles size={16} />
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
