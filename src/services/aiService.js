/**
 * WanderAI Travel Intelligence Engine
 * Supports real Google Gemini API calls with multi-day itinerary synthesis
 * and extensive multi-day local knowledge fallback.
 */

// Daily theme templates for multi-day plans
const THEMATIC_DAYS = [
  {
    theme: "Historic Landmarks & Old Town Orientation",
    morning: "Historic Quarter Walking Tour & Artisanal Breakfast",
    morningDesc: "Explore central heritage monuments, stone gateways, and savor local bakery treats.",
    afternoon: "Iconic Monument & Architectural Masterpiece",
    afternoonDesc: "Guided exploration of the city's premier landmark, followed by traditional lunch.",
    evening: "Scenic Sunset Point & Signature Regional Dinner",
    eveningDesc: "Watch dusk settle over the skyline from a premier viewpoint, followed by authentic local dining.",
    night: "Night Market or River Promenade Stroll",
    nightDesc: "Atmospheric lantern-lit streets, live acoustic music, and evening confectionery.",
    costs: ["$14", "$28", "$34", "$12"]
  },
  {
    theme: "Art, Classical Museums & Culinary Trail",
    morning: "National Art Gallery & Sacred Gardens",
    morningDesc: "Admire classical artworks and peaceful garden grounds before afternoon crowds.",
    afternoon: "Artisan Quarter & Gastronomic Food Tour",
    afternoonDesc: "Sample regional cheeses, pastries, and artisanal street snacks with a local guide.",
    evening: "Canal or Waterfront Cruise at Twilight",
    eveningDesc: "Glide past illuminated architectural wonders as dusk colors reflect on the water.",
    night: "Historic Jazz Club or Speakeasy",
    nightDesc: "Unwind with craft beverages and live performance in the vibrant theater district.",
    costs: ["$18", "$30", "$25", "$15"]
  },
  {
    theme: "Panoramic Skyline, Nature & Waterfront",
    morning: "Scenic Ridge Trek or Botanical Oasis",
    morningDesc: "Morning walk among lush greenery and historic pavilions with fresh fruit juices.",
    afternoon: "High-Altitude Observation Deck & Modern District",
    afternoonDesc: "Take the high-speed glass elevator for 360-degree city views and contemporary shopping.",
    evening: "Harbor Terrace Sunset & Fresh Seafood",
    eveningDesc: "Dine on grilled catch-of-the-day with panoramic ocean or river vistas.",
    night: "Skyline Rooftop Lounge",
    nightDesc: "Sip refreshments overlooking the sea of twinkling city lights from high above.",
    costs: ["$10", "$32", "$38", "$16"]
  },
  {
    theme: "Hidden Neighborhoods & Vintage Bazaars",
    morning: "Flea Market & Antique Craft Quarters",
    morningDesc: "Hunt for unique handmade souvenirs, vintage ceramics, and specialty espresso.",
    afternoon: "Independent Cultural Hub & Street Art Walk",
    afternoonDesc: "Discover colorful murals, contemporary indie art galleries, and bohemian cafes.",
    evening: "Traditional Folk Performance & Feast",
    eveningDesc: "Experience authentic folk dance or acoustic musical heritage with dinner.",
    night: "Lantern-lit Night Bazaar",
    nightDesc: "Haggle for local spices, teas, and evening street food delicacies.",
    costs: ["$12", "$22", "$35", "$14"]
  },
  {
    theme: "Scenic Day Trip to Countryside or Sacred Temples",
    morning: "Scenic Express Train into the Countryside",
    morningDesc: "Depart early through emerald hills and rustic villages to a neighboring heritage town.",
    afternoon: "Ancient Mountain Sanctuary & Local Winery/Tea Farm",
    afternoonDesc: "Tour centuries-old stone cloisters and sample freshly harvested regional produce.",
    evening: "Sunset Return & Bistro Dinner",
    eveningDesc: "Return to the city as twilight settles, dining at a cozy family-run trattoria.",
    night: "Peaceful Nightcap by the Waterfront",
    nightDesc: "Relaxing evening reflection along illuminated water promenades.",
    costs: ["$25", "$30", "$32", "$10"]
  },
  {
    theme: "Contemporary Architecture & Fashion Districts",
    morning: "Modern Design Museum & Futuristic Waterfront",
    morningDesc: "Explore cutting-edge architecture and interactive science or design exhibits.",
    afternoon: "Premier Shopping Boulevards & Cafe Culture",
    afternoonDesc: "Stroll flagship design houses and indulge in decadent afternoon high tea.",
    evening: "Celebrity Chef Restaurant Experience",
    eveningDesc: "Treat yourself to an innovative modern tasting menu highlighting seasonal harvest.",
    night: "Illuminated City Bridge Night Tour",
    nightDesc: "Photograph monumental city bridges glowing with colorful architectural lighting.",
    costs: ["$20", "$35", "$50", "$15"]
  },
  {
    theme: "Relaxed Farewell Tour & Scenic Souvenirs",
    morning: "Favorite Morning Cafe & Scenic Park Walk",
    morningDesc: "Revisit your favorite coffee spot and enjoy a peaceful morning stroll.",
    afternoon: "Artisanal Food Hall & Keepsake Shopping",
    afternoonDesc: "Pick up local gourmet chocolates, spices, textiles, and specialty handicrafts.",
    evening: "Gala Farewell Dinner at Historic Landmark",
    eveningDesc: "Celebrate the final evening with panoramic vistas and a celebratory multi-course dinner.",
    night: "Final Twilight City Lookout",
    nightDesc: "A memorable farewell glance across the illuminated metropolis skyline.",
    costs: ["$15", "$25", "$45", "$12"]
  }
];

