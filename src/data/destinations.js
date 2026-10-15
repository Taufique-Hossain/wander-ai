export const initialDestinations = [
  {
    id: "paris-france",
    name: "Paris",
    country: "France",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 3420,
    bestTime: "April - October",
    entryFeeAvg: "$20 - $35",
    dailyBudget: 110,
    tagline: "The City of Light, art, fashion, and culinary excellence.",
    topAttractions: [
      { name: "Eiffel Tower", fee: "€28.30", tip: "Book sunset elevator tickets 60 days in advance." },
      { name: "Louvre Museum", fee: "€22.00", tip: "Enter via Carrousel du Louvre to skip pyramid queues." },
      { name: "Sainte-Chapelle", fee: "€13.00", tip: "Visit on a sunny morning for stained glass illumination." }
    ],
    overview: "Home to architectural marvels, world-class gastronomy, and romantic river walks along the Seine."
  },
  {
    id: "tokyo-japan",
    name: "Tokyo",
    country: "Japan",
    category: "Urban",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 4890,
    bestTime: "March - May & Sept - Nov",
    entryFeeAvg: "$10 - $25",
    dailyBudget: 95,
    tagline: "Futuristic neon skyscrapers meeting ancient Shinto shrines.",
    topAttractions: [
      { name: "Senso-ji Temple", fee: "Free", tip: "Visit before 8 AM for peaceful photography without crowds." },
      { name: "Shibuya Sky", fee: "¥2,200", tip: "Watch the sun set over the Shibuya crossing." },
      { name: "TeamLab Planets", fee: "¥3,800", tip: "Wear shorts; some exhibits have knee-deep water." }
    ],
    overview: "A hyper-efficient metropolis blending anime culture, Michelin dining, and centuries-old Japanese tradition."
  },
  {
    id: "rome-italy",
    name: "Rome",
    country: "Italy",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewsCount: 5120,
    bestTime: "October - April",
    entryFeeAvg: "$18 - $30",
    dailyBudget: 100,
    tagline: "The Eternal City of gladiator arenas and Renaissance splendor.",
    topAttractions: [
      { name: "Colosseum & Roman Forum", fee: "€18.00", tip: "Get combined ticket with arena floor access." },
      { name: "Vatican Museums & Sistine Chapel", fee: "€20.00", tip: "Shoulders and knees must be covered." },
      { name: "Pantheon", fee: "€5.00", tip: "Admire the world's largest unreinforced concrete dome." }
    ],
    overview: "An open-air museum where ancient temples and baroque piazzas integrate with bustling modern Italian life."
  },
  {
    id: "bali-indonesia",
    name: "Bali",
    country: "Indonesia",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 3950,
    bestTime: "May - August",
    entryFeeAvg: "$3 - $10",
    dailyBudget: 45,
    tagline: "Island of the Gods with emerald rice terraces and sacred temples.",
    topAttractions: [
      { name: "Uluwatu Temple & Kecak Dance", fee: "IDR 50,000", tip: "Watch the sunset dance on the sea cliff." },
      { name: "Tegallalang Rice Terraces", fee: "IDR 25,000", tip: "Walk down early to avoid the midday equatorial heat." },
      { name: "Tanah Lot Temple", fee: "IDR 60,000", tip: "Only accessible during low tide." }
    ],
    overview: "Tropical paradise famed for sacred water temples, world-class surfing, wellness retreats, and vibrant Balinese culture."
  },
  {
    id: "agra-india",
    name: "Agra",
    country: "India",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewsCount: 4200,
    bestTime: "October - March",
    entryFeeAvg: "₹50 - ₹1100",
    dailyBudget: 35,
    tagline: "Home of the Taj Mahal, the crown jewel of Indo-Islamic architecture.",
    topAttractions: [
      { name: "Taj Mahal", fee: "₹50 (Indian) / ₹1100 (Intl)", tip: "Visit at sunrise from the East Gate for golden hour glow." },
      { name: "Agra Fort", fee: "₹50 (Indian) / ₹650 (Intl)", tip: "Explore the Diwan-i-Khas looking out towards the Yamuna river." },
      { name: "Mehtab Bagh", fee: "₹25 (Indian) / ₹300 (Intl)", tip: "Sunset viewpoint across the river without mausoleum crowds." }
    ],
    overview: "Mughal imperial city showcasing pristine white marble craftsmanship and UNESCO World Heritage architecture."
  },
  {
    id: "new-york-usa",
    name: "New York City",
    country: "USA",
    category: "Urban",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewsCount: 6200,
    bestTime: "September - November & Spring",
    entryFeeAvg: "$30 - $45",
    dailyBudget: 160,
    tagline: "The City that Never Sleeps, global center for theater, finance, and culture.",
    topAttractions: [
      { name: "Central Park & The High Line", fee: "Free", tip: "Rent a CitiBike to ride the 6-mile park loop." },
      { name: "Summit One Vanderbilt", fee: "$42.00", tip: "Immersive multi-sensory glass observatory in Midtown." },
      { name: "Metropolitan Museum of Art", fee: "$30.00", tip: "Take the elevator to the rooftop garden for Central Park views." }
    ],
    overview: "Electrifying concrete jungle packed with Broadway shows, world-class culinary neighborhoods, and iconic skyline vistas."
  },
  {
    id: "kyoto-japan",
    name: "Kyoto",
    country: "Japan",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 3600,
    bestTime: "April (Cherry Blossoms) & November (Autumn Foliage)",
    entryFeeAvg: "$4 - $12",
    dailyBudget: 85,
    tagline: "Thousands of classical Buddhist temples, Zen gardens, and geisha districts.",
    topAttractions: [
      { name: "Fushimi Inari Shrine", fee: "Free", tip: "Hike past the 10,000 vermilion torii gates to Mount Inari." },
      { name: "Kinkaku-ji (Golden Pavilion)", fee: "¥500", tip: "Morning light reflects best on the gold leaf exterior." },
      { name: "Arashiyama Bamboo Grove", fee: "Free", tip: "Walk through at dawn before tour buses arrive." }
    ],
    overview: "The cultural heart of Japan with 17 UNESCO World Heritage sites, tea ceremony traditions, and serene nature."
  },
  {
    id: "cairo-egypt",
    name: "Cairo & Giza",
    country: "Egypt",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviewsCount: 2900,
    bestTime: "November - February",
    entryFeeAvg: "$15 - $25",
    dailyBudget: 50,
    tagline: "The cradle of civilization crowned by the Great Pyramids and Sphinx.",
    topAttractions: [
      { name: "Great Pyramid of Giza & Sphinx", fee: "EGP 540", tip: "Hire an official camel guide near the panoramic plateau." },
      { name: "Grand Egyptian Museum", fee: "EGP 1000", tip: "Marvel at King Tutankhamun's complete royal treasure collection." },
      { name: "Khan el-Khalili Bazaar", fee: "Free", tip: "Practice friendly haggling for spices, brass lamps, and perfumes." }
    ],
    overview: "Vibrant ancient capital standing where the Nile River meets millennium-old pharaonic monuments and bustling souks."
  }
];
