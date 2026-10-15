export const initialDestinations = [
  {
    id: "sikkim-india",
    name: "Sikkim",
    country: "India",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1626014303757-646633783a45?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 3820,
    bestTime: "March - May & Oct - Dec",
    entryFeeAvg: "₹50 - ₹200",
    dailyBudget: 40,
    tagline: "Himalayan kingdom of snow-capped Kanchenjunga, sacred glacial lakes, and ancient Gompas.",
    topAttractions: [
      { name: "Tsomgo (Changu) Lake & Baba Mandir", fee: "₹200 (Permit)", tip: "Leave Gangtok by 07:30 AM to beat mountain mist." },
      { name: "Nathula Pass (Indo-China Border, 14,140 ft)", fee: "₹200 Permit", tip: "Open Wed to Sun for Indian nationals with permits." },
      { name: "Pelling Skywalk & Chenrezig", fee: "₹50", tip: "Walk the glass bridge facing the Kanchenjunga face." }
    ],
    overview: "Spectacular Himalayan retreat featuring Buddhist heritage, rhododendron sanctuaries, and alpine mountain passes."
  },
  {
    id: "goa-india",
    name: "Goa",
    country: "India",
    category: "Coastal",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 6540,
    bestTime: "November - February",
    entryFeeAvg: "Free - ₹50",
    dailyBudget: 45,
    tagline: "Golden sun-drenched beaches, Portuguese colonial Latin quarters, and vibrant beach shacks.",
    topAttractions: [
      { name: "Fort Aguada & Lighthouse", fee: "₹25", tip: "Visit at 4:30 PM for sea-cliff views over Sinquerim." },
      { name: "Basilica of Bom Jesus (Old Goa)", fee: "Free", tip: "UNESCO Baroque church housing the relics of St. Francis Xavier." },
      { name: "Palolem Crescent Beach", fee: "Free", tip: "Calm turquoise bay ideal for kayaking to Butterfly Island." }
    ],
    overview: "India's beloved coastal paradise combining golden Arabian Sea shores with 450 years of Portuguese heritage."
  },
  {
    id: "kerala-india",
    name: "Kerala",
    country: "India",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 5890,
    bestTime: "September - March",
    entryFeeAvg: "₹20 - ₹200",
    dailyBudget: 42,
    tagline: "God's Own Country: tranquil emerald backwaters, rolling Munnar tea mist, and fragrant spice coasts.",
    topAttractions: [
      { name: "Alleppey Houseboat Backwaters", fee: "₹7,500 / night", tip: "Cruise peaceful canals while dining on fresh Karimeen fish fry." },
      { name: "Munnar Tea Hills & Eravikulam", fee: "₹200", tip: "Spot wild Nilgiri Tahr mountain goats in morning mist." },
      { name: "Fort Kochi Chinese Fishing Nets", fee: "Free", tip: "Watch cantilever nets against fiery coastal sunsets." }
    ],
    overview: "A lush tropical paradise of coconut lagoons, misty Western Ghats tea plantations, and Ayurvedic rejuvenation."
  },
  {
    id: "kashmir-india",
    name: "Kashmir",
    country: "India",
    tagline: "Paradise on Earth: serene Dal Lake wooden houseboats, pine-scented Gulmarg, and snowy peaks.",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 4720,
    bestTime: "April - October & Dec - Feb (Snow)",
    entryFeeAvg: "₹25 - ₹1000",
    dailyBudget: 45,
    topAttractions: [
      { name: "Dal Lake Shikara & Houseboats", fee: "₹800 / hour", tip: "Take a dawn shikara at 05:30 AM to the floating flower market." },
      { name: "Gulmarg Gondola Phase 2 (13,780 ft)", fee: "₹1,010", tip: "Book online weeks ahead to reach Apharwat Peak snow line." },
      { name: "Betaab Valley & Pahalgam", fee: "₹100", tip: "Stroll along the crystal Lidder River surrounded by fir woods." }
    ],
    overview: "Legendary Himalayan valley celebrated for alpine meadows, Mughal terraced gardens, and warm Kashmiri hospitality."
  },
  {
    id: "manali-india",
    name: "Manali",
    country: "India",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 5120,
    bestTime: "October - June",
    entryFeeAvg: "Free - ₹500",
    dailyBudget: 38,
    tagline: "Himachal's adventure haven beneath towering deodars and snowy Pir Panjal summits.",
    topAttractions: [
      { name: "Hadimba Temple & Van Vihar", fee: "Free", tip: "16th-century wooden pagoda shrine inside cedar forest." },
      { name: "Solang Valley & Paragliding", fee: "₹1,200", tip: "Tandem paragliding and ropeway to 10,500 ft." },
      { name: "Atal Tunnel & Sissu Waterfall", fee: "Free", tip: "Drive beneath the mountains into the trans-Himalayan Lahaul valley." }
    ],
    overview: "Gateway to high-altitude Himalayan passes, riverside cafes, and apple orchards in Kullu Valley."
  },
  {
    id: "ladakh-india",
    name: "Ladakh",
    country: "India",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 3950,
    bestTime: "May - September",
    entryFeeAvg: "₹30 - ₹400 (Permit)",
    dailyBudget: 50,
    tagline: "The Land of High Passes: high-altitude desert moonscapes and color-changing turquoise lakes.",
    topAttractions: [
      { name: "Pangong Tso Lake (14,270 ft)", fee: "Permit", tip: "Highest saltwater lake changing colors from blue to violet." },
      { name: "Khardung La Pass (17,982 ft)", fee: "Permit", tip: "One of the highest motorable mountain roads on Earth." },
      { name: "Nubra Valley & Hunder Dunes", fee: "₹300 ride", tip: "Ride double-humped Bactrian camels on white sand dunes." }
    ],
    overview: "Trans-Himalayan desert plateau renowned for Tibetan Buddhist Gompas, stark mountain passes, and starry night skies."
  },
  {
    id: "jaipur-india",
    name: "Jaipur",
    country: "India",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 6100,
    bestTime: "October - March",
    entryFeeAvg: "₹50 - ₹300",
    dailyBudget: 40,
    tagline: "The Pink City: colossal Rajput hill fortresses, filigreed palaces, and kaleidoscopic bazaars.",
    topAttractions: [
      { name: "Amber Fort & Sheesh Mahal", fee: "₹100", tip: "Gaze into thousands of mirrored tiles reflecting single candle flames." },
      { name: "Hawa Mahal (Palace of Winds)", fee: "₹50", tip: "Photograph the 953 honeycomb windows from Wind View Cafe across the street." },
      { name: "Nahargarh Fort Sunset Viewpoint", fee: "₹50", tip: "Watch the golden sun set over the entire illuminated Pink City." }
    ],
    overview: "Rajasthan's royal capital showcasing Rajput defensive architecture, royal jewel museums, and artisan textiles."
  },
  {
    id: "udaipur-india",
    name: "Udaipur",
    country: "India",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 4400,
    bestTime: "October - March",
    entryFeeAvg: "₹50 - ₹350",
    dailyBudget: 40,
    tagline: "The City of Lakes: floating marble island palaces, historic Mewar courtyards, and sunset boat cruises.",
    topAttractions: [
      { name: "City Palace Complex", fee: "₹330", tip: "Marvel at the Mor Chowk peacock courtyard and mirror galleries." },
      { name: "Lake Pichola Sunset Boat Cruise", fee: "₹500", tip: "Sail past Taj Lake Palace to the island of Jag Mandir." },
      { name: "Bagore ki Haveli Dharohar Dance", fee: "₹100", tip: "Watch Rajasthani fire dancers and 11-pot balancing stunts." }
    ],
    overview: "Romantic lakeside haven surrounded by the Aravalli hills, heritage Havelis, and Mewari dining terraces."
  },
  {
    id: "andaman-india",
    name: "Andaman & Nicobar",
    country: "India",
    category: "Coastal",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 3650,
    bestTime: "October - May",
    entryFeeAvg: "₹30 - ₹1200",
    dailyBudget: 55,
    tagline: "Tropical archipelago paradise of turquoise coral reefs, powdery white sands, and colonial history.",
    topAttractions: [
      { name: "Radhanagar Beach (Havelock)", fee: "Free", tip: "Voted Asia's best beach; enjoy breathtaking crimson sunsets." },
      { name: "Cellular Jail National Memorial", fee: "₹30", tip: "Watch the moving Light & Sound evening narrative." },
      { name: "Elephant Beach Coral Reef Snorkel", fee: "₹1,000", tip: "Snorkel with sea turtles and parrotfish in turquoise lagoons." }
    ],
    overview: "Pristine Indian Ocean islands renowned for scuba diving, mangrove kayaking, and serene castaway beaches."
  },
  {
    id: "rishikesh-india",
    name: "Rishikesh",
    country: "India",
    category: "Spiritual",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 4100,
    bestTime: "September - May",
    entryFeeAvg: "Free - ₹800",
    dailyBudget: 35,
    tagline: "The Yoga Capital of the World: foaming white water Ganga rapids, ashrams, and sacred evening fire ceremonies.",
    topAttractions: [
      { name: "Parmarth Niketan Ganga Aarti", fee: "Free", tip: "Vedic singing and fire lamps on the marble ghat at sunset." },
      { name: "Shivpuri White Water Rafting", fee: "₹800", tip: "Raft Grade III rapids including 'Roller Coaster' and 'Golf Course'." },
      { name: "The Beatles Ashram", fee: "₹150", tip: "Meditation domes and historic 1968 Beatles murals." }
    ],
    overview: "Spiritual Himalayan sanctuary where the holy Ganges emerges onto the plains, blending meditation with adventure sports."
  },
  {
    id: "amritsar-india",
    name: "Amritsar",
    country: "India",
    category: "Spiritual",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 5200,
    bestTime: "October - March",
    entryFeeAvg: "Free",
    dailyBudget: 35,
    tagline: "The Spiritual Heart of Punjab: the radiant Golden Temple, free community Langar, and Wagah border.",
    topAttractions: [
      { name: "Sri Harmandir Sahib (Golden Temple)", fee: "Free", tip: "Cover your head and listen to continuous live Gurbani kirtan." },
      { name: "Guru Ramdas Langar Kitchen", fee: "Free", tip: "World's largest free community kitchen feeds 100,000 daily." },
      { name: "Wagah Border Beating Retreat", fee: "Free", tip: "Experience patriotic fervor and military drills at the border." }
    ],
    overview: "Sacred center of Sikhism celebrated for its gleaming gold sanctum, heartfelt seva hospitality, and crispy Amritsari kulchas."
  },
  {
    id: "meghalaya-india",
    name: "Meghalaya",
    country: "India",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1626014303757-646633783a45?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 3200,
    bestTime: "October - April",
    entryFeeAvg: "₹20 - ₹100",
    dailyBudget: 42,
    tagline: "Abode of the Clouds: ancient living root bridges, thundering waterfalls, and transparent rivers.",
    topAttractions: [
      { name: "Double Decker Living Root Bridge", fee: "₹50", tip: "Hike down 3,500 stone steps into subtropical jungle." },
      { name: "Nohkalikai Falls (1,115 ft)", fee: "₹20", tip: "India's tallest plunge waterfall into a turquoise pool." },
      { name: "Dawki Umngot Glass River", fee: "₹800 boat", tip: "Boating on crystal water where boats seem to float on air." }
    ],
    overview: "Pristine Northeast Indian state famed for bio-engineered ficus root bridges, wettest places on earth, and clean Khasi villages."
  },
  {
    id: "varanasi-india",
    name: "Varanasi",
    country: "India",
    category: "Spiritual",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 5400,
    bestTime: "October - March",
    entryFeeAvg: "Free - ₹300",
    dailyBudget: 32,
    tagline: "The world's oldest living city: sacred Ganges ghats, eternal rituals, and evening Maha Ganga Aarti.",
    topAttractions: [
      { name: "Dashashwamedh Ghat Evening Aarti", fee: "Free", tip: "Watch the synchronized fire ritual from a wooden boat on the river." },
      { name: "Dawn Boat Ride along Sacred Ghats", fee: "₹300", tip: "Row from Assi to Manikarnika as morning temple bells ring." },
      { name: "Kashi Vishwanath Golden Temple", fee: "Free", tip: "One of the 12 sacred Jyotirlingas of Lord Shiva." }
    ],
    overview: "India's spiritual capital on the sacred Ganges river, where centuries-old Vedic traditions and pilgrim rituals endure."
  },
  {
    id: "agra-india",
    name: "Agra",
    country: "India",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 6800,
    bestTime: "October - March",
    entryFeeAvg: "₹50 - ₹1100",
    dailyBudget: 35,
    tagline: "Imperial Mughal capital home of the Taj Mahal, the world's greatest monument to love.",
    topAttractions: [
      { name: "Taj Mahal at Sunrise", fee: "₹50 / ₹1100", tip: "East Gate entry at 05:45 AM for crowd-free soft pink marble glow." },
      { name: "Agra Fort", fee: "₹50 / ₹650", tip: "Tour Shah Jahan's octagonal tower looking across the Yamuna." },
      { name: "Mehtab Bagh Sunset", fee: "₹25 / ₹300", tip: "Reflective gardens across the river for golden hour photos." }
    ],
    overview: "Mughal imperial city showcasing exquisite Pietra Dura marble inlay craftsmanship and UNESCO heritage landmarks."
  },
  {
    id: "hampi-india",
    name: "Hampi",
    country: "India",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1600100397608-f010f443b749?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 3890,
    bestTime: "October - March",
    entryFeeAvg: "₹40",
    dailyBudget: 35,
    tagline: "UNESCO World Heritage Boulder Wonderland: majestic ruins of the 14th-century Vijayanagara Empire.",
    topAttractions: [
      { name: "Vijaya Vittala Temple & Stone Chariot", fee: "₹40", tip: "Featured on the ₹50 currency note; inspect musical pillars." },
      { name: "Virupaksha Temple", fee: "₹25", tip: "Active since the 7th century with 160-foot Gopuram." },
      { name: "Matanga Hill Sunrise", fee: "Free", tip: "360-degree sunrise over the red boulder landscape." }
    ],
    overview: "Surreal granite boulder landscapes dotted with imperial temples, stone aqueducts, and royal palaces beside the Tungabhadra."
  },
  {
    id: "paris-france",
    name: "Paris",
    country: "France",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 7420,
    bestTime: "April - October",
    entryFeeAvg: "$20 - $35",
    dailyBudget: 110,
    tagline: "The City of Light: world-renowned art museums, Haussmannian boulevards, and gourmet bistros.",
    topAttractions: [
      { name: "Eiffel Tower Summit", fee: "€29.40", tip: "Book sunset elevator tickets 60 days in advance." },
      { name: "Louvre Museum", fee: "€22.00", tip: "Enter via Carrousel du Louvre to bypass outdoor queues." },
      { name: "Montmartre & Sacré-Cœur", fee: "Free", tip: "Climb the dome for Paris's highest natural panorama." }
    ],
    overview: "Home to architectural masterpieces, world-class gastronomy, and romantic river promenades along the Seine."
  },
  {
    id: "tokyo-japan",
    name: "Tokyo",
    country: "Japan",
    category: "Urban",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 6890,
    bestTime: "March - May & Sept - Nov",
    entryFeeAvg: "$10 - $25",
    dailyBudget: 90,
    tagline: "Futuristic neon skyscrapers meeting ancient Shinto shrines and Michelin street dining.",
    topAttractions: [
      { name: "Shibuya Scramble & Sky Deck", fee: "¥2,200", tip: "Watch 3,000 pedestrians cross in one signal from the skydeck." },
      { name: "Sensō-ji Temple (Asakusa)", fee: "Free", tip: "Tokyo's oldest temple founded in 645 AD; see giant red lantern." },
      { name: "teamLab Planets", fee: "¥3,800", tip: "Walk barefoot through knee-deep digital holographic water rooms." }
    ],
    overview: "A hyper-efficient metropolis blending anime hubs, cutting-edge robotics, and serene Japanese temple gardens."
  },
  {
    id: "dubai-uae",
    name: "Dubai",
    country: "United Arab Emirates",
    category: "Urban",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 5600,
    bestTime: "November - March",
    entryFeeAvg: "$30 - $50",
    dailyBudget: 120,
    tagline: "Dazzling desert metropolis of record-breaking architecture, luxury malls, and golden sand dunes.",
    topAttractions: [
      { name: "Burj Khalifa (124th/125th Floor)", fee: "AED 179", tip: "Book sunset slots 2 weeks ahead to watch the city lights ignite." },
      { name: "Red Dune Desert Safari", fee: "AED 180", tip: "Includes 4x4 dune bashing, camel riding, and Bedouin BBQ dinner." },
      { name: "Dubai Fountain & Mall", fee: "Free", tip: "Dancing water fountain shoots 500 ft into the air every 30 mins." }
    ],
    overview: "A futuristic oasis of artificial archipelago islands, ultra-luxury dining, and thrilling desert safaris."
  },
  {
    id: "bali-indonesia",
    name: "Bali",
    country: "Indonesia",
    category: "Coastal",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 6950,
    bestTime: "April - October",
    entryFeeAvg: "$3 - $10",
    dailyBudget: 45,
    tagline: "Island of the Gods: sacred volcanic peaks, cascading rice terraces, and bohemian surf beaches.",
    topAttractions: [
      { name: "Ubud Monkey Forest Sanctuary", fee: "IDR 80k", tip: "Wander mossy dragon bridges with 1,000 long-tailed macaques." },
      { name: "Tegallalang Rice Terraces", fee: "IDR 50k", tip: "Walk the UNESCO green ravines early before midday heat." },
      { name: "Uluwatu Temple & Kecak Dance", fee: "IDR 150k", tip: "Watch the hypnotic fire dance atop a 250-foot ocean cliff." }
    ],
    overview: "Tropical paradise famed for sacred water temples, world-class surfing, wellness retreats, and vibrant Balinese culture."
  },
  {
    id: "switzerland-alps",
    name: "Switzerland",
    country: "Switzerland",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 5120,
    bestTime: "June - Sept & Dec - March",
    entryFeeAvg: "$35 - $180",
    dailyBudget: 135,
    tagline: "Alpine paradise of snow-capped 14,000-ft peaks, crystal glacial lakes, and mountain cogwheel trains.",
    topAttractions: [
      { name: "Jungfraujoch - Top of Europe", fee: "CHF 165", tip: "Ride the Eiger Express gondola into the permanent glacier ice." },
      { name: "Lauterbrunnen Valley of 72 Falls", fee: "Free", tip: "The dramatic sheer limestone valley that inspired Rivendell." },
      { name: "Lucerne Chapel Bridge", fee: "Free", tip: "Walk the world's oldest covered wooden footbridge (1333 AD)." }
    ],
    overview: "Breathtaking Alpine wonderland of chocolate chalets, glacial lakes, and engineering marvel railways."
  }
];
