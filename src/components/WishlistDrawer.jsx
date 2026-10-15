import React from 'react';
import { X, Trash2, MapPin, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlist, 
  onRemoveItem, 
  onClearAll,
  onViewGuide 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Your Travel Wishlist</h3>
              <p className="text-xs text-slate-400 mt-0.5">{wishlist.length} destinations saved for your next journey</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
                <MapPin className="w-12 h-12 stroke-[1.5] mb-3 text-slate-600" />
                <p className="text-sm font-semibold text-slate-400">Your wishlist is currently empty</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Click the heart icon on any destination card or save an AI itinerary to curate your trip list.
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id || item.destination}
                  className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-3 group hover:border-slate-700 transition"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-white truncate">
                      {item.name || item.destination}
                    </h4>
                    <p className="text-xs text-emerald-400 font-medium">
                      {item.country || "Global Spot"}
                    </p>
                    {item.bestTime && (
                      <p className="text-[11px] text-slate-400 mt-0.5">Best time: {item.bestTime}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onViewGuide(item.name || item.destination)}
                      className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 transition"
                      title="View AI Guide"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.id || item.destination)}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-slate-400 hover:text-rose-400 transition flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Wishlist</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition"
              >
                Continue Exploring
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
