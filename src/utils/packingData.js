/**
 * Destination-Tailored Climate & Packing Checklist Engine
 * 
 * Maps global & Indian destinations to realistic climate profiles:
 * - Alpine & Himalayan (Sikkim, Manali, Ladakh, Kashmir, Shimla, Switzerland)
 * - Tropical Coastal & Island (Goa, Andaman, Bali, Maldives, Pondicherry)
 * - Monsoon & Cloud Forest (Kerala, Meghalaya, Coorg, Ooty)
 * - Arid Desert & Heritage (Jaipur, Jaisalmer, Udaipur, Dubai, Cairo)
 * - Spiritual & Sacred Rivers (Varanasi, Amritsar, Rishikesh, Hampi)
 * - Cosmopolitan Metropolis (Mumbai, Delhi, Kolkata, Tokyo, Paris, London, NYC)
 */

export const CLIMATE_PROFILES = {
  ALPINE: {
    key: 'alpine',
    badge: '🏔️ Alpine & High-Altitude',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    tempRange: '2°C – 16°C (Freezing dips at night)',
    weatherSummary: 'Thin crisp mountain air with intense high-elevation UV during daytime and sharp sub-zero drops after sunset.',
    specialAdvisory: 'Acclimatization warning: High altitude passes (Nathula, Khardung La, Rohtang) require warm layering and gradual ascent.',
    items: [
      { id: 'alp_1', category: 'Apparel', name: 'Thermal Base Layers (Top & Bottom)', essential: true, note: 'Merino wool or synthetic moisture-wicking fleece' },
      { id: 'alp_2', category: 'Apparel', name: 'Down / Windproof Insulated Jacket', essential: true, note: 'Blocks icy mountain pass winds at 10,000+ ft' },
      { id: 'alp_3', category: 'Health', name: 'AMS / Altitude Sickness Meds (Diamox)', essential: true, note: 'Consult physician for high-altitude acclimatization' },
      { id: 'alp_4', category: 'Gear', name: 'UV-400 Polarized Sunglasses', essential: true, note: 'Prevents snow glare and high-altitude cornea burn' },
      { id: 'alp_5', category: 'Gear', name: 'Vacuum Insulated Flask (750ml+)', essential: true, note: 'Carries boiling water/ginger tea on cold road journeys' },
      { id: 'alp_6', category: 'Footwear', name: 'Waterproof Trekking Boots + Wool Socks', essential: true, note: 'Ankle support for rocky moraines and snow patches' },
      { id: 'alp_7', category: 'Documents', name: 'Inner Line Permits & 4x Passport Photos', essential: true, note: 'Mandatory for border/restricted passes (e.g. North Sikkim, Pangong)' },
      { id: 'alp_8', category: 'Health', name: 'SPF 50+ Sunscreen & Intensive Lip Balm', essential: false, note: 'Cold mountain wind quickly chaps dry skin' },
      { id: 'alp_9', category: 'Tech', name: 'Heavy-Duty Power Bank (20,000mAh)', essential: false, note: 'Sub-zero temperatures drain phone batteries 2x faster' }
    ]
  },

  COASTAL: {
    key: 'coastal',
    badge: '🏖️ Tropical Coastal & Island',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    tempRange: '24°C – 33°C (High Humidity)',
    weatherSummary: 'Sunny tropical heat with refreshing sea breezes, high humidity, and strong coastal UV index.',
    specialAdvisory: 'Stay hydrated with fresh coconut water/electrolytes and apply reef-safe sun protection before ocean activities.',
    items: [
      { id: 'cst_1', category: 'Apparel', name: 'Quick-Dry Swimwear & UV Rashguard', essential: true, note: 'Crucial for coral snorkelling and beach surf' },
      { id: 'cst_2', category: 'Health', name: 'Reef-Safe Biodegradable Sunscreen (SPF 50)', essential: true, note: 'Protects fragile marine coral reefs from toxic chemicals' },
      { id: 'cst_3', category: 'Apparel', name: 'Breathable Linen / Pure Cotton Shirts', essential: true, note: 'Keeps you cool during midday coastal humidity' },
      { id: 'cst_4', category: 'Gear', name: 'Waterproof Dry Bag (10L - 20L)', essential: true, note: 'Keeps phone, wallet, and camera dry on ferry & boat trips' },
      { id: 'cst_5', category: 'Gear', name: 'Waterproof Phone Pouch with Lanyard', essential: true, note: 'Essential for jet-skiing, kayaking, and beach walks' },
      { id: 'cst_6', category: 'Footwear', name: 'Water-resistant Sandals / Water Shoes', essential: false, note: 'Protects feet against sharp coral rocks and hot sand' },
      { id: 'cst_7', category: 'Health', name: 'Aloe Vera Gel & DEET Insect Repellent', essential: false, note: 'Soothes sunburns and guards against evening sandflies' },
      { id: 'cst_8', category: 'Gear', name: 'Polarized Sunglasses & Wide-Brim Sunhat', essential: false, note: 'Cuts glare reflected from ocean water and white sand' },
      { id: 'cst_9', category: 'Health', name: 'Oral Rehydration Salts (ORS) Sachets', essential: false, note: 'Restores electrolytes lost through humid perspiration' }
    ]
  },

  MONSOON: {
    key: 'monsoon',
    badge: '🌧️ Monsoon & Cloud Forest',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    tempRange: '18°C – 26°C (High Precipitation)',
    weatherSummary: 'Lush greenery, rolling mist, cascading waterfalls, and frequent sudden tropical rain showers.',
    specialAdvisory: 'Trail advisory: Rocks near waterfalls and living root bridges become very slippery; pack high-traction footwear.',
    items: [
      { id: 'mon_1', category: 'Gear', name: 'Heavy-Duty Rain Poncho or Waterproof Jacket', essential: true, note: 'Umbrellas invert easily in mountain canyon winds' },
      { id: 'mon_2', category: 'Footwear', name: 'Non-Slip Grippy Trail Shoes / Rubber Sandals', essential: true, note: 'Wet river stones and mossy steps require aggressive treads' },
      { id: 'mon_3', category: 'Health', name: 'Leech Socks & Anti-Leech Tobacco/Salt Spray', essential: true, note: 'Indispensable for dense rainforest treks in Meghalaya & Western Ghats' },
      { id: 'mon_4', category: 'Gear', name: 'Waterproof Backpack Rain Cover + Ziploc Pouches', essential: true, note: 'Double-protects electronics, passports, and cameras from dampness' },
      { id: 'mon_5', category: 'Apparel', name: 'Quick-Dry Synthetic Cargo Pants (Avoid Denim)', essential: true, note: 'Denim stays soaked for days in high monsoon humidity' },
      { id: 'mon_6', category: 'Health', name: 'Tropical Strength Mosquito Repellent (Odomos)', essential: true, note: 'Monsoon brings high mosquito activity around waterbodies' },
      { id: 'mon_7', category: 'Gear', name: 'Compact Microfibre Fast-Drying Towel', essential: false, note: 'Dries in 30 minutes even inside damp hotel rooms' },
      { id: 'mon_8', category: 'Gear', name: 'Silica Gel Moisture Absorbers', essential: false, note: 'Keep inside your camera bag to avoid fungal lens bloom' },
      { id: 'mon_9', category: 'Health', name: 'Antiseptic Cream & Waterproof Bandages', essential: false, note: 'Treats minor scratches quickly before wet infections spread' }
    ]
  },

  DESERT: {
    key: 'desert',
    badge: '🏜️ Arid Desert & Heritage',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    tempRange: '14°C – 36°C (Extreme Diurnal Fluctuation)',
    weatherSummary: 'Scorching daytime sun over desert sands followed by brisk, breezy star-lit nights.',
    specialAdvisory: 'Temperature swings can exceed 20°C in 24 hours. Dress in breathable layers you can shed by noon and wear at dusk.',
    items: [
      { id: 'des_1', category: 'Apparel', name: 'Loose Cotton Scarves / Shemagh / Bandana', essential: true, note: 'Shields face and hair from blowing desert dust and direct sun' },
      { id: 'des_2', category: 'Health', name: 'Broad-Spectrum SPF 50+ Sunscreen', essential: true, note: 'Zero cloud cover creates extreme ultraviolet radiation' },
      { id: 'des_3', category: 'Apparel', name: 'Light-Colored Full-Sleeve Linen/Cotton Tops', essential: true, note: 'Protects skin from sun exposure without trapping body heat' },
      { id: 'des_4', category: 'Apparel', name: 'Warm Fleece or Denim Jacket for Nights', essential: true, note: 'Desert dunes cool dramatically once the sun goes down' },
      { id: 'des_5', category: 'Gear', name: 'Refillable 1.5L Insulated Water Bottle', essential: true, note: 'Prevent dehydration during long fort and dune explorations' },
      { id: 'des_6', category: 'Footwear', name: 'Closed-Toe Comfortable Walking Shoes', essential: true, note: 'Prevents hot sand from burning toes and grips steep fort ramps' },
      { id: 'des_7', category: 'Health', name: 'High-Moisture Lip Balm & Eye Drops', essential: false, note: 'Combats dry desert winds and sand irritations' },
      { id: 'des_8', category: 'Gear', name: 'Polarized Sunglasses with Side Glare Guards', essential: false, note: 'Filters intense golden sandstone reflections' },
      { id: 'des_9', category: 'Tech', name: 'Dustproof Camera Lens Covers & Camera Bag', essential: false, note: 'Fine desert silica dust can jam mechanical zoom barrels' }
    ]
  },

  SPIRITUAL: {
    key: 'spiritual',
    badge: '🛕 Spiritual Riverfront & Shrines',
    tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    tempRange: '18°C – 32°C (Subtropical River Valley)',
    weatherSummary: 'Warm sacred riverfronts, ancient stone ghats, ambient incense, and crowded labyrinthine bazaars.',
    specialAdvisory: 'Cultural etiquette: Modest clothing covering shoulders and knees is mandatory at sacred shrines. Shoes must be removed outside.',
    items: [
      { id: 'spr_1', category: 'Apparel', name: 'Modest Dress Covering Shoulders and Knees', essential: true, note: 'Mandatory respect for sanctum sanctorum entry rules' },
      { id: 'spr_2', category: 'Footwear', name: 'Easy Slip-On / Slip-Off Shoes or Loafers', essential: true, note: 'You will take shoes off 5-10 times daily outside temples' },
      { id: 'spr_3', category: 'Apparel', name: 'Cotton Stole / Dupatta / Scarf', essential: true, note: 'For covering head inside Golden Temple and sacred sanctums' },
      { id: 'spr_4', category: 'Gear', name: 'Cloth Shoe Tote Bag', essential: true, note: 'Enables carrying your own footwear safely inside temple lockers' },
      { id: 'spr_5', category: 'Documents', name: 'Small Cash Denominations (₹10, ₹20, ₹50 notes)', essential: true, note: 'Essential for boat rowers, floral offerings (diyas), and temple prasad' },
      { id: 'spr_6', category: 'Health', name: 'Hand Sanitizer & Pocket Wet Wipes', essential: true, note: 'Crucial after walking barefoot across temple marble and ghats' },
      { id: 'spr_7', category: 'Health', name: 'Mosquito Repellent for Evening Aarti', essential: false, note: 'Riverfront ghats have high insect swarms at dusk' },
      { id: 'spr_8', category: 'Gear', name: 'Compact Brass Bottle / Clean Water Canister', essential: false, note: 'For holy Ganga / Amrit Sarovar water collection if desired' },
      { id: 'spr_9', category: 'Gear', name: 'Crossbody Anti-Pickpocket Travel Sling', essential: false, note: 'Secures valuables in high-density Aarti congregations' }
    ]
  },

  URBAN: {
    key: 'urban',
    badge: '🏙️ Cosmopolitan Metropolis',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
    tempRange: '16°C – 30°C (Modern Metro)',
    weatherSummary: 'Fast-paced metro climate with climate-controlled indoor transit, high daily step counts, and vibrant rooftop nightlife.',
    specialAdvisory: 'Transit tip: Download local metro/transit apps and keep a tap-to-pay card easily accessible for contactless turnstiles.',
    items: [
      { id: 'urb_1', category: 'Footwear', name: 'Cushioned Walking Sneakers (12,000+ daily steps)', essential: true, note: 'Metro transfers, museums, and street shopping require maximum support' },
      { id: 'urb_2', category: 'Tech', name: 'Fast-Charge Power Bank (10,000mAh+) & USB-C Cable', essential: true, note: 'Heavy navigation, taxi booking, and photo apps drain phones rapidly' },
      { id: 'urb_3', category: 'Apparel', name: 'Smart-Casual Evening Attire', essential: true, note: 'Required for high-end rooftop lounges, clubs, and upscale restaurants' },
      { id: 'urb_4', category: 'Gear', name: 'Anti-Theft Sling Bag / Secure Crossbody', essential: true, note: 'Keeps cards and phone protected on crowded subways and markets' },
      { id: 'urb_5', category: 'Tech', name: 'Active Noise-Cancelling Earbuds', essential: false, note: 'Peace and quiet during train, flight, and underground metro commutes' },
      { id: 'urb_6', category: 'Documents', name: 'Tap-to-Pay Forex / Credit Card & Metro Pass', essential: true, note: 'Most major global subways and cafes are entirely contactless' },
      { id: 'urb_7', category: 'Gear', name: 'Foldable Reusable Shopper Tote', essential: false, note: 'Avoids paying extra for plastic bags at artisan boutiques & grocery stores' },
      { id: 'urb_8', category: 'Tech', name: 'Universal International Travel Adapter', essential: false, note: 'Essential if visiting foreign destinations with varying wall sockets' },
      { id: 'urb_9', category: 'Health', name: 'Compact First-Aid / Blister Cushion Bandages', essential: false, note: 'Instant relief when walking across asphalt for hours' }
    ]
  }
};

