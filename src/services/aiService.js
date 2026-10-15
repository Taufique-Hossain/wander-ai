/**
 * WanderAI Travel Intelligence Engine
 * Supports real Google Gemini API calls with fallback to an extensive curated knowledge engine
 */

const CURATED_KNOWLEDGE = {
  tokyo: {
    destination: "Tokyo",
    country: "Japan",
    tagline: "A mesmerizing convergence of ultra-futuristic neon districts and tranquil, ancient Shinto sanctuaries.",
    bestTimeToVisit: "March to May (Cherry Blossoms) and September to November (crisp autumn foliage).",
    dailyBudgetUSD: 95,
    topAttractions: [
      { name: "Senso-ji Temple & Asakusa", fee: "Free", insiderTip: "Visit at dawn (before 7:30 AM) to experience the historic grounds in quiet serenity without tour crowds." },
      { name: "Shibuya Sky Observatory", fee: "$16.00", insiderTip: "Book online 4 weeks early for the 5:00 PM sunset slot over Shibuya Crossing." },
      { name: "TeamLab Planets Immersive", fee: "$26.00", insiderTip: "Wear comfortable rollable trousers; portions of the water exhibit reach knee depth." }
    ],
    itinerary: [
      { period: "Morning (08:30 - 12:00)", activity: "Historic Asakusa & Nakamise Street", description: "Stroll through Kaminarimon Gate, explore the sacred incense urns, and savor fresh melonpan pastries.", cost: "$12" },
      { period: "Afternoon (13:00 - 17:00)", activity: "Meiji Jingu & Harajuku Takeshita Street", description: "Wander the evergreen forest surrounding Tokyo's premier shrine, followed by quirky fashion and matcha crepes.", cost: "$22" },
      { period: "Evening (17:30 - 20:30)", activity: "Shibuya Crossing & Sky Terrace", description: "Take in the panoramic twilight vista from 229 meters, followed by authentic tonkatsu or ramen in Shibuya.", cost: "$35" },
      { period: "Night (21:00+)", activity: "Shinjuku Omoide Yokocho (Memory Lane)", description: "Atmospheric lantern-lit alleyways serving grilled yakitori skewers and draft refreshments.", cost: "$18" }
    ],
    budgetTiers: {
      backpacker: "$35 - $48 / day (capsule hotel + convenience store onigiri + 72-hr metro pass)",
      midRange: "$90 - $145 / day (3-star business hotel + conveyor sushi + izakaya dinner)",
      luxury: "$290+ / day (5-star skyscraper hotel + multi-course kaiseki dinner + Shinkansen green car)"
    },
    localTips: [
      "Purchase a Welcome Suica or Pasmo digital IC card on iPhone/Android for contactless metro gates and vending machines.",
      "Tipping is strictly not customary in Japan and can cause polite embarrassment.",
      "Carry a small bag for your personal trash; public waste bins are rare on Tokyo streets."
    ]
  },
  paris: {
    destination: "Paris",
    country: "France",
    tagline: "The timeless capital of haute couture, classical architecture, and unmatched culinary tradition.",
    bestTimeToVisit: "April to June and September to October for pleasant weather and romantic cafe terraces.",
    dailyBudgetUSD: 110,
    topAttractions: [
      { name: "Eiffel Tower Summit", fee: "$32.00", insiderTip: "Book summit lift passes exactly 60 days ahead at midnight CET to secure golden-hour slots." },
      { name: "Louvre Museum", fee: "$24.00", insiderTip: "Enter via the underground Carrousel du Louvre shopping entrance to avoid pyramid queues." },
      { name: "Sainte-Chapelle", fee: "$14.00", insiderTip: "Visit during bright morning sunlight to see the 1,113 stained glass panels in full brilliance." }
    ],
    itinerary: [
      { period: "Morning (08:30 - 12:00)", activity: "Montmartre & Sacré-Cœur Basilica", description: "Walk the cobblestone artist quarters of Place du Tertre before stepping inside the dome for sweeping city views.", cost: "$15" },
      { period: "Afternoon (13:00 - 17:00)", activity: "Louvre Masterpieces & Tuileries Garden", description: "View the Winged Victory and Mona Lisa, followed by hot chocolate at Angelina and a stroll by the Seine.", cost: "$30" },
      { period: "Evening (17:30 - 20:30)", activity: "Seine Sunset Cruise & Latin Quarter Dinner", description: "Board an open-air river cruise gliding past Notre-Dame as monument lights illuminate at dusk.", cost: "$38" },
      { period: "Night (21:00+)", activity: "Eiffel Tower Sparkle & Champ de Mars", description: "Watch the 5-minute beacon sparkle on the hour with local wine and artisanal cheese.", cost: "$14" }
    ],
    budgetTiers: {
      backpacker: "$45 - $60 / day (hostel dorm + boulangerie baguettes + Navigo metro pass)",
      midRange: "$105 - $160 / day (boutique Marais hotel + bistro dining + museum passes)",
      luxury: "$320+ / day (palace hotel on Rue de Rivoli + Michelin dining + private driver)"
    },
    localTips: [
      "Always greet boutique and restaurant staff with a polite 'Bonjour Madame/Monsieur' upon entering.",
      "Beware of petition clipboard scammers and friendship bracelet vendors near Sacré-Cœur.",
      "Tap water in Parisian restaurants is pristine; ask for 'une carafe d'eau' for free table water."
    ]
  },
  london: {
    destination: "London",
    country: "United Kingdom",
    tagline: "A majestic global capital uniting thousand-year royal heritage with cutting-edge cultural innovation.",
    bestTimeToVisit: "May to September for warm daylight evenings, blooming royal parks, and outdoor festival season.",
    dailyBudgetUSD: 115,
    topAttractions: [
      { name: "Tower of London & Crown Jewels", fee: "$42.00", insiderTip: "Join the free Yeoman Warder ('Beefeater') tour immediately upon entering the West Gate." },
      { name: "British Museum", fee: "Free", insiderTip: "Pre-book free timed entry tickets online; head directly to the Rosetta Stone in Room 4." },
      { name: "Sky Garden at 20 Fenchurch", fee: "Free", insiderTip: "Free tickets release every Monday at 10 AM; offers superior vistas to paid observation decks." }
    ],
    itinerary: [
      { period: "Morning (08:30 - 12:00)", activity: "Westminster & Buckingham Palace", description: "Marvel at Big Ben, explore the grounds of Westminster Abbey, and catch the Changing of the Guard.", cost: "$18" },
      { period: "Afternoon (13:00 - 17:00)", activity: "South Bank & Borough Market Feast", description: "Sample artisanal street eats at London's oldest food market, followed by Tate Modern contemporary art.", cost: "$26" },
      { period: "Evening (17:30 - 20:30)", activity: "Covent Garden & West End Musical", description: "Watch street performers on the piazza before dining at a historic pub and catching theater productions.", cost: "$45" },
      { period: "Night (21:00+)", activity: "Soho & Chinatown Night Stroll", description: "Vibrant speakeasies, late-night dim sum, and neon cocktail bars across the bustling West End.", cost: "$16" }
    ],
    budgetTiers: {
      backpacker: "$45 - $65 / day (hostel + supermarket meal deals + Oyster daily cap)",
      midRange: "$110 - $170 / day (Bloomsbury hotel + gastropub dining + musical tickets)",
      luxury: "$340+ / day (Mayfair 5-star hotel + Afternoon Tea at The Ritz + black cab transit)"
    },
    localTips: [
      "London transit is 100% contactless; tap your phone/debit card on the yellow reader instead of buying paper tickets.",
      "Always stand on the right side of the Tube escalators to let commuters walk on the left.",
      "Most national museums (British Museum, V&A, Natural History) offer completely free admission."
    ]
  },
  rome: {
    destination: "Rome",
    country: "Italy",
    tagline: "The Eternal City where gladiator ruins and Baroque fountains integrate with vibrant Italian life.",
    bestTimeToVisit: "March to May and October to November for mild temperatures and manageable crowds.",
    dailyBudgetUSD: 100,
    topAttractions: [
      { name: "Colosseum & Roman Forum", fee: "$20.00", insiderTip: "Book official CoopCulture tickets with Arena Floor access for breathtaking gladiatorial perspective." },
      { name: "Vatican Museums & Sistine Chapel", fee: "$22.00", insiderTip: "Book the earliest 8:00 AM breakfast entry to experience Michelangelo's frescoes in peaceful calm." },
      { name: "The Pantheon", fee: "$5.50", insiderTip: "Visit around midday when the sunlight streams directly through the center oculus." }
    ],
    itinerary: [
      { period: "Morning (08:30 - 12:00)", activity: "Ancient Rome: Colosseum & Palatine Hill", description: "Walk through the monumental ruins where emperors built palaces and gladiators fought.", cost: "$22" },
      { period: "Afternoon (13:00 - 17:00)", activity: "Historic Centro & Trevi Fountain", description: "Toss a coin into Trevi Fountain, admire the Pantheon dome, and enjoy authentic pistachio gelato.", cost: "$16" },
      { period: "Evening (17:30 - 20:30)", activity: "Trastevere Cobblestone Dinner", description: "Cross the Tiber river into Trastevere for authentic Cacio e Pepe and carafes of Roman wine.", cost: "$32" },
      { period: "Night (21:00+)", activity: "Piazza Navona & Illuminated Fountains", description: "Sip espresso on the baroque square enjoying Bernini's Fountain of the Four Rivers under night lights.", cost: "$10" }
    ],
    budgetTiers: {
      backpacker: "$38 - $52 / day (hostel + pizza al taglio + walking tour)",
      midRange: "$95 - $140 / day (Trastevere guesthouse + trattoria dining + Vatican tickets)",
      luxury: "$280+ / day (Piazza di Spagna luxury hotel + private museum guides + rooftop dining)"
    },
    localTips: [
      "Carry an empty water bottle; the historic cast-iron street fountains ('nasoni') dispense ice-cold mountain spring water for free.",
      "Cover shoulders and knees when visiting churches including St. Peter's and the Pantheon.",
      "Never sit down at a cafe counter if you want the lower standing price for your espresso."
    ]
  },
  bali: {
    destination: "Bali",
    country: "Indonesia",
    tagline: "An exotic tropical haven renowned for sacred sea temples, lush rice terraces, and surf breaks.",
    bestTimeToVisit: "April to October during the dry season for sunny days, lower humidity, and calm seas.",
    dailyBudgetUSD: 45,
    topAttractions: [
      { name: "Uluwatu Sea Cliff Temple", fee: "$3.50", insiderTip: "Watch the sunset Kecak fire dance overlooking the Indian Ocean; guard eyewear from playful monkeys." },
      { name: "Tegallalang Rice Terraces", fee: "$2.00", insiderTip: "Arrive at 7:00 AM to see morning sun rays piercing through coconut palms without tourists." },
      { name: "Tanah Lot Pilgrimage Temple", fee: "$4.00", insiderTip: "Visit at low tide to receive a blessing at the sacred natural freshwater spring beneath the rock." }
    ],
    itinerary: [
      { period: "Morning (08:30 - 12:00)", activity: "Ubud Monkey Forest & Sacred Springs", description: "Walk among ancient banyan trees and macaques, followed by fresh dragonfruit smoothie bowls.", cost: "$10" },
      { period: "Afternoon (13:00 - 17:00)", activity: "Waterfall Trek & Coffee Plantation", description: "Swim at Tibumana waterfall and sample traditional Luwak coffee overlooking jungle ravines.", cost: "$15" },
      { period: "Evening (17:30 - 20:30)", activity: "Jimbaran Bay Seafood Sunset", description: "Dine on grilled snapper and tiger prawns with tables set right on the soft ocean sand.", cost: "$20" },
      { period: "Night (21:00+)", activity: "Canggu Beachfront Lounge", description: "Listen to acoustic island music with fresh coconut water and ocean breezes under palm trees.", cost: "$8" }
    ],
    budgetTiers: {
      backpacker: "$20 - $30 / day (bamboo hostel + scooter rental + local warung meals)",
      midRange: "$45 - $80 / day (private pool villa + cafe dining + day driver)",
      luxury: "$190+ / day (cliffside 5-star resort + holistic spa + private yacht cruise)"
    },
    localTips: [
      "Download the Grab and Gojek apps on arrival for easy scooter taxis and food delivery.",
      "Wear a sarong and sash when entering any temple (usually provided at the ticket counter).",
      "Only drink bottled or filtered water; avoid brushing teeth with tap water to prevent 'Bali belly'."
    ]
  },
  agra: {
    destination: "Agra",
    country: "India",
    tagline: "The imperial Mughal capital crowned by the Taj Mahal, the pinnacle of Indo-Islamic marble artistry.",
    bestTimeToVisit: "October to March for cool pleasant mornings, clear blue skies, and gentle sunshine.",
    dailyBudgetUSD: 35,
    topAttractions: [
      { name: "Taj Mahal", fee: "₹50 (Indian) / ₹1100 (Intl)", insiderTip: "Enter through the East Gate 30 minutes before sunrise for golden hour reflection photography." },
      { name: "Agra Fort", fee: "₹50 (Indian) / ₹650 (Intl)", insiderTip: "Explore the Musamman Burj balcony where Emperor Shah Jahan gazed at the Taj Mahal in his final days." },
      { name: "Mehtab Bagh (Moonlight Garden)", fee: "₹25 (Indian) / ₹300 (Intl)", insiderTip: "Sunset vantage point across the Yamuna river without the interior mausoleum crowds." }
    ],
    itinerary: [
      { period: "Morning (06:00 - 10:30)", activity: "Sunrise at Taj Mahal", description: "Experience the white marble glow as dawn breaks, followed by bedmi puri and jalebi breakfast.", cost: "$15" },
      { period: "Afternoon (11:30 - 15:30)", activity: "Agra Fort & Inlay Marble Workshops", description: "Walk through imperial courtyards, followed by observing traditional pietra dura marble craftsmen.", cost: "$14" },
      { period: "Evening (16:30 - 19:30)", activity: "Sunset at Mehtab Bagh", description: "Watch dusk reflect across the Yamuna waters onto the back of the mausoleum.", cost: "$8" },
      { period: "Night (20:00+)", activity: "Mughlai Dining in Sadar Bazaar", description: "Sample rich butter chicken, tender kebabs, and famous Agra petha sweets in the lively bazaar.", cost: "$12" }
    ],
    budgetTiers: {
      backpacker: "$18 - $25 / day (clean guesthouse + auto-rickshaw + dhaba dining)",
      midRange: "$35 - $60 / day (heritage hotel + AC car transfer + sit-down dining)",
      luxury: "$160+ / day (Oberoi Amarvilas luxury suite with direct Taj views + private guides)"
    },
    localTips: [
      "The Taj Mahal is closed every Friday for prayers; plan your itinerary accordingly.",
      "Book entry tickets online at the official ASI portal to bypass long ticket queue windows.",
      "Beware of unsolicited tour guides at parking depots; only hire government-licensed guides."
    ]
  }
};

