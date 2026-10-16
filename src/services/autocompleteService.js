/**
 * WanderAI Instant Autocomplete Engine
 * Matches letters against curated destinations, famous sub-towns, and landmarks in real-time.
 */

import { EXPERT_DESTINATIONS } from '../data/expertDestinations.js';

const COUNTRY_FLAGS = {
  'India': '🇮🇳',
  'France': '🇫🇷',
  'Japan': '🇯🇵',
  'Italy': '🇮🇹',
  'Indonesia': '🇮🇩',
  'United Arab Emirates': '🇦🇪',
  'United Kingdom': '🇬🇧',
  'USA': '🇺🇸',
  'Switzerland': '🇨🇭',
  'Singapore': '🇸🇬',
  'Spain': '🇪🇸',
  'Netherlands': '🇳🇱',
  'Thailand': '🇹🇭',
  'Maldives': '🇲🇻',
  'Australia': '🇦🇺',
  'Egypt': '🇪🇬'
};

const FAMOUS_SUBTOWNS = [
  { name: 'Gangtok', parent: 'Sikkim', country: 'India', subtitle: 'Capital of Sikkim · Himalayan Monasteries' },
  { name: 'Pelling', parent: 'Sikkim', country: 'India', subtitle: 'West Sikkim · Glass Skywalk & Kanchenjunga' },
  { name: 'Lachung', parent: 'Sikkim', country: 'India', subtitle: 'North Sikkim · Gateway to Yumthang Valley' },
  { name: 'Havelock Island (Swaraj Dweep)', parent: 'Andaman & Nicobar Islands', country: 'India', subtitle: 'Andaman · Radhanagar Beach & Diving' },
  { name: 'Neil Island (Shaheed Dweep)', parent: 'Andaman & Nicobar Islands', country: 'India', subtitle: 'Andaman · Natural Coral Rock Bridge' },
  { name: 'Port Blair', parent: 'Andaman & Nicobar Islands', country: 'India', subtitle: 'Andaman · Cellular Jail & Harbor' },
  { name: 'Leh', parent: 'Ladakh', country: 'India', subtitle: 'Capital of Ladakh · Shanti Stupa & Leh Palace' },
  { name: 'Nubra Valley', parent: 'Ladakh', country: 'India', subtitle: 'Ladakh · Hunder Sand Dunes & Bactrian Camels' },
  { name: 'Pangong Tso Lake', parent: 'Ladakh', country: 'India', subtitle: 'Ladakh · 14,270 ft Color-Changing Lake' },
  { name: 'Munnar', parent: 'Kerala', country: 'India', subtitle: 'Kerala · Emerald Tea Estates & Nilgiri Tahr' },
  { name: 'Alleppey (Alappuzha)', parent: 'Kerala', country: 'India', subtitle: 'Kerala · Traditional Backwaters Houseboat' },
  { name: 'Fort Kochi', parent: 'Kerala', country: 'India', subtitle: 'Kerala · Historic Chinese Fishing Nets & Jew Town' },
  { name: 'Varkala', parent: 'Kerala', country: 'India', subtitle: 'Kerala · Red Sea Cliffs & Papanasam Beach' },
  { name: 'Gulmarg', parent: 'Kashmir', country: 'India', subtitle: 'Kashmir · High-Altitude Gondola & Snow Skiing' },
  { name: 'Pahalgam', parent: 'Kashmir', country: 'India', subtitle: 'Kashmir · Valley of Shepherds & Betaab Valley' },
  { name: 'Srinagar', parent: 'Kashmir', country: 'India', subtitle: 'Kashmir · Dal Lake Houseboats & Shikara' },
  { name: 'Shillong', parent: 'Meghalaya (Shillong & Cherrapunji)', country: 'India', subtitle: 'Meghalaya · Scotland of the East' },
  { name: 'Cherrapunji (Sohra)', parent: 'Meghalaya (Shillong & Cherrapunji)', country: 'India', subtitle: 'Meghalaya · Living Root Bridges & Waterfalls' },
  { name: 'Dawki', parent: 'Meghalaya (Shillong & Cherrapunji)', country: 'India', subtitle: 'Meghalaya · Umngot Crystal Transparent River' },
  { name: 'Coonoor', parent: 'Ooty & Coonoor', country: 'India', subtitle: 'Nilgiris, Tamil Nadu · Toy Train & Tea' },
  { name: 'Haridwar', parent: 'Rishikesh & Haridwar', country: 'India', subtitle: 'Uttarakhand · Har Ki Pauri Sacred Ganga Aarti' },
  { name: 'Auroville', parent: 'Puducherry (Pondicherry)', country: 'India', subtitle: 'Puducherry · Matrimandir Golden Dome' },
  { name: 'Madikeri', parent: 'Coorg (Kodagu)', country: 'India', subtitle: 'Coorg, Karnataka · Raja\'s Seat & Abbey Falls' },
  { name: 'Kufri', parent: 'Shimla', country: 'India', subtitle: 'Himachal Pradesh · Pine Forest Snow Slopes' },
  { name: 'Interlaken', parent: 'Switzerland', country: 'Switzerland', subtitle: 'Swiss Alps · Between Lakes Thun & Brienz' },
  { name: 'Lauterbrunnen', parent: 'Switzerland', country: 'Switzerland', subtitle: 'Swiss Alps · Valley of 72 Waterfalls' },
  { name: 'Lucerne', parent: 'Switzerland', country: 'Switzerland', subtitle: 'Switzerland · Historic Chapel Bridge & Lake' },
  { name: 'Zermatt', parent: 'Switzerland', country: 'Switzerland', subtitle: 'Swiss Alps · Matterhorn Peak' }
];

