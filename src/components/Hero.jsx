import React from 'react';
import { Star, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-200">
              Premium Shoe Care
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Bring your shoes back to life with precision care
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              We specialize in deep cleaning, restoration, color refresh, and protection for sneakers, leather, and luxury footwear. Blue-first, quality-obsessed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 px-6 py-3 font-semibold ring-1 ring-blue-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Book Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-slate-700">
              <div className="flex items-center gap-2"><Star className="text-blue-600" size={18} /> 4.9/5 Rated</div>
              <div className="flex items-center gap-2"><Shield className="text-blue-600" size={18} /> Color-Safe</div>
              <div className="flex items-center gap-2"><Clock className="text-blue-600" size={18} /> 48h Turnaround</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-blue-200/40 blur-3xl rounded-full" aria-hidden />
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-1 shadow-2xl shadow-blue-600/30">
              <div className="h-full w-full rounded-3xl bg-white p-6 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop"
                  alt="Clean white sneaker on blue background"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
