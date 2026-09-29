import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#070a12] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Identity */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-base font-bold text-slate-100 tracking-tight block">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <p className="text-slate-400">
              {PORTFOLIO_DATA.personal.academicStatus} · {PORTFOLIO_DATA.personal.role}
            </p>
          </div>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a href="#about" className="hover:text-slate-200 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-200 transition-colors">Projects</a>
            <a href="#hackathons" className="hover:text-slate-200 transition-colors">Hackathons</a>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-colors"
              aria-label="Scroll to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] gap-2">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with clean Python foundations & modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
