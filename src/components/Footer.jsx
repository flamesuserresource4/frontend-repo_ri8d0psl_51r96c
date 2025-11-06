import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Shoe Care Services</h4>
            <p className="mt-2 text-sm text-slate-600 max-w-sm">
              Professional cleaning, restoration, and protection for your favorite footwear. Trusted by sneakerheads and luxury lovers.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-slate-900">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Mail size={16} className="text-blue-600" /> hello@shoecareservices.com</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-blue-600" /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-blue-600" /> 123 Blue Ave, Clean City</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-slate-900">Hours</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
              <li>Sat: 10:00 AM – 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-100 pt-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Shoe Care Services. All rights reserved.</p>
          <div className="mt-3 sm:mt-0">
            <a href="#" className="hover:text-blue-700">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-blue-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
