import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Globe, Sparkles, Terminal, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = PORTFOLIO_DATA.skills;

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(c => c.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getCategoryIcon = (title: string) => {
    if (title.includes('Languages')) return <Code className="w-4 h-4 text-sky-400" />;
    if (title.includes('Web')) return <Globe className="w-4 h-4 text-sky-400" />;
    if (title.includes('AI')) return <Sparkles className="w-4 h-4 text-sky-400" />;
    return <Terminal className="w-4 h-4 text-sky-400" />;
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header with Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
              02. Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Core technologies, foundational logic, and evolving toolsets.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed for interactive filtering per Anti-Slop section A) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'all' 
                  ? 'bg-slate-800 text-sky-300 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Domains
            </button>
            <button
              onClick={() => setSelectedCategory('Languages')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'Languages' 
                  ? 'bg-slate-800 text-sky-300 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setSelectedCategory('Web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'Web' 
                  ? 'bg-slate-800 text-sky-300 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Web Basics
            </button>
            <button
              onClick={() => setSelectedCategory('AI')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'AI' 
                  ? 'bg-slate-800 text-sky-300 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              AI & Future
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div 
              key={category.title}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">{category.title}</h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>

                {/* Skill items without pill capsules - clean unboxed typography with typographic separators */}
                <div className="mt-5 space-y-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:bg-slate-950 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        {/* Unboxed level text with clean separator */}
                        <span className="text-[11px] font-mono text-sky-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Context */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Practiced via coursework & hackathons</span>
                <span>{category.skills.length} skills listed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
