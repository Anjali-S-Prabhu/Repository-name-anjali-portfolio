import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE, CERTIFICATES } from '../data';
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon, DownloadIcon, AwardIcon } from './Icons';
import { openCertificates } from './Certificates';
import { downloadResume } from '../utils/downloadResume';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_PLATFORMS = [
  { name: 'LinkedIn', icon: LinkedInIcon, url: PROFILE.linkedin, color: 'hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:border-blue-500' },
  { name: 'GitHub', icon: GitHubIcon, url: PROFILE.github, color: 'hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:border-white' },
  { name: 'Email', icon: MailIcon, url: `mailto:${PROFILE.email}`, color: 'hover:text-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] hover:border-yellow-400' },
  { name: 'WhatsApp', icon: WhatsAppIcon, url: PROFILE.whatsapp, color: 'hover:text-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:border-green-500' },
];

function Avatar() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-yellow-950/40">
        <span className="flex text-[9rem] px-6 pb-2 leading-none font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 initials-shimmer select-none">
          {PROFILE.initials.split('').map((letter, idx) => (
            <span
              key={`${letter}-${idx}`}
              className="inline-block animate-letter-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>
    );
  }
  return (
    <img
      src={PROFILE.photo}
      alt={`${PROFILE.name} profile`}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
    />
  );
}

export { Avatar };

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const [activeWordIdx, setActiveWordIdx] = useState(0);
  const words = PROFILE.roles;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
        y: -50,
        opacity: 0,
      });
      gsap.to(imgRef.current, {
        scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
        y: 100,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen bg-zinc-950 text-white flex items-center px-6 md:px-16 overflow-hidden py-24 z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Text Content */}
        <div ref={textRef} className="flex flex-col justify-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-zinc-400">
            {PROFILE.eyebrow}
          </span>

          <h1 className="text-5xl md:text-[3.8vw] font-black uppercase leading-[0.95] tracking-tighter text-white">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 drop-shadow-sm">{PROFILE.name}</span>
          </h1>

          {/* Rolling Word Container */}
          <div className="h-[50px] overflow-hidden relative">
            {words.map((word, idx) => (
              <div
                key={word}
                className="absolute inset-0 text-2xl md:text-3xl font-extrabold text-zinc-100 transition-all duration-700 flex items-center"
                style={{
                  transform: `translateY(${(idx - activeWordIdx) * 100}%)`,
                  opacity: idx === activeWordIdx ? 1 : 0,
                }}
              >
                &amp;&nbsp;Aspiring <span className="text-yellow-400 ml-2 font-black">{word}</span>
              </div>
            ))}
          </div>

          <p className="text-zinc-400 max-w-lg text-sm md:text-base leading-relaxed font-medium">
            {PROFILE.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Social Icons */}
            <div className="flex gap-4">
              {SOCIAL_PLATFORMS.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 bg-zinc-900/60 transition-all duration-300 ${platform.color} hover:scale-110`}
                    title={platform.name}
                    aria-label={platform.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            {/* CTAs: Resume & Certificates */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={downloadResume}
                type="button"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer"
                title="Download Anjali's Resume (PDF)"
              >
                <DownloadIcon size={15} />
                Download Resume
              </button>

              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-white/20 hover:border-white/50 text-white/90 hover:text-white px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                title="View Resume in New Tab"
              >
                View PDF
              </a>

              <button
                onClick={() => openCertificates()}
                type="button"
                className="inline-flex items-center gap-2 border border-yellow-400/50 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.35)] text-yellow-400 px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer"
                title="View Certificates & Credentials"
              >
                <AwardIcon size={15} />
                Certificates ({CERTIFICATES.length})
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Hero Image */}
        <div className="flex justify-center items-center relative">
          <div className="absolute w-[80%] h-[80%] rounded-full bg-yellow-400/10 filter blur-3xl -z-10 animate-[pulse_6s_infinite]"></div>

          <div
            ref={imgRef}
            className="w-full max-w-[450px] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
}
