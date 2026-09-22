import React from 'react';
import { JOURNEY, CERTIFICATES } from '../data';
import { AwardIcon } from './Icons';
import { openCertificates } from './Certificates';

const TYPE_STYLES = {
  Education: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
  Experience: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Achievement: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20',
  Certification: 'text-fuchsia-300 bg-fuchsia-400/10 border-fuchsia-400/20',
};

function Card({ item }) {
  const isCert = item.type === 'Certification' || item.org?.toLowerCase().includes('certificate');

  return (
    <div
      onClick={isCert ? () => openCertificates() : undefined}
      className={`inline-block w-[300px] md:w-[450px] bg-zinc-900/80 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-lg whitespace-normal align-top transition-all duration-300 ${
        isCert ? 'cursor-pointer hover:border-yellow-400/40 hover:bg-zinc-900 group' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-4 gap-4">
        <div>
          <h4 className="font-extrabold text-white text-base md:text-lg leading-snug">{item.title}</h4>
          <p className="text-xs text-zinc-400 mt-1">{item.org}</p>
        </div>
        <span className={`shrink-0 text-[10px] uppercase font-black tracking-widest border px-3 py-1 rounded-full ${TYPE_STYLES[item.type]}`}>
          {item.type}
        </span>
      </div>
      <p className="text-sm md:text-base text-zinc-300 leading-relaxed">{item.text}</p>
      <div className="flex items-center justify-between mt-4 pt-2">
        <span className="text-[10px] uppercase tracking-wider text-zinc-500">{item.meta}</span>
        {isCert && (
          <span className="text-[11px] font-bold text-yellow-400 group-hover:text-yellow-300 flex items-center gap-1">
            <AwardIcon size={12} />
            View Certificate &rarr;
          </span>
        )}
      </div>
    </div>
  );
}

function Row({ items, direction }) {
  // Repeat 4x so the loop stays seamless even on very wide screens
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="w-full overflow-hidden flex py-4">
      <div className={`flex gap-6 whitespace-nowrap animate-marquee-${direction} hover:[animation-play-state:paused]`}>
        {loop.map((item, idx) => (
          <Card key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  const mid = Math.ceil(JOURNEY.length / 2);
  return (
    <section id="journey" className="py-20 relative bg-zinc-950 text-white border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>

      <div className="text-center mb-12 px-6">
        <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-yellow-400">
          Education &amp; Recognition
        </span>
        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mt-2">
          My Journey So Far
        </h3>
      </div>

      <Row items={JOURNEY.slice(0, mid)} direction="left" />
      <div className="mt-4">
        <Row items={JOURNEY.slice(mid)} direction="right" />
      </div>

      <div className="text-center mt-10 relative z-30">
        <button
          onClick={() => openCertificates()}
          type="button"
          className="inline-flex items-center gap-2 border border-yellow-400/40 hover:border-yellow-400 bg-yellow-400/10 hover:bg-yellow-400 text-yellow-400 hover:text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(250,204,21,0.2)]"
        >
          <AwardIcon size={15} />
          View All {CERTIFICATES.length} Certificates & Credentials
        </button>
      </div>
    </section>
  );
}
