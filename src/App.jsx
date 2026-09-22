import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificatesModal from './components/Certificates';

// Lenis smooth scroll
import Lenis from 'lenis';

// GSAP + ScrollTrigger
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });
    window.lenis = lenis;

    // 2. Synchronize Lenis scrolling with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);

    // 3. Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Clean up
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* 1. Fixed Top Navbar */}
      <Navbar />

      {/* 2. Scrolling contents following proper sections flow */}
      <div className="relative z-10 w-full bg-transparent">
        {/* ParticleText canvas */}
        <Portfolio />

        {/* Hero Section */}
        <Hero />

        {/* Projects Showcase */}
        <Projects />

        {/* Skills Carousel */}
        <Skills />

        {/* Education, experience & recognition marquee */}
        <Journey />

        {/* Contact UI */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* 3. Global Certificates Modal (Portal to body) */}
      <CertificatesModal />
    </div>
  );
}