export async function generateAITravelGuide(destinationQuery, apiKey = "") {
  const activeKey = apiKey || import.meta.env.VITE_GEMINI_API_KEY;

  if (activeKey && activeKey.trim().length > 10) {
    try {
      const prompt = `You are a world-class travel guide editor for Firestorm Travel Guides.
Generate a structured JSON travel guide for "${destinationQuery}".
Reply with ONLY a valid raw JSON object (no markdown, no backticks, no comments) strictly following this schema:
{
  "destination": "${destinationQuery}",
  "country": "Country name",
  "tagline": "One catchy punchy sentence summarizing the city/attraction vibe",
  "bestTimeToVisit": "Months to visit and weather rationale",
  "dailyBudgetUSD": 85,
  "topAttractions": [
    { "name": "Attraction name", "fee": "Ticket cost (e.g. $15 or Free)", "insiderTip": "Specific tip to avoid queues or get the best view" },
    { "name": "Attraction name", "fee": "Ticket cost", "insiderTip": "Specific tip" },
    { "name": "Attraction name", "fee": "Ticket cost", "insiderTip": "Specific tip" }
  ],
  "itinerary": [
    { "period": "Morning (08:30 - 12:00)", "activity": "Specific morning spot", "description": "What to do and where to grab local breakfast", "cost": "$15" },
    { "period": "Afternoon (13:00 - 17:00)", "activity": "Afternoon highlight", "description": "Cultural exploration and lunch recommendation", "cost": "$25" },
    { "period": "Evening (17:30 - 20:30)", "activity": "Sunset viewpoint & Dinner", "description": "Scenic spot followed by authentic dinner", "cost": "$30" },
    { "period": "Night (21:00+)", "activity": "Nightlife or evening stroll", "description": "Atmospheric district or night market", "cost": "$10" }
  ],
  "budgetTiers": {
    "backpacker": "$35 - $50 / day (hostel + street food + metro)",
    "midRange": "$90 - $140 / day (3-star boutique hotel + casual dining)",
    "luxury": "$280+ / day (5-star stay + fine dining + private tours)"
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
          return { ...parsed, isLiveAI: true };
        }
      }
    } catch (err) {
      console.warn("Gemini API call failed, falling back to local travel intelligence engine:", err);
    }
  }

  // Fallback: Intelligent curated synthesis engine
  await new Promise((resolve) => setTimeout(resolve, 450));

  const queryKey = destinationQuery.trim().toLowerCase();
  
  // Direct match in knowledge base
  for (const [key, data] of Object.entries(CURATED_KNOWLEDGE)) {
    if (queryKey.includes(key)) {
      return { ...data, isLiveAI: false };
    }
  }

  // Dynamic fallback for any general query
  const cleanTitle = destinationQuery.trim().charAt(0).toUpperCase() + destinationQuery.trim().slice(1);
  return {
    destination: cleanTitle,
    country: "International Destination",
    tagline: `An unforgettable journey through historic landmarks, vibrant culinary districts, and cultural wonders in ${cleanTitle}.`,
    bestTimeToVisit: "Spring and Autumn seasons for mild temperatures and optimal sightseeing conditions.",
    dailyBudgetUSD: 90,
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
    itinerary: [
      {
        period: "Morning (08:30 - 12:00)",
        activity: "Historic City Orientation & Breakfast",
        description: `Stroll through the old quarter of ${cleanTitle}, sampling local coffee and bakery specialties.`,
        cost: "$14"
      },
      {
        period: "Afternoon (13:00 - 17:00)",
        activity: "Iconic Monument & Architectural Wonder",
        description: "Explore the premier landmark with an audio tour, followed by lunch at an authentic bistro.",
        cost: "$26"
      },
      {
        period: "Evening (17:30 - 20:30)",
        activity: "Scenic Sunset Point & Regional Dinner",
        description: "Catch sunset over the city skyline followed by signature regional culinary specialties.",
        cost: "$32"
      },
      {
        period: "Night (21:00+)",
        activity: "Night Market or Promenade Stroll",
        description: "Explore illuminated lantern streets, enjoying live street music and evening dessert.",
        cost: "$12"
      }
    ],
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
