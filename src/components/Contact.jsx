import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { PROFILE } from '../data';
import { GitHubIcon, LinkedInIcon, MailIcon, SendIcon, WhatsAppIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { name: 'Email', icon: MailIcon, action: `mailto:${PROFILE.email}` },
  { name: 'WhatsApp', icon: WhatsAppIcon, action: PROFILE.whatsapp },
  { name: 'LinkedIn', icon: LinkedInIcon, action: PROFILE.linkedin },
  { name: 'GitHub', icon: GitHubIcon, action: PROFILE.github },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning scroll trigger effect
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Name and Message are required!");
      return;
    }

    const formattedMsg = encodeURIComponent(
      `Hello ${PROFILE.first},\n\nMy name is ${formData.name}.\nEmail: ${formData.email || 'Not provided'}\n\nMessage: ${formData.message}`
    );
    const whatsappUrl = `${PROFILE.whatsapp}?text=${formattedMsg}`;

    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a0a0a] rounded-t-[40px] flex flex-col justify-center items-center py-20 px-6 md:px-12 overflow-hidden z-10"
    >
      {/* Massive Background Typography CONNECT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2 className="text-[25vw] font-black text-white/[0.03] tracking-tighter uppercase leading-none select-none">
          CONNECT
        </h2>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Section: Info & Socials */}
        <div className="flex flex-col space-y-8">
          <div ref={headingRef}>
            <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-yellow-400">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-[8vw] font-black text-white uppercase tracking-tighter leading-none mt-2">
              Let's Talk
            </h1>
          </div>

          <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
            Looking for an AI/ML intern, a collaborator on a GenAI or computer vision project, or just want to say hello? Reach out and let's build something useful.
          </p>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-yellow-400 tracking-widest block">
              Direct Mail
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-base md:text-lg font-black text-white hover:text-yellow-400 transition-colors"
            >
              {PROFILE.email}
            </a>
          </div>

          {/* Social Platforms Row */}
          <div className="flex flex-wrap gap-4 pt-4">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.action}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white bg-transparent transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                  title={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Section: Glassmorphism Form */}
        <div className="w-full max-w-xl bg-zinc-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-bold">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:border-white/50 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-bold">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:border-white/50 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-bold">
                Your Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:border-white/50 focus:outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <SendIcon />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
