import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Terminal, Users, Lightbulb, Compass, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#090d16]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
            01. Background & Journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Building rigorous foundations before scaling to machine intelligence.
          </h2>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Editorial Story */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am currently in my <strong>first semester of Bachelor of Technology in Computer Science & Engineering</strong>. 
              While many begin their programming journey with superficial frameworks, I deliberately chose to anchor my foundation in 
              <strong> core algorithmic logic, data structures, and procedural problem-solving using Python</strong>.
            </p>
            <p>
              Whether it is architecting an in-memory banking ledger for an <strong>ATM system</strong>, 
              validating civic eligibility rules with mathematical determinism, or computing multi-criteria 
              academic grading metrics, I treat every project as an exercise in clean control flow, defensive edge-case testing, 
              and maintainable software structure.
            </p>
            <p>
              Beyond coursework, I actively throw myself into <strong>collegiate hackathons and 24-hour ideathons</strong>. 
              These competitive environments have refined my ability to synthesize open-ended problems into concrete software specs, 
              collaborate efficiently with multidisciplinary peers, and present working technical ideas under pressure.
            </p>
            <p className="text-slate-400">
              My ultimate career ambition is to become a high-impact <strong>Generative AI Engineer</strong>. 
              I am systematically bridging the gap between classical computing logic and modern neural architectures—actively exploring 
              prompt engineering pipelines, LLM APIs, and retrieval systems as the next horizon of developer tools.
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs mb-1.5">
                  <Terminal className="w-4 h-4" />
                  <span>Python Systems & Logic</span>
                </div>
                <p className="text-xs text-slate-400">
                  Writing clean, modular code with robust exception handling and algorithmic determinism.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs mb-1.5">
                  <Users className="w-4 h-4" />
                  <span>Hackathon Collaboration</span>
                </div>
                <p className="text-xs text-slate-400">
                  Fast-paced technical brainstorming, wireframing, and rapid software execution under deadlines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs mb-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>Generative AI Trajectory</span>
                </div>
                <p className="text-xs text-slate-400">
                  Studying transformer models, structured LLM prompt workflows, and automated reasoning pipelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs mb-1.5">
                  <Lightbulb className="w-4 h-4" />
                  <span>Continuous Curiosity</span>
                </div>
                <p className="text-xs text-slate-400">
                  Constantly converting theoretical academic concepts into tangible, runnable software utilities.
                </p>
              </div>
            </div>
          </div>

          {/* Academic & Growth Path Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-400" />
                Undergraduate Trajectory
              </h3>

              <div className="relative border-l border-slate-800 ml-3 space-y-8 pb-2">
                {PORTFOLIO_DATA.timeline.map((item, index) => (
                  <div key={index} className="relative pl-6">
                    {/* Node marker */}
                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-sky-400" />
                    
                    <span className="text-[11px] font-mono text-sky-400 font-semibold block mb-0.5">
                      {item.year}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {item.title}
                    </h4>
                    <span className="text-xs text-slate-400 block mb-1">
                      {item.subtitle}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
