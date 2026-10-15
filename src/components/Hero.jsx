import React, { useState } from 'react';
import { Search, Sparkles, MapPin, Compass, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onSearch, onSelectPopular }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const quickPicks = [
    { name: 'Tokyo', flag: '🇯🇵' },
    { name: 'Paris', flag: '🇫🇷' },
    { name: 'London', flag: '🇬🇧' },
    { name: 'Rome', flag: '🇮🇹' },
    { name: 'Agra', flag: '🇮🇳' },
    { name: 'Bali', flag: '🇮🇩' },
    { name: 'New York', flag: '🇺🇸' }
  ];

  return (
    <div className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[200px] sm:h-[300px] bg-emerald-500/10 blur-[80px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Next-Gen Travel Intelligence for 100+ Destinations</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Explore Any Landmark With <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            AI-Engineered Travel Guides
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Generate bespoke 1-day itineraries, exact entrance fee guides, queue-skipping insider tips, and real-time budget breakdowns in seconds.
        </p>

        {/* Responsive Search Bar */}
        <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 max-w-2xl mx-auto">
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl shadow-emerald-950/30 p-2 sm:p-2.5 focus-within:border-emerald-500/80 focus-within:ring-2 focus-within:ring-emerald-500/20 transition gap-2 sm:gap-0">
            <div className="flex items-center flex-1 px-2 sm:px-0">
              <Search className="w-5 h-5 text-emerald-400 ml-1.5 sm:ml-2 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search destination (e.g. Kyoto, London, Colosseum)..."
                className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all shrink-0 active:scale-95 cursor-pointer"
            >
              <span>Generate Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Quick picks */}
        <div className="mt-5 flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 text-xs">
          <span className="text-slate-500 font-medium mr-1 text-[11px] sm:text-xs">Trending searches:</span>
          {quickPicks.map((pick) => (
            <button
              key={pick.name}
              type="button"
              onClick={() => onSelectPopular(pick.name)}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition cursor-pointer text-xs"
            >
              <span>{pick.flag}</span>
              <span>{pick.name}</span>
            </button>
          ))}
        </div>

        {/* Feature Highlights: Stacks cleanly on mobile (1 col), expands to 3 cols on tablet/desktop */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto pt-6 border-t border-slate-900/80 text-left">
          <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/40 sm:border-none">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Instant AI Itinerary</p>
              <p className="text-[11px] text-slate-500">Hour-by-hour pacing</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/40 sm:border-none">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Verified Ticket Fees</p>
              <p className="text-[11px] text-slate-500">Official pricing tips</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/40 sm:border-none">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Local Etiquette</p>
              <p className="text-[11px] text-slate-500">Scam & transit alerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
