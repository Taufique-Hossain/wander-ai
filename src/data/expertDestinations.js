/**
 * Curated Database of Exact Real-World Landmarks, Times, and Multi-Day Itineraries
 */

export const EXPERT_DESTINATIONS = {
  sikkim: {
    destination: "Sikkim",
    country: "India",
    tagline: "The mystical Himalayan kingdom of snow-capped Kanchenjunga, sacred glacial lakes, and ancient Tibetan monasteries.",
    bestTimeToVisit: "March to May (blooming rhododendrons) and October to mid-December (crystal clear Himalayan views).",
    dailyBudgetUSD: 40,
    topAttractions: [
      {
        name: "Tsomgo (Changu) Lake & Baba Mandir",
        fee: "₹200 (Permit) / Shared Jeep ₹800",
        insiderTip: "Permits must be applied 1 day in advance through a registered Sikkim tour operator; leave Gangtok by 7:30 AM to beat mountain fog."
      },
      {
        name: "Nathula Pass (Indo-China Border, 14,140 ft)",
        fee: "₹200 Permit + Vehicle surcharge",
        insiderTip: "Open Wednesday to Sunday for Indian nationals only; carry thermal layers and keep oxygen level in mind."
      },
      {
        name: "Rumtek & Enchey Monasteries",
        fee: "₹20 - ₹50",
        insiderTip: "Rumtek is the seat of the Karmapa Lama; attend the late afternoon 4:00 PM monk chanting and horn ceremony."
      },
      {
        name: "Pelling Skywalk & Chenrezig Statue",
        fee: "₹50 (Entry) / ₹100 (Shoe cover)",
        insiderTip: "Walk the glass bridge facing the direct panoramic face of Mount Kanchenjunga on a clear morning."
      },
      {
        name: "Yumthang Valley & Zero Point (North Sikkim)",
        fee: "₹3,500 - ₹5,000 (2D/1N Tour package)",
        insiderTip: "Zero Point (15,300 ft) offers snow even into early June; stop at the hot sulphur springs on the return to Lachung."
      }
    ],
    days: [
      {
        dayNumber: 1,
        dayTitle: "Gangtok Heritage, Monasteries & MG Marg",
        slots: [
          {
            period: "Morning (08:30 - 12:00)",
            activity: "Enchey Monastery & Ganesh Tok Viewpoint",
            description: "Visit the 200-year-old Nyingma monastery tucked in pine hills, followed by sunrise views over Kanchenjunga from Ganesh Tok.",
            cost: "₹50"
          },
          {
            period: "Afternoon (13:00 - 16:30)",
            activity: "Namgyal Institute of Tibetology & Do-Drul Chorten",
            description: "Admire rare Buddhist thangkas, bronzes, and manuscript relics, then spin the 108 golden prayer wheels around Do-Drul Chorten.",
            cost: "₹30"
          },
          {
            period: "Evening (17:00 - 20:00)",
            activity: "Tashi Viewpoint Sunset & MG Marg Food Walk",
            description: "Watch golden rays fade on the snow peaks from Tashi Viewpoint, then stroll the pedestrian-only cobblestone MG Marg.",
            cost: "₹350"
          },
          {
            period: "Night (20:30+)",
            activity: "Authentic Sikkimese Feast at Taste of Tibet",
            description: "Savor steaming beef/pork/veg Momos, piping hot Thukpa, fermented Gundruk soup, and fluffy Tingmo steamed bread.",
            cost: "₹400"
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "High-Altitude Glacial Lakes & Nathula Indo-China Border",
        slots: [
          {
            period: "Morning (07:30 - 11:30)",
            activity: "Drive to Tsomgo (Changu) Lake (12,310 ft)",
            description: "Ascend the dramatic mountain highway along the Kyongnosla Alpine Sanctuary to the sacred turquoise glacial lake.",
            cost: "₹800"
          },
          {
            period: "Afternoon (12:00 - 15:30)",
            activity: "Baba Harbhajan Singh Mandir & Nathula Pass",
            description: "Visit the legend-filled bunker shrine dedicated to the Indian soldier hero, then stand at the historic Silk Route border gate at Nathula.",
            cost: "₹300"
          },
          {
            period: "Evening (16:30 - 19:30)",
            activity: "Return to Gangtok for Traditional Tibetan Herbal Tea",
            description: "Relax your muscles with butter tea ('Po Cha') or Sikkim Temi organic tea at Baker's Cafe overlooking the valley.",
            cost: "₹180"
          },
          {
            period: "Night (20:00+)",
            activity: "Lal Bazaar Local Market & Chhurpi Yak Cheese Tasting",
            description: "Browse organic black cardamom, hand-woven carpets, and sample local dried Yak cheese in the bustling farmers bazaar.",
            cost: "₹250"
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Transfer to Pelling via Ravangla Buddha Park",
        slots: [
          {
            period: "Morning (08:00 - 12:00)",
            activity: "Scenic Southern Highway Drive & Temi Tea Estate",
            description: "Drive through Sikkim's only tea garden on sloping hills with misty cloud forests and mountain vistas.",
            cost: "₹40"
          },
          {
            period: "Afternoon (12:30 - 15:30)",
            activity: "Tathagata Tsal (Ravangla Buddha Park)",
            description: "Marvel at the majestic 130-foot copper statue of Gautama Buddha set against an amphitheater of Himalayan summits.",
            cost: "₹50"
          },
          {
            period: "Evening (16:30 - 19:30)",
            activity: "Pelling Glass Skywalk & Chenrezig Monument",
            description: "Walk out over the suspended glass viewing bridge directly opposite Mount Kanchenjunga as evening light turns peaks pink.",
            cost: "₹100"
          },
          {
            period: "Night (20:00+)",
            activity: "Cozy Homestay Dinner with Tongba Millet Drink",
            description: "Enjoy a traditional home-cooked meal with local saag, bamboo shoot curry, and warm fermented millet beverage served in a bamboo flask.",
            cost: "₹350"
          }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: "West Sikkim Sacred Heritage: Monasteries & Palaces",
        slots: [
          {
            period: "Morning (08:30 - 12:00)",
            activity: "Pemayangtse Monastery ('Sublime Lotus')",
            description: "Tour one of Sikkim's oldest premier monasteries, housing the famous wooden seven-tiered celestial palace model carved by a single monk.",
            cost: "₹50"
          },
          {
            period: "Afternoon (13:00 - 16:00)",
            activity: "Rabdentse Ruins & Bird Sanctuary Forest Walk",
            description: "Walk the stone pathways through mossy forests to the 17th-century stone capital ruins offering unobstructed valley views.",
            cost: "₹50"
          },
          {
            period: "Evening (16:30 - 19:30)",
            activity: "Khecheopalri Sacred Wish-Fulfilling Lake",
            description: "Visit the revered holy lake where, according to local folklore, birds do not allow a single fallen leaf to float on the water surface.",
            cost: "₹30"
          },
          {
            period: "Night (20:00+)",
            activity: "Relaxing Cafe & Acoustic Folk Evening in Upper Pelling",
            description: "Relax by a log hearth fire enjoying Sikkimese Sel Roti (crispy sweet rice bread) with potato aloo dam.",
            cost: "₹250"
          }
        ]
      },
      {
        dayNumber: 5,
        dayTitle: "North Sikkim Expedition: Lachung & Yumthang Valley",
        slots: [
          {
            period: "Morning (07:00 - 12:00)",
            activity: "Scenic North Sikkim Drive via Seven Sisters Falls",
            description: "Ascend past roaring waterfalls, deep Teesta river gorges, and alpine cliffs on the route to the village of Lachung (8,600 ft).",
            cost: "₹1,200"
          },
          {
            period: "Afternoon (13:00 - 16:30)",
            activity: "Chungthang Confluence & Lachung Apple Orchards",
            description: "Explore the picturesque rustic wooden cottage village of Lachung nestled beneath snow peaks.",
            cost: "₹50"
          },
          {
            period: "Evening (17:00 - 19:30)",
            activity: "Lachung Monastery & Village Walk",
            description: "Visit the hillside monastery and learn about the unique ancient local democratic village governance system ('Dzumsa').",
            cost: "Free"
          },
          {
            period: "Night (20:00+)",
            activity: "Traditional Mountain Meal by the Bukhari Heater",
            description: "Hearty local dinner of mountain dal, locally cultivated potatoes, spicy churpi chutney, and warm soup.",
            cost: "₹300"
          }
        ]
      },
      {
        dayNumber: 6,
        dayTitle: "Yumthang Valley of Flowers & Zero Point (15,300 ft)",
        slots: [
          {
            period: "Morning (06:00 - 10:30)",
            activity: "Yumthang Valley (Sanctuary of Rhododendrons)",
            description: "Witness the sprawling alpine meadow flanked by snow-capped peaks, wandering yaks, and hot natural sulphur springs.",
            cost: "₹150"
          },
          {
            period: "Afternoon (11:00 - 14:30)",
            activity: "Excursion to Zero Point (Yumesamdong, 15,300 ft)",
            description: "Reach the terminal road where civilians are permitted, surrounded by year-round untouched glaciers and rugged Himalayan wilderness.",
            cost: "₹400"
          },
          {
            period: "Evening (15:30 - 19:00)",
            activity: "Hot Spring Bath & Scenic Return Drive",
            description: "Dip hands and feet in the natural curative hot springs along the Yumthang river before driving back toward Gangtok.",
            cost: "₹50"
          },
          {
            period: "Night (20:00+)",
            activity: "Relaxing Dinner at Mangan Town",
            description: "Enjoy hot bowl of Tibetan noodle soup and steamed dumplings at a local roadside dhaba.",
            cost: "₹200"
          }
        ]
      },
      {
        dayNumber: 7,
        dayTitle: "Rumtek Royal Monastery & Farewell Sikkim Walk",
        slots: [
          {
            period: "Morning (09:00 - 12:30)",
            activity: "Dharma Chakra Centre (Rumtek Monastery)",
            description: "Explore the golden stupas and sprawling courtyard of Sikkim's grandest seat of the Kagyu lineage.",
            cost: "₹50"
          },
          {
            period: "Afternoon (13:30 - 16:30)",
            activity: "Directorate of Handicrafts & Handloom Workshop",
            description: "Observe local artisans hand-weaving traditional Lepcha tapestries, carved Choktse tables, and handmade paper.",
            cost: "₹20"
          },
          {
            period: "Evening (17:00 - 20:00)",
            activity: "Sunset from Ridge Park & Flower Exhibition Centre",
            description: "Admire exotic orchids and seasonal floral displays in Ridge Park overlooking the distant Himalayas.",
            cost: "₹30"
          },
          {
            period: "Night (20:30+)",
            activity: "Farewell Himalayan Gala Dinner at MG Marg",
            description: "End your Sikkim journey with pan-fried momos, fiery Dalle Khursani chili sauce, and roasted yak butter tea.",
            cost: "₹500"
          }
        ]
      }
    ],
    budgetTiers: {
      backpacker: "₹1,800 - ₹2,500 / day (shared sumo jeeps + clean guesthouse + local momo stalls)",
      midRange: "₹4,500 - ₹7,500 / day (private bolero/innova + 3-star view hotel + guided monastery tours)",
      luxury: "₹14,000+ / day (luxury heritage resort like Elgin Nor-Khill + private luxury SUV + personalized permits)"
    },
    localTips: [
      "Carry at least 6 passport-sized photos and 4 copies of your Aadhaar card/Voter ID for East and North Sikkim permits (Nathula, Tsomgo, Yumthang).",
      "Plastic water bottles are strictly banned in North Sikkim (Lachen and Lachung) to protect the environment; carry reusable metal bottles.",
      "Always respect monastery customs: walk clockwise around stupas and prayer wheels, remove footwear, and ask before taking indoor photos."
    ]
  },

  goa: {
    destination: "Goa",
    country: "India",
    tagline: "India's sun-drenched coastal paradise celebrated for golden beaches, Portuguese colonial heritage, and vibrant nightlife.",
    bestTimeToVisit: "November to February for balmy beach weather, watersports, and lively night markets.",
    dailyBudgetUSD: 45,
    topAttractions: [
      { name: "Fort Aguada & Lighthouse", fee: "₹25 / ₹300 (Intl)", insiderTip: "Visit at 4:30 PM for sea-cliff views and historic Portuguese ramparts overlooking Sinquerim beach." },
      { name: "Basilica of Bom Jesus (Old Goa)", fee: "Free", insiderTip: "UNESCO World Heritage site housing the sacred mortal remains of St. Francis Xavier." },
      { name: "Dudhsagar Waterfalls (1,017 ft)", fee: "₹500 (Jeep Safari permit)", insiderTip: "Four-tiered waterfall on the Mandovi river; take the official forest jeep safari through Bhagwan Mahavir Wildlife Sanctuary." }
    ],
    days: [
      {
        dayNumber: 1,
        dayTitle: "North Goa Coastline, Watersports & Sunset Shacks",
        slots: [
          { period: "Morning (09:00 - 12:30)", activity: "Calangute & Baga Beach Watersports", description: "Parasailing and jet ski rides along the famous golden sand stretch, followed by chilled coconut water.", cost: "₹800" },
          { period: "Afternoon (13:30 - 16:30)", activity: "Fort Aguada & Sinquerim Beach", description: "Explore the 17th-century Portuguese fortress and sea bastion guarding the mouth of the Mandovi river.", cost: "₹50" },
          { period: "Evening (17:00 - 20:00)", activity: "Anjuna Beach Sunset & Curlies Shack", description: "Watch the red sun dip below the Arabian Sea accompanied by live electronic music and sea breezes.", cost: "₹450" },
          { period: "Night (20:30+)", activity: "Tito's Lane Nightlife & Goan Fish Thali", description: "Feast on Kingfish Rava fry, prawn balchão, and Goan poi bread in the vibrant Baga nightlife strip.", cost: "₹650" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Old Goa Heritage & Panaji Fontainhas Latin Quarter",
        slots: [
          { period: "Morning (09:00 - 12:30)", activity: "Old Goa Churches: Bom Jesus & Se Cathedral", description: "Marvel at Baroque Manueline architecture and the largest church bell in Asia ('Golden Bell').", cost: "Free" },
          { period: "Afternoon (13:00 - 16:30)", activity: "Fontainhas Latin Quarter Walking Tour", description: "Stroll picturesque cobblestone streets lined with pastel yellow, terracotta, and indigo Portuguese heritage villas.", cost: "₹200" },
          { period: "Evening (17:00 - 20:00)", activity: "Mandovi River Sunset Cruise & Casino Promenade", description: "Watch dusk settle from the river promenade with live Goan folk dance and Mandovi waters.", cost: "₹500" },
          { period: "Night (20:30+)", activity: "Heritage Portuguese Dining at Viva Panjim", description: "Dine on traditional Pork Vindaloo, Chicken Xacuti, and multi-layered Bebinca dessert.", cost: "₹550" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "South Goa Serenity: Palolem & Cabo de Rama",
        slots: [
          { period: "Morning (08:30 - 12:30)", activity: "Scenic South Drive & Cabo de Rama Fort", description: "Explore ancient clifftop fortress ruins offering sheer panoramic drops into the turquoise ocean.", cost: "Free" },
          { period: "Afternoon (13:00 - 16:30)", activity: "Palolem Beach & Kayaking to Butterfly Island", description: "Crescent-shaped tranquil beach with calm waters perfect for kayaking among coastal sea caves.", cost: "₹400" },
          { period: "Evening (17:00 - 19:30)", activity: "Agonda Beach Sunset Walk", description: "Peaceful, uncrowded turtle nesting beach ideal for twilight meditation and sunset photography.", cost: "Free" },
          { period: "Night (20:00+)", activity: "Candlelight Beach Shack Dining on Palolem Sand", description: "Enjoy fresh grilled tiger prawns and crab butter garlic cooked over open coals.", cost: "₹700" }
        ]
      }
    ],
    budgetTiers: {
      backpacker: "₹1,500 - ₹2,200 / day (rented scooter ₹350 + beach hostel + shack dining)",
      midRange: "₹4,000 - ₹6,500 / day (boutique heritage resort + car rental + fine dining)",
      luxury: "₹15,000+ / day (5-star beachfront Taj/Leela resort + private yacht charter + seafood feasts)"
    },
    localTips: [
      "Renting a scooter (Activa) for ₹350-₹500/day is the most scenic and efficient way to explore Goa; always wear helmets.",
      "Respect dress codes when visiting Old Goa churches (no sleeveless tops or short beachwear).",
      "Avoid swimming during red flag monsoon warnings; Arabian Sea undercurrents can be strong."
    ]
  },

  manali: {
    destination: "Manali",
    country: "India",
    tagline: "The adventure hub of Himachal Pradesh set in the Kullu Valley beneath towering pine forests and snowy Pir Panjal peaks.",
    bestTimeToVisit: "October to February for snowfall and skiing; March to June for blooming apple orchards and paragliding.",
    dailyBudgetUSD: 38,
    topAttractions: [
      { name: "Solang Valley & Rohtang Pass", fee: "₹500 (Rohtang permit)", insiderTip: "Solang offers paragliding and zorbing; Rohtang Pass snow point requires online green tax permit." },
      { name: "Hadimba Devi Temple", fee: "Free", insiderTip: "Constructed in 1553 AD with 4-tiered wooden pagoda architecture amid towering cedar (Deodar) groves." },
      { name: "Atal Tunnel & Sissu Waterfall (Lahaul)", fee: "Free", insiderTip: "Drive through the 9.02 km tunnel under the Rohtang Pass into the stunning trans-Himalayan desert of Lahaul." }
    ],
    days: [
      {
        dayNumber: 1,
        dayTitle: "Hadimba Temple, Old Manali Cafes & Mall Road",
        slots: [
          { period: "Morning (09:00 - 12:00)", activity: "Hadimba Temple & Dhungri Van Vihar Forest", description: "Walk through centuries-old giant deodar forests to the sacred pagoda wooden shrine.", cost: "₹20" },
          { period: "Afternoon (12:30 - 16:00)", activity: "Old Manali Hippie Cafes & Manu Temple", description: "Walk the scenic uphill lanes to the shrine of Sage Manu, followed by wood-fired trout and pizza at Cafe 1947.", cost: "₹450" },
          { period: "Evening (16:30 - 19:30)", activity: "Jogini Waterfall Trek", description: "Gentle 3 km nature hike through apple orchards and pine cliffs to the cascading alpine waterfall.", cost: "Free" },
          { period: "Night (20:00+)", activity: "Manali Mall Road & Hot Siddu Bread", description: "Browse Tibetan market woolens and taste authentic Himachali steamed Siddu served with ghee and mint chutney.", cost: "₹300" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Solang Valley Snow Adventure & Atal Tunnel into Lahaul",
        slots: [
          { period: "Morning (08:00 - 12:30)", activity: "Solang Valley Adventure & Cable Car", description: "Ride the ropeway to 10,500 ft for sweeping valley views, followed by tandem paragliding.", cost: "₹1,200" },
          { period: "Afternoon (13:00 - 16:30)", activity: "Atal Tunnel & Sissu Waterfall (Lahaul Valley)", description: "Cross beneath the mountains into the dramatic barren Lahaul valley to witness the frozen Sissu waterfall.", cost: "₹50" },
          { period: "Evening (17:00 - 19:30)", activity: "Vashisht Village & Natural Sulphur Hot Springs", description: "Soak tired muscles in the ancient stone thermal springs at Vashisht sage temple.", cost: "Free" },
          { period: "Night (20:00+)", activity: "Riverside Bonfire & Himachali Dham Feast", description: "Dine on traditional Madra (chickpeas in yogurt gravy), Khatta, and rice beside the roaring Beas river.", cost: "₹450" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Naggar Castle Heritage & Kullu White Water Rafting",
        slots: [
          { period: "Morning (09:00 - 12:30)", activity: "Naggar Castle & Nicholas Roerich Art Gallery", description: "Visit the 500-year-old timber-and-stone royal fortress overlooking the snow peaks of the Beas Valley.", cost: "₹50" },
          { period: "Afternoon (13:00 - 16:00)", activity: "Beas River White Water Rafting in Kullu", description: "Grade II and III white water rafting adventure over 14 km of foaming mountain rapids.", cost: "₹800" },
          { period: "Evening (16:30 - 19:30)", activity: "Shawl Weaving Co-operative & Trout Tasting", description: "Watch artisans craft pure Pashmina and Kullu shawls, then savor tandoori Himalayan trout.", cost: "₹550" },
          { period: "Night (20:00+)", activity: "Stargazing at Solang or Old Manali Balcony", description: "Clear mountain night sky view with hot apple cider or ginger honey lemon tea.", cost: "₹150" }
        ]
      }
    ],
    budgetTiers: {
      backpacker: "₹1,400 - ₹2,000 / day (hostel dorm + local HRTC buses + cafe food)",
      midRange: "₹3,500 - ₹5,500 / day (river-view cottage + private taxi + adventure activities)",
      luxury: "₹12,000+ / day (luxury pine chalet like The Himalayan + private 4x4 SUV + helicopter ski)"
    },
    localTips: [
      "The Atal Tunnel provides year-round access to Lahaul, but check weather warnings during heavy winter blizzards.",
      "Bargain politely for woolen shawls and wooden handicrafts at the Government-registered Tibetan handicrafts emporium.",
      "Carry motion sickness tablets if you are prone to dizziness on the zigzag mountain hairpins."
    ]
  },

  ladakh: {
    destination: "Ladakh",
    country: "India",
    tagline: "The Land of High Passes, high-altitude desert moonscapes, turquoise lakes, and Tibetan Gompas.",
    bestTimeToVisit: "May to September when all mountain passes (Manali-Leh and Srinagar-Leh) are open.",
    dailyBudgetUSD: 50,
    topAttractions: [
      { name: "Pangong Tso Lake (14,270 ft)", fee: "₹400 (Inner Line Permit)", insiderTip: "World's highest saltwater lake changing colors from turquoise to violet; stay overnight in a yurt tent." },
      { name: "Khardung La Pass (17,982 ft)", fee: "Included in Permit", insiderTip: "One of the world's highest motorable roads; limit your stop at the pass to 20 minutes to prevent AMS." },
      { name: "Nubra Valley & Hunder Sand Dunes", fee: "₹300 (Camel ride)", insiderTip: "Ride rare double-humped Bactrian camels among white desert sand dunes surrounded by snow peaks." }
    ],
    days: [
      {
        dayNumber: 1,
        dayTitle: "Leh Acclimatization, Shanti Stupa & Leh Palace",
        slots: [
          { period: "Morning (09:00 - 12:00)", activity: "Mandatory Rest & Gentle Acclimatization", description: "Rest completely for altitude adaptation (11,500 ft), drink garlic water and herbal ginger tea.", cost: "Free" },
          { period: "Afternoon (14:00 - 17:00)", activity: "Leh Palace & Central Asian Museum", description: "Explore the 9-story 17th-century royal palace resembling the Potala Palace of Lhasa.", cost: "₹25" },
          { period: "Evening (17:30 - 20:00)", activity: "Shanti Stupa Golden Sunset", description: "Climb the white-domed Buddhist stupa for 360-degree twilight panoramas of the Indus Valley and Namgyal Tsemo.", cost: "Free" },
          { period: "Night (20:30+)", activity: "Leh Main Bazaar Food Trail & Skyu Stew", description: "Taste traditional Ladakhi Skyu (hand-rolled pasta stew), Tingmo, and apricot jam crepes.", cost: "₹400" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Khardung La Pass to Nubra Valley Sand Dunes",
        slots: [
          { period: "Morning (07:30 - 11:30)", activity: "Ascent over Khardung La Pass (17,982 ft)", description: "Drive past the highest motorable checkpoint in the world with panoramic views of the Karakoram range.", cost: "Free" },
          { period: "Afternoon (12:30 - 15:30)", activity: "Diskit Monastery & Giant Maitreya Buddha", description: "Stand beneath the monumental 106-foot Maitreya Buddha statue gazing across the Shyok River.", cost: "₹30" },
          { period: "Evening (16:30 - 19:30)", activity: "Hunder Sand Dunes Double-Humped Camel Safari", description: "Ride historical Silk Route Bactrian camels across the silver sand dunes under sunset shadows.", cost: "₹350" },
          { period: "Night (20:00+)", activity: "Milky Way Stargazing in Nubra Valley", description: "Clear, unpolluted desert skies with views of the galactic core and shooting stars from your tent.", cost: "Free" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "The Magic of Pangong Tso Lake (14,270 ft)",
        slots: [
          { period: "Morning (07:00 - 12:00)", activity: "Shyok River Route to Pangong Tso", description: "Traverse high mountain rivers and rugged gorge canyons directly toward the 134-km long alpine lake.", cost: "Free" },
          { period: "Afternoon (12:30 - 16:30)", activity: "Pangong Lake Shore & Color Changing Waters", description: "Walk along the crystalline turquoise shore where 60% of the lake extends into Tibet.", cost: "Free" },
          { period: "Evening (17:00 - 19:30)", activity: "Sunset over Changchenmo Range", description: "Watch peaks turn amber and the lake water shift from royal blue to deep indigo.", cost: "Free" },
          { period: "Night (20:00+)", activity: "Warm Thukpa & Night Sky Observation at Spangmik", description: "Enjoy steaming noodles and ladakhi butter tea inside your insulated glamping yurt.", cost: "₹350" }
        ]
      }
    ],
    budgetTiers: {
      backpacker: "₹2,200 - ₹3,000 / day (shared traveler tempo + homestays + local thukpa)",
      midRange: "₹6,000 - ₹9,500 / day (private 4x4 Scorpio/Innova + lake yurts + inner line permits)",
      luxury: "₹20,000+ / day (glamping luxury tents at Chamba Camp + private oxygen-fitted SUV)"
    },
    localTips: [
      "Acclimatization is mandatory! Spend your first 24 to 36 hours in Leh resting with zero strenuous hiking to prevent Acute Mountain Sickness (AMS).",
      "Only postpaid mobile connections (BSNL, Airtel, Jio) work in Ladakh; prepaid SIMs from other states stop working.",
      "Carry ample cash; ATMs outside Leh town (in Nubra, Pangong, and Tso Moriri) are virtually non-existent."
    ]
  },

  kerala: {
  "destination": "Kerala",
  "country": "India",
  "tagline": "God's Own Country of tranquil emerald backwaters, rolling Munnar tea mist, and fragrant spice coastlines.",
  "bestTimeToVisit": "September to March for pleasant tropical temperatures and calm backwaters.",
  "dailyBudgetUSD": 42,
  "topAttractions": [
    {
      "name": "Alleppey (Alappuzha) Houseboat Backwaters",
      "fee": "₹7,500 - ₹12,000 / night (Private Houseboat)",
      "insiderTip": "Board an overnight Kettuvallam houseboat from Punnamada Jetty; ask for fresh Karimeen fish fry prepared by the onboard chef."
    },
    {
      "name": "Munnar Tea Plantations & Eravikulam National Park",
      "fee": "₹200 (Entry) + Safari",
      "insiderTip": "Visit Eravikulam at 08:00 AM to spot endangered Nilgiri Tahr mountain goats before afternoon fog rolls in."
    },
    {
      "name": "Fort Kochi Chinese Fishing Nets & Jew Town",
      "fee": "Free / ₹50 Synagogue",
      "insiderTip": "Walk the coastal promenade at dusk to photograph the huge cantilevered Chinese fishing nets against the sunset."
    },
    {
      "name": "Periyar Tiger Reserve (Thekkady)",
      "fee": "₹500 (Boating Safari)",
      "insiderTip": "Take the dawn 07:30 AM lake boat safari to spot wild elephant herds bathing along the reservoir shoreline."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Fort Kochi Heritage, Jewish Quarter & Kathakali Performance",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Historic Fort Kochi Walking Tour & Chinese Fishing Nets",
          "description": "Explore Portuguese colonial streets, St. Francis Church, and giant cantilevered fishing nets.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Jew Town, Paradesi Synagogue & Mattancherry Palace",
          "description": "Wander antique spice lanes and 16th-century floor tiles in the oldest active synagogue.",
          "cost": "₹50"
        },
        {
          "period": "Evening (17:30 - 19:30)",
          "activity": "Traditional Kathakali & Kalaripayattu Martial Arts Show",
          "description": "Watch the intricate facial makeup ritual followed by dramatic classical storytelling and sword arts.",
          "cost": "₹400"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Seafood Dinner at Seaside Seagull or Malabar Junction",
          "description": "Savor Kerala Fish Curry in earthen pot, Appam with coconut stew, and fresh Malabar parottas.",
          "cost": "₹550"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Scenic Drive to Munnar Tea Mist & Cheeyappara Waterfalls",
      "slots": [
        {
          "period": "Morning (08:00 - 12:00)",
          "activity": "Ascent to Munnar Western Ghats via Cheeyappara Falls",
          "description": "Drive past mist-laden mountain hairpins, roaring roadside cascades, and lush rubber plantations.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "KDHP Tea Museum & Tata Tea Estate Walk",
          "description": "Learn the century-old orthodox tea manufacturing process and taste freshly plucked Cardamom and Green tea.",
          "cost": "₹150"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Pothamedu Viewpoint Sunset",
          "description": "Gaze over endless rolling carpeted emerald tea hills as sunset clouds descend into the valley.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Authentic Kerala Sadhya Dinner at Munnar Town",
          "description": "Feast on banana-leaf feast with Avial, Thoran, Sambar, Payasam, and hot ginger tea.",
          "cost": "₹350"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Eravikulam National Park & Mattupetty Lake",
      "slots": [
        {
          "period": "Morning (08:00 - 12:00)",
          "activity": "Eravikulam National Park (Rajamalai)",
          "description": "Spot the endangered Nilgiri Tahr mountain goats roaming wild beneath South India's highest peak, Anamudi (8,842 ft).",
          "cost": "₹200"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Mattupetty Dam & Speedboating on Lake",
          "description": "Surrounded by shola forests and tea estates; speed boat across the reservoir and listen to echo point reverberations.",
          "cost": "₹400"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Top Station Border Panorama (Kerala-Tamil Nadu)",
          "description": "Highest altitude viewpoint in Munnar offering sheer 360-degree vistas of the Western Ghats mountain plains.",
          "cost": "₹50"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Campfire & Stargazing at Mountain Resort",
          "description": "Warm your hands by an outdoor wood fire enjoying roasted cashew nuts and spiced tea.",
          "cost": "Free"
        }
      ]
    },
    {
      "dayNumber": 4,
      "dayTitle": "Spice Sanctuaries of Thekkady & Periyar Lake",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Scenic Mountain Drive to Thekkady",
          "description": "Traverse spice plantations of green cardamom, black pepper vines, cinnamon bark, and vanilla orchids.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Periyar Lake Wildlife Boat Safari",
          "description": "Spot herds of wild Asiatic elephants, sambar deer, wild boars, and river otters along the submerged tree branches.",
          "cost": "₹500"
        },
        {
          "period": "Evening (17:00 - 19:00)",
          "activity": "Organic Spice Plantation Guided Tasting Tour",
          "description": "Walk with an herbalist to taste fresh cloves, allspice leaves, nutmeg mace, and Ayurvedic plants.",
          "cost": "₹200"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Bamboo Shoot Curry & Kerala Parotta at Thekkady Bazaar",
          "description": "Dine on aromatic pepper chicken or spicy mushroom roast with flaky Malabar bread.",
          "cost": "₹400"
        }
      ]
    },
    {
      "dayNumber": 5,
      "dayTitle": "The Magic of Alleppey: Overnight Backwaters Houseboat",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Descent to Alleppey (Alappuzha) Backwater Venice",
          "description": "Arrive at the backwater canal docks where hundreds of traditional thatched Kettuvallam houseboats await.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (12:30 - 17:00)",
          "activity": "Private Houseboat Cruise & Fresh Karimeen Feast",
          "description": "Glide silently past palm-fringed canals, village churches, and paddy fields located below sea level while dining on Karimeen Pollichathu.",
          "cost": "₹8,500"
        },
        {
          "period": "Evening (17:30 - 19:30)",
          "activity": "Sunset over Vembanad Lake & Village Canoe Ride",
          "description": "Transfer into a narrow wooden country canoe to navigate narrow interior canals where villagers fish with traditional cast nets.",
          "cost": "₹300"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Candlelit Dinner Anchored on the Serene Waters",
          "description": "Fall asleep to the gentle lapping of calm backwaters beneath starry tropical skies.",
          "cost": "Included"
        }
      ]
    },
    {
      "dayNumber": 6,
      "dayTitle": "Marari Fishermen Beach & Coir Craft Villages",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Houseboat Breakfast & Marari Golden Beach",
          "description": "Disembark from the houseboat and head to the secluded white sand coast of Marari fringed by swaying coconut palms.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Traditional Coir Yarn & Handicraft Workshop",
          "description": "Witness local women hand-spinning golden coconut husk fibers into world-famous eco-friendly ropes and mats.",
          "cost": "₹100"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Marari Beach Sunset & Fishermen Boat Watching",
          "description": "Watch colorful wooden fishing catamarans return with daily catch against golden tropical skies.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Beachside Grilled Catch-of-the-Day",
          "description": "Feast on freshly grilled tiger prawns and Kerala crab curry with tender coconut water.",
          "cost": "₹600"
        }
      ]
    },
    {
      "dayNumber": 7,
      "dayTitle": "Varkala Clifftop, Janardhana Swami Temple & Ayurvedic Spa",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Drive to Varkala & Ancient Janardhana Swami Temple",
          "description": "Visit the 2,000-year-old Vishnu temple dedicated to ancestral rituals near Papanasam holy beach.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Authentic Ayurvedic Abhyanga Full-Body Massage",
          "description": "Rejuvenate body and spirit with warm herbal medicated oils and traditional wooden droni therapies.",
          "cost": "₹1,500"
        },
        {
          "period": "Evening (17:00 - 20:00)",
          "activity": "Varkala North Cliff Sunset Stroll & Cafes",
          "description": "Walk the striking red laterite cliffs perched dramatically above the crashing Arabian Sea waves.",
          "cost": "Free"
        },
        {
          "period": "Night (20:30+)",
          "activity": "Farewell Clifftop Seafood & Tibetan Momos at Cafe del Mar",
          "description": "Celebrate your journey listening to live ocean waves with lemon butter fish and iced herbal tea.",
          "cost": "₹550"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,800 - ₹2,500 / day (public government ferries ₹20 + guesthouses + local thalis)",
    "midRange": "₹4,500 - ₹7,500 / day (private AC cab + heritage plantation homestays + day canoe tours)",
    "luxury": "₹16,000+ / day (luxury Kumarakom Lake Resort / CGH Earth + private luxury AC houseboat)"
  },
  "localTips": [
    "Take the public SWTD government ferry in Alleppey (only ₹15-₹25) for a magnificent budget alternative to private boats.",
    "Purchase genuine GI-tagged spices directly from registered spice co-operatives in Thekkady or Kumily.",
    "Dress modestly when entering traditional temples (men usually required to remove upper garments)."
  ]
},

  jaipur: {
  "destination": "Jaipur",
  "country": "India",
  "tagline": "The legendary Pink City of Rajasthan: colossal hilltop fortresses, filigreed palaces, and kaleidoscopic bazaars.",
  "bestTimeToVisit": "October to March for sunny days, cool desert evenings, and festive cultural fairs.",
  "dailyBudgetUSD": 40,
  "topAttractions": [
    {
      "name": "Amber (Amer) Fort & Sheesh Mahal",
      "fee": "₹100 / ₹550 (Intl)",
      "insiderTip": "Visit before 09:30 AM to explore the mirror-work palace (Sheesh Mahal) in solitude and take the cobblestone path up the ramparts."
    },
    {
      "name": "Hawa Mahal (Palace of Winds)",
      "fee": "₹50 / ₹200 (Intl)",
      "insiderTip": "Cross the street to Tattoo Cafe or Wind View Cafe on the 3rd floor for the ultimate straight-on photography angle of the 953 honeycomb windows."
    },
    {
      "name": "City Palace & Jantar Mantar (UNESCO)",
      "fee": "₹300 / ₹700 (Intl)",
      "insiderTip": "Jantar Mantar features the world's largest stone sundial (Vrihat Samrat Yantra) accurate to within two seconds."
    },
    {
      "name": "Nahargarh Fort Sunset Viewpoint",
      "fee": "₹50 / ₹200 (Intl)",
      "insiderTip": "Climb up to Padao open-air restaurant atop Nahargarh Fort at 05:30 PM for panoramic twilight views over the entire illuminated Pink City."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Pink City Heritage: Hawa Mahal, City Palace & Bazaars",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Hawa Mahal Sunrise & City Palace Complex",
          "description": "Photograph the honeycomb facade in the soft morning light, then tour Chandra Mahal and the royal armoury museum.",
          "cost": "₹350"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Jantar Mantar Astronomical Observatory",
          "description": "Marvel at 19 gigantic 18th-century stone architectural instruments engineered by Maharaja Jai Singh II.",
          "cost": "₹200"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Johari Bazaar & Bapu Bazaar Walking Food Trail",
          "description": "Shop for Kundan jewelry, handcrafted mojaris, and bandhani tie-dye sarees while sipping creamy Lassiwala lassi.",
          "cost": "₹300"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Royal Rajasthani Thali at Laxmi Mishthan Bhandar (LMB)",
          "description": "Feast on authentic Dal Baati Churma, Gatte ki Sabzi, Ker Sangri, and Mawa Kachori sweet.",
          "cost": "₹500"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Majestic Hill Forts: Amber, Jaigarh & Jal Mahal",
      "slots": [
        {
          "period": "Morning (08:00 - 12:30)",
          "activity": "Amber Palace & Sheesh Mahal (Hall of Mirrors)",
          "description": "Ascend the dramatic hill bastion; gaze into thousands of imported Belgian glass mirrors that reflect a single candle flame.",
          "cost": "₹100"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Jaigarh Fort & The World's Largest Cannon",
          "description": "Walk through secret underground tunnels connecting Amber to Jaigarh and inspect the massive Jaivana wheeled cannon.",
          "cost": "₹70"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Jal Mahal (Water Palace) & Man Sagar Lake",
          "description": "Admire the striking red sandstone palace floating serenely in the middle of Man Sagar lake as street lamps ignite.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Rooftop Rajasthani Dining at Peacock Rooftop Restaurant",
          "description": "Dine under fairy lights surrounded by hand-painted peacock murals with hot Laal Maas and garlic naan.",
          "cost": "₹550"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Nahargarh Fort, Albert Hall & Albert Hall Night Lights",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Albert Hall State Museum (Indo-Saracenic Masterpiece)",
          "description": "Explore ancient Persian carpets, Egyptian mummies, brass sculptures, and miniature paintings.",
          "cost": "₹40"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Galta Ji (The Sacred Sun & Monkey Temple)",
          "description": "Hike into the mountain gorge featuring holy kund water tanks and playful rhesus macaques.",
          "cost": "₹50"
        },
        {
          "period": "Evening (17:00 - 20:00)",
          "activity": "Nahargarh Fort Sunset Panorama over Jaipur",
          "description": "Perch on the battlements as dusk envelops the grid city and the urban sprawl glows in gold.",
          "cost": "₹50"
        },
        {
          "period": "Night (20:30+)",
          "activity": "Illuminated Albert Hall Museum Night Walk",
          "description": "Admire the exterior of Albert Hall illuminated in thousands of colorful shifting neon lights.",
          "cost": "Free"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,500 - ₹2,200 / day (auto-rickshaw negotiation + heritage Havelis + local thalis)",
    "midRange": "₹3,800 - ₹6,000 / day (AC cab + boutique heritage palace hotels + guided tours)",
    "luxury": "₹18,000+ / day (Rambagh Palace / Jai Mahal Palace + private vintage car tours)"
  },
  "localTips": [
    "Buy the Rajasthan Tourism Composite Entry Ticket (₹300 for Indians / ₹1,000 for foreigners) which covers Amber, Hawa Mahal, Jantar Mantar, Nahargarh, and Albert Hall for 2 days.",
    "Always visit the original Lassiwala at shop #312 on MI Road (open since 1944) early; they sell out by 2:00 PM.",
    "Politely decline unofficial guides at Amber Fort; hire only authorized guides carrying official RTDC government photo badges."
  ]
},

  kashmir: {
  "destination": "Kashmir",
  "country": "India",
  "tagline": "Paradise on Earth: serene Dal Lake wooden houseboats, pine-scented Gulmarg meadows, and snowy Himalayan peaks.",
  "bestTimeToVisit": "April to October for pleasant weather and blooming Mughal gardens; December to February for world-class snow skiing.",
  "dailyBudgetUSD": 45,
  "topAttractions": [
    {
      "name": "Dal Lake Shikara Ride & Heritage Houseboats",
      "fee": "₹700 - ₹1,000 / hour (Shikara)",
      "insiderTip": "Take a dawn shikara at 05:30 AM to experience the 150-year-old floating vegetable and flower market in the interior backwaters."
    },
    {
      "name": "Gulmarg Gondola (Phase 1 & Phase 2 at 13,780 ft)",
      "fee": "₹810 (Phase 1) + ₹1,010 (Phase 2)",
      "insiderTip": "Book tickets strictly online at the official J&K cable car website 2-3 weeks in advance; Phase 2 reaches Apharwat Peak snow line."
    },
    {
      "name": "Pahalgam Betaab Valley & Aru Valley",
      "fee": "₹100 (Betaab Valley entry)",
      "insiderTip": "Surrounded by pine-forested mountains and crystal-clear Lidder river; pack a picnic blanket."
    },
    {
      "name": "Mughal Gardens of Srinagar (Nishat & Shalimar)",
      "fee": "₹24 entry",
      "insiderTip": "Built by Emperor Jahangir for Empress Nur Jahan with terraced water fountains overlooking Dal Lake."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Dal Lake Tranquility, Floating Markets & Houseboat Living",
      "slots": [
        {
          "period": "Morning (06:00 - 09:30)",
          "activity": "Dawn Shikara Ride to Floating Vegetable Market",
          "description": "Glide across mirror-smooth Dal Lake past lotus ponds to witness local farmers trade fresh produce from their wooden boats.",
          "cost": "₹800"
        },
        {
          "period": "Afternoon (11:00 - 15:30)",
          "activity": "Mughal Gardens: Nishat Bagh & Shalimar Bagh",
          "description": "Stroll through terraced Mughal floral lawns, cascading stone water fountains, and century-old royal Chinar trees.",
          "cost": "₹50"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Sunset Shikara around Char Chinar Island",
          "description": "Sip saffron-infused hot Kehwa with crushed almonds while cruising around the iconic 4 Chinar trees island.",
          "cost": "₹500"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Authentic 7-Course Kashmiri Wazwan Feast",
          "description": "Dine on Rista (pounded mutton meatballs in saffron gravy), Rogan Josh, Gushtaba, and fragrant Basmati rice.",
          "cost": "₹750"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "High-Altitude Snow Paradise of Gulmarg & Gondola",
      "slots": [
        {
          "period": "Morning (07:30 - 11:30)",
          "activity": "Drive to Gulmarg & Gondola Phase 1 (Kongdoori)",
          "description": "Ascend over towering pine forests to the alpine bowl of Kongdoori (10,000 ft) with breathtaking valley vistas.",
          "cost": "₹810"
        },
        {
          "period": "Afternoon (12:00 - 15:30)",
          "activity": "Gondola Phase 2 to Apharwat Peak (13,780 ft)",
          "description": "Step onto year-round snow near the Line of Control; enjoy snowmobiling, sledding, and views of Nanga Parbat.",
          "cost": "₹1,010"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "St. Mary's Victorian Church & Golf Course Meadows",
          "description": "Walk through the century-old British stone church standing solitary in the middle of rolling alpine grass meadows.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Cozy Bukhari Wood-Fire Dinner at Gulmarg Hut",
          "description": "Warm up by the traditional wood stove with steaming Kashmiri Nadru Yakhni (lotus stem in yogurt broth).",
          "cost": "₹450"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Pahalgam: Valley of Shepherds & Betaab Valley",
      "slots": [
        {
          "period": "Morning (08:00 - 12:00)",
          "activity": "Scenic Drive to Pahalgam via Pampore Saffron Fields",
          "description": "Pass purple saffron fields, cricket bat willow workshops, and follow the roaring turquoise Lidder river.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (12:30 - 16:30)",
          "activity": "Betaab Valley & Aru Valley Alpine Sanctuaries",
          "description": "Explore the verdant river valleys made famous by Bollywood cinema, surrounded by dense fir woods and snow summits.",
          "cost": "₹150"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Pony Trek to Baisaran ('Mini Switzerland')",
          "description": "Ascend the pine hill trail on horseback to the sprawling hilltop meadow offering panoramic vistas.",
          "cost": "₹800"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Fresh Grilled Trout Dinner by the Lidder River",
          "description": "Savor fresh Himalayan brown or rainbow trout caught straight from the crystal mountain river.",
          "cost": "₹600"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹2,000 - ₹2,800 / day (shared cabs + Srinagar homestays + local bakeries)",
    "midRange": "₹5,000 - ₹8,000 / day (private sedan taxi + deluxe carved houseboat + gondola tickets)",
    "luxury": "₹18,000+ / day (luxury boutique resorts like The Khyber Himalayan Resort & Spa Gulmarg)"
  },
  "localTips": [
    "Gondola Phase 2 tickets sell out weeks in advance; never rely on touts on site — book only on jammukashmircablecar.com.",
    "Postpaid mobile connections (Airtel, Jio, BSNL) work in J&K; other Indian prepaid SIM cards are blocked for security.",
    "Enjoy the local breakfast of hot Girda bread with pink Noon Chai from traditional Kashmiri bakeries."
  ]
},

  paris: {
  "destination": "Paris",
  "country": "France",
  "tagline": "The iconic City of Light: timeless Haussmannian boulevards, world-class art sanctuaries, and romantic sidewalk bistros.",
  "bestTimeToVisit": "April to May and September to November for gentle weather and manageable museum lines.",
  "dailyBudgetUSD": 110,
  "topAttractions": [
    {
      "name": "Eiffel Tower Summit & Trocadéro",
      "fee": "€29 (Summit Lift)",
      "insiderTip": "Book summit elevator tickets exactly 60 days in advance on the official website; arrive at Trocadéro at dawn for crowd-free photos."
    },
    {
      "name": "Louvre Museum & Mona Lisa",
      "fee": "€22",
      "insiderTip": "Enter via the Carrousel du Louvre shopping mall entrance rather than the outdoor pyramid to bypass main security queues."
    },
    {
      "name": "Musée d'Orsay & Impressionist Masterpieces",
      "fee": "€16",
      "insiderTip": "Housed in a breathtaking 1900 Beaux-Arts railway station; see Van Gogh, Monet, and Renoir under natural skylight."
    },
    {
      "name": "Montmartre & Sacré-Cœur Basilica",
      "fee": "Free / €8 (Dome Climb)",
      "insiderTip": "Climb the 300 steps to the dome for Paris's highest natural panoramic viewpoint, then explore the cobblestones behind Place du Tertre."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Eiffel Tower, Seine River Cruise & Saint-Germain",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Trocadéro Sunrise & Eiffel Tower Summit Climb",
          "description": "Photograph the Eiffel Tower from the marble esplanade, then ascend to the summit for 360-degree vistas across Paris.",
          "cost": "€29"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Champ de Mars Picnic & Invalides Golden Dome",
          "description": "Savor fresh baguette with brie cheese and macarons on the lawn, then visit Napoleon's tomb beneath the gilded dome.",
          "cost": "€17"
        },
        {
          "period": "Evening (17:30 - 20:00)",
          "activity": "Twilight Seine River Cruise on Bateaux Parisiens",
          "description": "Glide under historic bridges past Notre-Dame, the Conciergerie, and the Musée d'Orsay as city monuments illuminate.",
          "cost": "€16"
        },
        {
          "period": "Night (20:30+)",
          "activity": "Traditional Bistro Dining in Saint-Germain-des-Prés",
          "description": "Dine on French Onion Soup, Duck Confit, and Crème Brûlée at historic Cafe de Flore or a cozy neighborhood bistro.",
          "cost": "€38"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "The Louvre, Tuileries Gardens & Opera Garnier",
      "slots": [
        {
          "period": "Morning (09:00 - 13:00)",
          "activity": "The Louvre Museum: Mona Lisa & Venus de Milo",
          "description": "Explore the world's largest art museum through the Denon wing, French royal crown jewels, and ancient sculptures.",
          "cost": "€22"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Tuileries Gardens & Place Vendôme Luxury Walk",
          "description": "Stroll past classical marble statues, relax in green metal chairs beside grand fountains, and visit high-fashion jewelry salons.",
          "cost": "Free"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Palais Garnier Opera House & Galeries Lafayette Rooftop",
          "description": "Admire Marc Chagall's ceiling fresco in the grand opera, then take the glass elevator to the rooftop terrace for sunset views.",
          "cost": "€15"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Artisanal Crepes & Cider in the Latin Quarter",
          "description": "Savor savory buckwheat galettes with gruyère and ham followed by sweet Nutella crepe with Normandy cider.",
          "cost": "€20"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Notre-Dame, Sainte-Chapelle & Bohemian Montmartre",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Île de la Cité: Sainte-Chapelle & Notre-Dame",
          "description": "Stand in awe beneath 1,113 radiant 13th-century stained-glass biblical windows, then view the restored Notre-Dame facade.",
          "cost": "€13"
        },
        {
          "period": "Afternoon (12:30 - 16:00)",
          "activity": "Latin Quarter, Shakespeare and Company & Panthéon",
          "description": "Browse rare vintage books at the legendary bohemian bookshop, then enter the crypt of Voltaire and Marie Curie.",
          "cost": "€12"
        },
        {
          "period": "Evening (16:30 - 20:00)",
          "activity": "Montmartre Artists' Square & Sacré-Cœur Sunset",
          "description": "Watch portrait painters at Place du Tertre, explore Amélie's cobblestone alleys, and sit on the steps for sunset over Paris.",
          "cost": "Free"
        },
        {
          "period": "Night (20:30+)",
          "activity": "Cabaret District Walk & Wine Bar Feast",
          "description": "Pass the glowing red windmill of the Moulin Rouge, then enjoy a charcuterie board with Bordeaux wine in a local cave à vin.",
          "cost": "€35"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "€45 - €65 / day (hostel dorm + bakery sandwiches + Navigo day pass)",
    "midRange": "€120 - €190 / day (3-star boutique hotel in Marais/Bastille + bistros + museum pass)",
    "luxury": "€400+ / day (5-star luxury palace hotel like Ritz or Le Meurice + Michelin dining)"
  },
  "localTips": [
    "Always greet shopkeepers and waiters with a polite 'Bonjour' before asking questions; it opens doors in France.",
    "Tap water in Paris is delicious and strictly tested; ask for a 'carafe d'eau' at any restaurant for free filtered water.",
    "Beware of pickpockets around the Eiffel Tower, Montmartre funicular, and Metro line 1; keep zippered bags close."
  ]
},

  tokyo: {
  "destination": "Tokyo",
  "country": "Japan",
  "tagline": "The mesmerizing metropolis of neon skyscrapers, peaceful Shinto shrines, Michelin cuisine, and futuristic robotics.",
  "bestTimeToVisit": "March to May for cherry blossoms (Sakura) and October to November for clear skies and vibrant ginkgo leaves.",
  "dailyBudgetUSD": 90,
  "topAttractions": [
    {
      "name": "Shibuya Scramble Crossing & Hachiko Statue",
      "fee": "Free",
      "insiderTip": "Watch up to 3,000 pedestrians cross in one signal from the 2nd-floor Starbucks Tsutaya or the open-air Shibuya Sky deck."
    },
    {
      "name": "Sensō-ji Temple (Asakusa)",
      "fee": "Free",
      "insiderTip": "Tokyo's oldest Buddhist temple founded in 645 AD; pass under the huge red paper Kaminarimon lantern and browse Nakamise stalls."
    },
    {
      "name": "teamLab Planets Digital Art Museum",
      "fee": "¥3,800 (~$25)",
      "insiderTip": "Walk barefoot through knee-deep water and mirror rooms filled with holographic floating koi; book 3 weeks ahead."
    },
    {
      "name": "Shinjuku Gyoen National Garden",
      "fee": "¥500",
      "insiderTip": "A 144-acre peaceful oasis blending Japanese traditional, English landscape, and French formal garden styles."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Shibuya Neon Scramble, Harajuku & Meiji Shrine",
      "slots": [
        {
          "period": "Morning (08:30 - 11:30)",
          "activity": "Meiji Jingu Shrine & Yoyogi Forest Walk",
          "description": "Pass through massive cypress Torii gates into a tranquil 170-acre sacred evergreen forest honoring Emperor Meiji.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (12:00 - 15:30)",
          "activity": "Harajuku Takeshita Street & Omotesando Architecture",
          "description": "Sample colorful cotton candy along the youth fashion hub, then browse high-end Tadao Ando boutiques.",
          "cost": "¥1,200"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Shibuya Crossing & Shibuya Sky 360 Observation Deck",
          "description": "Stand at the famous Hachiko statue, walk the world's busiest pedestrian intersection, and watch twilight from the rooftop glass edge.",
          "cost": "¥2,200"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Ichiran Ramen Solo Booth Dining & Izakaya Alley",
          "description": "Order rich tonkotsu pork broth ramen via vending machine ticket with customized noodle firmness and garlic oil.",
          "cost": "¥1,400"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Historic Asakusa, Akihabara Electronics & Tokyo Skytree",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Sensō-ji Temple & Nakamise Souvenir Street",
          "description": "Bathe in incense smoke at the giant cauldron, receive an Omikuji fortune, and taste freshly baked Ningyo-yaki bean cakes.",
          "cost": "¥500"
        },
        {
          "period": "Afternoon (12:30 - 16:00)",
          "activity": "Akihabara Electric Town & Anime Culture Hub",
          "description": "Explore multi-story retro arcade halls, retro gaming shops, and manga specialty stores.",
          "cost": "¥1,500"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Tokyo Skytree Sunset Panorama (2,080 ft)",
          "description": "Take the high-speed lift to the Tembo Deck for vistas of Tokyo Bay and Mount Fuji silhouetted at dusk.",
          "cost": "¥3,100"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Monjayaki & Yakitori under the Yurakucho Train Tracks",
          "description": "Savor savory Tokyo-style grilled batter pancakes and chicken skewers accompanied by cold draft beer or green tea.",
          "cost": "¥2,500"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Tsukiji Fish Market, teamLab Planets & Ginza",
      "slots": [
        {
          "period": "Morning (08:00 - 11:30)",
          "activity": "Tsukiji Outer Market Seafood Breakfast",
          "description": "Graze through historic stalls for tamagoyaki rolled omelets, fresh sea urchin, grilled scallops, and wagyu skewers.",
          "cost": "¥2,500"
        },
        {
          "period": "Afternoon (12:00 - 15:30)",
          "activity": "teamLab Planets Immersive Digital Art",
          "description": "Wade barefoot through crystal water rooms where projections of koi fish transform into flowers upon human touch.",
          "cost": "¥3,800"
        },
        {
          "period": "Evening (16:00 - 19:00)",
          "activity": "Ginza Luxury Boulevards & Itoya 12-Story Stationery",
          "description": "Browse historic department stores like Mitsukoshi and sample seasonal matcha desserts at Ginza Six.",
          "cost": "¥1,200"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Shinjuku Omoide Yokocho ('Memory Lane') Lantern Alley",
          "description": "Squeeze into tiny 6-seater wooden counter stalls under red lanterns for charcoal-grilled skewers and local highballs.",
          "cost": "¥3,000"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "¥5,000 - ¥7,500 / day (~$35 - $50, capsule hotel + 7-Eleven onigiri + Tokyo Metro 24h pass)",
    "midRange": "¥15,000 - ¥24,000 / day (~$100 - $160, boutique business hotel + conveyor belt sushi + teamLab)",
    "luxury": "¥50,000+ / day (~$330+, luxury Aman Tokyo / Park Hyatt + private Kaiseki dinners)"
  },
  "localTips": [
    "Get a digital Suica or Pasmo IC card on your smartphone wallet for seamless tap-to-pay on all subways, buses, and convenience stores.",
    "There are almost no public trash cans in Tokyo; carry a small plastic bag in your daypack to take garbage back to your hotel.",
    "Tipping in Japan is NOT customary and can be seen as awkward or offensive; great service is built into every bill."
  ]
},

  dubai: {
  "destination": "Dubai",
  "country": "United Arab Emirates",
  "tagline": "The dazzling desert metropolis of futuristic architecture, man-made islands, luxury shopping, and golden sand dunes.",
  "bestTimeToVisit": "November to March for sunny, balmy temperatures ideal for beach days and desert safaris.",
  "dailyBudgetUSD": 120,
  "topAttractions": [
    {
      "name": "Burj Khalifa (124th & 125th Floor)",
      "fee": "AED 179 (~$49)",
      "insiderTip": "Book sunset time slots (5:00 PM to 6:30 PM) 2 weeks ahead to see day turn into twinkling night over the Persian Gulf."
    },
    {
      "name": "Dubai Mall & Dubai Fountain Show",
      "fee": "Free",
      "insiderTip": "The world's largest dancing fountain performs every 30 minutes starting at 6:00 PM; watch from the Apple Store balcony for uncrowded views."
    },
    {
      "name": "Red Dune Desert Safari & Bedouin Camp",
      "fee": "AED 180 (~$50)",
      "insiderTip": "Includes 4x4 dune bashing across Lahbab red dunes, sandboarding, camel rides, and a traditional BBQ dinner under starlight."
    },
    {
      "name": "Museum of the Future",
      "fee": "AED 149 (~$40)",
      "insiderTip": "A torus-shaped architectural triumph covered in Arabic calligraphy poetry; tickets strictly required in advance online."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Downtown Marvels: Burj Khalifa, Dubai Mall & Dancing Fountains",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Dubai Mall & Dubai Aquarium Underwater Zoo",
          "description": "Walk through the 270-degree acrylic tunnel surrounded by sand tiger sharks, giant rays, and tropical reefs.",
          "cost": "AED 199"
        },
        {
          "period": "Afternoon (13:30 - 17:00)",
          "activity": "Burj Khalifa: At The Top (Level 124 & 125)",
          "description": "Ascend in the world's fastest double-decker elevators at 10 meters/sec to the highest outdoor observation deck.",
          "cost": "AED 179"
        },
        {
          "period": "Evening (17:30 - 20:00)",
          "activity": "Dubai Fountain Lake Ride & Souk Al Bahar Sunset",
          "description": "Cruise on an abra water taxi right amidst the illuminated dancing water jets shooting 500 feet into the air.",
          "cost": "AED 65"
        },
        {
          "period": "Night (20:30+)",
          "activity": "Middle Eastern Feast with Burj Khalifa Views",
          "description": "Dine on creamy Hummus, freshly baked pita, Shish Tawook, and saffron rice overlooking the sparkling skyline.",
          "cost": "AED 150"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Heritage Dubai: Creek Abra, Gold & Spice Souks",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Al Fahidi Historical Neighborhood & Coffee Museum",
          "description": "Stroll winding sand-colored alleyways and historic wind towers, sampling Arabic coffee with cardamom.",
          "cost": "AED 20"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Traditional 1-Dirham Abra Ride across Dubai Creek",
          "description": "Cross from Bur Dubai to Deira on an authentic wooden water boat for only AED 1 to explore the Spice and Gold Souks.",
          "cost": "AED 1"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Dubai Frame Golden Hour Sunset",
          "description": "Step onto the 50-meter clear glass bridge suspended 150 meters high connecting Old Dubai to the modern metropolis.",
          "cost": "AED 50"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Emirati Cultural Dining at Al Fanar Restaurant",
          "description": "Taste Machboos Deyay (spiced chicken rice), roasted lamb, and sweet Luqaimat dumplings drizzled with date syrup.",
          "cost": "AED 95"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Lahbab Red Dune Desert Safari & Bedouin Camp BBQ",
      "slots": [
        {
          "period": "Morning (09:30 - 13:00)",
          "activity": "Relaxation at JBR The Beach & Ain Dubai Views",
          "description": "Swim in calm turquoise Persian Gulf waters facing the world's largest observation wheel on Bluewaters Island.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (14:30 - 18:00)",
          "activity": "4x4 Red Dunes Safari & Sandboarding Adventure",
          "description": "Ride Land Cruisers over soaring 300-foot crimson dunes at Lahbab, followed by gliding down sand slopes.",
          "cost": "AED 180"
        },
        {
          "period": "Evening (18:30 - 20:30)",
          "activity": "Sunset Camel Trek & Henna Painting at Bedouin Oasis",
          "description": "Photograph camels against the fiery red desert sunset, enjoy Arabic shisha, and get traditional henna tattoos.",
          "cost": "Included"
        },
        {
          "period": "Night (20:30+)",
          "activity": "Open-Air Buffet BBQ with Tanoura & Fire Show",
          "description": "Enjoy grilled lamb kebabs and falafel under the desert stars while watching mesmerizing whirling dervish dance.",
          "cost": "Included"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "AED 150 - AED 220 / day (~$40 - $60, clean hostels in Deira + Dubai Metro + shawarma stalls)",
    "midRange": "AED 450 - AED 750 / day (~$120 - $200, 4-star hotel in Marina/Barsha + desert safari + museum passes)",
    "luxury": "AED 2,500+ / day (~$680+, Atlantis The Royal or Burj Al Arab + private yacht charters)"
  },
  "localTips": [
    "The Dubai Metro is world-class, clean, and fully automated; purchase a Silver Nol Card for seamless transit.",
    "Dress respectfully in traditional heritage neighborhoods and government buildings; beachwear is strictly for pools and resorts.",
    "Friday mornings are quiet as it is prayer time; malls and attractions become vibrant from Friday afternoon onwards."
  ]
},

  bali: {
  "destination": "Bali",
  "country": "Indonesia",
  "tagline": "The Island of the Gods: sacred volcanic peaks, cascading rice terraces, bohemian surf breaks, and spiritual healing.",
  "bestTimeToVisit": "April to October during the dry season for sunny days, lower humidity, and great ocean visibility.",
  "dailyBudgetUSD": 45,
  "topAttractions": [
    {
      "name": "Ubud Sacred Monkey Forest Sanctuary",
      "fee": "IDR 80,000 (~$5)",
      "insiderTip": "Home to over 1,000 Balinese long-tailed macaques and 14th-century mossy temples; secure sunglasses and water bottles in bags."
    },
    {
      "name": "Tegallalang Rice Terraces & Jungle Swing",
      "fee": "IDR 50,000 (~$3)",
      "insiderTip": "Visit before 08:30 AM to catch the magical morning light filtering through coconut palms over the UNESCO Subak irrigation system."
    },
    {
      "name": "Uluwatu Clifftop Temple & Sunset Kecak Dance",
      "fee": "IDR 150,000 (~$10)",
      "insiderTip": "Arrive by 05:00 PM to secure bleacher seats on the 250-foot ocean cliff to watch the hypnotic fire dance as the sun melts into the Indian Ocean."
    },
    {
      "name": "Tanah Lot Sea Temple",
      "fee": "IDR 75,000 (~$5)",
      "insiderTip": "Perched on an offshore rock formation carved by ocean tides; visit at low tide to receive a blessing with holy natural spring water."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Spiritual Ubud: Monkey Forest, Royal Palace & Campuhan Ridge",
      "slots": [
        {
          "period": "Morning (08:30 - 11:30)",
          "activity": "Sacred Monkey Forest Sanctuary Walk",
          "description": "Wander giant banyan trees and moss-covered dragon bridges while observing playful monkey families in their jungle habitat.",
          "cost": "IDR 80,000"
        },
        {
          "period": "Afternoon (12:00 - 15:30)",
          "activity": "Ubud Royal Palace & Traditional Art Market",
          "description": "Admire stone carvings of Puri Saren Agung, then bargain for hand-woven rattan bags, batik sarongs, and wooden crafts.",
          "cost": "IDR 50,000"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Campuhan Ridge Scenic Walk at Golden Hour",
          "description": "Hike the gentle green ridge trail between two river valleys flanked by swaying elephant grass and jungle canopy.",
          "cost": "Free"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Authentic Crispy Duck Feast at Bebek Bengil (Dirty Duck)",
          "description": "Savor Balinese spiced crispy fried duck served with sambal matah, urap vegetables, and steamed red rice.",
          "cost": "IDR 180,000"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Tegallalang Terraces, Holy Water Spring & Coffee Plantation",
      "slots": [
        {
          "period": "Morning (07:30 - 11:00)",
          "activity": "Tegallalang Rice Terraces & Giant Jungle Swing",
          "description": "Walk through stepped green paddy fields carved into the ravine, then soar high above palm trees on a harness swing.",
          "cost": "IDR 150,000"
        },
        {
          "period": "Afternoon (11:30 - 15:00)",
          "activity": "Tirta Empul Holy Water Temple (Melukat Purification)",
          "description": "Don a sacred sarong and step into the stone purification pools fed by natural holy springs flowing for over 1,000 years.",
          "cost": "IDR 50,000"
        },
        {
          "period": "Evening (15:30 - 18:30)",
          "activity": "Kanto Lampo Hidden Waterfall & Luwak Coffee Tasting",
          "description": "Step into the cool river pool beneath cascading rock ledges, followed by tasting fresh herbal ginger tea and organic coffee.",
          "cost": "IDR 40,000"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Plant-Based Bohemian Dinner at Clear Cafe Ubud",
          "description": "Dine in an open-air bamboo treehouse sanctuary with fresh cold-pressed dragon fruit juices and raw desserts.",
          "cost": "IDR 140,000"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Coastal Uluwatu: Clifftop Temple & Jimbaran Seafood Sunset",
      "slots": [
        {
          "period": "Morning (09:30 - 13:00)",
          "activity": "Padang Padang or Melasti Turquoise Beach",
          "description": "Swim in calm azure tidal lagoons flanked by towering white limestone cliffs where pro surfers ride world-class barrels.",
          "cost": "IDR 20,000"
        },
        {
          "period": "Afternoon (14:30 - 16:30)",
          "activity": "Single Fin Clifftop Lookout & Coastal Drinks",
          "description": "Perch high above Uluwatu surf break sipping fresh chilled coconuts with panoramic views of crashing ocean rollers.",
          "cost": "IDR 75,000"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Uluwatu Temple Sunset & Hypnotic Kecak Fire Dance",
          "description": "Fifty shirtless men chant in unison telling the Ramayana epic as the sun sinks into the burning horizon.",
          "cost": "IDR 150,000"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Candlelight Grilled Seafood Feast on Jimbaran Bay Sand",
          "description": "Barefoot dining with tables set right on the beach: grilled red snapper, calamari, butter garlic crab, and corn on the cob.",
          "cost": "IDR 250,000"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "IDR 300,000 - 450,000 / day (~$20 - $30, scooter rental + guesthouse pool + local warung meals)",
    "midRange": "IDR 800,000 - 1,400,000 / day (~$55 - $95, private pool villa + private driver + beach club daybeds)",
    "luxury": "IDR 4,000,000+ / day (~$270+, 5-star cliffside Ayana / Bulgari resort + private yacht excursions)"
  },
  "localTips": [
    "Renting an automatic scooter (IDR 70,000-90,000/day) is popular, but narrow roads require an International Driving Permit and helmet.",
    "Always dress respectfully at temples: tie a sarong and sash around the waist.",
    "Never step on the small handmade palm-leaf flower offerings placed on pavements and shop steps."
  ]
},

  agra: {
  "destination": "Agra",
  "country": "India",
  "tagline": "The imperial Mughal city on the Yamuna river, immortalized by the Taj Mahal — the world's greatest monument to love.",
  "bestTimeToVisit": "October to March for pleasant sunny days and mist-shrouded dawn photography.",
  "dailyBudgetUSD": 35,
  "topAttractions": [
    {
      "name": "Taj Mahal at Sunrise",
      "fee": "₹50 (Indians) / ₹1,100 (Foreigners)",
      "insiderTip": "Enter through the East Gate at 05:45 AM right at opening to photograph the pristine white marble changing from pearly blue to soft pink with zero crowds."
    },
    {
      "name": "Agra Fort (UNESCO World Heritage)",
      "fee": "₹50 / ₹650 (Intl)",
      "insiderTip": "Visit the Khas Mahal and Musamman Burj where Emperor Shah Jahan spent his final years gazing at the Taj Mahal."
    },
    {
      "name": "Mehtab Bagh (Moonlight Garden)",
      "fee": "₹25 / ₹300 (Intl)",
      "insiderTip": "Located directly across the Yamuna River; offers an unobstructed reflection of the Taj Mahal at sunset."
    },
    {
      "name": "Fatehpur Sikri Imperial Ghost City",
      "fee": "₹50 / ₹610 (Intl)",
      "insiderTip": "Magnificent 16th-century red sandstone capital built by Emperor Akbar; walk through the colossal 54-meter Buland Darwaza."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Dawn at Taj Mahal, Royal Agra Fort & Mehtab Bagh Sunset",
      "slots": [
        {
          "period": "Morning (05:45 - 09:30)",
          "activity": "Taj Mahal Sunrise Tour & Diana Bench Portrait",
          "description": "Experience the world-wonder bathed in golden morning light, inspect intricate Pietra Dura stone inlays.",
          "cost": "₹50"
        },
        {
          "period": "Afternoon (11:00 - 14:30)",
          "activity": "Agra Fort: Diwan-i-Aam & Musamman Burj",
          "description": "Tour the sprawling red sandstone palace fort that served as the primary seat of the Mughal Dynasty until 1638.",
          "cost": "₹50"
        },
        {
          "period": "Evening (16:30 - 18:30)",
          "activity": "Mehtab Bagh Sunset Reflection across the Yamuna River",
          "description": "Watch the sun set behind the four minarets from the tranquil Charbagh gardens on the opposite riverbank.",
          "cost": "₹25"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Mughlai Dining & Famous Agra Petha Tasting",
          "description": "Dine on Murg Malai Tikka, Dal Makhani, and visit Panchhi Petha for world-famous translucent Ash Gourd sweets.",
          "cost": "₹400"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Fatehpur Sikri Ghost Capital & Tomb of Salim Chishti",
      "slots": [
        {
          "period": "Morning (08:30 - 13:00)",
          "activity": "Excursion to UNESCO Fatehpur Sikri & Buland Darwaza",
          "description": "Explore Akbar's abandoned capital, Panch Mahal royal pavilion, and the white marble shrine of Sufi Saint Salim Chishti.",
          "cost": "₹50"
        },
        {
          "period": "Afternoon (14:00 - 16:30)",
          "activity": "Tomb of I'timād-ud-Daulah ('Baby Taj')",
          "description": "Marvel at the delicate marble jewel-box tomb considered the architectural prototype and inspiration for the Taj Mahal.",
          "cost": "₹30"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Kinari Bazaar & Marble Inlay Artisans Workshop",
          "description": "Observe master artisans using diamond-tipped tools to embed lapis lazuli, malachite, and mother-of-pearl into white marble.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Rooftop Dinner Overlooking the Glowing Taj Silhouette",
          "description": "Savor tandoori kebabs with mint chutney on a terrace overlooking the monument under evening moonlight.",
          "cost": "₹600"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,200 - ₹1,800 / day (Taj Ganj guesthouses + local auto-rickshaws + bedmi puri breakfasts)",
    "midRange": "₹3,500 - ₹5,500 / day (Fatehabad Road boutique hotel + private AC cab + audio guides)",
    "luxury": "₹22,000+ / day (Oberoi Amarvilas with direct private balcony views of the Taj Mahal from every room)"
  },
  "localTips": [
    "The Taj Mahal is closed on FRIDAYS for prayers; plan your itinerary accordingly!",
    "Only transparent water bottles and small cameras/phones are allowed inside Taj Mahal; tripods and power banks are forbidden.",
    "Agra is famous for Bedmi Puri with spicy Aloo Sabzi and Jalebi for breakfast; try it in Old Agra near Jama Masjid."
  ]
},

  darjeeling: {
  "destination": "Darjeeling",
  "country": "India",
  "tagline": "The Queen of the Hills: world-famous champagne tea, Himalayan heritage steam railways, and Kanchenjunga sunrises.",
  "bestTimeToVisit": "March to May (magnolias and rhododendrons) and October to mid-December (unmatched clear Himalayan views).",
  "dailyBudgetUSD": 38,
  "topAttractions": [
    {
      "name": "Tiger Hill Sunrise over Mount Kanchenjunga",
      "fee": "₹100 (Observatory ticket)",
      "insiderTip": "Leave hotel by 03:45 AM; watch the world's third highest peak turn pink, then gold, with glimpses of Mount Everest on clear mornings."
    },
    {
      "name": "Darjeeling Himalayan Railway (UNESCO Toy Train)",
      "fee": "₹1,000 - ₹1,500 (Steam Joyride)",
      "insiderTip": "Take the vintage 2-hour steam locomotive joyride from Darjeeling to Ghum and back, looping around the scenic Batasia Loop flower garden."
    },
    {
      "name": "Happy Valley Tea Estate & Tea Tasting",
      "fee": "₹100 (Guided factory tour)",
      "insiderTip": "Walk among bushes planted in 1854; learn the grading difference between First Flush, Second Flush, and Muscatel autumnals."
    },
    {
      "name": "Himalayan Mountaineering Institute (HMI) & Zoo",
      "fee": "₹110 (Combined entry)",
      "insiderTip": "Padmaja Naidu Zoo is India's only center for breeding Red Pandas, Snow Leopards, and Himalayan Wolves; visit Tenzing Norgay's memorial at HMI."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Tiger Hill Dawn, Batasia Loop & Colonial Heritage Walk",
      "slots": [
        {
          "period": "Morning (04:00 - 08:30)",
          "activity": "Tiger Hill Kanchenjunga Sunrise & Batasia Loop",
          "description": "Witness the sun rise over the 28,169-ft Kanchenjunga massif, then stop at the spiral mountain railway loop and Ghoom Monastery.",
          "cost": "₹150"
        },
        {
          "period": "Afternoon (11:00 - 15:30)",
          "activity": "UNESCO Toy Train Steam Joyride to Ghum",
          "description": "Experience the chugging narrow-gauge steam engine whistling through hillside villages and cedar pine forests.",
          "cost": "₹1,200"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Chowrasta Mall Stroll & Glenary's Bakery",
          "description": "Sit on the green benches of pedestrian-only Mall road, then enjoy apple pie and fresh Darjeeling tea at century-old Glenary's.",
          "cost": "₹250"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Tibetan Dinner at Kunga Restaurant",
          "description": "Warm up with authentic beef or chicken Momos, piping hot Gyathuk noodle soup, and Shaphalay meat pies.",
          "cost": "₹350"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Himalayan Wildlife, Mountaineering & Happy Valley Tea",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "HMI Mountaineering Museum & Padmaja Naidu Zoo",
          "description": "See high-altitude Snow Leopards and adorable Red Pandas, followed by mountaineering equipment from Everest expeditions.",
          "cost": "₹110"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Happy Valley Tea Estate Factory & Plantation Tour",
          "description": "Walk through cascading hillside tea gardens and taste world-renowned organic single-estate First Flush Darjeeling teas.",
          "cost": "₹100"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Japanese Peace Pagoda & Nipponzan Myohoji Temple",
          "description": "Admire the gleaming white Buddhist stupa with 4 golden avatars of Buddha surrounded by peaceful pine woods.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Dinner & Live Music at Joey's Pub",
          "description": "Classic British-style wooden pub with retro acoustic rock and cold beer in the crisp mountain air.",
          "cost": "₹400"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,500 - ₹2,200 / day (shared jeeps + hill view homestays + local momo counters)",
    "midRange": "₹3,800 - ₹6,000 / day (colonial heritage hotels like Windamere + steam train joyride + private cab)",
    "luxury": "₹15,000+ / day (luxury tea estate retreat like Glenburn Tea Estate or Mayfair Darjeeling)"
  },
  "localTips": [
    "Shared sumos from Siliguri / NJP Railway Station cost only ₹250-₹300 per seat to Darjeeling; avoid paying ₹3,000 for private cabs.",
    "Tiger Hill can get freezing before dawn even in summer; rent an oversized woolen jacket or gloves for ₹50 at the base if under-dressed.",
    "Always ask for 'Single Estate First Flush' when ordering Darjeeling tea; never add milk or sugar to genuine high-grown Darjeeling tea."
  ]
},

  london: {
  "destination": "London",
  "country": "United Kingdom",
  "tagline": "The historic royal capital on the Thames, home to iconic landmarks, world-class free museums, and vibrant theater life.",
  "bestTimeToVisit": "May to September for warm sunny days, lush Royal Parks, and open-air riverside dining.",
  "dailyBudgetUSD": 115,
  "topAttractions": [
    {
      "name": "Tower of London & Crown Jewels",
      "fee": "£34.80 (~$44)",
      "insiderTip": "Arrive at opening at 09:00 AM; head directly to the Jewel House to view the Crown Jewels without lines, then join a Yeoman Warder (Beefeater) tour."
    },
    {
      "name": "British Museum & Rosetta Stone",
      "fee": "Free (Advance booking recommended)",
      "insiderTip": "Admire the Parthenon Sculptures, Egyptian mummies, and the Great Court glass dome; visit Friday evening when it stays open until 8:30 PM."
    },
    {
      "name": "Westminster Abbey & Big Ben",
      "fee": "£29 (~$37) Abbey / Big Ben exterior",
      "insiderTip": "Stand on Westminster Bridge for the classic Elizabeth Tower (Big Ben) photo angle, then tour the coronation site of British monarchs since 1066."
    },
    {
      "name": "The London Eye & River Thames Cruise",
      "fee": "£38 (~$48)",
      "insiderTip": "Ride the 443-foot observation wheel at golden hour dusk for panoramic 360-degree views across London to Windsor Castle."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Royal Westminster, Big Ben & Covent Garden Theatre",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Westminster Abbey & Elizabeth Tower (Big Ben)",
          "description": "Tour the royal coronation church, Poets' Corner, and photograph the iconic Big Ben clock tower and Houses of Parliament.",
          "cost": "£29"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "St. James's Park, Buckingham Palace & Changing of the Guard",
          "description": "Stroll past pelicans in the royal park to see Buckingham Palace, followed by a walk down The Mall to Trafalgar Square.",
          "cost": "Free"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Covent Garden Street Performers & Apple Market",
          "description": "Watch live classical opera and acrobatic street buskers in the 19th-century glass piazza; browse artisan crafts.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Traditional British Pub Dinner & West End Show",
          "description": "Savor crispy Beer-Battered Fish and Chips with mushy peas at a historic wood-paneled pub in Soho.",
          "cost": "£26"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Tower of London, Tower Bridge & Borough Market",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Tower of London & The Crown Jewels",
          "description": "Explore the 1,000-year-old Norman fortress, see the Imperial State Crown, and hear legends of the ravens from a Beefeater.",
          "cost": "£35"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Tower Bridge Glass Floor Walk & Borough Market Lunch",
          "description": "Cross high above the Thames on glass walkway panels, then feast on artisanal grilled cheese, sausage rolls, and oysters.",
          "cost": "£14"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Tate Modern Art & Millennium Bridge Walk to St. Paul's",
          "description": "View contemporary art in the converted power station, then walk across the pedestrian suspension bridge to St. Paul's Cathedral.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "South Bank Riverside Walk & The London Eye Twilight Flight",
          "description": "Fly high above the illuminated Thames riverbanks and skyline on the giant observation wheel.",
          "cost": "£38"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "The British Museum, Camden Market & Regent's Canal",
      "slots": [
        {
          "period": "Morning (10:00 - 13:00)",
          "activity": "The British Museum: Egyptian Mummies & Rosetta Stone",
          "description": "Stand under the spectacular Foster-designed Great Court canopy and discover treasures spanning two million years of human history.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Camden Lock Market Street Food & Vintage Bazaars",
          "description": "Browse bohemian clothing, vinyl records, and sample world cuisines along the bustling Regent's Canal docks.",
          "cost": "£15"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Primrose Hill Panoramic Sunset over London Skyline",
          "description": "Climb the gentle grassy hill for one of London's official protected viewpoints overlooking the entire central city.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Dishoom Bombay Cafe Dinner in King's Cross",
          "description": "Dine on legendary 24-hour slow-cooked Black Daal, Garlic Naan, and Chicken Ruby Murray curry.",
          "cost": "£30"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "£45 - £65 / day (~$55 - $80, hostel in central London + Oyster cap £8.50 + supermarket meal deals)",
    "midRange": "£120 - £190 / day (~$150 - $240, boutique hotel in Kensington/Bloomsbury + West End theater + gastropubs)",
    "luxury": "£450+ / day (~$570+, The Savoy or Claridge's + Michelin dining at Gordon Ramsay)"
  },
  "localTips": [
    "Almost all premier national museums in London (British Museum, Natural History, Science Museum, Tate Modern, National Gallery) are 100% FREE entry.",
    "Never buy single paper Underground tickets; simply tap your contactless bank card or smartphone for the lowest daily fare cap.",
    "Stand on the RIGHT side of the escalator on London Underground tube stations; walking is on the left."
  ]
},

  rome: {
  "destination": "Rome",
  "country": "Italy",
  "tagline": "The Eternal City: monumental ancient Roman colosseums, Renaissance Vatican masterpieces, and cobblestone piazza dining.",
  "bestTimeToVisit": "April to May and September to October for golden Mediterranean sunshine and pleasant walking temperatures.",
  "dailyBudgetUSD": 95,
  "topAttractions": [
    {
      "name": "The Colosseum & Roman Forum (UNESCO)",
      "fee": "€18 (Combined ticket)",
      "insiderTip": "Book strictly online 30 days ahead on the official ticketing portal; start at 08:30 AM to walk the gladiator arena and Palatine Hill before midday heat."
    },
    {
      "name": "Vatican Museums & Sistine Chapel",
      "fee": "€20 (Online reservation)",
      "insiderTip": "Book the earliest 08:00 AM breakfast or opening entry to stand beneath Michelangelo's Sistine Chapel ceiling before tour groups arrive."
    },
    {
      "name": "Trevi Fountain & The Pantheon",
      "fee": "€5 (Pantheon) / Trevi Free",
      "insiderTip": "Toss a coin over your left shoulder with your right hand into Trevi Fountain at 07:00 AM to guarantee your return to Rome without the crowds."
    },
    {
      "name": "Trastevere Cobblestone Quarter",
      "fee": "Free",
      "insiderTip": "Wander ivy-draped medieval alleyways across the Tiber River at sunset for authentic carbonara, cacio e pepe, and artisanal gelato."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Ancient Rome: Colosseum, Roman Forum & Palatine Hill",
      "slots": [
        {
          "period": "Morning (08:30 - 12:30)",
          "activity": "The Colosseum Arena Floor & Emperors' Palatine Hill",
          "description": "Walk through gladiator archways into the amphitheater, then explore ruins of imperial Roman palaces and gardens overlooking Circus Maximus.",
          "cost": "€18"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Roman Forum & Capitoline Hill (Campidoglio)",
          "description": "Stroll the Via Sacra past the Temple of Saturn, Julius Caesar's cremation site, and climb Michelangelo's piazza atop Capitoline Hill.",
          "cost": "Free"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Piazza Venezia & Sunset over Monument to Victor Emmanuel II",
          "description": "Admire the monumental white marble Altare della Patria and views stretching to the dome of St. Peter's.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Authentic Roman Pasta Feast at Da Enzo al 29 (Trastevere)",
          "description": "Feast on creamy Cacio e Pepe, crispy Artichoke alla Giudia, Rigatoni alla Carbonara, and Tiramisu.",
          "cost": "€28"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Vatican City: Sistine Chapel, St. Peter's & Castel Sant'Angelo",
      "slots": [
        {
          "period": "Morning (08:00 - 12:30)",
          "activity": "Vatican Museums & Michelangelo's Sistine Chapel",
          "description": "Admire classical Roman statues, the Gallery of Maps, Raphael's Rooms, and the breathtaking ceiling of the Sistine Chapel.",
          "cost": "€20"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "St. Peter's Basilica & Dome Climb",
          "description": "Gaze at Michelangelo's Pietà sculpture, Bernini's bronze Baldacchino, and climb 551 steps to the top of the grand dome.",
          "cost": "€10"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Castel Sant'Angelo & Bridge of Angels Sunset",
          "description": "Explore Hadrian's ancient round mausoleum and walk the stone bridge lined with Bernini's sculpted marble angels.",
          "cost": "€15"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Artisanal Gelato at Giolitti & Roman Street Pizza",
          "description": "Sample authentic crispy Pizza al Taglio (by the slice) followed by pistachio and dark chocolate gelato at Rome's oldest gelateria.",
          "cost": "€12"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Trevi Fountain, The Pantheon & Piazza Navona",
      "slots": [
        {
          "period": "Morning (08:00 - 11:30)",
          "activity": "Trevi Fountain Coin Toss & Spanish Steps",
          "description": "Toss a coin into the roaring Baroque fountain, then walk to the foot of the 135 Spanish Steps at Piazza di Spagna.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (12:00 - 15:30)",
          "activity": "The Pantheon & Piazza Navona Bernini Fountains",
          "description": "Step under the world's largest unreinforced concrete dome with its 9-meter open oculus, then admire Bernini's Fountain of the Four Rivers.",
          "cost": "€5"
        },
        {
          "period": "Evening (16:00 - 19:00)",
          "activity": "Campo de' Fiori Market & Jewish Ghetto Heritage Walk",
          "description": "Browse fresh fruit, olive oils, and limoncello in the lively square, then walk past the ancient Porticus of Octavia.",
          "cost": "Free"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Aperitivo & Candlelit Trattoria Dining in Monti",
          "description": "Sip an Aperol Spritz with olives and bruschetta in the bohemian Monti neighborhood, followed by slow-braised Ossobuco.",
          "cost": "€32"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "€40 - €60 / day (hostel dorm near Termini + pizza al taglio + daily metro ticket €7)",
    "midRange": "€110 - €170 / day (3-star hotel in Prati/Monti + trattorias + skip-the-line museum tickets)",
    "luxury": "€380+ / day (5-star Hotel de Russie / Hassler + private chauffeur + Michelin-starred dining)"
  },
  "localTips": [
    "Rome has over 2,500 historic public drinking fountains called 'Nasoni' that pour ice-cold potable spring water for free; bring a refillable bottle!",
    "Strict dress codes apply at Vatican City and all Italian basilicas: shoulders and knees must be completely covered.",
    "Never order a Cappuccino after 11:00 AM if you want to eat like a local; Italians drink only Espresso after mid-morning meals."
  ]
},

  newyork: {
  "destination": "New York City",
  "country": "USA",
  "tagline": "The City That Never Sleeps: iconic skyscraper canyons, neon Broadway marquees, Central Park, and diverse boroughs.",
  "bestTimeToVisit": "September to November for crisp autumn foliage in Central Park and April to June for pleasant springtime walks.",
  "dailyBudgetUSD": 140,
  "topAttractions": [
    {
      "name": "Statue of Liberty & Ellis Island",
      "fee": "$25 (Ferry & Pedestal)",
      "insiderTip": "Take the official Statue City Cruises ferry from Battery Park at 08:30 AM; or ride the Staten Island Ferry for a 100% FREE harbor view."
    },
    {
      "name": "Central Park (843 Acres)",
      "fee": "Free",
      "insiderTip": "Rent a bicycle or walk from Bethesda Terrace to Bow Bridge, Strawberry Fields (John Lennon Memorial), and The Ramble woods."
    },
    {
      "name": "Empire State Building or SUMMIT One Vanderbilt",
      "fee": "$44 - $46",
      "insiderTip": "SUMMIT One Vanderbilt offers mirrored infinity rooms with direct straight-on views of the Chrysler Building and Empire State."
    },
    {
      "name": "The High Line & Brooklyn Bridge Walk",
      "fee": "Free",
      "insiderTip": "Walk the Brooklyn Bridge from Brooklyn to Manhattan at sunset so the Manhattan skyline expands directly before you."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Midtown Marvels: Times Square, Central Park & Fifth Avenue",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Central Park Stroll: Bethesda Terrace & Bow Bridge",
          "description": "Grab fresh NYC bagels with scallion cream cheese, walk under the elm trees of The Mall, and watch rowboats on the lake.",
          "cost": "$12"
        },
        {
          "period": "Afternoon (12:30 - 16:30)",
          "activity": "Fifth Avenue, St. Patrick's Cathedral & Rockefeller Center",
          "description": "Browse flagship stores, admire neo-Gothic cathedral architecture, and see the golden Prometheus statue at Rockefeller Plaza.",
          "cost": "Free"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Top of the Rock or SUMMIT One Vanderbilt Sunset Deck",
          "description": "Ascend high above Midtown to watch dusk settle over Central Park and the Empire State Building lights ignite.",
          "cost": "$44"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Times Square Neon Canyon & Broadway Theatre",
          "description": "Stand in the center of world-famous digital billboards, followed by an evening Broadway musical or classic comedy cellar.",
          "cost": "$85"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Lower Manhattan: Wall Street, 9/11 Memorial & Brooklyn Bridge",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Battery Park, Wall Street Charging Bull & 9/11 Memorial",
          "description": "See the bronze Wall Street Bull, Trinity Church, and stand beside the reflective waterfall pools of the 9/11 Memorial.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (12:30 - 16:00)",
          "activity": "One World Observatory & Historic Stone Street Lunch",
          "description": "Take the SkyPod elevator up 102 stories, then dine at outdoor cobblestone picnic tables on Stone Street.",
          "cost": "$47"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Walking the Iconic Brooklyn Bridge at Golden Hour",
          "description": "Stroll the wooden pedestrian boardwalk suspended over the East River with panoramic views of Lower Manhattan towers.",
          "cost": "Free"
        },
        {
          "period": "Night (19:30+)",
          "activity": "DUMBO Brooklyn Waterfront & Grimaldi's Brick-Oven Pizza",
          "description": "Photograph the Manhattan Bridge framed between brick warehouses, then feast on coal-fired thin crust pepperoni pizza.",
          "cost": "$28"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Bohemian West Village, Chelsea Market & The High Line",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "The High Line Elevated Rail Park Walk",
          "description": "Stroll the 1.45-mile repurposed elevated freight railway converted into a public botanical park above Chelsea streets.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Chelsea Market & Hudson Yards Vessel Exploration",
          "description": "Feast on fresh Maine lobster rolls and tacos inside the industrial brick market, then photograph the honeycomb Vessel.",
          "cost": "$30"
        },
        {
          "period": "Evening (16:00 - 19:30)",
          "activity": "Greenwich Village Historic Brownstones & Washington Square",
          "description": "Walk tree-lined streets past Carrie Bradshaw's apartment stoop, jazz clubs, and listen to buskers at Washington Square Arch.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Legendary Pastrami on Rye at Katz's Delicatessen",
          "description": "Order towering hand-carved pastrami sandwiches on rye bread with half-sour pickles at the iconic 1888 Lower East Side deli.",
          "cost": "$32"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "$55 - $80 / day (hostel in Queens/Brooklyn + 7-Day MetroCard + $1.50 pizza slices & bagel joints)",
    "midRange": "$160 - $250 / day (3-star Manhattan hotel + sit-down delis/trattorias + observatory tickets)",
    "luxury": "$550+ / day (5-star luxury The Plaza / Mandarin Oriental + Michelin fine dining + helicopter tours)"
  },
  "localTips": [
    "The New York City Subway runs 24/7/365; simply tap your contactless card with OMNY at turnstiles for $2.90 per ride with automatic weekly caps.",
    "Never accept CDs, comedy show fliers, or photos with costumed characters in Times Square; they aggressively demand $10-$20 tips.",
    "Tip 18% to 20% at full-service sit-down restaurants in NYC; tipping is standard and expected for waitstaff."
  ]
},

  switzerland: {
  "destination": "Switzerland",
  "country": "Switzerland",
  "tagline": "The Alpine paradise of snow-capped 14,000-ft peaks, crystalline glacial lakes, chocolate chalets, and mountain trains.",
  "bestTimeToVisit": "June to September for wildflower alpine hiking and December to March for world-class skiing.",
  "dailyBudgetUSD": 135,
  "topAttractions": [
    {
      "name": "Jungfraujoch - Top of Europe (11,333 ft)",
      "fee": "CHF 160 - 210 (~$180)",
      "insiderTip": "Ride the high-tech Eiger Express tricable gondola to the highest railway station in Europe; walk through the Ice Palace inside the glacier."
    },
    {
      "name": "Lauterbrunnen Valley of 72 Waterfalls",
      "fee": "Free / CHF 14 Trümmelbach",
      "insiderTip": "The dramatic valley that inspired Tolkien's Rivendell; walk behind Staubbach Fall as it sprays mist off a 300-meter sheer cliff."
    },
    {
      "name": "Lake Brienz & Lake Thun Paddle-Steamer Cruise",
      "fee": "CHF 35 / Free with Swiss Travel Pass",
      "insiderTip": "Lake Brienz features brilliant turquoise glacial water; take the boat to Giessbach Falls and the Grand Hotel."
    },
    {
      "name": "Lucerne Chapel Bridge & Lion Monument",
      "fee": "Free",
      "insiderTip": "Walk the world's oldest covered wooden footbridge (1333 AD) adorned with 17th-century triangular roof paintings."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Lucerne Medieval Heritage, Chapel Bridge & Lake Cruise",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Historic Chapel Bridge & Old Town Medieval Murals",
          "description": "Cross the covered wooden bridge and water tower, then stroll past painted guild houses to the poignant Lion of Lucerne.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Lake Lucerne Steamer Cruise to Mount Rigi or Pilatus",
          "description": "Glide across deep blue alpine waters surrounded by sheer jagged peaks, followed by ascending the world's steepest cogwheel railway.",
          "cost": "CHF 45"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Musegg Wall Ancient Towers Sunset Walk",
          "description": "Walk the 14th-century rampart stone fortifications offering sweeping views of the lake, city, and Mount Pilatus.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Traditional Swiss Cheese Fondue & Rösti Feast",
          "description": "Dip crusty bread into bubbling melted Gruyère and Emmental wine fondue at historic Restaurant Fritschi.",
          "cost": "CHF 38"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Interlaken & Lauterbrunnen: Valley of 72 Waterfalls",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Scenic GoldenPass Train to Lauterbrunnen Valley",
          "description": "Ride through emerald valleys and alpine passes into the sheer limestone canyon of Lauterbrunnen beneath Staubbach Falls.",
          "cost": "CHF 25"
        },
        {
          "period": "Afternoon (12:30 - 16:00)",
          "activity": "Trümmelbach Falls Inside the Mountain Glacier",
          "description": "Ascend inside the mountain by tunnel lift to witness 10 glacial waterfalls thundering inside subterranean caverns.",
          "cost": "CHF 14"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Mürren Car-Free Mountain Village Panorama",
          "description": "Take the cable car up to the cliffside village of Mürren directly opposite the Eiger, Mönch, and Jungfrau peaks.",
          "cost": "CHF 22"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Alps Chalet Dinner with Swiss Chocolate Dessert",
          "description": "Savor Älplermagronen (Swiss Alpine macaroni with potatoes, caramelized onions, and applesauce) with Swiss Lindt pralines.",
          "cost": "CHF 32"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Jungfraujoch - Top of Europe & Eiger Glacier",
      "slots": [
        {
          "period": "Morning (08:00 - 12:30)",
          "activity": "Eiger Express Gondola to Jungfraujoch (11,333 ft)",
          "description": "Glide past the sheer north face of the Eiger into the permanent snow and ice of the Aletsch Glacier (UNESCO).",
          "cost": "CHF 165"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Sphinx Observatory & Ice Palace Tunnel Walk",
          "description": "Walk through crystalline blue ice sculpture tunnels carved directly beneath the moving glacier and step onto the snow plateau.",
          "cost": "Included"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Grindelwald Alpine Village Stroll",
          "description": "Descend to the picturesque glacier village of Grindelwald for hot apple cider and artisanal mountain cheeses.",
          "cost": "Free"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Swiss Raclette Dinner beside a Log Fire",
          "description": "Scrape hot melted Raclette cheese over boiled new potatoes, gherkins, and pickled pearl onions.",
          "cost": "CHF 35"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "CHF 65 - CHF 90 / day (~$75 - $100, youth hostel dorms + Coop/Migros supermarket meals + Swiss Half Fare Card)",
    "midRange": "CHF 180 - CHF 280 / day (~$200 - $310, boutique Swiss chalets + mountain railways + fondue restaurants)",
    "luxury": "CHF 600+ / day (~$680+, 5-star Victoria-Jungfrau Grand Hotel + private helicopter alpine flights)"
  },
  "localTips": [
    "The Swiss Travel Pass or Swiss Half Fare Card is essential: it cuts ticket prices for trains, boats, and mountain railways by up to 50%.",
    "Save significant money on food by buying gourmet pre-made sandwiches, rotisserie chicken, and fresh salads from Coop or Migros supermarkets.",
    "Tap water from public fountains in Swiss towns is fresh, pure mountain spring water that is 100% safe and delicious to drink."
  ]
},

  singapore: {
  "destination": "Singapore",
  "country": "Singapore",
  "tagline": "The Garden City of the future: futuristic Supertree groves, world-renowned hawker street food, and lush rainforest oases.",
  "bestTimeToVisit": "November to January for lively holiday festivals and festive lights along Orchard Road; pleasant year-round.",
  "dailyBudgetUSD": 85,
  "topAttractions": [
    {
      "name": "Gardens by the Bay & Supertree Grove",
      "fee": "Free / S$53 (~$40) for Domes",
      "insiderTip": "Supertree Grove light and sound show (Garden Rhapsody) runs daily for FREE at 7:45 PM and 8:45 PM; do not miss the indoor Cloud Forest waterfall."
    },
    {
      "name": "Marina Bay Sands SkyPark Observation Deck",
      "fee": "S$32 (~$24)",
      "insiderTip": "Perched 57 stories above the bay; arrive at 06:15 PM to catch daytime harbor views, golden sunset, and the city lights igniting."
    },
    {
      "name": "Jewel Changi Airport HSBC Rain Vortex",
      "fee": "Free",
      "insiderTip": "The world's tallest indoor waterfall (40 meters) surrounded by a 4-story terraced indoor forest; visit before your flight departure."
    },
    {
      "name": "Chinatown & Maxwell Hawker Centre",
      "fee": "Free / Meals S$5-S$8",
      "insiderTip": "Home to the famous Tian Tian Hainanese Chicken Rice; join the queue for fragrant poached chicken with chili sauce and seasoned rice."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Marina Bay Marvels, Gardens by the Bay & Supertree Light Show",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Gardens by the Bay: Cloud Forest & Flower Dome",
          "description": "Marvel at the 35-meter indoor mountain waterfall enveloped in mist and exotic carnivorous pitcher plants and orchids.",
          "cost": "S$53"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Marina Bay Sands SkyPark & ArtScience Museum",
          "description": "Take the high-speed lift to the 57th-floor cantilevered deck, then explore interactive digital art inside the lotus-shaped museum.",
          "cost": "S$32"
        },
        {
          "period": "Evening (17:30 - 20:00)",
          "activity": "Merlion Park Sunset & Supertree Garden Rhapsody Show",
          "description": "Photograph the half-lion half-fish icon spouting water into Marina Bay, then watch Supertrees glow and pulse to orchestral music.",
          "cost": "Free"
        },
        {
          "period": "Night (20:30+)",
          "activity": "Lau Pa Sat Hawker Feast & Satay Street",
          "description": "Dine under open skies on street Satay skewers grilled over open coals with spicy peanut dipping sauce and cold tiger beer.",
          "cost": "S$18"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Heritage Trails: Chinatown, Little India & Kampong Glam",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Chinatown: Buddha Tooth Relic Temple & Street Murals",
          "description": "Admire the 4-story Tang-style Buddhist monastery, spin giant prayer wheels on the roof garden, and explore colorful shophouses.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Maxwell Food Centre & Little India Spice Trail",
          "description": "Enjoy Michelin Bib Gourmand Hainanese Chicken Rice, then walk through Sri Veeramakaliamman Hindu temple and Mustafa Centre.",
          "cost": "S$8"
        },
        {
          "period": "Evening (16:00 - 19:30)",
          "activity": "Kampong Glam: Sultan Mosque & Haji Lane Boutiques",
          "description": "Admire the golden dome of Sultan Mosque, browse quirky street art, indie fashion shops, and sip iced Teh Tarik.",
          "cost": "S$5"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Clarke Quay Riverside Promenade & Speakeasy Bar",
          "description": "Stroll past restored 19th-century riverside godowns with live music, craft cocktails, and cooling Singapore river breezes.",
          "cost": "S$25"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Botanic Gardens, Orchard Road & Jewel Changi Waterfall",
      "slots": [
        {
          "period": "Morning (08:30 - 11:30)",
          "activity": "Singapore Botanic Gardens & National Orchid Garden",
          "description": "Explore Singapore's first UNESCO World Heritage site featuring over 1,000 species and 2,000 hybrids of exotic orchids.",
          "cost": "S$15"
        },
        {
          "period": "Afternoon (12:00 - 15:30)",
          "activity": "Orchard Road Shopping Boulevards & Emerald Hill",
          "description": "Walk through luxury architectural malls and photograph the tranquil row of pastel Peranakan heritage shophouses on Emerald Hill.",
          "cost": "Free"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Sentosa Island: Siloso Beach Sunset Walk",
          "description": "Ride the Sentosa Express monorail to golden coastal beaches, walk over the suspended rope bridge to Asia's southernmost point.",
          "cost": "S$4"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Jewel Changi Rain Vortex Spectacular & Chili Crab Dinner",
          "description": "Marvel at the thundering indoor waterfall lit by evening projections while tasting Singapore's signature sweet and spicy Chili Crab.",
          "cost": "S$45"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "S$40 - S$60 / day (~$30 - $45, capsule hostel in Chinatown + MRT transit card + hawker food S$5/meal)",
    "midRange": "S$130 - S$220 / day (~$100 - $165, 4-star boutique shophouse hotel + paid attractions + seafood feasts)",
    "luxury": "S$480+ / day (~$360+, Marina Bay Sands Infinity Pool room or Raffles Hotel + Michelin fine dining)"
  },
  "localTips": [
    "Hawker centres are the heartbeat of Singapore dining; use a packet of tissue paper on a table to 'chope' (reserve) your seat before ordering!",
    "Tap your contactless credit card or Apple/Google Pay directly on bus and MRT readers — no need to purchase transport cards.",
    "Chewing gum is strictly illegal to import or sell in Singapore, and littering carries heavy fines; keep the island sparkling clean."
  ]
},

  varanasi: {
  "destination": "Varanasi",
  "country": "India",
  "tagline": "The spiritual capital of India: the world's oldest living city where sacred Ganges ghats, eternal rituals, and Vedic chants endure.",
  "bestTimeToVisit": "October to March for cool, pleasant mornings, clear river mist, and holy Diwali / Dev Deepawali festivals.",
  "dailyBudgetUSD": 32,
  "topAttractions": [
    {
      "name": "Dashashwamedh Ghat Evening Ganga Aarti",
      "fee": "Free / Boat viewing ₹200-₹300",
      "insiderTip": "Seven priests perform the choreographed fire ritual with heavy brass lamps and conch shells at 06:45 PM; view it from a wooden boat on the river for the best vantage."
    },
    {
      "name": "Dawn Boat Ride along Sacred Ghats (Assi to Manikarnika)",
      "fee": "₹300 - ₹500 (Rowboat)",
      "insiderTip": "Start at Assi Ghat at 05:30 AM; watch the sunrise illuminate ancient riverside palaces, pilgrims taking holy dips, and sadhus meditating."
    },
    {
      "name": "Kashi Vishwanath Temple (Golden Temple)",
      "fee": "Free / Sugam Darshan ₹300",
      "insiderTip": "One of the twelve sacred Jyotirlingas of Lord Shiva; deposit all mobile phones, bags, and leather belts at the security lockers in the corridor."
    },
    {
      "name": "Sarnath Deer Park & Dhamek Stupa",
      "fee": "₹25 / ₹300 (Intl)",
      "insiderTip": "Located 10 km from Varanasi; the sacred site where Gautama Buddha preached his first sermon after attaining enlightenment."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Sacred Ganges Dawn, Kashi Vishwanath & Evening Maha Aarti",
      "slots": [
        {
          "period": "Morning (05:30 - 09:30)",
          "activity": "Subah-e-Banaras Dawn Boat Ride from Assi Ghat",
          "description": "Glide across the Ganges at sunrise listening to morning temple bells, watching pilgrims perform Surya Namaskar and prayers.",
          "cost": "₹400"
        },
        {
          "period": "Afternoon (11:00 - 15:00)",
          "activity": "Kashi Vishwanath Corridor & Old Varanasi Alleys (Galies)",
          "description": "Visit the newly restored golden temple dedicated to Lord Shiva, then navigate labyrinthine stone alleys filled with hidden shrines.",
          "cost": "Free"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Dashashwamedh Ghat Grand Ganga Aarti from Boat",
          "description": "Experience the world-renowned ritual with chanting, incense clouds, ringing bells, and thousands of floating flower oil lamps on the water.",
          "cost": "₹250"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Famous Banarasi Street Food & Blue Lassi Tasting",
          "description": "Taste Tamatar Chaat (spiced tomato-potato mash), crispy Kachori Sabzi, Malaiyo milk froth, and creamy pomegranate lassi.",
          "cost": "₹200"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Buddhist Sarnath, Silk Weavers & Heritage Palaces",
      "slots": [
        {
          "period": "Morning (08:30 - 12:30)",
          "activity": "Excursion to Sarnath: Dhamek Stupa & Ashoka Lion Capital",
          "description": "Tour the ancient 5th-century cylindrical stupa, Buddhist monastery ruins, and see India's national emblem at the archaeological museum.",
          "cost": "₹30"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Banarasi Silk Weaving Workshop in Madanpura",
          "description": "Watch master Muslim weavers handcraft opulent pure silk bridal sarees with intricate gold and silver Zari brocade.",
          "cost": "Free"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Sunset from Chet Singh Fort & Tulsi Ghat Wrestling Akhada",
          "description": "Watch traditional mud wrestling (Kushti) practiced by wrestlers at sunrise/sunset beside historic fortress walls.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Rooftop Riverside Dinner overlooking the Ghats",
          "description": "Savor traditional vegetarian Baati Chokha, Thali, and authentic Banarasi Meetha Paan coated with silver leaf.",
          "cost": "₹350"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,000 - ₹1,500 / day (ghat view guesthouses + local street chaat + shared autos ₹20)",
    "midRange": "₹3,000 - ₹5,000 / day (heritage Havelis on the river like BrijRama Palace + private rowboat guide)",
    "luxury": "₹18,000+ / day (BrijRama Palace / Taj Nadesar Palace with private Ganga boat excursions)"
  },
  "localTips": [
    "Photography is strictly PROHIBITED at Manikarnika and Harishchandra burning ghats out of deep respect for grieving families; never take photos.",
    "Be wary of touts claiming they need donations for cremations of the poor; politely decline and walk away.",
    "Varanasi's inner galies (alleyways) are too narrow for vehicles; wear comfortable walking shoes with good grip."
  ]
},

  shimla: {
  "destination": "Shimla",
  "country": "India",
  "tagline": "The British Raj summer capital: colonial Tudor architecture, pedestrian Mall Road promenades, and snowy Himalayan panoramas.",
  "bestTimeToVisit": "October to February for snowfall and ice skating; March to June for blooming rhododendrons and refreshing mountain air.",
  "dailyBudgetUSD": 38,
  "topAttractions": [
    {
      "name": "The Ridge & Neo-Gothic Christ Church (1857)",
      "fee": "Free",
      "insiderTip": "The open-air cultural square in the heart of Shimla with unobstructed views of the snow-clad Shivalik mountain ranges."
    },
    {
      "name": "Kalka-Shimla Toy Train (UNESCO World Heritage)",
      "fee": "₹300 - ₹500",
      "insiderTip": "A 96-km historic narrow-gauge marvel traversing 102 tunnels, 864 bridges, and 919 mountain hairpin curves through pine forests."
    },
    {
      "name": "Jakhu Temple (108-ft Hanuman Statue)",
      "fee": "Free / Ropeway ₹500",
      "insiderTip": "Perched on Shimla's highest peak (8,050 ft); take the modern Jakhu Ropeway cable car to avoid the steep hike and keep sunglasses safe from monkeys."
    },
    {
      "name": "Viceregal Lodge & Indian Institute of Advanced Study",
      "fee": "₹50 (Indians) / ₹200 (Intl)",
      "insiderTip": "Grand Jacobethan Scottish baronial castle where historic negotiations for India's Independence and Partition took place."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Colonial Shimla: The Ridge, Christ Church & Jakhu Peak",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "The Ridge, Christ Church & Scandal Point",
          "description": "Stroll past the yellow neo-Gothic church with stained glass windows depicting faith, hope, and charity, into Scandal Point.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Jakhu Ropeway Cable Car to Hanuman Temple (8,050 ft)",
          "description": "Soar above towering deodar pine trees to the colossal 108-foot saffron statue of Lord Hanuman on Shimla's summit.",
          "cost": "₹500"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Pedestrian Mall Road Stroll & Gaiety Theatre",
          "description": "Walk the car-free colonial shopping promenade, browse Himachal state handloom emporiums, and admire Victorian theater architecture.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Himachali Cuisine & Hot Chocolate at Wake & Bake Cafe",
          "description": "Feast on wood-fired pizzas, Himachali mutton curry, and homemade crepes overlooking the illuminated town.",
          "cost": "₹400"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Viceregal Lodge, Chadwick Falls & Kufri Meadows",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Viceregal Lodge (Rashtrapati Niwas) Tour",
          "description": "Walk through teak-paneled historic ballrooms, the historic Partition table, and sprawling manicured English rose gardens.",
          "cost": "₹50"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Excursion to Kufri & Himalayan Nature Park",
          "description": "Head to the high-altitude meadow (8,600 ft) for pony rides through pine forests and spotting Himalayan monal birds.",
          "cost": "₹350"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Lakkar Bazaar Wooden Handicrafts Shopping",
          "description": "Browse artisan shops for hand-carved walking sticks, walnut wood bowls, and taste hot Chhole Kulche.",
          "cost": "₹150"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Heritage Dining at Cecil Restaurant or Baljees",
          "description": "Dine on traditional Gulab Jamun, Himachali Dham, and roasted chicken in an elegant Raj-era dining hall.",
          "cost": "₹550"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,500 - ₹2,200 / day (budget guesthouses on Circular Road + local HRTC buses + dhaba thalis)",
    "midRange": "₹3,800 - ₹6,000 / day (heritage Mall Road hotel + private taxi to Kufri + ropeway rides)",
    "luxury": "₹16,000+ / day (The Oberoi Cecil or Wildflower Hall with private heated indoor pools and pine views)"
  },
  "localTips": [
    "Vehicles are strictly BANNED on Mall Road and The Ridge; use the public HP Tourism lift (only ₹20) from Cart Road to reach Mall Road effortlessly.",
    "Shimla monkeys are notorious thieves; secure spectacles, sunglasses, cameras, and food inside zipped bags.",
    "Book Kalka-Shimla Toy Train tickets on IRCTC up to 120 days in advance; morning Shivalik Deluxe Express is the most scenic."
  ]
},
};
