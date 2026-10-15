import React from 'react';
import { Compass, Heart, Globe, Sun, Moon } from 'lucide-react';

export default function Navbar({ 
  wishlistCount, 
  onOpenWishlist, 
  currency, 
  setCurrency, 
  darkMode,
  onToggleTheme 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 group cursor-pointer">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 stroke-[2.5] group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white font-mono">
                Wander<span className="text-emerald-500 dark:text-emerald-400">AI</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider px-1 sm:px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden md:block">Intelligent Travel & Attraction Guides</p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Currency Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-0.5 sm:p-1 text-[11px] sm:text-xs transition-colors duration-300">
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 dark:text-slate-400 ml-1 mr-0.5 sm:ml-1.5 sm:mr-1 shrink-0" />
            {['USD', 'INR', 'EUR'].map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-medium transition-all duration-200 active:scale-95 cursor-pointer ${
                  currency === curr
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Dark / Light Mode Toggle Button with Icon Flip Animation */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="group relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 active:scale-90 cursor-pointer bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700 hover:shadow-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-300"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className="relative w-3.5 h-3.5 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
              {darkMode ? (
                <Sun className="w-3.5 h-3.5 text-amber-400 animate-in spin-in-180 duration-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 animate-in spin-in-180 duration-300" />
              )}
            </div>
            <span className="hidden sm:inline transition-opacity duration-200">
              {darkMode ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={onOpenWishlist}
            className="group relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:shadow-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-200 text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 fill-rose-500/20 shrink-0 group-hover:scale-110 group-hover:fill-rose-500/40 transition-all duration-200" />
            <span className="hidden sm:inline">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-rose-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0 animate-pop-in">
                {wishlistCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
