import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NAV_ITEMS, PROFILE } from '../data';
import { DownloadIcon } from './Icons';
import { CertificatesButton, openCertificates } from './Certificates';
import { downloadResume } from '../utils/downloadResume';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const linksRef = useRef([]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(!(currentScrollY > lastScrollY.current && currentScrollY > 100));
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-logo', { x: -40, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from(linksRef.current, { y: -20, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const handleScrollTo = (sectionId) => {
    setIsOpen(false);
    if (window.lenis) {
      window.lenis.scrollTo(`#${sectionId}`, { duration: 1.2 });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 backdrop-blur-md border-b border-white/5 bg-zinc-950/40 py-4 px-6 md:px-12 flex items-center justify-between ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Logo */}
        <div
          onClick={() => handleScrollTo('home')}
          className="nav-logo text-2xl font-black uppercase tracking-widest text-white cursor-pointer select-none group"
        >
          {PROFILE.first}<span className="text-yellow-400 group-hover:text-yellow-300 transition-colors drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">.dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold tracking-wide">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              ref={(el) => (linksRef.current[idx] = el)}
              onClick={() => handleScrollTo(item.id)}
              className="relative text-sm text-gray-300 hover:text-white transition-colors py-1 group uppercase tracking-widest cursor-pointer"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <CertificatesButton />

          <button
            onClick={downloadResume}
            type="button"
            title="Download Anjali's Resume (PDF)"
            className="hidden sm:flex items-center gap-2 bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
          >
            <DownloadIcon size={14} />
            Resume
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-white hover:text-yellow-400 transition-colors cursor-pointer p-1"
          >
            {isOpen ? <XIcon size={28} /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-3xl flex flex-col justify-center items-center gap-8">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors cursor-pointer"
          >
            <XIcon size={32} />
          </button>

          <div className="flex flex-col gap-6 text-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="text-4xl font-black text-gray-200 hover:text-yellow-400 transition-colors uppercase tracking-widest cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={(e) => {
                setIsOpen(false);
                downloadResume(e);
              }}
              type="button"
              className="mt-4 flex items-center justify-center gap-2 bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.5)] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-yellow-300 transition-all cursor-pointer"
            >
              <DownloadIcon size={16} />
              Download Resume
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                openCertificates();
              }}
              type="button"
              className="mt-2 flex items-center justify-center gap-2 border border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Certificates
            </button>
          </div>
        </div>
      )}
    </>
  );
}
