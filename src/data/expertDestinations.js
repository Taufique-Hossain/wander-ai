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

  andaman: {
  "destination": "Andaman & Nicobar Islands",
  "country": "India",
  "tagline": "Tropical archipelago paradise of turquoise coral reefs, powdery white sands, and colonial freedom history.",
  "bestTimeToVisit": "October to May for calm azure seas, excellent scuba diving visibility, and sunny island days.",
  "dailyBudgetUSD": 55,
  "topAttractions": [
    {
      "name": "Radhanagar Beach (Havelock / Swaraj Dweep)",
      "fee": "Free",
      "insiderTip": "Voted Asia's best beach by Time Magazine; stay until 05:45 PM for an unforgettable crimson sunset over the Bay of Bengal."
    },
    {
      "name": "Cellular Jail National Memorial & Light Show",
      "fee": "₹30 / ₹150 (Light Show)",
      "insiderTip": "Book evening Hindi/English Light & Sound tickets in advance; walk the gallows and Veer Savarkar's solitary cell."
    },
    {
      "name": "Elephant Beach Coral Reef Snorkeling",
      "fee": "Speedboat ₹1,000 / Snorkel ₹500",
      "insiderTip": "Reach via a 20-minute speedboat from Havelock jetty or a 2-km guided trek through the mangrove jungle; spot parrotfish and sea turtles."
    },
    {
      "name": "Ross Island (Netaji Subhash Chandra Bose Dweep)",
      "fee": "₹50 (Ferry ₹400)",
      "insiderTip": "Historic British administrative headquarters abandoned to nature; deer and peacocks roam among century-old banyan root ruins."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Port Blair Heritage: Cellular Jail & Corbyn's Cove",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Cellular Jail Historical Tour & Museum",
          "description": "Walk the seven-pronged panopticon prison where Indian freedom fighters endured solitary confinement; visit the central watchtower.",
          "cost": "₹30"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Corbyn's Cove Beach & Coastal Drive",
          "description": "Relax on the curved coconut-palm beach, take an optional jet ski ride, and enjoy fresh tender coconut water.",
          "cost": "₹400"
        },
        {
          "period": "Evening (17:15 - 19:30)",
          "activity": "Cellular Jail Light and Sound Show",
          "description": "Emotional narrative of India's heroic struggle for independence narrated by an ancient Peepal tree with dramatic illumination.",
          "cost": "₹150"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Fresh Island Seafood Feast at New Lighthouse Restaurant",
          "description": "Feast on fresh grilled lobster, butter garlic crab, tandoori tiger prawns, and fish curry overlooking the harbor.",
          "cost": "₹750"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Catamaran Cruise to Havelock & Radhanagar Sunset",
      "slots": [
        {
          "period": "Morning (07:30 - 11:30)",
          "activity": "High-Speed Catamaran Cruise (Makruzz/Nautika)",
          "description": "Sail 90 minutes across the open turquoise Bay of Bengal from Port Blair to Havelock Island (Swaraj Dweep).",
          "cost": "₹1,400"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Kalapathar Beach & Island Exploration",
          "description": "Admire contrasting black volcanic boulders set against bright aqua waters and fine white sand fringed by dense tropical rainforest.",
          "cost": "Free"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Radhanagar Beach Sunset Walk (Beach No. 7)",
          "description": "Walk barefoot along miles of silky white sand as waves crash in rhythmic turquoise surf under a fiery purple sunset.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Beach Shack Candlelight Dinner at Something Different",
          "description": "Dine on wood-fired thin-crust pizza and grilled catch-of-the-day surrounded by beach decor and sea breezes.",
          "cost": "₹650"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Elephant Beach Coral Reefs & Water Sports",
      "slots": [
        {
          "period": "Morning (08:00 - 12:30)",
          "activity": "Speedboat to Elephant Beach & Guided Snorkeling",
          "description": "Explore vibrant live brain coral formations, clownfish, and sea anemones in warm shallow waters.",
          "cost": "₹1,200"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Undersea Sea Walk / Scuba Diving at Nemo Reef",
          "description": "Walk on the ocean floor wearing an air-supplied helmet surrounded by colorful tropical fish schools.",
          "cost": "₹2,500"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Sunset Cafe Chilling at Havelock Jetty",
          "description": "Sip iced coconut coffee and tropical smoothies while watching fishing boats return to the dock.",
          "cost": "₹200"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Night Kayaking among Bioluminescent Waters",
          "description": "Paddle into mangrove estuaries on a dark night where bioluminescent plankton glow blue with every paddle stroke.",
          "cost": "₹1,800"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹2,200 - ₹3,200 / day (government ferry + bamboo beach huts + local Bengali dhabas)",
    "midRange": "₹5,500 - ₹9,000 / day (private catamaran + AC beachfront resort + water sports)",
    "luxury": "₹22,000+ / day (Taj Exotica Resort & Spa Radhanagar or Barefoot at Havelock + private speedboats)"
  },
  "localTips": [
    "Book private catamaran tickets (Makruzz/Nautika) at least 2 weeks in advance during peak season (Nov-Feb).",
    "Cell phone connectivity on Havelock and Neil islands is limited to BSNL and Airtel; expect patchy internet and enjoy an offline vacation.",
    "Strict government environmental laws: collecting corals, shells, or sea life from beaches is a punishable offense."
  ]
},

  udaipur: {
  "destination": "Udaipur",
  "country": "India",
  "tagline": "The City of Lakes and Venice of the East: floating marble palaces, historic Mewar courtyards, and sunset boat cruises.",
  "bestTimeToVisit": "October to March for sunny daytime strolls and pleasant lake breezes.",
  "dailyBudgetUSD": 40,
  "topAttractions": [
    {
      "name": "City Palace Complex & Crystal Gallery",
      "fee": "₹330 / ₹650 (Museum + Crystal)",
      "insiderTip": "Rajasthan's largest palace complex; hire an official Mewar guide to see the Mor Chowk (peacock courtyard) in detail."
    },
    {
      "name": "Lake Pichola Sunset Boat Cruise to Jag Mandir",
      "fee": "₹450 / ₹800 (Sunset Cruise)",
      "insiderTip": "Take the 05:00 PM sunset cruise from City Palace jetty to explore the island palace where Shah Jahan once took refuge."
    },
    {
      "name": "Bagore ki Haveli & Dharohar Folk Dance",
      "fee": "₹100 (Entry) + ₹100 (Dance Show)",
      "insiderTip": "Queue at 06:15 PM at Gangaur Ghat for the 07:00 PM performance featuring fire dancers, puppets, and 11-pot balancing stunts."
    },
    {
      "name": "Sajjangarh Monsoon Palace Sunset",
      "fee": "₹110 (Entry) + ₹300 (Shared Jeep)",
      "insiderTip": "Perched 3,100 ft atop the Aravalli hills overlooking all five lakes; reach by 05:15 PM for the best sunset panorama."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "City Palace Heritage, Lake Pichola & Dharohar Dance",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "City Palace of Udaipur & Mardana Mahal",
          "description": "Wander through marble balconies, inlaid mirror chambers, and silver galleries overlooking Lake Pichola.",
          "cost": "₹350"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Jagdish Temple & Old City Silver Bazaars",
          "description": "Admire intricate three-story carved Hindu temple architecture, followed by browsing silver jewelry and miniature art on Jagdish Chowk.",
          "cost": "₹100"
        },
        {
          "period": "Evening (17:00 - 18:30)",
          "activity": "Lake Pichola Sunset Boat Cruise past Taj Lake Palace",
          "description": "Glide across the serene waters as the white marble palaces turn gold and pink in the twilight sun.",
          "cost": "₹500"
        },
        {
          "period": "Night (19:00 - 21:30)",
          "activity": "Bagore ki Haveli Dharohar Dance & Ambrai Dinner",
          "description": "Watch the famous Chari fire dance, then dine on rooftop Mewari Laal Maas with direct views of the illuminated City Palace.",
          "cost": "₹650"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Saheliyon ki Bari, Fatehsagar & Monsoon Palace",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Saheliyon ki Bari (Courtyard of the Maids)",
          "description": "Stroll among lush lawns, marble elephant fountains, and lotus pools designed for royal princesses.",
          "cost": "₹50"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Fatehsagar Lake Speedboating & Nehru Park Island",
          "description": "Speedboat across the scenic lake to the garden island, followed by cold Kulhad Coffee at Bombay Market.",
          "cost": "₹300"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Monsoon Palace (Sajjangarh) Mountain Sunset",
          "description": "Ascend the winding hill sanctuary road to the 19th-century white palace for a 360-degree sunset over the lakes and Aravallis.",
          "cost": "₹400"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Authentic Dal Baati Churma at Krishna Dal Bati Restro",
          "description": "Indulge in traditional baatis soaked in pure desi ghee with spicy Panchmel Dal, churma, and garlic chutney.",
          "cost": "₹350"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Karni Mata Ropeway, Shilpgram & Gangaur Ghat",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Mansapurna Karni Mata Ropeway Cable Car",
          "description": "Ride the gondola to Machhala Hill for an aerial panoramic perspective of Udaipur's palaces and mountain ranges.",
          "cost": "₹150"
        },
        {
          "period": "Afternoon (12:30 - 16:00)",
          "activity": "Shilpgram Rural Arts and Crafts Complex",
          "description": "Explore traditional desert huts from Rajasthan, Gujarat, and Goa; meet master weavers, potters, and musicians.",
          "cost": "₹50"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Gangaur Ghat Sunset & Acoustic Sitar by the Water",
          "description": "Sit on the stone ghat steps by the water listening to folk musicians as pigeons flock and temple bells chime.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Candlelit Lakeside Dining at Upre by 1559 AD",
          "description": "Dine in private heritage cabanas overlooking the glistening Lake Pichola skyline with royal Rajasthani delicacies.",
          "cost": "₹800"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,500 - ₹2,200 / day (old city ghat hostels + street kachoris + walking tours)",
    "midRange": "₹4,000 - ₹6,500 / day (lake-view Haveli boutique hotels + boat rides + rooftop dining)",
    "luxury": "₹25,000+ / day (Taj Lake Palace floating on Pichola or The Leela Palace + private royal boat transfers)"
  },
  "localTips": [
    "The best photography spots are Ambrai Ghat and Gangaur Ghat at sunrise when the water is mirror-still and devoid of crowds.",
    "Most streets inside the old city around Jagdish Chowk are extremely narrow; rely on auto-rickshaws or walking rather than booking cabs.",
    "Ask for a painting demonstration before purchasing Mewari miniature art to verify that real squirrel-hair brushes and stone colors are used."
  ]
},

  rishikesh: {
  "destination": "Rishikesh & Haridwar",
  "country": "India",
  "tagline": "The Yoga Capital of the World: foaming white water Ganga rapids, sacred Himalayan ghats, and evening fire ceremonies.",
  "bestTimeToVisit": "September to November and February to May for adventure rafting and pleasant spiritual retreats.",
  "dailyBudgetUSD": 35,
  "topAttractions": [
    {
      "name": "Parmarth Niketan & Triveni Ghat Ganga Aarti",
      "fee": "Free",
      "insiderTip": "Attend Parmarth Niketan at 05:30 PM for Vedic singing, fire Havana, and devotional kirtan led by ashram students."
    },
    {
      "name": "White Water Rafting (Shivpuri to Rishikesh)",
      "fee": "₹600 - ₹1,000 (16 km)",
      "insiderTip": "Grade III rapids including 'Roller Coaster' and 'Golf Course'; always wear the provided life jacket and helmet."
    },
    {
      "name": "The Beatles Ashram (Chaurasi Kutia)",
      "fee": "₹150 (Indians) / ₹600 (Foreigners)",
      "insiderTip": "Where the Beatles wrote the White Album in 1968; explore meditation stone igloos and Beatles Cathedral graffiti art."
    },
    {
      "name": "Har Ki Pauri Sacred Ghat (Haridwar)",
      "fee": "Free",
      "insiderTip": "The most sacred spot on the Ganges where nectar fell; attend the grand evening Maha Aarti with thousands of floating marigold lamps."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Sacred Rishikesh: Suspension Bridges, Beatles Ashram & Aarti",
      "slots": [
        {
          "period": "Morning (07:00 - 10:30)",
          "activity": "Sunrise Yoga by the Ganga & Ram Jhula Walk",
          "description": "Participate in an open-air Hatha yoga session on the white river sand, then cross the iconic suspension footbridge.",
          "cost": "₹200"
        },
        {
          "period": "Afternoon (11:00 - 15:00)",
          "activity": "The Beatles Ashram (Maharishi Mahesh Yogi)",
          "description": "Wander through tranquil forested grounds, explore dome meditation pods, and photograph murals in the Beatles Hall.",
          "cost": "₹150"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Parmarth Niketan Ashram Sunset Ganga Aarti",
          "description": "Join holy men and devotees on the marble ghat as huge brass fire lamps illuminate the twilight Ganges.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Organic Ayurvedic Feast at Beatles Cafe / Little Buddha",
          "description": "Dine on wood-fired healthy bowls, avocado toast, herbal chai, and banana nut pancakes overlooking the moonlit river.",
          "cost": "₹350"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Shivpuri White Water Rafting & Neer Garh Waterfall",
      "slots": [
        {
          "period": "Morning (08:30 - 13:00)",
          "activity": "16-km White Water Rafting & Cliff Jumping",
          "description": "Raft thrilling rapids from Shivpuri past rocky Himalayan gorges, jump off a 20-ft cliff into the emerald river, and body-surf.",
          "cost": "₹800"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Neer Garh Waterfall Jungle Trek",
          "description": "Hike through lush terraced hills along a mountain stream to two cascading turquoise pools ideal for a refreshing dip.",
          "cost": "₹50"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Triveni Ghat Evening Aarti & Holy Diya Floating",
          "description": "Rishikesh's biggest daily river ritual with temple trumpets and chanting; release a leaf boat with burning camphor.",
          "cost": "₹50"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Traditional Garhwali Thali at Chotiwala (Est. 1958)",
          "description": "Savor traditional mountain dishes: Kaphuli, Jhangora ki Kheer, Dal Tadka, and hot tandoori rotis.",
          "cost": "₹300"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Spiritual Haridwar: Mansa Devi & Har Ki Pauri",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Scenic Drive to Haridwar & Mansa Devi Cable Car",
          "description": "Take the Udankhatola ropeway up Bilwa Parvat for sweeping views of Haridwar city and the Ganges plains.",
          "cost": "₹160"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Bada Bazaar Walking Food Trail & Peda Tasting",
          "description": "Sample famous Pandit Sevaram Sharma rabri, hot aloo puri, and authentic Mathura-style pedas in the ancient bazaar.",
          "cost": "₹200"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Maha Ganga Aarti at Har Ki Pauri ('Footstep of God')",
          "description": "Stand amidst thousands of devotees chanting in unison as priests swing flaming multi-tiered bronze candelabras.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Pure Vegetarian Feast at Hoshiyarpuri Haridwar",
          "description": "Historic 1935 Punjabi eatery famous for Dal Makhani, Shahi Paneer, and hot Gulab Jamun.",
          "cost": "₹350"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,200 - ₹1,800 / day (ashram stays / Tapovan hostels + satvik meals + shared autos ₹20)",
    "midRange": "₹3,500 - ₹6,000 / day (river-view boutique resort + private rafting + guided temple tours)",
    "luxury": "₹20,000+ / day (Ananda in the Himalayas wellness retreat or Taj Rishikesh Resort & Spa)"
  },
  "localTips": [
    "Rishikesh and Haridwar are strictly holy vegetarian and alcohol-free cities by law; enjoy fresh fruit juices and herbal teas.",
    "Rafting is officially closed during monsoon months (July to mid-September) for river safety.",
    "Cross between Tapovan and Swarg Ashram easily via the new Janki Jhula suspension bridge if Ram Jhula is crowded."
  ]
},

  meghalaya: {
  "destination": "Meghalaya (Shillong & Cherrapunji)",
  "country": "India",
  "tagline": "The Abode of the Clouds: ancient living root bridges, thundering waterfalls, crystal transparent rivers, and sacred forests.",
  "bestTimeToVisit": "October to April for clear sunny skies and crystal waters; June to September for roaring monsoon waterfalls.",
  "dailyBudgetUSD": 42,
  "topAttractions": [
    {
      "name": "Double Decker Living Root Bridge (Nongriat)",
      "fee": "₹50 (Entry) + ₹100 Guide",
      "insiderTip": "Requires climbing 3,500 stone steps down and up; start from Tyrna village at 07:00 AM and carry trekking poles."
    },
    {
      "name": "Nohkalikai Falls (India's Tallest Plunge Fall, 1,115 ft)",
      "fee": "₹20",
      "insiderTip": "Visit between 10:00 AM and 01:00 PM before afternoon clouds envelop the gorge; admire the turquoise water pool at the base."
    },
    {
      "name": "Dawki Umngot River Crystal Boat Ride",
      "fee": "₹800 - ₹1,000 / boat",
      "insiderTip": "Best experienced from November to March when the water is so clear that boats appear to be floating on air; view fish swimming 15 ft below."
    },
    {
      "name": "Mawlynnong Village ('Cleanest Village in Asia')",
      "fee": "Free",
      "insiderTip": "Notice woven bamboo dustbins ('Khoh') outside every house; climb the 85-ft bamboo skywalk for views into the Bangladesh plains."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Shillong: Scotland of the East & Umiam Lake",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Umiam Lake (Barapani) & Water Sports",
          "description": "Marvel at the vast turquoise reservoir flanked by pine hills, with optional kayaking or speedboat rides.",
          "cost": "₹300"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Don Bosco Indigenous Museum & Lady Hydari Park",
          "description": "Explore Asia's largest cultural museum depicting the lifestyle and costumes of Northeast India's tribes across 7 floors.",
          "cost": "₹100"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Laitlum Canyons Sunset Panorama",
          "description": "Stand at the edge of the deep green amphitheater gorge as sunset fog rolls over Khasi tribal villages below.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Police Bazar Food Trail & Khasi Jadoh Feast",
          "description": "Taste authentic Jadoh (rice cooked with aromatic meat herbs), Dohkhlieh salad, and hot pork/chicken momos at Trattoria.",
          "cost": "₹350"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Cherrapunji (Sohra): Waterfalls & Limestone Caves",
      "slots": [
        {
          "period": "Morning (08:00 - 12:00)",
          "activity": "Mawkdok Dympep Valley Zipline & Nohkalikai Falls",
          "description": "Soar across the 2,600-ft valley cable, then stand at the viewpoint of India's tallest 1,115-ft single plunge waterfall.",
          "cost": "₹800"
        },
        {
          "period": "Afternoon (12:30 - 16:00)",
          "activity": "Mawsmai Cave & Seven Sisters Falls",
          "description": "Squeeze through illuminated natural limestone caves filled with ancient stalactites and fossils.",
          "cost": "₹50"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Eco Park Sunset over the Bangladesh Plains",
          "description": "Walk the clifftop park where multiple waterfalls originate and plunge down the mountain border.",
          "cost": "₹30"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Traditional Khasi Dinner at Sohra Cafe",
          "description": "Savor smoked pork with bamboo shoots, red mountain rice, and fresh ginger tea by an open fireplace.",
          "cost": "₹400"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Trek to Double Decker Living Root Bridge (Nongriat)",
      "slots": [
        {
          "period": "Morning (07:00 - 12:00)",
          "activity": "Descent of 3,500 Steps through Subtropical Jungle",
          "description": "Hike down from Tyrna village across thrilling single-wire suspension bridges to the 250-year-old living ficus root bridges.",
          "cost": "₹100"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Rainbow Falls & Natural Turquoise Rock Pools",
          "description": "Trek an additional 1.5 hours deeper into the forest to swim in crystalline natural turquoise lagoons beneath a perpetual rainbow.",
          "cost": "Free"
        },
        {
          "period": "Evening (16:00 - 19:30)",
          "activity": "Ascent back to Tyrna / Overnight Nongriat Homestay",
          "description": "Pace yourself on the stone staircase ascent surrounded by singing cicadas and rare butterfly species.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Homestay Organic Mountain Dinner",
          "description": "Hearty local dinner of fresh garden vegetables, dal, country eggs, and warm lemongrass tea.",
          "cost": "₹250"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,800 - ₹2,500 / day (shared Sumos from Shillong + village homestays + local Khasi meals)",
    "midRange": "₹4,500 - ₹7,500 / day (private Bolero/Innova + resort in Sohra + guided root bridge hikes)",
    "luxury": "₹16,000+ / day (Ri Kynjai Resort at Umiam Lake or Polo Orchid Resort Cherrapunji)"
  },
  "localTips": [
    "Carry good waterproof shoes with ankle support; living root bridge treks have thousands of damp mossy steps.",
    "Meghalaya is a matrilineal society where lineage and heritage pass through the youngest daughter; respect local customs.",
    "The best months for transparent glass-like water in Dawki and Shnongpdeng are November through February; during monsoon the river turns brown."
  ]
},

  amritsar: {
  "destination": "Amritsar",
  "country": "India",
  "tagline": "The Spiritual Heart of Punjab: the radiant Golden Temple, legendary Langar community kitchen, and patriotic pride.",
  "bestTimeToVisit": "October to March for pleasant sunny days and festive Diwali/Baisakhi celebrations.",
  "dailyBudgetUSD": 35,
  "topAttractions": [
    {
      "name": "Sri Harmandir Sahib (The Golden Temple)",
      "fee": "Free (24/7)",
      "insiderTip": "Visit at 04:30 AM for the Palki Sahib morning ceremony, or 10:00 PM when the illuminated gold reflects in the sacred Amrit Sarovar pool."
    },
    {
      "name": "Guru Ramdas Langar Hall",
      "fee": "Free (Donations accepted)",
      "insiderTip": "The world's largest community kitchen serves up to 100,000 free meals daily regardless of caste or creed; volunteer to roll rotis."
    },
    {
      "name": "Wagah Border Beating Retreat Ceremony",
      "fee": "Free",
      "insiderTip": "Reach the stadium gates by 03:00 PM (ceremony starts at 04:30 PM in winter / 05:00 PM in summer); carry only your phone and wallet (no bags allowed)."
    },
    {
      "name": "Jallianwala Bagh National Memorial",
      "fee": "Free",
      "insiderTip": "Located 2 minutes from the Golden Temple; see the preserved bullet marks on the brick walls and the historic Martyrs' Well."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "The Golden Temple, Langar & Jallianwala Bagh",
      "slots": [
        {
          "period": "Morning (08:30 - 12:30)",
          "activity": "Golden Temple Sanctum Sanctorum & Amrit Sarovar",
          "description": "Cover your head, wash feet at the threshold, walk the marble Parikrama, and listen to continuous live Gurbani Kirtan.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 15:30)",
          "activity": "Langar Hall Experience & Volunteering",
          "description": "Sit in cross-legged rows (Pangat) enjoying hot rotis, dal, and kheer; join the dishwashing or vegetable chopping seva.",
          "cost": "Free"
        },
        {
          "period": "Evening (16:00 - 18:30)",
          "activity": "Jallianwala Bagh & Partition Museum Walk",
          "description": "Pay homage at the flame monument commemorating the 1919 massacre, then explore poignant audio recordings at Town Hall.",
          "cost": "₹10"
        },
        {
          "period": "Night (19:30 - 22:00)",
          "activity": "Kesar Da Dhaba (Est. 1916) & Golden Temple Night View",
          "description": "Feast on 12-hour slow-cooked Dal Makhani with Lachha Paratha and Firni, then view the glittering golden temple lit at night.",
          "cost": "₹350"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Wagah Border Patriotic Ceremony & Street Food Trail",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Amritsari Kulcha Breakfast at Bhai Kulwant Singh",
          "description": "Taste authentic crispy tandoori stuffed Potato-Paneer Kulchas dripping with desi ghee, served with tangy chhole and onions.",
          "cost": "₹120"
        },
        {
          "period": "Afternoon (13:00 - 14:30)",
          "activity": "Gobindgarh Fort & Punjab Heritage Museum",
          "description": "Explore the 18th-century fortress of Maharaja Ranjit Singh, see the Toshakhana treasury, and watch 7D martial shows.",
          "cost": "₹150"
        },
        {
          "period": "Evening (15:00 - 19:00)",
          "activity": "Wagah Border Indo-Pak Beating Retreat Parade",
          "description": "Join 20,000 spectators waving tricolors as BSF soldiers perform high-stepping military drills to lower the national flags.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Makhan Fish & Ahuja Creamy Lassi Food Trail",
          "description": "Savor Amritsari fried fish seasoned with carom seeds (Ajwain), followed by thick malai-topped sweet lassi at Ahuja Lassi.",
          "cost": "₹400"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,000 - ₹1,500 / day (temple Sarai guesthouses + free langar + shared autos ₹30)",
    "midRange": "₹3,000 - ₹5,000 / day (heritage hotel near Golden Temple + private cab to Wagah Border + food tours)",
    "luxury": "₹14,000+ / day (Taj Swarna Amritsar or Hyatt Regency + VIP Wagah Border seating)"
  },
  "localTips": [
    "Head covering is mandatory for everyone (men and women) inside the Golden Temple complex; carry a handkerchief or buy a scarf at the entrance for ₹10.",
    "Leave all backpacks, cigarettes, and lighters at your hotel when visiting Wagah Border; security allows ONLY phones and wallets inside.",
    "The Golden Temple Langar is 100% free and open 24/7; it is one of the most humbling and moving human experiences on Earth."
  ]
},

  ooty: {
  "destination": "Ooty & Coonoor",
  "country": "India",
  "tagline": "The Queen of Hill Stations in the Nilgiris: heritage steam toy trains, fragrant tea plantations, and cool eucalyptus heights.",
  "bestTimeToVisit": "October to June for pleasant weather; April-May for the annual Ooty Flower Show.",
  "dailyBudgetUSD": 38,
  "topAttractions": [
    {
      "name": "Nilgiri Mountain Railway (UNESCO Toy Train)",
      "fee": "₹200 - ₹500",
      "insiderTip": "Book on IRCTC 90 days ahead; the 2-hour steam train ride between Ooty and Coonoor crosses 16 tunnels and dramatic valley bridges."
    },
    {
      "name": "Government Botanical Gardens (1848)",
      "fee": "₹50",
      "insiderTip": "Spread over 55 terraced acres featuring a 20-million-year-old fossilized tree trunk and over 1,000 exotic floral species."
    },
    {
      "name": "Doddabetta Peak (8,652 ft)",
      "fee": "₹30",
      "insiderTip": "The highest summit in the Nilgiri hills; use the telescope house for panoramic views of Chamundi Hills and Coimbatore plains."
    },
    {
      "name": "Dolphin's Nose Viewpoint (Coonoor)",
      "fee": "₹20",
      "insiderTip": "A giant natural rock formation resembling a dolphin's nose with a dramatic straight drop into Catherine Falls below."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Colonial Ooty: Botanical Gardens, Ooty Lake & Doddabetta",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Government Botanical Gardens & Italian Garden",
          "description": "Walk among centuries-old cork oaks, ferns, glasshouse orchids, and manicured lawns dating back to the British Raj.",
          "cost": "₹50"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Doddabetta Peak & Nilgiri Tea Factory",
          "description": "Ascend to the highest summit in Tamil Nadu, followed by visiting the tea museum to watch CTC tea manufacturing.",
          "cost": "₹40"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Ooty Lake Boating & Deer Park",
          "description": "Rent a paddle boat or motorboat on the artificial lake built by John Sullivan in 1824, surrounded by eucalyptus groves.",
          "cost": "₹250"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Commercial Road Homemade Chocolate & Toda Embroidery Trail",
          "description": "Sample handmade rum-and-raisin fudge, dark chocolates, and dine on hot South Indian dosas and filter coffee.",
          "cost": "₹300"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "UNESCO Toy Train to Coonoor & Tea Plantations",
      "slots": [
        {
          "period": "Morning (08:30 - 11:30)",
          "activity": "Nilgiri Mountain Railway Steam Train Ride",
          "description": "Chug through the mist on the historic meter-gauge rack railway past steep cliffs, waterfalls, and terraced tea estates.",
          "cost": "₹205"
        },
        {
          "period": "Afternoon (12:00 - 15:30)",
          "activity": "Sim's Park & Highfield Tea Estate (Coonoor)",
          "description": "Explore the 1874 botanical garden laid out in natural ravine style, then taste fresh green tea and eucalyptus oil.",
          "cost": "₹50"
        },
        {
          "period": "Evening (16:00 - 18:30)",
          "activity": "Dolphin's Nose & Lamb's Rock Sunset",
          "description": "Gaze over sheer ravines with cascading Catherine Falls in the distance as evening mist creeps up the valley.",
          "cost": "₹30"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Cozy Anglo-Indian Dining at Earl's Secret / Savoy",
          "description": "Dine on Shepherd's Pie, Nilgiri mutton kurma, and warm chocolate brownies inside a 180-year-old British colonial mansion.",
          "cost": "₹650"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,400 - ₹2,000 / day (budget hill lodges + local government buses ₹15 + bakery snacks)",
    "midRange": "₹3,800 - ₹6,000 / day (colonial heritage bungalows + private cab + toy train ride)",
    "luxury": "₹18,000+ / day (Savoy - IHCL SeleQtions or Fortune Resort Sullivan Court)"
  },
  "localTips": [
    "Purchase genuine Nilgiri tea, eucalyptus oil, and homemade chocolates from government-approved Co-operative stores on Charing Cross.",
    "Carry light woolens even in summer; evening temperatures can drop quickly to 12°C in the high altitudes.",
    "If toy train tickets are waitlisted, unreserved general compartment tickets go on sale at Ooty station 1 hour before departure."
  ]
},

  coorg: {
  "destination": "Coorg (Kodagu)",
  "country": "India",
  "tagline": "The Scotland of India: lush coffee and cardamom estates, misty Brahmagiri peaks, and unique Kodava warrior culture.",
  "bestTimeToVisit": "October to April for coffee harvesting season and outdoor plantation trekking.",
  "dailyBudgetUSD": 40,
  "topAttractions": [
    {
      "name": "Namdroling Monastery (Tibetan Golden Temple, Bylakuppe)",
      "fee": "Free",
      "insiderTip": "Home to 5,000 monks and three 40-ft gilded statues of Buddha; attend the hypnotic 01:00 PM gong and horn prayer ritual."
    },
    {
      "name": "Abbey Falls (Abbi Falls)",
      "fee": "₹15",
      "insiderTip": "Tucked inside private coffee and spice plantations; walk down the hanging bridge for photos of the roaring cascade."
    },
    {
      "name": "Dubare Elephant Camp (Cauvery River)",
      "fee": "₹100 (Ferry ₹30 / Bathing ₹200)",
      "insiderTip": "Arrive at 08:30 AM to cross the river and participate in scrubbing and bathing retired timber elephants."
    },
    {
      "name": "Raja's Seat (Madikeri)",
      "fee": "₹10",
      "insiderTip": "A seasonal garden of flowers and artificial fountains where Kodagu kings watched sunset over the endless misty Western Ghats ridges."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Bylakuppe Golden Temple, Dubare Elephants & Raja's Seat",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Namdroling Tibetan Monastery (Golden Temple)",
          "description": "Admire magnificent golden statues of Amitayus, Shakyamuni, and Padmasambhava; browse Tibetan thangka art and incense.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Dubare Elephant Camp on the Cauvery River",
          "description": "Cross the rocky river, observe elephant feeding, and learn about Asiatic elephant conservation from naturalist mahouts.",
          "cost": "₹300"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Raja's Seat Sunset & Musical Fountain",
          "description": "Watch the sun dip behind layered misty mountain ridges, followed by light and musical water fountain shows.",
          "cost": "₹20"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Authentic Kodava Pandi Curry Feast at Raintree",
          "description": "Feast on iconic Coorg Pandi Curry (spiced with wild Kachampuli vinegar), Akki Roti (rice flatbread), and Kadambuttu.",
          "cost": "₹450"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Coffee Plantation Trail, Abbey Falls & Madikeri Fort",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Guided Coffee & Black Pepper Plantation Walking Tour",
          "description": "Walk through fragrant Arabica and Robusta coffee groves; learn how coffee cherries are hand-picked, pulped, and roasted.",
          "cost": "₹300"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Abbey Falls & Hanging Bridge Walk",
          "description": "Descend stone steps through dense cardamom and spice canopy to the roaring waterfall cascading into the Cauvery tributary.",
          "cost": "₹30"
        },
        {
          "period": "Evening (16:00 - 18:30)",
          "activity": "Madikeri Fort & Palace Museum",
          "description": "Explore the 17th-century stone fortress with life-sized elephant masonry, Gothic church museum, and panoramic city bastions.",
          "cost": "₹25"
        },
        {
          "period": "Night (19:00+)",
          "activity": "Coorg Honey & Filter Coffee Tasting at Friday Market",
          "description": "Sample pure unprocessed Coorg orange blossom honey, homemade passion fruit wine, and freshly ground filter coffee powder.",
          "cost": "₹250"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,400 - ₹2,000 / day (coffee estate homestays + local KSRTC buses + mess thalis)",
    "midRange": "₹3,800 - ₹6,500 / day (heritage plantation bungalow + private car + jeep safari)",
    "luxury": "₹22,000+ / day (Evolve Back Kuruba Safari Lodge or The Tamara Coorg nestled in rainforest)"
  },
  "localTips": [
    "Buy authentic Kachampuli (Coorg dark garcinia vinegar) and locally roasted Arabica coffee beans directly from estate owners.",
    "Hire an open-top 4x4 jeep to reach Mandalpatti viewpoint ('Mugilu-Pete' or Market of Clouds) for sunrise; regular sedans cannot traverse the terrain.",
    "Leeches are common in coffee plantations during monsoons; apply salt or tobacco powder to footwear before estate walks."
  ]
},

  hampi: {
  "destination": "Hampi",
  "country": "India",
  "tagline": "The UNESCO World Heritage Boulder Wonderland: majestic ruins of the 14th-century Vijayanagara Empire on the Tungabhadra River.",
  "bestTimeToVisit": "October to March for sunny days and cool breezy evenings among the boulder landscapes.",
  "dailyBudgetUSD": 35,
  "topAttractions": [
    {
      "name": "Vijaya Vittala Temple & Stone Chariot",
      "fee": "₹40 (Combined ASI ticket)",
      "insiderTip": "Featured on the ₹50 Indian currency note; inspect the granite wheels that once rotated and the 56 musical pillar shrines."
    },
    {
      "name": "Virupaksha Temple",
      "fee": "₹25",
      "insiderTip": "One of India's oldest continuously functioning temples since the 7th century; receive a blessing from the temple elephant Lakshmi."
    },
    {
      "name": "Lotus Mahal & Elephant Stables",
      "fee": "Included in ASI ticket",
      "insiderTip": "Indo-Islamic architectural synthesis featuring 11 domed chambers that once housed the royal ceremonial war elephants."
    },
    {
      "name": "Matanga Hill Sunrise Panorama",
      "fee": "Free",
      "insiderTip": "Hike up the stone steps at 05:45 AM for an epic 360-degree sunrise view over endless red granite boulders, banana plantations, and ancient ruins."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Sacred Centre: Virupaksha Temple, Hemakuta & Sunset",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Virupaksha Temple Complex & Hampi Bazaar",
          "description": "Marvel at the 160-foot gopuram, inspect the pinhole inverted image of the tower, and walk the ancient chariot bazaar.",
          "cost": "₹50"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Kadalekalu Ganesha & Sasivekalu Ganesha Monoliths",
          "description": "Admire colossal single-stone carvings of Lord Ganesha carved directly out of massive hillside granite boulders.",
          "cost": "Free"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Hemakuta Hill Sunset over Vijayanagara Temples",
          "description": "Perch on sloping stone platforms surrounded by pre-Vijayanagara triple-chambered stone shrines as dusk glows orange.",
          "cost": "Free"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Riverside Thali & Mango Tree Cafe",
          "description": "Relax on floor cushions overlooking banana groves dining on South Indian thalis, Israeli shakshuka, and fresh banana lassi.",
          "cost": "₹300"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Royal Centre: Vittala Stone Chariot & Elephant Stables",
      "slots": [
        {
          "period": "Morning (08:00 - 12:00)",
          "activity": "Vijaya Vittala Temple & Musical Pillars",
          "description": "Ride the battery buggy or walk the old stone road; marvel at the world-famous Stone Chariot dedicated to Garuda.",
          "cost": "₹40"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Zenana Enclosure, Lotus Mahal & Elephant Stables",
          "description": "Explore the royal women's quarters, the tiered stepwell (Pushkarani), and the grand arches of the Elephant Stables.",
          "cost": "Included"
        },
        {
          "period": "Evening (16:00 - 18:30)",
          "activity": "Coracle Boat Ride on the Tungabhadra River",
          "description": "Spin across the swirling river in a traditional round woven wicker boat past ancient carved rock shrines.",
          "cost": "₹400"
        },
        {
          "period": "Night (19:00+)",
          "activity": "Stargazing among the Ancient Boulders",
          "description": "Clear, zero-pollution night skies with crisp views of the Milky Way arching over centuries-old ruins.",
          "cost": "Free"
        }
      ]
    },
    {
      "dayNumber": 3,
      "dayTitle": "Matanga Sunrise, Anegundi & Sanapur Lake",
      "slots": [
        {
          "period": "Morning (05:45 - 09:00)",
          "activity": "Matanga Hill 360-Degree Sunrise Hike",
          "description": "Climb the highest peak in Hampi to witness the sun illuminate thousands of red boulders and the river winding into the horizon.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (11:00 - 15:30)",
          "activity": "Cross River to Anegundi ('Hippy Island') & Sanapur Lake",
          "description": "Rent a moped to cruise past emerald paddy fields to Sanapur Lake for cliff jumping and bamboo rafting.",
          "cost": "₹350"
        },
        {
          "period": "Evening (16:00 - 19:00)",
          "activity": "Anjaneya Hill (Birthplace of Lord Hanuman)",
          "description": "Climb the 575 white steps to the hilltop shrine at Kishkindha for sweeping valley twilight views.",
          "cost": "Free"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Farewell Wood-Fired Pizza & Acoustic Evening",
          "description": "Unwind at a cozy open-air boulder cafe with fresh lime soda and thin-crust pizza under fairy lights.",
          "cost": "₹350"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,200 - ₹1,800 / day (rented bicycle ₹150 + guesthouses in Kamalapur + local thalis)",
    "midRange": "₹3,500 - ₹5,500 / day (KSTDC Mayura Bhuvaneshwari or Heritage Resort + auto tour + coracle rides)",
    "luxury": "₹24,000+ / day (Evolve Back Kamalapura Palace with private stone pool villas)"
  },
  "localTips": [
    "Rent a bicycle (₹150/day) or electric moped (₹400/day) to easily explore the vast 41-square-kilometer ruins at your own pace.",
    "The single ASI entry ticket (₹40 for Indians / ₹600 for foreigners) is valid for both Vittala Temple and the Lotus Mahal/Elephant Stables on the same day.",
    "Carry a hat, sunglasses, and at least 2 liters of water; the granite boulders absorb midday heat and shade is sparse."
  ]
},

  mumbai: {
  "destination": "Mumbai",
  "country": "India",
  "tagline": "The City of Dreams: colonial Victorian Gothic architecture, the Arabian Sea Queen's Necklace, Bollywood glamour, and dynamic street life.",
  "bestTimeToVisit": "November to February for pleasant breezy coastal weather.",
  "dailyBudgetUSD": 45,
  "topAttractions": [
    {
      "name": "Gateway of India & The Taj Mahal Palace Hotel",
      "fee": "Free",
      "insiderTip": "Built in 1924 overlooking Mumbai Harbour; take photos at sunrise, then step into the Sea Lounge for high tea."
    },
    {
      "name": "Marine Drive ('Queen's Necklace')",
      "fee": "Free",
      "insiderTip": "Walk the 3.6-km C-shaped coastal promenade at dusk when street lamps illuminate the coastline like a string of pearls."
    },
    {
      "name": "Elephanta Caves (UNESCO World Heritage)",
      "fee": "₹40 (Indians) / ₹600 (Foreigners) + Ferry ₹260",
      "insiderTip": "Take the 1-hour ferry from Gateway of India; admire the colossal 20-foot three-headed Shiva Trimurti rock sculpture."
    },
    {
      "name": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
      "fee": "Free (Exterior)",
      "insiderTip": "UNESCO Victorian Gothic railway masterpiece; photograph the illuminated facade at night."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Colonial South Mumbai, Gateway of India & Marine Drive",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Gateway of India & Colaba Heritage Walk",
          "description": "Marvel at the basalt triumphal arch, view the iconic Taj Mahal Palace Hotel, and stroll past colonial buildings on Colaba Causeway.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "CSMT Railway Station & Crawford Market",
          "description": "Admire gargoyles and stained glass at CSMT, then explore the bustling 1869 fruit, spice, and pet market designed by Lockwood Kipling.",
          "cost": "Free"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Marine Drive Sunset & Girgaon Chowpatty Kulfi",
          "description": "Perch on the tetrapods as the sun sets over the Arabian Sea, then sample Pav Bhaji and Malai Kulfi at Chowpatty beach.",
          "cost": "₹250"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Heritage Parsi Dining at Britannia & Co. / Cafe Mondegar",
          "description": "Dine on legendary Berry Pulao, Sali Boti, and caramel custard accompanied by retro jukebox music.",
          "cost": "₹500"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Elephanta Island Rock Caves & Bohemian Bandra",
      "slots": [
        {
          "period": "Morning (08:30 - 13:00)",
          "activity": "Ferry to Elephanta Caves (Rock-Cut Temples)",
          "description": "Cruise across Mumbai Harbour to the island; explore 5th-century basalt cave shrines dedicated to Lord Shiva.",
          "cost": "₹300"
        },
        {
          "period": "Afternoon (14:00 - 17:00)",
          "activity": "Drive across Bandra-Worli Sea Link to Bandra",
          "description": "Cross the 8-lane cable-stayed bridge over open sea, then explore Bandra's Portuguese heritage chapels and Bollywood star homes.",
          "cost": "₹100"
        },
        {
          "period": "Evening (17:30 - 19:30)",
          "activity": "Bandra Bandstand Sunset & Castella de Aguada Fort",
          "description": "Walk the seaside promenade past Shah Rukh Khan's Mannat mansion to the 1640 Portuguese fort ruins.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Coastal Seafood Feast at Gajalee or Mahesh Lunch Home",
          "description": "Feast on Bombil (Bombay Duck) Fry, Butter Garlic Crab, Mangalorean Ghee Roast, and Neer Dosa.",
          "cost": "₹850"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,500 - ₹2,200 / day (hostel in South Mumbai/Bandra + Mumbai Local Train ₹10 + street Vada Pav ₹20)",
    "midRange": "₹4,500 - ₹7,500 / day (3-star boutique hotel + Uber cabs + heritage restaurants)",
    "luxury": "₹25,000+ / day (The Taj Mahal Palace Colaba or The Oberoi Marine Drive)"
  },
  "localTips": [
    "Travel on Mumbai Local Trains between 11:30 AM and 04:30 PM to avoid the intense peak rush hour crush.",
    "Taste authentic street Vada Pav at Aram Milk Bar outside CSMT or Ashok Vada Pav near Kirti College.",
    "Always take metered black-and-yellow taxis (Kaali Peeli) or use Uber/Ola; drivers in South Mumbai strictly run on the meter."
  ]
},

  delhi: {
  "destination": "Delhi",
  "country": "India",
  "tagline": "The Historic Heart of India: Mughal sandstone fortresses, tree-lined British imperial boulevards, and legendary culinary alleys.",
  "bestTimeToVisit": "October to March for cool pleasant days and festive winter gardens.",
  "dailyBudgetUSD": 38,
  "topAttractions": [
    {
      "name": "Qutub Minar & Iron Pillar (UNESCO)",
      "fee": "₹50 (Indians) / ₹600 (Foreigners)",
      "insiderTip": "The world's tallest brick minaret (73 meters) built in 1192 AD; inspect the 1,600-year-old rustless Gupta-era Iron Pillar."
    },
    {
      "name": "Humayun's Tomb (UNESCO)",
      "fee": "₹50 / ₹600",
      "insiderTip": "The architectural precursor to the Taj Mahal; visit at 04:00 PM when golden hour light illuminates the red sandstone and marble dome."
    },
    {
      "name": "Red Fort (Lal Qila) & Jama Masjid",
      "fee": "₹50 (Red Fort) / Masjid Free",
      "insiderTip": "Explore the Diwan-i-Aam and Diwan-i-Khas, then cross into India's largest mosque that can hold 25,000 worshippers."
    },
    {
      "name": "India Gate & Kartavya Path",
      "fee": "Free",
      "insiderTip": "Walk the ceremonial boulevard connecting Rashtrapati Bhavan to the 42-meter war memorial arch, especially magical illuminated at night."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Old Delhi: Jama Masjid, Chandni Chowk & Red Fort",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "Jama Masjid & Cycle-Rickshaw Ride in Old Delhi",
          "description": "Climb the south minaret of the 17th-century mosque for panoramic views, then ride through the sensory spice maze of Khari Baoli.",
          "cost": "₹150"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Paranthe Wali Gali & Red Fort (Lal Qila)",
          "description": "Feast on deep-fried stuffed paranthas (rabri, paneer, lemon), then tour Emperor Shah Jahan's formidable red sandstone fortress.",
          "cost": "₹200"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Gurudwara Bangla Sahib & Sacred Sarovar",
          "description": "Visit the serene white-marble Sikh shrine, listen to devotional singing, and view the sacred healing water pool.",
          "cost": "Free"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Mughlai Feast at Karim's (Est. 1913) / Havemore",
          "description": "Savor Mutton Burra Kebabs, Butter Chicken, Chicken Jahangiri, and hot Roomali Rotis near Jama Masjid Gate 1.",
          "cost": "₹550"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Imperial New Delhi: Humayun's Tomb, Qutub Minar & India Gate",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Humayun's Tomb & Sunder Nursery Heritage Park",
          "description": "Stroll symmetrical Persian Charbagh water gardens and UNESCO Mughal mausoleums surrounded by 90 acres of ecological flora.",
          "cost": "₹100"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Qutub Minar Complex & Mehrauli Archaeological Park",
          "description": "Marvel at intricate calligraphic Quranic carvings on the minaret and walk through ancient Tomar Raj ruins.",
          "cost": "₹50"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Lotus Temple (Bahá'í House of Worship) & India Gate",
          "description": "Admire the 27 freestanding marble petals of the Lotus Temple in silence, followed by evening ice cream stroll at India Gate.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Dilli Haat Crafts Bazaar & Regional Food Stalls",
          "description": "Shop for handicrafts from every Indian state and feast on Rajasthani Pyaaz Kachori, Naga pork ribs, and Kashmiri Kahwa.",
          "cost": "₹400"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,200 - ₹1,800 / day (hostel in Paharganj/South Delhi + Delhi Metro smart card + street chaat)",
    "midRange": "₹3,500 - ₹5,500 / day (heritage boutique hotel in Connaught Place/Hauz Khas + metro/cab combo)",
    "luxury": "₹22,000+ / day (The Imperial New Delhi or The Leela Palace Chanakyapuri)"
  },
  "localTips": [
    "The Delhi Metro is one of the world's best, cheapest, and cleanest subway networks; use it to beat heavy city traffic.",
    "Most museums and historical monuments in Delhi (including the Red Fort) are CLOSED on MONDAYS; plan around this.",
    "The first coach in the direction of travel on every Delhi Metro train is reserved exclusively for women."
  ]
},

  pondicherry: {
  "destination": "Puducherry (Pondicherry)",
  "country": "India",
  "tagline": "The French Riviera of the East: pastel colonial villas, seaside promenades, Auroville spiritual harmony, and artisanal bakeries.",
  "bestTimeToVisit": "October to March for sunny, breezy beach walks and cool tropical evenings.",
  "dailyBudgetUSD": 38,
  "topAttractions": [
    {
      "name": "White Town (French Quarter) Walking Tour",
      "fee": "Free",
      "insiderTip": "Rent a vintage bicycle (₹100/day) at 07:00 AM to photograph mustard-yellow colonial mansions draped in bright pink bougainvillea without cars."
    },
    {
      "name": "Promenade Beach (Goubert Avenue)",
      "fee": "Free",
      "insiderTip": "Closed to all motor vehicles every evening from 06:00 PM to 07:30 AM; perfect for seaside walking past the Mahatma Gandhi statue."
    },
    {
      "name": "Auroville & Matrimandir ('Temple of the Mother')",
      "fee": "Free (Advance pass required)",
      "insiderTip": "Book viewing passes for the golden geodesic meditation dome online at least 3-5 days in advance at auroville.org."
    },
    {
      "name": "Sri Aurobindo Ashram",
      "fee": "Free",
      "insiderTip": "Maintained in deep silence; pay respects at the flower-adorned marble Samadhi of Sri Aurobindo and Mirra Alfassa (The Mother)."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "French Quarter Heritage, Promenade Beach & Bakeries",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "White Town Bicycle Tour & Sri Aurobindo Ashram",
          "description": "Pedal past French street signs ('Rue Dumas', 'Rue Romain Rolland'), visit the quiet ashram, and see the Church of Our Lady of Angels.",
          "cost": "₹100"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "French Artisanal Cafe Lunch at Cafe des Arts / Coromandel",
          "description": "Savor fresh butter croissants, crepes, Baguette sandwiches, and cold brew coffee in a shaded yellow heritage courtyard.",
          "cost": "₹450"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Promenade Beach Walk past the French War Memorial",
          "description": "Stroll along the rocky sea wall listening to crashing Bay of Bengal waves, and enjoy street roasted corn with lime chili.",
          "cost": "₹50"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Franco-Tamil Fusion Seafood Dinner at Villa Shanti",
          "description": "Dine on grilled red snapper, creole prawn curry, and chocolate fondant inside a restored 19th-century French merchant home.",
          "cost": "₹650"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Auroville Universal Township & Paradise Beach",
      "slots": [
        {
          "period": "Morning (08:30 - 12:30)",
          "activity": "Auroville Township & Matrimandir Golden Globe",
          "description": "Walk through shaded forest paths to the amphitheater to witness the colossal golden sphere dedicated to human unity.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Boat Ferry to Paradise Beach (Chunnambar Backwaters)",
          "description": "Cruise through mangrove backwaters to the isolated white sand beach spit flanked by the river and the ocean.",
          "cost": "₹350"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Serenity Beach Sunset & Surfer Watching",
          "description": "Watch local surfers catch waves along the long granite breakwater jetty as the evening sea breeze kicks in.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Wood-Fired Neapolitan Pizza at Tanto Pizzeria",
          "description": "Feast on farm-fresh organic Italian pizzas, homemade pasta, and gelato made with ingredients from Auroville farms.",
          "cost": "₹450"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,200 - ₹1,800 / day (rented scooter ₹350 + guesthouse + French bakery breakfasts)",
    "midRange": "₹3,500 - ₹6,000 / day (heritage French villa hotel + private cab + seaside dining)",
    "luxury": "₹16,000+ / day (Palais de Mahe - CGH Earth or La Villa French Quarter)"
  },
  "localTips": [
    "Renting a scooter (₹350/day) or bicycle (₹100/day) is by far the best way to move between White Town, Auroville, and beaches.",
    "Promenade Beach has large rocky tetrapods; swimming is strictly prohibited there for safety. Go to Paradise Beach or Eden Beach (Blue Flag) for swimming.",
    "Auroville boutique stores in White Town sell world-renowned handmade paper, spirulina, and natural essential incense."
  ]
},

  jaisalmer: {
  "destination": "Jaisalmer",
  "country": "India",
  "tagline": "The Golden City of the Thar Desert: a living medieval sandstone fortress, yellow havelis, and camel safaris under starlit dunes.",
  "bestTimeToVisit": "October to March for comfortable desert weather and the famous Jaisalmer Desert Festival.",
  "dailyBudgetUSD": 38,
  "topAttractions": [
    {
      "name": "Jaisalmer Fort (Sonar Qila / Golden Fort)",
      "fee": "Free / ₹100 Palace Museum",
      "insiderTip": "One of the world's very few 'living forts' where 4,000 residents still live inside 99 bastions; admire yellow sandstone changing color with sunlight."
    },
    {
      "name": "Sam Sand Dunes Desert Safari & Swiss Tent Camp",
      "fee": "₹1,500 - ₹3,000 (Camel + Camp + Dinner)",
      "insiderTip": "Head 40 km into the Thar Desert for a sunset camel ride across 30-meter sand dunes, followed by Kalbeliya gypsy dance and bonfire."
    },
    {
      "name": "Patwon ki Haveli (Mansion of Brocade Merchants)",
      "fee": "₹50 (Indians) / ₹100 (Foreigners)",
      "insiderTip": "A cluster of 5 opulent havelis carved entirely of golden sandstone with 60 intricately carved jharokha balconies."
    },
    {
      "name": "Gadisar Lake & Desert Gate",
      "fee": "Free / Boating ₹100",
      "insiderTip": "A 14th-century artificial rainwater lake surrounded by yellow sandstone temples and chhatris; visit at dawn when catfish gather at the ghats."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Living Golden Fort, Jain Temples & Patwon Haveli",
      "slots": [
        {
          "period": "Morning (08:30 - 12:30)",
          "activity": "Jaisalmer Fort Walking Tour & Seven Jain Temples",
          "description": "Walk through the four massive gates into the fort; inspect exquisite 12th-century Dilwara-style yellow marble Jain temple carvings.",
          "cost": "₹100"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Patwon ki Haveli & Nathmal ki Haveli",
          "description": "Marvel at stone filigree lace-like jharokhas carved by two Muslim jeweler brothers who carved independent halves symmetrically.",
          "cost": "₹50"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Gadisar Lake Sunset & Tila ki Pol Gateway",
          "description": "Glide across the peaceful waters on a paddle boat under the historic carved gateway as golden sunset glows on the water.",
          "cost": "₹150"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Rooftop Desert Dining Overlooking the Illuminated Fort",
          "description": "Savor Ker Sangri (desert bean delicacy), Gatte ki Sabzi, Laal Maas, and Bajra Roti under candle lanterns.",
          "cost": "₹450"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Thar Desert: Kuldhara Ghost Village & Sam Sand Dunes",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Excursion to Kuldhara Cursed Ghost Village",
          "description": "Explore the eerie abandoned 13th-century Paliwal Brahmin stone village that was abandoned overnight 200 years ago under a dark curse.",
          "cost": "₹50"
        },
        {
          "period": "Afternoon (14:30 - 17:30)",
          "activity": "Sam Sand Dunes Camel Safari & Dune Bashing",
          "description": "Ride camels across undulating golden ripples of the Thar Desert, watch the crimson sun dip beneath the sands.",
          "cost": "₹600"
        },
        {
          "period": "Evening (18:00 - 20:30)",
          "activity": "Desert Camp Bonfire & Kalbeliya Folk Dance",
          "description": "Sit on rugs around a blazing desert fire enjoying live Manganiyar folk music, fire dancers, and Rajasthani hospitality.",
          "cost": "Included"
        },
        {
          "period": "Night (20:30+)",
          "activity": "Traditional Buffet Dinner & Desert Stargazing",
          "description": "Feast under the unpolluted Thar Desert sky where thousands of stars and the Milky Way sparkle brightly above your Swiss tent.",
          "cost": "Included"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,200 - ₹1,800 / day (fort rooftop guesthouse + camel ride + local dal baati)",
    "midRange": "₹3,500 - ₹6,000 / day (heritage golden haveli hotel + luxury desert camp at Sam)",
    "luxury": "₹22,000+ / day (Suryagarh Jaisalmer luxury palace or The Serai desert camp)"
  },
  "localTips": [
    "Spend at least one night inside the Living Fort to experience its quiet, enchanting medieval atmosphere after day tourists leave.",
    "Sam Sand Dunes can be touristy; if you prefer untouched serene desert dunes with zero commercial noise, visit the nearby Khuri Dunes instead.",
    "Wear warm layers for desert night safaris; desert temperatures can plunge from 28°C during the day to 8°C after sunset in winter."
  ]
},

  barcelona: {
  "destination": "Barcelona",
  "country": "Spain",
  "tagline": "The Mediterranean jewel of Antoni Gaudí's surreal modernist architecture, Gothic alleyways, and sun-soaked tapas beaches.",
  "bestTimeToVisit": "May to June and September to October for warm sunny beach weather without sweltering midsummer crowds.",
  "dailyBudgetUSD": 95,
  "topAttractions": [
    {
      "name": "La Sagrada Família (UNESCO)",
      "fee": "€26 / €36 (with Towers)",
      "insiderTip": "Book tickets online at least 3 weeks ahead; visit in the late afternoon (3:30 PM - 5:30 PM) when sunlight streams through the stained glass in radiant amber and orange."
    },
    {
      "name": "Park Güell Monumental Zone",
      "fee": "€10",
      "insiderTip": "Gaudí's fairytale park; sit on the undulating serpentine mosaic bench for views of the colorful salamander (El Drac) and the Barcelona skyline."
    },
    {
      "name": "Casa Batlló & Casa Milà (La Pedrera)",
      "fee": "€29 - €35",
      "insiderTip": "Gaudí's masterpiece inspired by marine life and the legend of Saint George; walk on the warrior chimney rooftop terrace."
    },
    {
      "name": "Gothic Quarter (Barri Gòtic) & Las Ramblas",
      "fee": "Free / €9 Cathedral",
      "insiderTip": "Explore medieval alleys dating to Roman times, visit the Cathedral of Barcelona cloisters with 13 white geese, and browse Boqueria Market."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Gaudí's Wonders: Sagrada Família, Passeig de Gràcia & Tapas",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "La Sagrada Família Basilica & Towers Climb",
          "description": "Stand beneath tree-like stone columns reaching toward organic vaulted ceilings; take the elevator up the Nativity Tower.",
          "cost": "€36"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Passeig de Gràcia: Casa Batlló & Casa Milà",
          "description": "Admire Gaudí's bone-like balconies, iridescent dragon-back roof, and undulating limestone facade on Barcelona's grand boulevard.",
          "cost": "€29"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Park Güell Golden Hour Mosaic Terrace",
          "description": "Walk through the Greek stone columns and photograph panoramic vistas over Barcelona to the Mediterranean Sea.",
          "cost": "€10"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Tapas Food Trail in El Born & Sangria",
          "description": "Feast on Patatas Bravas, Jamón Ibérico bellota, Pan con Tomate, and Gambas al Ajillo with chilled red wine sangria.",
          "cost": "€32"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Gothic Quarter, Boqueria Market & Barceloneta Beach",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Gothic Quarter (Barri Gòtic) & Barcelona Cathedral",
          "description": "Stroll medieval stone lanes, view the Bishop's Bridge, and visit Plaça del Rei where Columbus was received by the monarchs.",
          "cost": "€9"
        },
        {
          "period": "Afternoon (13:00 - 15:30)",
          "activity": "Mercat de la Boqueria Food Market Tasting",
          "description": "Sample freshly pressed tropical dragon fruit juices, cones of cured Manchego cheese, and grilled seafood at El Quim bar.",
          "cost": "€15"
        },
        {
          "period": "Evening (16:00 - 19:30)",
          "activity": "Barceloneta Beach Sunset Walk & W Hotel Lookout",
          "description": "Walk the palm-fringed seaside boardwalk, watch beach volleyball, and enjoy the Mediterranean breeze.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Authentic Seafood Paella by the Port",
          "description": "Dine on traditional saffron-infused Paella de Marisco with mussels, prawns, and squid in a seaside tavern.",
          "cost": "€28"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "€40 - €55 / day (hostel in Gràcia/Eixample + T-casual 10-ride metro pass + tapas bakeries)",
    "midRange": "€110 - €175 / day (3-star boutique hotel + Gaudí entry tickets + sit-down paella meals)",
    "luxury": "€390+ / day (Hotel Arts Barcelona or W Barcelona overlooking the Mediterranean beach)"
  },
  "localTips": [
    "Purchase a T-casual metro card (10 rides for ~€12.15); it is significantly cheaper than buying single tickets.",
    "Beware of pickpockets along Las Ramblas, Plaça Catalunya, and crowded metro stations; keep valuables in zipped front pockets.",
    "Locals in Barcelona dine late: lunch is typically 2:00 PM - 3:30 PM, and dinner rarely starts before 8:30 PM or 9:00 PM."
  ]
},

  amsterdam: {
  "destination": "Amsterdam",
  "country": "Netherlands",
  "tagline": "The Venice of the North: picturesque 17th-century canal rings, world-class art museums, bicycle culture, and cozy brown cafes.",
  "bestTimeToVisit": "April to May for blooming Keukenhof tulip fields and September to November for scenic golden canal foliage.",
  "dailyBudgetUSD": 110,
  "topAttractions": [
    {
      "name": "Rijksmuseum & Rembrandt's The Night Watch",
      "fee": "€22.50",
      "insiderTip": "Book time slots online; admire Vermeer's The Milkmaid and the breathtaking multi-story Cuypers Library."
    },
    {
      "name": "Van Gogh Museum",
      "fee": "€22",
      "insiderTip": "Houses the world's largest collection of Vincent van Gogh's paintings, including Sunflowers and Almond Blossoms; tickets sell out weeks ahead."
    },
    {
      "name": "17th-Century UNESCO Canal Ring Cruise",
      "fee": "€18 - €25",
      "insiderTip": "Take an open-top electric boat tour from Prinsengracht at dusk to see the bridges illuminated with thousands of fairy lights."
    },
    {
      "name": "Anne Frank House (Prinsengracht)",
      "fee": "€16",
      "insiderTip": "Tickets are released strictly on the official website every Tuesday at 10:00 AM CET for visits 6 weeks in advance."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Museumplein Masterpieces, Vondelpark & Canal Cruise",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Rijksmuseum & Van Gogh Museum Exploration",
          "description": "Stand before Rembrandt's monumental Night Watch, admire Van Gogh's vibrant post-impressionist brushstrokes, and explore Dutch Golden Age art.",
          "cost": "€44"
        },
        {
          "period": "Afternoon (13:00 - 15:30)",
          "activity": "Vondelpark Bicycle Ride & Artisanal Herring Tasting",
          "description": "Rent a classic Dutch bicycle to cruise under weeping willows, then taste traditional raw herring with onions and pickles at a haringhandel.",
          "cost": "€15"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Sunset Electric Canal Cruise on Prinsengracht",
          "description": "Glide under the historic Seven Bridges as dusk colors reflect on the water, with Dutch cheese and wine on board.",
          "cost": "€22"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Cozy Brown Cafe (Bruin Cafe) & Dutch Bitterballen",
          "description": "Relax in a 200-year-old wood-paneled pub enjoying crispy deep-fried meat croquettes (bitterballen) with mustard and local craft beer.",
          "cost": "€25"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Jordaan Quarter, Anne Frank House & Albert Cuyp Market",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Anne Frank House & Westerkerk Tower",
          "description": "Walk through the secret annex hidden behind a movable bookcase, then view the 85-meter Westerkerk church spire.",
          "cost": "€16"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Jordaan Historic Quarter Walk & Apple Pie at Winkel 43",
          "description": "Wander tranquil flower-draped residential canals, quirky art galleries, and taste Amsterdam's best warm apple pie with whipped cream.",
          "cost": "€10"
        },
        {
          "period": "Evening (16:00 - 19:00)",
          "activity": "Albert Cuyp Market & Fresh Warm Stroopwafel",
          "description": "Europe's largest outdoor street market; watch fresh caramel syrup sandwiched between freshly pressed hot waffle wafers.",
          "cost": "€8"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Indonesian Rijsttafel Feast at Restaurant Blauw",
          "description": "Experience the colonial Dutch-Indonesian tradition of 'Rice Table' featuring 15 small tasting dishes including beef rendang and satay.",
          "cost": "€38"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "€45 - €65 / day (hostel outside center + rented bicycle €12 + supermarket sandwiches)",
    "midRange": "€125 - €195 / day (canal-view boutique hotel + museum cards + Dutch dining)",
    "luxury": "€450+ / day (Waldorf Astoria Amsterdam or Conservatorium Hotel + private salon boat tours)"
  },
  "localTips": [
    "Always look both ways before stepping across red bicycle lanes; cyclists have absolute right of way and ride fast!",
    "Most museums and public transport in Amsterdam are 100% CASHLESS; carry a debit/credit card with contactless chip.",
    "Rent a bicycle to explore like a local; Amsterdam has over 500 km of dedicated protected cycling paths."
  ]
},

  bangkok: {
  "destination": "Bangkok",
  "country": "Thailand",
  "tagline": "The vibrant City of Angels: gleaming golden Buddhist temples, bustling canal longtail boats, world-famous street food, and rooftop skylines.",
  "bestTimeToVisit": "November to February during the dry, cooler season.",
  "dailyBudgetUSD": 40,
  "topAttractions": [
    {
      "name": "The Grand Palace & Wat Phra Kaew (Emerald Buddha)",
      "fee": "500 THB (~$14)",
      "insiderTip": "Strict dress code: shoulders and ankles must be covered (no leggings or torn jeans); enter by 08:30 AM to beat tour groups."
    },
    {
      "name": "Wat Arun (Temple of Dawn)",
      "fee": "100 THB (~$3)",
      "insiderTip": "Perched on the Chao Phraya River; climb the steep porcelain mosaic spire at sunset when the temple is illuminated in radiant amber."
    },
    {
      "name": "Wat Pho (Temple of the Reclining Buddha)",
      "fee": "200 THB (~$6)",
      "insiderTip": "Houses the 46-meter gold-leaf reclining Buddha with mother-of-pearl feet; get an authentic traditional massage at Thailand's premier massage school."
    },
    {
      "name": "Chatuchak Weekend Market",
      "fee": "Free",
      "insiderTip": "One of the world's largest weekend markets with 15,000 stalls; browse spices, ceramics, silk, and sample coconut ice cream."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Royal Bangkok: Grand Palace, Reclining Buddha & Wat Arun",
      "slots": [
        {
          "period": "Morning (08:30 - 12:00)",
          "activity": "The Grand Palace & Temple of the Emerald Buddha",
          "description": "Stand in awe before glittering golden chedis, mythical yaksha guardians, and the sacred jade-carved Emerald Buddha.",
          "cost": "500 THB"
        },
        {
          "period": "Afternoon (12:30 - 15:30)",
          "activity": "Wat Pho & Traditional Thai Massage",
          "description": "Marvel at the giant 46-meter reclining Buddha, followed by a soothing 1-hour traditional acupressure massage.",
          "cost": "460 THB"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Cross River Ferry to Wat Arun at Sunset",
          "description": "Take the 5 THB public cross-river ferry to admire sunset views over the illuminated porcelain mosaic pagoda.",
          "cost": "105 THB"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Yaowarat Chinatown Street Food Night Walk",
          "description": "Feast on crispy oyster omelets, Michelin-recommended Guay Tiew Kway Chap rolled noodles, and mango sticky rice under neon signs.",
          "cost": "250 THB"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Chao Phraya Express, Jim Thompson House & Rooftop Views",
      "slots": [
        {
          "period": "Morning (09:00 - 12:00)",
          "activity": "Chao Phraya River Express Boat & Flower Market (Pak Khlong Talat)",
          "description": "Cruise on the public orange flag boat to the 24-hour wholesale flower market filled with fragrant jasmine and orchid garlands.",
          "cost": "30 THB"
        },
        {
          "period": "Afternoon (12:30 - 16:00)",
          "activity": "Jim Thompson House & Teakwood Museum",
          "description": "Explore the traditional Thai teakwood mansion surrounded by tropical jungle gardens, showcasing Asian antiquities and silk.",
          "cost": "200 THB"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "IconSiam Waterfront Promenade & Fountain Show",
          "description": "Explore the indoor floating market (SookSiam) inside the luxury mall and watch the sunset over the river.",
          "cost": "Free"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Open-Air Skyline Dining at Octave or Sky Bar",
          "description": "Sip signature cocktails perched 45 stories high with 360-degree night views of the glowing Bangkok metropolis.",
          "cost": "550 THB"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "600 - 900 THB / day (~$18 - $25, clean hostel dorm + BTS Skytrain + street Pad Thai 60 THB)",
    "midRange": "1,800 - 3,200 THB / day (~$50 - $90, river-view hotel + tuk-tuk rides + sit-down seafood)",
    "luxury": "8,000+ THB / day (~$230+, Mandarin Oriental Bangkok or The Peninsula with private river boat)"
  },
  "localTips": [
    "Use the BTS Skytrain and MRT subway to avoid notorious Bangkok street traffic jams.",
    "Always ensure taxi drivers turn on the meter ('Meter please'); if they refuse, politely exit and find another cab.",
    "Beware of friendly strangers near the Grand Palace claiming 'the palace is closed today for a Buddhist holiday'; this is a classic gem-shop scam."
  ]
},

  maldives: {
  "destination": "Maldives",
  "country": "Maldives",
  "tagline": "The Ultimate Tropical Atoll Sanctuary: overwater bungalows perched over turquoise lagoons, vibrant manta ray reefs, and pristine white sands.",
  "bestTimeToVisit": "November to April during the dry northeast monsoon for glass-calm seas and crystal underwater visibility.",
  "dailyBudgetUSD": 140,
  "topAttractions": [
    {
      "name": "Overwater Villa Experience & House Reef Snorkeling",
      "fee": "Included in Resort",
      "insiderTip": "Step directly down your private villa wooden ladder into a calm coral lagoon teeming with baby blacktip reef sharks and blue tangs."
    },
    {
      "name": "Manta Ray & Whale Shark Safari (South Ari Atoll)",
      "fee": "$90 - $140 / tour",
      "insiderTip": "Snorkel alongside gentle 15-foot ocean manta rays gliding through cleaning stations and feeding on plankton."
    },
    {
      "name": "Maafushi Local Island Coral & Sandbank Tour",
      "fee": "$35 - $50 (Speedboat tour)",
      "insiderTip": "The best budget-friendly base in the Maldives; includes sandbank lunch on pure white sand spits surrounded by 360-degree turquoise ocean."
    },
    {
      "name": "Bioluminescent Beach Glow (Vaadhoo Island)",
      "fee": "Free",
      "insiderTip": "Witness glowing blue ostracod crustaceans wash up on the dark shoreline like twinkling stars under night skies."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Arrival in Paradise: Speedboat Transfer & House Reef",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Speedboat Transfer from Malé to Coral Island",
          "description": "Speed across the shimmering turquoise Indian Ocean to your palm-fringed coral atoll surrounded by powdery white sands.",
          "cost": "$40"
        },
        {
          "period": "Afternoon (13:30 - 16:30)",
          "activity": "Lagoon Swimming & Coral Reef Snorkeling",
          "description": "Don a snorkel mask to explore live brain corals, anemone clownfish, and sea turtles swimming right off the beach.",
          "cost": "Free"
        },
        {
          "period": "Evening (17:30 - 19:30)",
          "activity": "Sunset Dolphin Cruise on Traditional Wooden Dhoni",
          "description": "Sail into the golden sunset while pods of wild spinner dolphins jump and perform acrobatic spins alongside the boat bow.",
          "cost": "$45"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Candlelit Beach BBQ & Grilled Catch-of-the-Day",
          "description": "Feast with your toes in the sand on grilled reef fish, lobster, coconut sambal, and fresh tropical fruit platters.",
          "cost": "$55"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Manta Ray Safari, Sandbank Picnic & Stargazing",
      "slots": [
        {
          "period": "Morning (08:30 - 12:30)",
          "activity": "Guided Manta Ray & Sea Turtle Snorkel Safari",
          "description": "Jump into open atoll channels to snorkel alongside graceful manta rays gliding like underwater eagles.",
          "cost": "$85"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Castaway Sandbank Picnic in the Middle of the Ocean",
          "description": "Disembark onto an isolated sand spit in the middle of azure waters for chilled coconut water, fresh fruit, and photography.",
          "cost": "Included"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Overwater Hammock Sunset & Kayaking",
          "description": "Paddle a transparent glass-bottom kayak across calm crystalline waters as twilight turns the lagoon violet.",
          "cost": "$20"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Bioluminescent Beach Walk under Starry Skies",
          "description": "Walk along the wet sand at night watching magical bioluminescent blue plankton sparkle with every footstep.",
          "cost": "Free"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "$60 - $95 / day (local island guesthouse on Maafushi/Fulidhoo + public ferry + local island cafes)",
    "midRange": "$220 - $400 / day (beachfront 4-star boutique resort + private speedboat transfers + daily snorkeling)",
    "luxury": "$1,200+ / day (5-star private island overwater pool villa at Soneva Fushi or Gili Lankanfushi)"
  },
  "localTips": [
    "Traveling on local inhabited islands (like Maafushi, Thulusdhoo, or Dhigurah) is up to 80% cheaper than private luxury resort islands.",
    "On local islands, respect Islamic local customs: alcohol is not served, and swimming in bikinis is restricted to designated 'Bikini Beaches'.",
    "Public government MTCC ferries run between Malé and local islands for only $2 - $4, compared to $40+ for speedboats."
  ]
},

  kolkata: {
  "destination": "Kolkata",
  "country": "India",
  "tagline": "The City of Joy: colonial grand marble palaces, yellow ambassador cabs, intellectual adda cafes, and historic street food.",
  "bestTimeToVisit": "October to March for cool pleasant weather and the vibrant spectacle of Durga Puja.",
  "dailyBudgetUSD": 35,
  "topAttractions": [
    {
      "name": "Victoria Memorial & Maidan Grounds",
      "fee": "₹50 (Indians) / ₹500 (Foreigners)",
      "insiderTip": "Pristine white Makrana marble monument dedicated to Queen Victoria; stroll through 64 acres of landscaped gardens at sunrise."
    },
    {
      "name": "Howrah Bridge & Flower Market (Mullick Ghat)",
      "fee": "Free",
      "insiderTip": "Visit Mullick Ghat under the bridge at 06:00 AM; witness thousands of flower sellers with marigolds and lotus garlands beside the Hooghly River."
    },
    {
      "name": "Dakshineswar & Belur Math Ferry Ride",
      "fee": "Free (Ferry ₹11)",
      "insiderTip": "Take the wooden public ferry across the Hooghly River from the 12-spired Kali temple to the headquarters of the Ramakrishna Mission."
    },
    {
      "name": "Princep Ghat & Traditional Wooden Boat Ride",
      "fee": "Free / Boat ₹300",
      "insiderTip": "Perched under the Vidyasagar Setu suspension bridge; hire a traditional wooden country boat at dusk for sunset reflections."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Colonial Grandeur: Victoria Memorial & Princep Ghat Sunset",
      "slots": [
        {
          "period": "Morning (08:30 - 12:30)",
          "activity": "Victoria Memorial & St. Paul's Cathedral",
          "description": "Explore the royal gallery, British imperial oil paintings, and walk to the Gothic Anglican cathedral with stained-glass rose windows.",
          "cost": "₹70"
        },
        {
          "period": "Afternoon (13:00 - 16:00)",
          "activity": "Park Street Heritage Dining at Peter Cat / Mocambo",
          "description": "Feast on iconic Chelo Kebabs (buttered rice, fried egg, seekh kebabs) or Chicken Tetrazzini in a classic 1970s heritage restaurant.",
          "cost": "₹550"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Princep Ghat River Promenade & Wooden Country Boat Ride",
          "description": "Stroll along the Palladian Greek porch monument, followed by a gentle twilight boat ride under the illuminated suspension bridge.",
          "cost": "₹300"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Kolkata Kathi Roll & Rosogolla Food Trail",
          "description": "Taste original egg-chicken kathi rolls at Nizam's (Est. 1932) on New Market, followed by warm sponge Rosogolla at K.C. Das.",
          "cost": "₹250"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Spiritual Hooghly: Howrah Bridge, Dakshineswar & College Street",
      "slots": [
        {
          "period": "Morning (06:00 - 10:30)",
          "activity": "Mullick Ghat Flower Market & Walking Howrah Bridge",
          "description": "Walk across the cantilever marvel without a single nut or bolt, photographing mountain-high sacks of orange marigolds.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (11:30 - 15:30)",
          "activity": "Dakshineswar Kali Temple & Belur Math River Ferry",
          "description": "Visit Sri Ramakrishna's sacred temple on the riverbank, then cruise across to Belur Math's universal architectural temple.",
          "cost": "₹50"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "College Street 'Boi Para' & Indian Coffee House (Est. 1942)",
          "description": "Browse the world's largest second-hand book market spanning 1.5 km, then sip infused black coffee amidst intellectual debates.",
          "cost": "₹100"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Traditional Bengali Feast at 6 Ballygunge Place / Oh! Calcutta",
          "description": "Savor Daab Chingri (prawns cooked in tender coconut shell), Kosha Mangsho (slow-cooked mutton), and Mishti Doi.",
          "cost": "₹700"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,000 - ₹1,600 / day (budget Sudder Street hotels + Kolkata Metro ₹10 + street kathi rolls ₹60)",
    "midRange": "₹3,200 - ₹5,500 / day (heritage mansion boutique hotel + yellow ambassador cabs + dining)",
    "luxury": "₹18,000+ / day (The Oberoi Grand on Jawaharlal Nehru Road or ITC Royal Bengal)"
  },
  "localTips": [
    "The Kolkata Metro is India's first underground railway; use it to travel effortlessly between North and South Kolkata.",
    "Never miss an 'Adda' (informal intellectual conversation) at Indian Coffee House on College Street to feel the true pulse of the city.",
    "Traditional hand-pulled rickshaws still operate in North Kolkata alleys; agree on a fair fare before boarding."
  ]
},

  hyderabad: {
  "destination": "Hyderabad",
  "country": "India",
  "tagline": "The City of Pearls and Nizams: historic 16th-century minarets, massive granite fortresses, and world-renowned Dum Biryani.",
  "bestTimeToVisit": "October to March for cool pleasant days and comfortable sightseeing.",
  "dailyBudgetUSD": 38,
  "topAttractions": [
    {
      "name": "Charminar & Laad Bazaar (Choodi Bazaar)",
      "fee": "₹25 / ₹300 (Intl)",
      "insiderTip": "Climb the spiral staircase of the 1591 landmark for views of Mecca Masjid, then shop for lacquer and stone bangles in Laad Bazaar."
    },
    {
      "name": "Golconda Fort & Sound & Light Show",
      "fee": "₹25 (Fort) + ₹140 (Show)",
      "insiderTip": "Test the acoustic marvel: a single clap at the entrance dome (Fateh Darwaza) can be heard clearly at the Bala Hissar pavilion 1 km away."
    },
    {
      "name": "Salar Jung Museum (3rd Largest in India)",
      "fee": "₹50 / ₹500",
      "insiderTip": "Houses 43,000 art objects; gather in the central courtyard at 12:00 PM noon to see the mechanical 19th-century musical clock chime."
    },
    {
      "name": "Ramoji Film City (World's Largest Film Studio)",
      "fee": "₹1,350",
      "insiderTip": "Guinness World Record certified covering 2,000 acres; take the vintage bus tour through Baahubali sets, mock airports, and railway stations."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Nizam Heritage: Charminar, Chowmahalla Palace & Biryani",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Charminar & Mecca Masjid Heritage Walk",
          "description": "Admire four 48-meter minarets, visit one of India's oldest mosques built with soil brought from Mecca, and sip hot Irani Chai.",
          "cost": "₹50"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Chowmahalla Palace of the Asaf Jahi Dynasty",
          "description": "Walk through the Durbar Hall (Khilwat Mubarak) beneath 19 colossal Belgian crystal chandeliers and see vintage royal Rolls-Royces.",
          "cost": "₹100"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Laad Bazaar Pearl Shopping & Nimrah Cafe Osmania Biscuits",
          "description": "Shop for Basra pearls and glass bangles, while dipping salty-sweet Osmania biscuits into creamy Irani chai.",
          "cost": "₹200"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Authentic Hyderabadi Dum Biryani at Shadab / Bawarchi",
          "description": "Feast on fragrant slow-cooked mutton Dum Biryani cooked in sealed handi with Mirchi ka Salan and Dahi Chutney.",
          "cost": "₹450"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Golconda Fortress, Qutb Shahi Tombs & Hussain Sagar",
      "slots": [
        {
          "period": "Morning (08:30 - 12:30)",
          "activity": "Golconda Fort Acoustic Citadel Exploration",
          "description": "Hike up the stone ramparts past royal palaces, diamond vaults (Koh-i-Noor origin), and enjoy panoramic views of the modern skyline.",
          "cost": "₹25"
        },
        {
          "period": "Afternoon (13:00 - 15:30)",
          "activity": "Qutb Shahi Tombs (Ibrahim Bagh Necropolis)",
          "description": "Marvel at domed granite and stucco tombs blending Persian, Pathan, and Hindu architectural styles.",
          "cost": "₹50"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Hussain Sagar Lake Boat Ride to Monolithic Buddha Statue",
          "description": "Cruise to the center of the lake to stand beneath the world's tallest 18-meter monolithic granite statue of Gautama Buddha.",
          "cost": "₹120"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Nightlife at Jubilee Hills & Royal Haleem Tasting",
          "description": "Sample slow-cooked meat and lentil Haleem with fried cashews and mint, followed by modern craft dining.",
          "cost": "₹500"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "₹1,200 - ₹1,800 / day (budget stays near Nampally + Hyderabad Metro ₹20 + street biryani ₹180)",
    "midRange": "₹3,500 - ₹5,500 / day (3-star Banjara Hills hotel + Uber cabs + palace dining)",
    "luxury": "₹28,000+ / day (Taj Falaknuma Palace - luxury palace perched 2,000 ft above the city with horse-drawn carriage arrival)"
  },
  "localTips": [
    "Order 'Single Biryani' if dining alone or with a partner; a standard Hyderabadi biryani portion is easily enough for two hungry people.",
    "Pair Irani Chai with Osmania Biscuits or bun maska at Nimrah Cafe right next to Charminar for the quintessential local breakfast.",
    "Carry good walking shoes for Golconda Fort; ascending to the summit Bala Hissar involves climbing over 360 steep stone steps."
  ]
},

  sydney: {
  "destination": "Sydney",
  "country": "Australia",
  "tagline": "The Emerald Harbour City: the sail-shaped Opera House, dramatic Pacific coastal clifftops, surf beaches, and sunny outdoor dining.",
  "bestTimeToVisit": "September to November and March to May for warm sunny weather and fewer beach crowds.",
  "dailyBudgetUSD": 125,
  "topAttractions": [
    {
      "name": "Sydney Opera House (UNESCO)",
      "fee": "AUD $45 (Inside Tour) / Exterior Free",
      "insiderTip": "Take the 1-hour architectural tour to see the acoustic ceramic sails and concert halls; enjoy a sunset drink at the outdoor Opera Bar."
    },
    {
      "name": "Sydney Harbour Bridge Climb or Pylon Lookout",
      "fee": "AUD $250+ (BridgeClimb) / AUD $24 (Pylon)",
      "insiderTip": "Climb the 200 stone steps to the Pylon Lookout for the exact same harbor panoramas as the expensive bridge climb for a fraction of the cost."
    },
    {
      "name": "Bondi to Coogee Coastal Walk (6 km)",
      "fee": "Free",
      "insiderTip": "Walk the clifftop ocean path past crashing Pacific waves, sculpted sandstone sea arches, and the famous ocean pool at Bondi Icebergs."
    },
    {
      "name": "Manly Ferry from Circular Quay",
      "fee": "AUD $8.50 (Opal / Contactless)",
      "insiderTip": "The best cheap harbor cruise in the world: a 30-minute public ferry ride past the Opera House and Harbour heads to the laid-back surf beach of Manly."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Iconic Harbour: Opera House, The Rocks & Botanical Gardens",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Sydney Opera House & Royal Botanic Garden Walk",
          "description": "Photograph the white ceramic sails up close, then walk along the harbor foreshore to Mrs Macquarie's Chair for the postcard view.",
          "cost": "Free"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "The Rocks Historic Quarter & Harbour Bridge Walkway",
          "description": "Explore Sydney's oldest convict settlement, cobblestone alleyways, and walk across the pedestrian span of the giant steel coat hanger.",
          "cost": "Free"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Circular Quay Sunset Drinks at Opera Bar",
          "description": "Perch by the harbor water sipping chilled Australian wine while watching ferries glide beneath the illuminated Harbour Bridge.",
          "cost": "AUD $28"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Aussie Seafood Feast at Darling Harbour",
          "description": "Feast on grilled Barramundi, Sydney rock oysters, and tiger prawns along the bustling waterfront promenade.",
          "cost": "AUD $55"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Bondi Beach & Coastal Cliffs to Coogee",
      "slots": [
        {
          "period": "Morning (08:30 - 11:30)",
          "activity": "Bondi Beach Surf & Bondi Icebergs Pool",
          "description": "Watch surfers ride rolling ocean breaks, swim in the famous saltwater ocean pool filled by crashing waves, and grab an acai bowl.",
          "cost": "AUD $10"
        },
        {
          "period": "Afternoon (12:00 - 15:30)",
          "activity": "Bondi to Bronte Clifftop Coastal Walk",
          "description": "Trek the dramatic ocean sandstone cliffs past Tamarama Beach, natural rock pools, and coastal parks with ocean breeze.",
          "cost": "Free"
        },
        {
          "period": "Evening (16:30 - 19:30)",
          "activity": "Manly Ferry Twilight Cruise to Manly Beach",
          "description": "Take the classic green and yellow public ferry across Sydney Harbour as city skyscrapers ignite with evening lights.",
          "cost": "AUD $9"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Fish and Chips on Manly Beach Corso",
          "description": "Enjoy fresh crispy beer-battered flathead and chips with tartare sauce listening to the Pacific surf.",
          "cost": "AUD $22"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "AUD $55 - $80 / day (~$38 - $55, hostel in Haymarket + Opal card daily cap + supermarket meat pies)",
    "midRange": "AUD $160 - $260 / day (~$110 - $175, boutique hotel near Circular Quay + ferries + sit-down meals)",
    "luxury": "AUD $550+ / day (~$370+, Park Hyatt Sydney with direct Opera House views or Crown Sydney)"
  },
  "localTips": [
    "Simply tap your contactless bank card or smartphone on all Sydney trains, buses, and ferries; fare caps apply automatically.",
    "Sunday is the best day for long ferry trips: Opal travel offers significantly discounted fare caps across the entire network.",
    "Always swim between the red and yellow flags on Australian beaches; lifesavers monitor only these safe patrolled zones."
  ]
},

  cairo: {
  "destination": "Cairo & Giza",
  "country": "Egypt",
  "tagline": "The Cradle of Civilization: the 4,500-year-old Great Pyramids of Giza, mysterious Sphinx, and bustling Khan el-Khalili bazaar.",
  "bestTimeToVisit": "October to April for pleasant mild desert temperatures.",
  "dailyBudgetUSD": 42,
  "topAttractions": [
    {
      "name": "The Great Pyramids of Giza & The Great Sphinx",
      "fee": "EGP 540 (~$11)",
      "insiderTip": "The last surviving Wonder of the Ancient World; enter the Giza Plateau at 08:00 AM right at opening to avoid tour bus crowds and mid-day heat."
    },
    {
      "name": "The Grand Egyptian Museum (GEM) / Museum of Antiquities",
      "fee": "EGP 450 (~$9)",
      "insiderTip": "Houses the complete Tutankhamun golden treasure collection, including the iconic 24-pound solid gold funerary mask."
    },
    {
      "name": "Khan el-Khalili Medieval Bazaar",
      "fee": "Free",
      "insiderTip": "Active since the 14th century; browse brass lanterns, fragrant frankincense, spices, and sip mint tea at El Fishawy cafe (open since 1773)."
    },
    {
      "name": "Nile River Sunset Felucca Sailboat Ride",
      "fee": "EGP 400 - EGP 600 / boat",
      "insiderTip": "Hire a private traditional white-canvas wooden sailboat at Zamalek for a peaceful 1-hour cruise as dusk settles over Cairo."
    }
  ],
  "days": [
    {
      "dayNumber": 1,
      "dayTitle": "Ancient Marvels: The Great Pyramids of Giza & The Sphinx",
      "slots": [
        {
          "period": "Morning (08:00 - 12:30)",
          "activity": "Great Pyramid of Khufu, Khafre & Menkaure",
          "description": "Stand in awe before millions of limestone blocks built in 2500 BC; optional climb inside the Grand Gallery to the King's Chamber.",
          "cost": "EGP 540"
        },
        {
          "period": "Afternoon (13:00 - 15:30)",
          "activity": "The Great Sphinx & Valley Temple of Khafre",
          "description": "Walk down to the colossal mythical lion with the head of a Pharaoh carved out of a single limestone ridge.",
          "cost": "Included"
        },
        {
          "period": "Evening (16:30 - 19:00)",
          "activity": "Sunset Camel Ride Across the Giza Desert Plateau",
          "description": "Ride camels across golden desert dunes to the panoramic lookout where all nine Giza pyramids line up against the setting sun.",
          "cost": "EGP 400"
        },
        {
          "period": "Night (19:30+)",
          "activity": "Traditional Egyptian Feast: Koshary & Mixed Grill",
          "description": "Taste Koshary (rice, lentils, macaroni topped with spiced tomato sauce and crispy fried onions) at Abou Tarek, followed by Mahshi.",
          "cost": "EGP 200"
        }
      ]
    },
    {
      "dayNumber": 2,
      "dayTitle": "Islamic Cairo: Citadel of Saladin & Khan el-Khalili Bazaar",
      "slots": [
        {
          "period": "Morning (09:00 - 12:30)",
          "activity": "Citadel of Saladin & Mosque of Muhammad Ali",
          "description": "Explore the medieval fortress offering commanding vistas of Cairo, and step into the Alabaster Mosque with hanging brass lanterns.",
          "cost": "EGP 450"
        },
        {
          "period": "Afternoon (13:00 - 16:30)",
          "activity": "Egyptian Museum at Tahrir Square (Tutankhamun Treasures)",
          "description": "Marvel at ancient pharaonic sarcophagi, royal mummies, papyrus scrolls, and ancient jewelry.",
          "cost": "EGP 450"
        },
        {
          "period": "Evening (17:00 - 19:30)",
          "activity": "Khan el-Khalili Bazaar & El Fishawy Heritage Cafe",
          "description": "Haggle for hand-hammered copper trays, alabaster statues, and sip hot hibiscus (Karkadeh) tea with shisha in the historic cafe.",
          "cost": "EGP 150"
        },
        {
          "period": "Night (20:00+)",
          "activity": "Traditional Nile Sunset Felucca Sail & Stargazing",
          "description": "Glide along the world's longest river on a peaceful wooden sailboat as Cairo city lights twinkle across the water.",
          "cost": "EGP 500"
        }
      ]
    }
  ],
  "budgetTiers": {
    "backpacker": "EGP 800 - 1,200 / day (~$16 - $25, Downtown Cairo hostel + metro + local Koshary EGP 40)",
    "midRange": "EGP 2,500 - 4,500 / day (~$50 - $90, 4-star Nile-view hotel + private AC car & driver + entry tickets)",
    "luxury": "EGP 15,000+ / day (~$300+, Marriott Mena House with direct views of the Pyramids from your private balcony)"
  },
  "localTips": [
    "Use Uber in Cairo rather than hailing street cabs; it eliminates haggling over fares and is very inexpensive and reliable.",
    "Beware of aggressive camel and horse handlers at the Pyramids; agree firmly on the total price (including tip) before mounting.",
    "Carry small Egyptian Pound banknotes for tipping ('Baksheesh'), which is an integral part of Egyptian service culture."
  ]
},
};
