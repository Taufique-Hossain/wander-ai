import React from 'react';
import { Star, MapPin, Calendar, DollarSign, Sparkles, Heart, Check } from 'lucide-react';
import { formatCurrency, formatPriceString } from '../utils/currency';

export default function AttractionCard({ 
  destination, 
  onGenerateGuide, 
  isWishlisted, 
  onToggleWishlist,
  currency 
}) {
  const budgetFormatted = formatCurrency(destination.dailyBudget, currency);

  return (
    <div className="group relative bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/20 flex flex-col">
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-800">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/20">
            {destination.category}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(destination);
            }}
            className={`p-2 rounded-full backdrop-blur-md border transition cursor-pointer ${
              isWishlisted
                ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/30'
                : 'bg-slate-950/70 text-slate-300 border-slate-700/60 hover:text-white hover:bg-slate-900'
            }`}
            title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex items-center gap-1 text-xs text-emerald-300 font-medium mb-0.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{destination.country}</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{destination.name}</h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata row */}
          <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{destination.rating}</span>
              <span className="text-slate-500 font-normal">({destination.reviewsCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{destination.bestTime}</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            {destination.tagline}
          </p>

          {/* Top Attractions Preview with Currency Conversion */}
          <div className="space-y-1.5 mb-4">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">Key Highlights</p>
            {destination.topAttractions.slice(0, 2).map((attr, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs bg-slate-950/60 rounded-lg px-2.5 py-1.5 border border-slate-800/50">
                <span className="text-slate-300 truncate max-w-[170px]">{attr.name}</span>
                <span className="text-[11px] font-mono text-emerald-400 font-medium">
                  {formatPriceString(attr.fee, currency)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-semibold">Est. Daily Budget</p>
            <p className="text-sm font-bold text-white font-mono">
              {budgetFormatted} <span className="text-[10px] font-normal text-slate-400">/day</span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => onGenerateGuide(destination.name)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 hover:border-emerald-500 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
}
