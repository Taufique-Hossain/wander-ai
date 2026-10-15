import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AttractionCard from './components/AttractionCard';
import AIGuideModal from './components/AIGuideModal';
import WishlistDrawer from './components/WishlistDrawer';
import ApiKeyModal from './components/ApiKeyModal';
import { initialDestinations } from './data/destinations';
import { generateAITravelGuide } from './services/aiService';
import { 
  Compass, Sparkles, Filter, Layers, Globe, Shield, 
  MapPin, CheckCircle2, ArrowRight 
} from 'lucide-react';


export default function App() {
  const [destinations] = useState(initialDestinations);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeGuide, setActiveGuide] = useState(null);
  const [isLoadingGuide, setIsLoadingGuide] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  // Wishlist state (persisted in localStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('wanderai_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Gemini API Key state (persisted in localStorage)
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('wanderai_gemini_key') || '';
  });
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  // Currency State ('USD' | 'INR' | 'EUR')
  const [currency, setCurrency] = useState('USD');

  // Save wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wanderai_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist to localStorage:", e);
    }
  }, [wishlist]);

  // Handle saving API key
  const handleSaveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem('wanderai_gemini_key', key);
  };

  // Toggle wishlist item
  const handleToggleWishlist = (dest) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => (item.id || item.destination) === (dest.id || dest.name || dest.destination));
      if (exists) {
        return prev.filter((item) => (item.id || item.destination) !== (dest.id || dest.name || dest.destination));
      } else {
        return [...prev, dest];
      }
    });
  };

  const handleRemoveWishlistItem = (id) => {
    setWishlist((prev) => prev.filter((item) => (item.id || item.destination) !== id));
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  // Generate AI Guide function
  const handleTriggerGuide = async (destinationQuery) => {
    setIsGuideModalOpen(true);
    setIsLoadingGuide(true);
    try {
      const guideData = await generateAITravelGuide(destinationQuery, apiKey);
      setActiveGuide(guideData);
    } catch (err) {
      console.error("Failed to generate AI guide:", err);
    } finally {
      setIsLoadingGuide(false);
    }
  };

  // Filter destinations
  const categories = ['All', 'Historical', 'Nature', 'Urban'];
  const filteredDestinations = destinations.filter((dest) => {
    if (selectedCategory === 'All') return true;
    return dest.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navbar */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        hasApiKey={Boolean(apiKey)}
      />

      {/* Hero Section */}
      <Hero
        onSearch={handleTriggerGuide}
        onSelectPopular={handleTriggerGuide}
      />

      {/* Main Showcase Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-800/80 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4" />
              <span>Curated Attraction Database</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Global Destinations
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select an attraction to review verified entrance fees, opening hours, or generate an instant AI itinerary.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <AttractionCard
              key={dest.id}
              destination={dest}
              currency={currency}
              isWishlisted={wishlist.some((item) => (item.id || item.name) === dest.id)}
              onToggleWishlist={handleToggleWishlist}
              onGenerateGuide={handleTriggerGuide}
            />
          ))}
        </div>

        {/* Architecture & Feature Highlights for Interviewers */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-950 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Technical Highlights</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
              Engineered for Travel Scale, Automation & Content Pipelines
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Designed specifically for high-volume travel content networks. Features zero-dependency fallback generation, 
              REST API integration with LLMs (Google Gemini), persistent client-side caching via LocalStorage, and a 100% responsive Tailwind architecture.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Gemini LLM Engine</span>
                </p>
                <p className="text-slate-400 text-[11px]">JSON-mode structured travel synthesis with custom temperature tuning.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero-Break Caching</span>
                </p>
                <p className="text-slate-400 text-[11px]">Integrated offline fallback engine ensures zero demo failures or rate-limit blocks.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Offline Storage</span>
                </p>
                <p className="text-slate-400 text-[11px]">Browser LocalStorage API integration for wishlists and traveler preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white font-mono">WanderAI</span>
            <span>— AI-Driven Travel & Attraction Guides Platform</span>
          </div>

          <p className="text-[11px]">
            Engineered with React 19, Tailwind CSS v4 & Gemini API • Built for Firestorm Travel Guides Network
          </p>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <AIGuideModal
        guide={activeGuide}
        isLoading={isLoadingGuide}
        onClose={() => setIsGuideModalOpen(false)}
        currency={currency}
        onSaveToWishlist={handleToggleWishlist}
        isSaved={wishlist.some((item) => (item.id || item.destination) === (activeGuide?.id || activeGuide?.destination))}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onClearAll={handleClearWishlist}
        onViewGuide={handleTriggerGuide}
      />

      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
      />
    </div>
  );
}