let cachedIndex = null;

export function buildSearchIndex() {
  if (cachedIndex) return cachedIndex;

  const index = [];

  // 1. Primary destinations
  for (const [key, d] of Object.entries(EXPERT_DESTINATIONS)) {
    index.push({
      id: `dest-${key}`,
      label: d.destination,
      targetQuery: d.destination,
      type: 'destination',
      country: d.country,
      flag: COUNTRY_FLAGS[d.country] || '🌐',
      subtitle: `${d.country} · Top Curated Destination`
    });
  }

  // 2. Sub-towns and famous areas
  for (const sub of FAMOUS_SUBTOWNS) {
    index.push({
      id: `sub-${sub.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      label: sub.name,
      targetQuery: sub.parent,
      type: 'subtown',
      country: sub.country,
      flag: COUNTRY_FLAGS[sub.country] || '🌐',
      subtitle: sub.subtitle
    });
  }

  // 3. Top attractions / landmarks
  for (const d of Object.values(EXPERT_DESTINATIONS)) {
    if (d.topAttractions) {
      for (const a of d.topAttractions) {
        index.push({
          id: `attr-${a.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
          label: a.name,
          targetQuery: d.destination,
          type: 'landmark',
          country: d.country,
          flag: COUNTRY_FLAGS[d.country] || '🌐',
          subtitle: `Landmark in ${d.destination}, ${d.country}`
        });
      }
    }
  }

  cachedIndex = index;
  return index;
}

/**
 * Returns prioritized suggestions matching the query string
 * @param {string} query Search input text
 * @param {number} limit Maximum number of suggestions to return (default: 6)
 */
export function getSearchSuggestions(query, limit = 6) {
  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return [];
  }

  const q = query.toLowerCase().trim();
  const index = buildSearchIndex();

  const scored = [];
  const seenLabels = new Set();

  for (const item of index) {
    const labelLower = item.label.toLowerCase();
    const queryLower = item.targetQuery.toLowerCase();
    const countryLower = item.country.toLowerCase();

    // Prevent duplicate entries
    if (seenLabels.has(labelLower)) continue;

    let score = -1;

    // Highest priority: label starts with query
    if (labelLower.startsWith(q)) {
      score = item.type === 'destination' ? 1 : item.type === 'subtown' ? 2 : 3;
    }
    // High priority: word within label starts with query
    else if (labelLower.includes(` ${q}`) || labelLower.includes(`(${q}`)) {
      score = item.type === 'destination' ? 4 : item.type === 'subtown' ? 5 : 6;
    }
    // Medium priority: target destination name starts with query
    else if (queryLower.startsWith(q) && item.type !== 'destination') {
      score = item.type === 'subtown' ? 7 : 8;
    }
    // Substring in label
    else if (labelLower.includes(q)) {
      score = item.type === 'destination' ? 9 : 10;
    }
    // Country starts with query
    else if (countryLower.startsWith(q)) {
      score = 11;
    }

    if (score !== -1) {
      seenLabels.add(labelLower);
      scored.push({ item, score });
    }
  }

  scored.sort((a, b) => a.score - b.score);
  return scored.slice(0, limit).map(s => s.item);
}
