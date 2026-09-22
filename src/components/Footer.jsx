import React from 'react';
import { Star } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data';
import { Avatar } from './Hero';
import { openCertificates } from './Certificates';
import { downloadResume } from '../utils/downloadResume';

export default function Footer() {
  const handleScrollTo = (sectionId) => {
    if (window.lenis) window.lenis.scrollTo(`#${sectionId}`, { duration: 1.2 });
    else document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const rows = [
    ['ANJALI', 'PRABHU', 'AI / ML', 'ANJALI', 'PRABHU', 'AI / ML'],
    ['GENAI', 'LLMS', 'RAG', 'GENAI', 'LLMS', 'RAG'],
    ['COMPUTER VISION', 'PYTHON', 'FASTAPI', 'COMPUTER VISION', 'PYTHON', 'FASTAPI'],
    ['REACT', 'DOCKER', 'AWS', 'REACT', 'DOCKER', 'AWS'],
  ];

  return (
    <footer className="relative w-full bg-[#f4c400] text-zinc-950 overflow-hidden py-16 px-6 md:px-12 flex flex-col items-center">
      {/* Layered Animated Background Marquee Rows (Low Opacity) */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none z-0 opacity-10">
        {rows.map((row, i) => (
          <div key={i} className={`w-full overflow-hidden flex whitespace-nowrap ${i ? '-mt-4' : ''}`}>
            <div className={`text-[12vw] font-black tracking-tighter uppercase ${i % 2 ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
              {row.join(' • ')} •
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl w-full flex flex-col items-center text-center z-10 space-y-8 select-text">
        {/* Avatar */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-white/20 filter blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-950 shadow-2xl relative z-10 transform transition-transform duration-500 hover:scale-105">
            <div className="w-full h-full [&_span]:!text-[3.5rem] [&_span]:!px-0">
              <Avatar />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-[#2563eb] text-white hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
          >
            <Star size={14} className="fill-white" />
            Connect on LinkedIn
          </a>
          <button
            onClick={() => handleScrollTo('contact')}
            className="bg-white text-zinc-950 hover:bg-zinc-100 hover:shadow-lg px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border border-zinc-200 cursor-pointer"
          >
            Message Me
          </button>
        </div>

        {/* Branding */}
        <div className="pt-4 select-none">
          <div className="text-3xl font-black uppercase tracking-widest">
            ANJALI<span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">.DEV</span>
          </div>
          <p className="text-[10px] uppercase font-extrabold tracking-[0.3em] text-zinc-800 mt-1">
            Building intelligent, useful software
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-black uppercase tracking-widest text-zinc-900">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => openCertificates()}
            type="button"
            className="hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Certificates
          </button>
          <button
            onClick={downloadResume}
            type="button"
            className="hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Resume
          </button>
        </div>

        <div className="w-full h-[1px] bg-zinc-950/20 rounded-full max-w-4xl"></div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-4xl pt-4 text-[10px] font-bold uppercase tracking-wider text-zinc-800 gap-4">
          <div>&copy; {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.</div>
          <div>{PROFILE.location}</div>
        </div>
      </div>
    </footer>
  );
}
