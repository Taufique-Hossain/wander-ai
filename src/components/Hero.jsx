import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Sparkles, MapPin, Compass, ArrowRight, ShieldCheck, 
  Zap, CalendarDays, X, ChevronRight, Landmark, Building2, Flame 
} from 'lucide-react';
import { getSearchSuggestions } from '../services/autocompleteService';

export default function Hero({ onSearch, onSelectPopular, selectedDays = 3, onDaysChange }) {
  const [query, setQuery] = useState('');
  const [days, setDays] = useState(selectedDays);
  const [suggestions, setSuggestions] = useState([]);
  const [isOpenSuggestions, setIsOpenSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const dayOptions = [
    { value: 1, label: '1 Day' },
    { value: 2, label: '2 Days' },
    { value: 3, label: '3 Days' },
    { value: 5, label: '5 Days' },
    { value: 7, label: '7 Days' }
  ];

  // Update suggestions whenever query changes
  useEffect(() => {
    if (query.trim().length >= 1) {
      const results = getSearchSuggestions(query.trim(), 7);
      setSuggestions(results);
      setIsOpenSuggestions(results.length > 0);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setIsOpenSuggestions(false);
      setSelectedIndex(-1);
    }
  }, [query]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpenSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDaySelect = (d) => {
    setDays(d);
    if (onDaysChange) onDaysChange(d);
  };

  const handleSelectSuggestion = (suggestion) => {
    const target = suggestion.targetQuery || suggestion.label;
    setQuery(target);
    setIsOpenSuggestions(false);
    onSearch(target, days);
  };

  const handleKeyDown = (e) => {
    if (!isOpenSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        e.preventDefault();
        handleSelectSuggestion(suggestions[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpenSuggestions(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpenSuggestions(false);
      onSearch(query.trim(), days);
    }
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    setIsOpenSuggestions(false);
    if (inputRef.current) inputRef.current.focus();
  };

  const quickPicks = [
    { name: 'Sikkim', flag: '🏔️' },
    { name: 'Kolkata', flag: '🏛️' },
    { name: 'Goa', flag: '🏖️' },
    { name: 'Kashmir', flag: '❄️' },
    { name: 'Andaman', flag: '🏝️' },
    { name: 'Tokyo', flag: '🇯🇵' },
    { name: 'Paris', flag: '🇫🇷' },
    { name: 'Dubai', flag: '🇦🇪' }
  ];

  // Helper to highlight matching characters in suggestions
  const highlightMatch = (text, search) => {
    if (!search || !text) return text;
    const index = text.toLowerCase().indexOf(search.toLowerCase());
    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + search.length);
    const after = text.slice(index + search.length);

    return (
      <span>
        {before}
        <span className="text-emerald-500 dark:text-emerald-400 font-extrabold bg-emerald-500/20 rounded px-1 py-0.5">{match}</span>
        {after}
      </span>
    );
  };

  return (
    <div className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-200 dark:border-slate-900 bg-gradient-to-b from-emerald-50/50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950 transition-colors duration-200">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[200px] sm:h-[300px] bg-emerald-500/10 blur-[80px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-4 sm:mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Instant Autocomplete & Multi-Day Guides for 40+ Destinations</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Explore Any Landmark With <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
            AI-Engineered Travel Guides
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Select your trip length, start typing to see instant matching locations, generate real morning-to-night itineraries, entrance fee guides, and budget tiers.
        </p>

        {/* Days Selection Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs">
          <span className="text-slate-600 dark:text-slate-400 font-medium flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            <span>Select Trip Duration:</span>
          </span>
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl shadow-inner">
            {dayOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleDaySelect(opt.value)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer text-xs ${
                  days === opt.value
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar Container with Autocomplete Dropdown */}
        <div ref={containerRef} className="relative mt-4 sm:mt-6 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white dark:bg-slate-900/95 border border-slate-300 dark:border-slate-700/80 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-emerald-950/30 p-2 sm:p-2.5 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition gap-2 sm:gap-0">
              <div className="flex items-center flex-1 px-2 sm:px-0">
                <Search className="w-5 h-5 text-emerald-500 dark:text-emerald-400 ml-1.5 sm:ml-2 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => {
                    if (suggestions.length > 0) setIsOpenSuggestions(true);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={`Type any place (e.g. Kol, Sikkim, Taj Mahal, Goa, Paris)...`}
                  className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
                  autoComplete="off"
                />
                {query.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition mr-1 cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all shrink-0 active:scale-95 cursor-pointer"
              >
                <span>Generate {days}-Day Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Interactive Suggestions Dropdown */}
          {isOpenSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl border border-slate-200 dark:border-slate-700/90 rounded-2xl shadow-2xl shadow-slate-300/60 dark:shadow-emerald-950/70 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/80 text-left animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Matching Stored Locations</span>
                </span>
                <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">Use ↑↓ keys to navigate, Enter to select</span>
              </div>

              <div className="max-h-72 sm:max-h-80 overflow-y-auto">
                {suggestions.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectSuggestion(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`px-3.5 py-2.5 sm:py-3 flex items-center justify-between gap-3 cursor-pointer transition ${
                        isSelected
                          ? 'bg-emerald-50 dark:bg-emerald-500/15 border-l-4 border-emerald-500 dark:border-emerald-400 pl-3'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Icon based on type */}
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          item.type === 'destination'
                            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                            : item.type === 'subtown'
                            ? 'bg-teal-500/15 text-teal-600 dark:text-teal-400'
                            : 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400'
                        }`}>
                          {item.type === 'destination' ? (
                            <Compass className="w-4 h-4" />
                          ) : item.type === 'subtown' ? (
                            <Building2 className="w-4 h-4" />
                          ) : (
                            <Landmark className="w-4 h-4" />
                          )}
                        </div>

                        {/* Title & Subtitle */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-slate-900 dark:text-white text-sm truncate">
                              {highlightMatch(item.label, query)}
                            </span>
                            <span className="text-xs shrink-0">{item.flag}</span>
                            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${
                              item.type === 'destination'
                                ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                                : item.type === 'subtown'
                                ? 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20'
                                : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20'
                            }`}>
                              {item.type === 'destination' ? 'City' : item.type === 'subtown' ? 'Region' : 'Landmark'}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Select Action */}
                      <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 group">
                        <span className="hidden sm:inline text-[11px] opacity-80">Plan {days}D</span>
                        <ChevronRight className="w-4 h-4 text-emerald-500 dark:text-emerald-400 group-hover:translate-x-0.5 transition" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Quick picks */}
        <div className="mt-5 flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 text-xs">
          <span className="text-slate-500 font-medium mr-1 text-[11px] sm:text-xs">Trending searches:</span>
          {quickPicks.map((pick) => (
            <button
              key={pick.name}
              type="button"
              onClick={() => onSelectPopular(pick.name, days)}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition cursor-pointer text-xs shadow-sm"
            >
              <span>{pick.flag}</span>
              <span>{pick.name}</span>
            </button>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto pt-6 border-t border-slate-200/80 dark:border-slate-900/80 text-left">
          <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-50 dark:bg-slate-900/40 sm:bg-transparent border border-slate-200 dark:border-slate-800/40 sm:border-none">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Instant Autocomplete</p>
              <p className="text-[11px] text-slate-500">Live matched destinations</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-50 dark:bg-slate-900/40 sm:bg-transparent border border-slate-200 dark:border-slate-800/40 sm:border-none">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Exact Timed Itineraries</p>
              <p className="text-[11px] text-slate-500">Morning, afternoon, evening</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-50 dark:bg-slate-900/40 sm:bg-transparent border border-slate-200 dark:border-slate-800/40 sm:border-none">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Verified Entry Fees</p>
              <p className="text-[11px] text-slate-500">₹, $, and € currency conversions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
