import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Monitor, Cloud, Terminal, Sparkles, Users } from 'lucide-react';
import { SKILLS } from '../data';

const ICONS = { Cpu, Monitor, Cloud, Terminal, Sparkles, Users };

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = SKILLS.map((s) => ({ ...s, icon: ICONS[s.icon] }));

export default function Skills() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section and trigger progress tracking
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          // Map progress (0 to 1) to active card index (0 to SERVICES_DATA.length - 1)
          const index = Math.min(
            Math.floor(progress * SERVICES_DATA.length),
            SERVICES_DATA.length - 1
          );
          setActiveIdx(index);
        }
      });
    }, triggerRef);
    
    return () => ctx.revert();
  }, []);

  // Desktop active color helper
  const activeService = SERVICES_DATA[activeIdx];

  return (
    <div ref={triggerRef} className="relative select-none">
      <section
        id="skills"
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-1000"
        style={{ backgroundColor: `${activeService.color}22` }} // dynamic faint glow backdrop
      >
        {/* Massive Outlined Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <h2 className="text-[18vw] font-black uppercase text-transparent stroke-1 stroke-white/10 tracking-widest leading-none select-none">
            SKILLS
          </h2>
        </div>

        {/* 3D Half-Circle Card Carousel - Desktop */}
        <div className="hidden md:flex relative w-full h-[600px] items-center justify-center" style={{ perspective: 1000 }}>
          {SERVICES_DATA.map((card, idx) => {
            // Formula calculation offsets relative to active index
            const offset = idx - activeIdx;
            const angle = offset * (Math.PI / 6); // spacing between cards along half-circle
            const radius = 350; // pixels
            
            const x = Math.sin(angle) * radius;
            const y = radius - Math.cos(angle) * radius - 150;
            const z = -Math.abs(offset) * 80;
            
            const rotationZ = offset * 15;
            const scale = 1 - Math.abs(offset) * 0.12;
            const opacity = 1 - Math.abs(offset) * 0.35;

            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`absolute w-[360px] h-[480px] rounded-[30px] p-8 border backdrop-blur-xl shadow-2xl flex flex-col justify-between transition-all duration-700 cursor-default ${
                  card.darkColor
                } ${
                  idx === activeIdx
                    ? 'border-yellow-400/50 shadow-yellow-400/10'
                    : 'border-white/5 opacity-50'
                }`}
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rotationZ}deg) scale(${scale})`,
                  opacity: Math.max(opacity, 0),
                  zIndex: 10 - Math.abs(offset),
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon size={28} className="text-yellow-400" />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">
                    {card.tag}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight leading-none mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    Skill set
                  </span>
                  <span className="text-xs font-black text-yellow-400 tracking-wider">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe snap slider layout */}
        <div className="md:hidden w-full px-6 flex flex-col justify-center gap-6 select-text z-10">
          <span className="text-xs uppercase font-extrabold text-yellow-400 tracking-widest text-center">
            Skill Spectrum
          </span>
          <div className="w-full flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hidden pb-6">
            {SERVICES_DATA.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`flex-shrink-0 w-[80vw] h-[380px] rounded-3xl p-6 border border-white/10 backdrop-blur-md snap-center flex flex-col justify-between bg-zinc-900/90 shadow-xl`}
                >
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <Icon size={24} className="text-yellow-400" />
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-widest bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight leading-none mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-[10px] font-semibold text-zinc-500 uppercase">
                      Overview
                    </span>
                    <span className="text-xs font-black text-yellow-400">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
