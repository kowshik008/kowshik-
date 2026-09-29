import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, Users, Zap, Check, Calendar, ArrowRight } from 'lucide-react';

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-20 border-t border-slate-800/80 bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
            04. Hackathons & Ideathons
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Sprint prototyping, collaborative problem-solving, and rapid ideation.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Starting in early B.Tech semester 1, I engage in fast-paced competitive environments to translate complex problem statements into working architectures.
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.hackathons.map((entry, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header metadata unboxed */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-sky-400 font-semibold">{entry.type}</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {entry.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-100 mb-1">
                    {entry.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium">
                    Role: <span className="text-slate-200">{entry.role}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {entry.description}
                </p>

                {/* Key take-aways */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Core Outcomes:
                  </div>
                  {entry.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                <span>Teamwork & Pitching</span>
                <span>Sprint #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Mindset Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-100">
                Interested in teaming up for an upcoming Hackathon or Ideathon?
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                I am always eager to collaborate with passionate developers, designers, and domain thinkers on novel AI, web, and algorithmic challenges.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Connect for Hackathons
          </a>
        </div>
      </div>
    </section>
  );
};
