import React from 'react';
import ParticleText from './ParticleText';
import { PROFILE } from '../data';

export default function Portfolio() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-zinc-950 overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Particle Text */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <ParticleText text={PROFILE.particleText} />
      </div>

      {/* Subtle Overlay Text */}
      <div className="absolute bottom-12 z-10 text-center pointer-events-none">
        <p className="text-xs text-white/40 tracking-[0.3em] uppercase animate-pulse">
          Hover and move cursor to disperse the particle field
        </p>
      </div>
    </section>
  );
}
