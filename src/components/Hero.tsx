import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Terminal, Sparkles, Code2 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle radial gradient - non-neon, elegant dark slate illumination */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & Bio Core */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker (Anti-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-sky-400 font-medium">B.Tech CSE</span>
              <span aria-hidden="true">·</span>
              <span>Semester 1</span>
              <span aria-hidden="true">·</span>
              <span>Aspiring AI Engineer</span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15] text-balance">
              Engineering clean algorithmic logic with a vision for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-slate-200">
                Generative AI.
              </span>
            </h1>

            {/* Concise Value Statement */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Hello, I'm <strong className="text-slate-100 font-semibold">{PORTFOLIO_DATA.personal.name}</strong>. 
              A first-year computer science undergraduate building robust, deterministic Python logic 
              and practical simulations, while actively competing in collegiate hackathons and exploring next-generation AI architectures.
            </p>

            {/* CTAs and Resume */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors shadow-sm shadow-sky-500/20 whitespace-nowrap"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white rounded-lg transition-colors border border-slate-800 whitespace-nowrap"
              >
                Contact Me
              </a>
              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-sky-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                View Academic Resume →
              </button>
            </div>

            {/* Social Links & Proof */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Kowshik Sravanam LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Kowshik Sravanam GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (kowshik008)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Persona & Key Trajectory Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              {/* Decorative subtle border frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-slate-900 border border-slate-800 shadow-2xl">
                {/* Avatar portrait with zero-broken-image fallback container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src="/src/assets/images/hero_avatar_kowshik_1790680101171.jpg"
                    alt="Kowshik Sravanam - Aspiring AI Engineer"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of image load delay
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle lighting scrim at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60" />

                  {/* Clean unboxed overlay caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#0b0f19]/80 backdrop-blur-md border border-slate-800 text-xs">
                    <div className="font-semibold text-slate-100 flex items-center justify-between">
                      <span>Kowshik Sravanam</span>
                      <span className="text-[10px] font-mono text-sky-400">Class of 2029</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      B.Tech in Computer Science & Engineering
                    </div>
                  </div>
                </div>
              </div>

              {/* Adjacent Quick Metrics Strip */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-base font-bold font-mono text-slate-100">01</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Semester</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-base font-bold font-mono text-sky-400">3+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Core Tools</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <div className="text-base font-bold font-mono text-slate-100">Active</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