/**
 * Maps any destination to its closest matching climate profile
 */
export function getDestinationClimateProfile(destinationName = '', country = '', category = '') {
  const normName = destinationName.toLowerCase();
  const normCountry = country.toLowerCase();
  const normCategory = category.toLowerCase();

  // Alpine / Himalayan matches
  const alpineKeywords = ['sikkim', 'gangtok', 'manali', 'ladakh', 'leh', 'kashmir', 'srinagar', 'gulmarg', 'shimla', 'darjeeling', 'switzerland', 'swiss', 'alps', 'kufri', 'solang', 'rohtang', 'nepal', 'everest'];
  if (alpineKeywords.some(kw => normName.includes(kw))) {
    return CLIMATE_PROFILES.ALPINE;
  }

  // Coastal / Tropical matches
  const coastalKeywords = ['goa', 'andaman', 'bali', 'phuket', 'maldives', 'pondicherry', 'puducherry', 'havelock', 'sydney', 'beach', 'coastal', 'island', 'hawaii'];
  if (coastalKeywords.some(kw => normName.includes(kw)) || normCategory === 'coastal') {
    return CLIMATE_PROFILES.COASTAL;
  }

  // Monsoon & Rainforest matches
  const monsoonKeywords = ['meghalaya', 'cherrapunji', 'shillong', 'kerala', 'munnar', 'alleppey', 'coorg', 'wayanad', 'ooty', 'rainforest', 'assam'];
  if (monsoonKeywords.some(kw => normName.includes(kw))) {
    return CLIMATE_PROFILES.MONSOON;
  }

  // Desert / Arid Heritage matches
  const desertKeywords = ['jaipur', 'jaisalmer', 'udaipur', 'rajasthan', 'cairo', 'egypt', 'dubai', 'uae', 'desert', 'doha', 'abu dhabi'];
  if (desertKeywords.some(kw => normName.includes(kw))) {
    return CLIMATE_PROFILES.DESERT;
  }

  // Spiritual / Temple matches
  const spiritualKeywords = ['varanasi', 'banaras', 'kashi', 'amritsar', 'rishikesh', 'haridwar', 'hampi', 'madurai', 'tirupati', 'bodh gaya', 'spiritual'];
  if (spiritualKeywords.some(kw => normName.includes(kw)) || normCategory === 'spiritual') {
    return CLIMATE_PROFILES.SPIRITUAL;
  }

  // Default to Urban / Cosmopolitan for cities (Mumbai, Delhi, Paris, Tokyo, London, etc.)
  return CLIMATE_PROFILES.URBAN;
}

/**
 * Returns complete tailored packing checklist and duration guidance for any destination
 */
export function getTailoredPackingData(destinationName, country, daysCount = 3, category = '') {
  const profile = getDestinationClimateProfile(destinationName, country, category);

  // Compute duration-specific clothing multiplier
  let clothingQuantityGuidance = "";
  if (daysCount <= 2) {
    clothingQuantityGuidance = "Short 1-2 day getaway: Pack 2 base outfits, 1 set of sleepwear, and carry a compact 25L daypack.";
  } else if (daysCount <= 4) {
    clothingQuantityGuidance = `Optimal ${daysCount}-day trip: Pack 4 daily tops, 2 versatile bottoms, 4 pairs of undergarments, and a laundry separation bag.`;
  } else {
    clothingQuantityGuidance = `Extended ${daysCount}-day expedition: Pack 5-6 mix-and-match outfits, travel detergent sheets for hotel sink washes, and a lightweight daypack for day excursions.`;
  }

  return {
    ...profile,
    destination: destinationName,
    country: country,
    daysCount: daysCount,
    clothingQuantityGuidance,
    totalItemsCount: profile.items.length
  };
}
