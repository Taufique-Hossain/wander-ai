/**
 * WanderAI Travel Intelligence Engine
 * Built for Firestorm Internet Travel Guide Architecture
 * 
 * Features:
 * 1. Curated Real-World Intelligence for 20+ Global & Indian Destinations
 *    (Sikkim, Goa, Manali, Ladakh, Kerala, Kashmir, Jaipur, Paris, Tokyo, Dubai, etc.)
 *    with exact landmark names, morning/afternoon/evening/night time slots, and insider tips.
 * 2. Live Wikipedia REST Summary API Integration for any destination worldwide.
 * 3. Real Google Gemini 1.5 Flash API integration when an API key is provided.
 * 4. Resilient multi-day trip synthesizer supporting 1 to 7 day plans.
 */

import { EXPERT_DESTINATIONS } from '../data/expertDestinations.js';

// Comprehensive alias dictionary for instant recognition
const DESTINATION_ALIASES = {
  sikkim: ['sikkim', 'gangtok', 'pelling', 'tsomgo', 'nathula', 'rumtek', 'lachung', 'lachen', 'namchi', 'ravangla', 'yumthang', 'changu'],
  goa: ['goa', 'panaji', 'panjim', 'baga', 'calangute', 'anjuna', 'candolim', 'palolem', 'south goa', 'north goa', 'cabo de rama', 'dudhsagar'],
  manali: ['manali', 'kullu', 'solang', 'rohtang', 'atal tunnel', 'old manali', 'naggar', 'hadimba', 'vashisht'],
  ladakh: ['ladakh', 'leh', 'nubra', 'pangong', 'khardung', 'zanskar', 'diskit', 'hunder', 'spangmik'],
  kerala: ['kerala', 'munnar', 'alleppey', 'alappuzha', 'kochi', 'cochin', 'thekkady', 'varkala', 'wayanad', 'kumarakom', 'marari'],
  jaipur: ['jaipur', 'pink city', 'amer', 'amber fort', 'hawa mahal', 'rajasthan', 'nahargarh', 'jaigarh', 'chokhi dhani'],
  kashmir: ['kashmir', 'srinagar', 'gulmarg', 'pahalgam', 'sonamarg', 'dal lake', 'betaab valley', 'apharwat'],
  paris: ['paris', 'france', 'eiffel', 'louvre', 'montmartre', 'versailles', 'seine'],
  tokyo: ['tokyo', 'japan', 'shibuya', 'shinjuku', 'asakusa', 'akihabara', 'harajuku', 'tsukiji', 'teamlab'],
  dubai: ['dubai', 'burj khalifa', 'uae', 'united arab emirates', 'palm jumeirah', 'deira'],
  bali: ['bali', 'ubud', 'seminyak', 'canggu', 'kuta', 'uluwatu', 'indonesia', 'tegallalang', 'tanah lot'],
  agra: ['agra', 'taj mahal', 'fatehpur sikri', 'mehtab bagh', 'baby taj'],
  darjeeling: ['darjeeling', 'tiger hill', 'batasia', 'ghoom', 'happy valley'],
  london: ['london', 'uk', 'england', 'westminster', 'big ben', 'tower of london', 'covent garden', 'buckingham', 'borough market'],
  rome: ['rome', 'roma', 'vatican', 'colosseum', 'italy', 'trevi', 'pantheon', 'trastevere'],
  newyork: ['new york', 'new york city', 'nyc', 'manhattan', 'brooklyn', 'times square', 'central park', 'usa'],
  switzerland: ['switzerland', 'swiss', 'interlaken', 'lucerne', 'zurich', 'jungfrau', 'lauterbrunnen', 'grindelwald', 'zermatt'],
  singapore: ['singapore', 'gardens by the bay', 'marina bay', 'changi', 'sentosa'],
  varanasi: ['varanasi', 'banaras', 'kashi', 'ganga aarti', 'sarnath', 'assi ghat', 'dashashwamedh'],
  shimla: ['shimla', 'kufri', 'the ridge', 'jakhu', 'viceregal lodge', 'chail'],
  andaman: ['andaman', 'nicobar', 'havelock', 'swaraj dweep', 'port blair', 'radhanagar', 'neil island', 'elephant beach', 'cellular jail'],
  udaipur: ['udaipur', 'pichola', 'lake pichola', 'city palace udaipur', 'jag mandir', 'fateh sagar', 'monsoon palace', 'sajjangarh', 'bagore ki haveli'],
  rishikesh: ['rishikesh', 'haridwar', 'laxman jhula', 'ram jhula', 'beatles ashram', 'triveni ghat', 'har ki pauri', 'ganga aarti rishikesh'],
  meghalaya: ['meghalaya', 'shillong', 'cherrapunji', 'sohra', 'dawki', 'living root bridge', 'nongriat', 'nohkalikai', 'mawlynnong', 'umiam'],
  amritsar: ['amritsar', 'golden temple', 'harmandir sahib', 'wagah', 'wagah border', 'jallianwala bagh', 'punjab'],
  ooty: ['ooty', 'udagamandalam', 'coonoor', 'nilgiris', 'doddabetta', 'ooty lake', 'pykara', 'sims park'],
  coorg: ['coorg', 'kodagu', 'madikeri', 'abbey falls', 'bylakuppe', 'golden temple coorg', 'dubare', 'rajas seat'],
  hampi: ['hampi', 'vijayanagara', 'vittala', 'virupaksha', 'stone chariot', 'tungabhadra', 'anegundi', 'sanapur'],
  mumbai: ['mumbai', 'bombay', 'marine drive', 'gateway of india', 'elephanta', 'bandra', 'colaba', 'juhu', 'csmt'],
  delhi: ['delhi', 'new delhi', 'qutub minar', 'red fort', 'humayun tomb', 'chandni chowk', 'india gate', 'connaught place', 'old delhi'],
  pondicherry: ['pondicherry', 'puducherry', 'pondy', 'white town', 'auroville', 'matrimandir', 'promenade beach', 'french quarter'],
  jaisalmer: ['jaisalmer', 'golden fort', 'sonar qila', 'sam sand dunes', 'patwon ki haveli', 'gadisar', 'thar desert'],
  barcelona: ['barcelona', 'sagrada familia', 'park guell', 'las ramblas', 'casa batllo', 'gothic quarter barcelona', 'spain'],
  amsterdam: ['amsterdam', 'netherlands', 'holland', 'rijksmuseum', 'van gogh', 'anne frank', 'jordaan', 'canal cruise amsterdam'],
  bangkok: ['bangkok', 'thailand', 'grand palace bangkok', 'wat arun', 'wat pho', 'chatuchak', 'khao san', 'yaowarat'],
  maldives: ['maldives', 'male', 'maafushi', 'overwater villa', 'ari atoll', 'fulidhoo'],
  kolkata: ['kolkata', 'calcutta', 'howrah bridge', 'victoria memorial', 'dakshineswar', 'belur math', 'princep ghat', 'park street kolkata'],
  hyderabad: ['hyderabad', 'charminar', 'golconda', 'ramoji', 'hussain sagar', 'salar jung', 'secunderabad'],
  sydney: ['sydney', 'australia', 'opera house', 'sydney harbour', 'bondi', 'bondi beach', 'manly ferry', 'coogee'],
  cairo: ['cairo', 'giza', 'pyramids', 'great pyramid', 'sphinx', 'egypt', 'nile cruise', 'khan el khalili']
};

