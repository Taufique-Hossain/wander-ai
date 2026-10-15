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
    { name: 'Rome', flag: '🇮🇹' },
    { name: 'Agra', flag: '🇮🇳' },
    { name: 'Bali', flag: '🇮🇩' },
    { name: 'New York', flag: '🇺🇸' }
  ];

  return (
    <div className="relative overflow-hidden pt-12 pb-16 border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Gen Travel Guide Intelligence for 100+ Destinations</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Explore Any Landmark With <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            AI-Engineered Travel Guides
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Generate bespoke 1-day itineraries, exact entrance fee guides, queue-skipping insider tips, and real-time budget breakdowns in seconds.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-2xl shadow-emerald-950/30 p-2 focus-within:border-emerald-500/80 focus-within:ring-2 focus-within:ring-emerald-500/20 transition">
            <div className="pl-3.5 text-slate-400">
              <Search className="w-5 h-5 text-emerald-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destination, city, or attraction (e.g. Kyoto, Eiffel Tower, Colosseum)..."
              className="w-full bg-transparent px-3.5 py-3 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all shrink-0 active:scale-95"
            >
              <span>Generate Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Quick picks */}
        <div className="mt-5 flex items-center justify-center flex-wrap gap-2 text-xs">
          <span className="text-slate-500 font-medium mr-1">Trending searches:</span>
          {quickPicks.map((pick) => (
            <button
              key={pick.name}
              onClick={() => onSelectPopular(pick.name)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition"
            >
              <span>{pick.flag}</span>
              <span>{pick.name}</span>
            </button>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 border-t border-slate-900/80 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Instant AI Itinerary</p>
              <p className="text-[11px] text-slate-500">Hour-by-hour pacing</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Verified Ticket Fees</p>
              <p className="text-[11px] text-slate-500">Official pricing tips</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
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
