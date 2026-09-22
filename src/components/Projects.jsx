import React from 'react';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-zinc-950 overflow-hidden select-none py-28 px-6 md:px-16 z-10"
    >
      {/* Background Typography Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2 className="text-[25vw] font-black uppercase tracking-tighter text-white/[0.02] leading-none select-none">
          BUILD
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-[0.4em] font-black text-yellow-400 block mb-2">
            &bull; SELECTED PROJECTS
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">WORK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="bg-zinc-900/40 border border-white/10 rounded-[32px] p-5 md:p-6 backdrop-blur-md shadow-2xl flex flex-col select-text group hover:border-yellow-400/50 hover:shadow-[0_0_50px_rgba(250,204,21,0.05)] transition-all duration-300 overflow-hidden"
            >
              {/* Cover */}
              <div className={`w-full h-[180px] md:h-[240px] rounded-2xl overflow-hidden mb-6 relative border border-white/5 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]"></div>
                <span className="absolute -bottom-6 -left-2 text-[9rem] md:text-[11rem] font-black tracking-tighter leading-none text-white/10 group-hover:text-yellow-400/20 transition-colors duration-500 select-none">
                  {project.glyph}
                </span>
                <div className="absolute top-4 right-4 bg-zinc-950/80 border border-white/15 px-3 py-1 rounded-full text-xs font-black text-yellow-400 backdrop-blur-md select-none">
                  0{idx + 1}
                </div>
                <div className="absolute top-4 left-4 bg-zinc-950/60 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-zinc-300 backdrop-blur-md select-none">
                  {project.year}
                </div>
              </div>

              {/* Meta */}
              <div className="flex-1">
                <span className="text-[10px] uppercase font-black tracking-widest text-yellow-400">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight leading-none mt-2 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium mt-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold tracking-wider text-zinc-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="border-t border-white/5 pt-6 mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-yellow-400 transition-all group/link cursor-pointer"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1.5 transition-transform">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