export function matchExpertDestination(query) {
  if (!query) return null;
  const norm = query.toLowerCase().trim();

  // 1. Direct key match
  if (EXPERT_DESTINATIONS[norm]) {
    return EXPERT_DESTINATIONS[norm];
  }

  // 2. Exact alias match first
  for (const [destKey, aliases] of Object.entries(DESTINATION_ALIASES)) {
    if (aliases.some(alias => norm === alias)) {
      return EXPERT_DESTINATIONS[destKey];
    }
  }

  // 3. Whole-word boundary match (prevents "agra" from matching inside "sagrada")
  for (const [destKey, aliases] of Object.entries(DESTINATION_ALIASES)) {
    if (aliases.some(alias => {
      const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(^|\\s|\\b)${escaped}(\\b|\\s|$)`, 'i');
      return regex.test(norm) || (alias.length >= 6 && norm.includes(alias));
    })) {
      return EXPERT_DESTINATIONS[destKey];
    }
  }

  return null;
}

// Fallback thematic templates for arbitrary regions
const REGIONAL_THEMES = [
  {
    theme: "Historic Core & Architectural Orientation",
    morning: "Historic Quarter Walking Tour & Local Artisanal Breakfast",
    morningDesc: "Explore central monuments, heritage gateways, and savor freshly baked morning specialties.",
    afternoon: "Premier Landmark & National Cultural Museum",
    afternoonDesc: "Guided exploration of the signature monument, followed by traditional regional lunch.",
    evening: "Panoramic Sunset Viewpoint & Waterfront Promenade",
    eveningDesc: "Watch twilight settle across the skyline from the city's premier observation point.",
    night: "Authentic Regional Dining Trail",
    nightDesc: "Taste beloved culinary traditions, seasonal specialties, and evening sweets.",
    costs: ["$15", "$25", "Free", "$30"]
  },
  {
    theme: "Art, Classical Sanctuaries & Local Markets",
    morning: "Historic Sacred Temple / Cathedral & Botanical Grounds",
    morningDesc: "Admire centuries-old architecture and tranquil gardens in the gentle morning light.",
    afternoon: "Artisan Quarter & Street Food Exploration",
    afternoonDesc: "Sample regional treats, cheeses, pastries, and interact with local craftspeople.",
    evening: "Sunset River / Lake Boat Cruise",
    eveningDesc: "Glide past illuminated architectural marvels as twilight colors reflect on the water.",
    night: "Atmospheric Lantern-Lit Night Bazaar",
    nightDesc: "Browse handwoven textiles, spices, teas, and listen to acoustic street buskers.",
    costs: ["$12", "$20", "$28", "$18"]
  },
  {
    theme: "Nature Escapes, Scenic Ridges & Sunset Dining",
    morning: "Alpine / Forest Nature Walk or Coastal Clifftop Hike",
    morningDesc: "Morning trek among lush greenery, panoramic mountain passes, or crashing ocean waves.",
    afternoon: "Historic Hill Fortress or High-Altitude Vista",
    afternoonDesc: "Ascend to panoramic lookouts offering sheer 360-degree vistas across the province.",
    evening: "Sunset Terrace & Fresh Regional Catch",
    eveningDesc: "Dine on grilled local produce with sweeping sunset panoramas.",
    night: "Stargazing & Traditional Acoustic Folk Music",
    nightDesc: "Unwind under unpolluted night skies with warm herbal teas and folk melodies.",
    costs: ["$10", "$22", "$35", "$15"]
  },
  {
    theme: "Hidden Neighborhoods & Living Heritage",
    morning: "Antique Flea Market & Vintage Craft Guilds",
    morningDesc: "Hunt for unique handmade souvenirs, vintage pottery, and authentic espresso.",
    afternoon: "Independent Cultural Workshops & Folk Center",
    afternoonDesc: "Discover colorful neighborhood murals, indie design studios, and community cafes.",
    evening: "Classical Music or Traditional Folk Dance Performance",
    eveningDesc: "Experience rich acoustic musical heritage and traditional storytelling.",
    night: "Late Evening Cafe & Sweet Delicacies",
    nightDesc: "Savor warm local confectionery and tea in the historic theatre district.",
    costs: ["$12", "$18", "$32", "$14"]
  },
  {
    theme: "Scenic Countryside Day Excursion",
    morning: "Scenic Countryside Drive or Heritage Train",
    morningDesc: "Depart early through rustic villages and rolling hills to a neighboring historic sanctuary.",
    afternoon: "Ancient Mountain Cloister & Farm-to-Table Lunch",
    afternoonDesc: "Tour centuries-old stone cloisters and sample freshly harvested regional produce.",
    evening: "Twilight Return & Cozy Family Trattoria",
    eveningDesc: "Return to the city as evening lights ignite, dining at a beloved family-run bistro.",
    night: "Peaceful Night Walk along Illuminated Promenades",
    nightDesc: "Reflect on your journey along peaceful illuminated waterways and historic stone plazas.",
    costs: ["$25", "$30", "$32", "$12"]
  },
  {
    theme: "Modern Innovations, Skydecks & Culinary Excellence",
    morning: "Futuristic Design Center & Waterfront Architecture",
    morningDesc: "Explore cutting-edge contemporary architecture and interactive cultural exhibitions.",
    afternoon: "High-Speed Glass Skydeck & Designer District",
    afternoonDesc: "Take the high-speed lift for bird's-eye views and explore premier shopping avenues.",
    evening: "Celebrity Chef Tasting Experience",
    eveningDesc: "Indulge in an innovative contemporary tasting menu highlighting seasonal ingredients.",
    night: "Illuminated City Bridges Night Photography",
    nightDesc: "Photograph monumental suspension bridges and skyscrapers glowing with architectural lights.",
    costs: ["$20", "$35", "$55", "$16"]
  },
  {
    theme: "Relaxed Farewell Tour & Scenic Souvenirs",
    morning: "Favorite Morning Cafe & Scenic Park Walk",
    morningDesc: "Revisit your favorite coffee spot and enjoy a peaceful morning stroll.",
    afternoon: "Artisanal Food Hall & Keepsake Shopping",
    afternoonDesc: "Pick up local gourmet treats, teas, textiles, and specialty handicrafts.",
    evening: "Gala Farewell Dinner at Historic Landmark",
    eveningDesc: "Celebrate your final evening with panoramic vistas and a celebratory multi-course dinner.",
    night: "Final Twilight City Lookout",
    nightDesc: "A memorable farewell glance across the illuminated metropolis skyline.",
    costs: ["$15", "$25", "$45", "$12"]
  }
];

export async function generateAITravelGuide(destinationQuery, days = 3, apiKey = "") {
  const cleanDays = Math.min(Math.max(parseInt(days, 10) || 3, 1), 7);
  const activeKey = apiKey || (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_GEMINI_API_KEY : '');

  // 1. Check Curated Expert Destinations (Instant, 100% accurate real-world data)
  const expertMatch = matchExpertDestination(destinationQuery);
  if (expertMatch) {
    await new Promise((resolve) => setTimeout(resolve, 300)); // Natural smooth UI feedback

    // Build the requested number of days
    const itineraryDays = [];
    for (let d = 0; d < cleanDays; d++) {
      if (d < expertMatch.days.length) {
        itineraryDays.push({
          ...expertMatch.days[d],
          dayNumber: d + 1
        });
      } else {
        // If user requested more days than initially curated, expand with thematic extension
        const theme = REGIONAL_THEMES[d % REGIONAL_THEMES.length];
        itineraryDays.push({
          dayNumber: d + 1,
          dayTitle: `Day ${d + 1}: ${theme.theme} in ${expertMatch.destination}`,
          slots: [
            {
              period: "Morning (08:30 - 12:00)",
              activity: `${expertMatch.destination} ${theme.morning}`,
              description: theme.morningDesc,
              cost: theme.costs[0]
            },
            {
              period: "Afternoon (13:00 - 16:30)",
              activity: theme.afternoon,
              description: theme.afternoonDesc,
              cost: theme.costs[1]
            },
            {
              period: "Evening (17:00 - 19:30)",
              activity: theme.evening,
              description: theme.eveningDesc,
              cost: theme.costs[2]
            },
            {
              period: "Night (20:00+)",
              activity: theme.night,
              description: theme.nightDesc,
              cost: theme.costs[3]
            }
          ]
        });
      }
    }

    return {
      destination: expertMatch.destination,
      country: expertMatch.country,
      daysCount: cleanDays,
      tagline: expertMatch.tagline,
      bestTimeToVisit: expertMatch.bestTimeToVisit,
      dailyBudgetUSD: expertMatch.dailyBudgetUSD,
      topAttractions: expertMatch.topAttractions,
      itineraryDays: itineraryDays,
      budgetTiers: expertMatch.budgetTiers,
      localTips: expertMatch.localTips,
      isLiveAI: false
    };
  }

  // 2. If Gemini API key is provided, try Live Google Gemini 1.5 Flash
  if (activeKey && activeKey.trim().length > 10) {
    try {
      const prompt = `You are a world-class travel editor for Firestorm Travel Guides.
Generate a comprehensive ${cleanDays}-day structured JSON travel guide for "${destinationQuery}".
Include EXACT REAL-WORLD LANDMARK NAMES (no generic placeholders), exact time slots (Morning, Afternoon, Evening, Night), and authentic local food dishes.
Reply with ONLY a valid raw JSON object strictly following this schema:
{
  "destination": "${destinationQuery}",
  "country": "Country name",
  "daysCount": ${cleanDays},
  "tagline": "One catchy punchy sentence summarizing the city/attraction vibe",
  "bestTimeToVisit": "Months to visit and weather rationale",
  "dailyBudgetUSD": 95,
  "topAttractions": [
    { "name": "Exact attraction name", "fee": "Ticket cost (e.g. $15 or Free)", "insiderTip": "Specific tip to avoid queues" },
    { "name": "Exact attraction name", "fee": "Ticket cost", "insiderTip": "Specific tip" },
    { "name": "Exact attraction name", "fee": "Ticket cost", "insiderTip": "Specific tip" }
  ],
  "itineraryDays": [
    {
      "dayNumber": 1,
      "dayTitle": "Theme of Day 1",
      "slots": [
        { "period": "Morning (08:30 - 12:00)", "activity": "Exact place/activity name", "description": "What to do and breakfast tip", "cost": "$15" },
        { "period": "Afternoon (13:00 - 17:00)", "activity": "Exact place/activity name", "description": "Attraction exploration and lunch", "cost": "$25" },
        { "period": "Evening (17:30 - 20:30)", "activity": "Exact viewpoint & Dinner", "description": "Scenic spot and dining", "cost": "$30" },
        { "period": "Night (21:00+)", "activity": "Exact evening spot or market", "description": "Atmospheric evening spot", "cost": "$12" }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "$35 - $50 / day",
    "midRange": "$90 - $140 / day",
    "luxury": "$280+ / day"
  },
  "localTips": [
    "Tip on public transit and payment cards",
    "Tipping culture and etiquette guidance",
    "Safety or common tourist scam to avoid"
  ]
}`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.7,
              responseMimeType: "application/json"
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const parsed = JSON.parse(rawText.replace(/```json|```/g, "").trim());
          return { ...parsed, isLiveAI: true, daysCount: cleanDays };
        }
      }
    } catch (err) {
      console.warn("Gemini API call failed, falling back to live knowledge engine:", err);
    }
  }

  // 3. Live Knowledge Engine: Fetch Real Wikipedia Summary
  let wikiData = null;
  try {
    const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(destinationQuery.trim())}`;
    const wRes = await fetch(wikiUrl);
    if (wRes.ok) {
      wikiData = await wRes.json();
    }
  } catch (wErr) {
    console.warn("Wikipedia summary fetch error:", wErr);
  }

  const cleanTitle = wikiData?.title || destinationQuery.trim().charAt(0).toUpperCase() + destinationQuery.trim().slice(1);
  const normalized = destinationQuery.trim().toLowerCase();

  // Determine Country intelligently
  let country = "Global Destination";
  if (wikiData?.description && wikiData.description.includes(",")) {
    country = wikiData.description.split(",").pop().trim();
  } else if (normalized.includes("tokyo") || normalized.includes("kyoto") || normalized.includes("osaka")) country = "Japan";
  else if (normalized.includes("paris") || normalized.includes("nice") || normalized.includes("lyon")) country = "France";
  else if (normalized.includes("london") || normalized.includes("edinburgh") || normalized.includes("manchester")) country = "United Kingdom";
  else if (normalized.includes("rome") || normalized.includes("venice") || normalized.includes("florence") || normalized.includes("milan")) country = "Italy";
  else if (normalized.includes("berlin") || normalized.includes("munich") || normalized.includes("frankfurt")) country = "Germany";
  else if (normalized.includes("madrid") || normalized.includes("barcelona") || normalized.includes("seville")) country = "Spain";
  else if (normalized.includes("vienna") || normalized.includes("salzburg")) country = "Austria";
  else if (normalized.includes("sydney") || normalized.includes("melbourne")) country = "Australia";
  else if (normalized.includes("delhi") || normalized.includes("mumbai") || normalized.includes("bangalore") || normalized.includes("kolkata") || normalized.includes("shillong")) country = "India";
  else if (normalized.includes("cairo")) country = "Egypt";
  else if (normalized.includes("york") || normalized.includes("chicago") || normalized.includes("angeles") || normalized.includes("francisco")) country = "USA";

  const tagline = wikiData?.description
    ? `An extraordinary journey through ${cleanTitle}: ${wikiData.description}.`
    : `An immersive ${cleanDays}-day expedition through the iconic monuments, scenic landscapes, and culinary traditions of ${cleanTitle}.`;

  // Synthesize cleanDays days
  const itineraryDays = [];
  for (let d = 0; d < cleanDays; d++) {
    const template = REGIONAL_THEMES[d % REGIONAL_THEMES.length];
    itineraryDays.push({
      dayNumber: d + 1,
      dayTitle: `Day ${d + 1}: ${template.theme}`,
      slots: [
        {
          period: "Morning (08:30 - 12:00)",
          activity: `${cleanTitle} ${template.morning}`,
          description: `${template.morningDesc} Soak in the distinctive morning ambiance of ${cleanTitle}.`,
          cost: template.costs[0]
        },
        {
          period: "Afternoon (13:00 - 16:30)",
          activity: template.afternoon,
          description: `${template.afternoonDesc} Experience the cultural heartbeat of the region.`,
          cost: template.costs[1]
        },
        {
          period: "Evening (17:00 - 19:30)",
          activity: `${cleanTitle} ${template.evening}`,
          description: `${template.eveningDesc} Taste signature regional cuisine and seasonal specialties.`,
          cost: template.costs[2]
        },
        {
          period: "Night (20:00+)",
          activity: template.night,
          description: template.nightDesc,
          cost: template.costs[3]
        }
      ]
    });
  }

  return {
    destination: cleanTitle,
    country: country,
    daysCount: cleanDays,
    tagline: tagline,
    bestTimeToVisit: "Spring (March - May) and Autumn (September - November) for mild weather and optimal sightseeing conditions.",
    dailyBudgetUSD: 95,
    topAttractions: [
      {
        name: `Historic Quarter & Main Landmark of ${cleanTitle}`,
        fee: "$15 - $25 (Skip-the-line)",
        insiderTip: "Arrive at 08:30 AM right at opening to experience golden hour lighting and beat tour buses."
      },
      {
        name: `National Heritage Museum of ${cleanTitle}`,
        fee: "$12 - $18",
        insiderTip: "Book advance digital tickets to skip ticket booth queues; check for audio guide bundles."
      },
      {
        name: `Panoramic City Lookout / Waterfront in ${cleanTitle}`,
        fee: "Free / $10 pass",
        insiderTip: "Head to the summit 45 minutes before sunset for 360-degree twilight photography."
      }
    ],
    itineraryDays: itineraryDays,
    budgetTiers: {
      backpacker: "$35 - $48 / day (hostel dorm + street food + public transit)",
      midRange: "$85 - $135 / day (3-star boutique stay + sit-down dining + museum entry)",
      luxury: "$260+ / day (5-star heritage hotel + private guides + fine dining)"
    },
    localTips: [
      `Purchase a multi-day rechargeable transit card on arrival in ${cleanTitle} to save up to 40% on single fares.`,
      "Carry a small amount of local currency notes for smaller family-owned food stalls.",
      "Always rely on official registered transport or ride-hailing apps rather than unlicensed solicitations."
    ],
    isLiveAI: false
  };
}
