import React from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { Play, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project, tab?: 'simulator' | 'code' | 'overview') => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-[#090d16]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
            03. Featured Engineering Works
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Procedural systems, deterministic logic, and simulation engines.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Each project is built with clean Python principles and features an interactive browser simulator to test edge cases directly.
          </p>
        </div>

        {/* Projects 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/20"
            >
              <div>
                {/* Media Thumbnail Container with Zero-Broken-Image fallback */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-70" />

                  {/* Editorial Index Number */}
                  <div className="absolute top-3 left-3 text-[11px] font-mono font-semibold text-slate-400 bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded border border-slate-800">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Content (Zero-Pill discipline: leads directly with clean title and unboxed metadata) */}
                <div className="p-6 space-y-3">
                  {/* Unboxed Metadata Line with typographic separators */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-sky-400 font-mono">
                    <span>{project.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">Python 3</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-2 space-y-1.5">
                    {project.keyHighlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Functional Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project, 'simulator')}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Play className="w-3 h-3" />
                  Live Simulator
                </button>

                <button
                  onClick={() => onSelectProject(project, 'code')}
                  className="py-2 px-3 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white rounded-lg transition-colors border border-slate-700/80 flex items-center gap-1.5 whitespace-nowrap"
                  title="View Python Source Code"
                >
                  <Code2 className="w-3 h-3 text-slate-400" />
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