export async function generateAITravelGuide(destinationQuery, days = 3, apiKey = "") {
  const cleanDays = Math.min(Math.max(parseInt(days, 10) || 3, 1), 7);
  const activeKey = apiKey || import.meta.env.VITE_GEMINI_API_KEY;

  if (activeKey && activeKey.trim().length > 10) {
    try {
      const prompt = `You are a world-class travel editor for Firestorm Travel Guides.
Generate a comprehensive ${cleanDays}-day structured JSON travel guide for "${destinationQuery}".
Reply with ONLY a valid raw JSON object (no markdown, no backticks, no comments) strictly following this schema:
{
  "destination": "${destinationQuery}",
  "country": "Country name",
  "daysCount": ${cleanDays},
  "tagline": "One catchy punchy sentence summarizing the city/attraction vibe",
  "bestTimeToVisit": "Months to visit and weather rationale",
  "dailyBudgetUSD": 95,
  "topAttractions": [
    { "name": "Attraction name", "fee": "Ticket cost (e.g. $15 or Free)", "insiderTip": "Specific tip to avoid queues" },
    { "name": "Attraction name", "fee": "Ticket cost", "insiderTip": "Specific tip" },
    { "name": "Attraction name", "fee": "Ticket cost", "insiderTip": "Specific tip" }
  ],
  "itineraryDays": [
    {
      "dayNumber": 1,
      "dayTitle": "Theme of Day 1 (e.g. Historic Icons & Central Walk)",
      "slots": [
        { "period": "Morning (08:30 - 12:00)", "activity": "Specific activity", "description": "What to do and breakfast tip", "cost": "$15" },
        { "period": "Afternoon (13:00 - 17:00)", "activity": "Specific activity", "description": "Attraction exploration and lunch", "cost": "$25" },
        { "period": "Evening (17:30 - 20:30)", "activity": "Sunset viewpoint & Dinner", "description": "Scenic spot and dining", "cost": "$30" },
        { "period": "Night (21:00+)", "activity": "Nightlife or stroll", "description": "Atmospheric evening spot", "cost": "$12" }
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
      console.warn("Gemini API call failed, falling back to local travel intelligence engine:", err);
    }
  }

  // Fallback: Intelligent curated synthesis engine
  await new Promise((resolve) => setTimeout(resolve, 350));

  const cleanTitle = destinationQuery.trim().charAt(0).toUpperCase() + destinationQuery.trim().slice(1);
  const normalized = destinationQuery.trim().toLowerCase();

  const country = normalized.includes("tokyo") || normalized.includes("kyoto") ? "Japan"
    : normalized.includes("paris") ? "France"
    : normalized.includes("london") ? "United Kingdom"
    : normalized.includes("rome") ? "Italy"
    : normalized.includes("bali") ? "Indonesia"
    : normalized.includes("agra") || normalized.includes("delhi") || normalized.includes("goa") ? "India"
    : normalized.includes("york") ? "USA"
    : normalized.includes("cairo") ? "Egypt"
    : "Global Destination";

  // Synthesize cleanDays days of itinerary
  const itineraryDays = [];
  for (let d = 0; d < cleanDays; d++) {
    const template = THEMATIC_DAYS[d % THEMATIC_DAYS.length];
    itineraryDays.push({
      dayNumber: d + 1,
      dayTitle: `Day ${d + 1}: ${template.theme}`,
      slots: [
        {
          period: "Morning (08:30 - 12:00)",
          activity: template.morning,
          description: `${template.morningDesc} in ${cleanTitle}.`,
          cost: template.costs[0]
        },
        {
          period: "Afternoon (13:00 - 17:00)",
          activity: template.afternoon,
          description: `${template.afternoonDesc} Experience the vibrant heartbeat of the city.`,
          cost: template.costs[1]
        },
        {
          period: "Evening (17:30 - 20:30)",
          activity: template.evening,
          description: `${template.eveningDesc} Taste signature regional cuisine and seasonal specialties.`,
          cost: template.costs[2]
        },
        {
          period: "Night (21:00+)",
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
    tagline: `An extraordinary ${cleanDays}-day journey through world-famous landmarks, culinary districts, and cultural wonders in ${cleanTitle}.`,
    bestTimeToVisit: "Spring (March - May) and Autumn (September - November) for mild weather and optimal sightseeing conditions.",
    dailyBudgetUSD: 95,
    topAttractions: [
      {
        name: `Historic Quarter & Main Landmark of ${cleanTitle}`,
        fee: "$15 - $25 (Skip-the-line)",
        insiderTip: "Arrive at 8:30 AM right at opening to experience golden hour lighting and beat tour buses."
      },
      {
        name: "National Heritage Museum & Cultural District",
        fee: "$12 - $18",
        insiderTip: "Book advance digital tickets to skip ticket booth queues; check for audio guide bundles."
      },
      {
        name: "Panoramic City Lookout / Waterfront Promenade",
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
      "Purchase a multi-day rechargeable transit card on arrival to save up to 40% on single metro fares.",
      "Carry a small amount of local currency notes for smaller family-owned food stalls.",
      "Always rely on official taxi ranks or ride-hailing apps rather than unlicensed solicitations."
    ],
    isLiveAI: false
  };
}
