import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, ExternalLink, Check, Copy } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto print:max-h-none print:border-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-[#0b0f19] print:hidden">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-slate-100">Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>Kowshik Sravanam</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-slate-300 print:text-slate-900 print:p-6 font-sans">
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-5">
            <h1 className="text-2xl font-bold tracking-tight text-slate-100 print:text-slate-950">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-sm text-sky-400 font-medium print:text-sky-700 mt-0.5">
              {PORTFOLIO_DATA.personal.academicStatus} · {PORTFOLIO_DATA.personal.role}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400 print:text-slate-600 mt-2.5">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <span aria-hidden="true">·</span>
              <a 
                href={PORTFOLIO_DATA.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-400 print:text-slate-900 underline"
              >
                LinkedIn Profile
              </a>
              <span aria-hidden="true">·</span>
              <a 
                href={PORTFOLIO_DATA.personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-400 print:text-slate-900 underline"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Professional Objective */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 print:text-slate-700 mb-2">
              Career Trajectory & Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              First-year Bachelor of Technology student with strong procedural programming and problem-solving skills in Python. Passionate about software architecture, deterministic logic utilities, and transitioning into Generative AI engineering. Actively participating in collegiate hackathons, building modular utilities, and mastering core computer science principles.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 print:text-slate-700 mb-2.5">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-200 print:text-slate-950">
                    Bachelor of Technology (B.Tech) - Computer Science & Engineering
                  </h3>
                  <p className="text-xs text-slate-400 print:text-slate-600">Semester 1 Undergraduate Program</p>
                </div>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600 mt-0.5 sm:mt-0">2025 – Present</span>
              </div>
              <p className="text-xs text-slate-400 print:text-slate-700">
                Core coursework: Problem Solving using Python, Discrete Mathematics, Digital Logic Fundamentals, Web Basics.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 print:text-slate-700 mb-2.5">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-semibold text-slate-200 print:text-slate-900 block mb-1">Programming Languages</span>
                <p className="text-slate-400 print:text-slate-700">Python (Core, Functional, OOP), JavaScript (ES6+), C Basics</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-semibold text-slate-200 print:text-slate-900 block mb-1">Web Development</span>
                <p className="text-slate-400 print:text-slate-700">HTML5 Semantic Structure, CSS3, Tailwind CSS, Responsive Web Design</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-semibold text-slate-200 print:text-slate-900 block mb-1">Emerging Tech & AI</span>
                <p className="text-slate-400 print:text-slate-700">Generative AI Fundamentals, Prompt Engineering, LLM API Workflows</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                <span className="font-semibold text-slate-200 print:text-slate-900 block mb-1">Tools & Platforms</span>
                <p className="text-slate-400 print:text-slate-700">Git, GitHub, Visual Studio Code, Linux Bash CLI</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 print:text-slate-700 mb-2.5">
              Featured Engineering Projects
            </h2>
            <div className="space-y-4 text-xs">
              {PORTFOLIO_DATA.projects.map(proj => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-semibold text-slate-200 print:text-slate-950 text-xs sm:text-sm">
                      {proj.title}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                      {proj.techStack.join(' · ')}
                    </span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Extra-Curriculars */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 print:text-slate-700 mb-2.5">
              Hackathons & Teamwork Experience
            </h2>
            <div className="space-y-3 text-xs">
              {PORTFOLIO_DATA.hackathons.map((h, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-semibold text-slate-200 print:text-slate-950">{h.title}</span>
                    <span className="text-[11px] font-mono text-slate-400 print:text-slate-600">{h.date}</span>
                  </div>
                  <p className="text-slate-400 print:text-slate-700">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#0b0f19] flex items-center justify-between print:hidden">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Email copied!' : 'Copy Email'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
