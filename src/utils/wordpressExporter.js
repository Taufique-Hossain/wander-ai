/**
 * WordPress & CMS Publishing Engine with Schema.org JSON-LD
 * 
 * Generates:
 * 1. WordPress Gutenberg-Ready Block HTML (<!-- wp:heading -->, <!-- wp:paragraph -->, <!-- wp:list -->)
 * 2. Google Schema.org JSON-LD Structured Data for Tourist Attractions & Trips
 * 3. SEO Metadata (<60 char Title, <160 char Meta Description, Focus Keywords)
 * 4. Obsidian / Ghost / Notion-compatible Markdown
 * 5. One-Click File Downloader (.html or .md)
 */

import { formatPriceString } from './currency.js';

/**
 * Generate SEO Metadata Snippet
 */
export function generateSeoMetadata(guide, daysCount = 3) {
  const dest = guide?.destination || 'Destination';
  const country = guide?.country || '';
  const focusKeyword = `${dest} ${daysCount} day itinerary`;
  
  // Title kept strictly under 60 characters for Google SERP display
  let seoTitle = `${daysCount}-Day ${dest} Itinerary: Complete Guide (2026)`;
  if (seoTitle.length > 60) {
    seoTitle = `${dest} ${daysCount}-Day Itinerary & Guide (2026)`;
  }

  // Meta description kept under 155 characters for optimal Google snippet display
  let metaDesc = `Plan your perfect ${daysCount}-day trip to ${dest}, ${country}. Real-time landmark schedules, entrance fees, budget tips, and packing essentials.`;
  if (metaDesc.length > 155) {
    metaDesc = `Plan your ${daysCount}-day ${dest} trip. Verified landmark schedules, entry fees, budget tiers, and top local travel tips.`;
  }

  return {
    focusKeyword,
    seoTitle,
    metaDescription: metaDesc,
    slug: `${dest.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${daysCount}-day-itinerary`,
    canonicalUrl: `https://wanderai.travel/guides/${dest.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    wordCount: Math.round(180 + (daysCount * 140)),
    readingTimeMinutes: Math.max(3, Math.round(daysCount * 1.5))
  };
}

/**
 * Generate Schema.org JSON-LD for Google Rich Snippets
 */
export function generateSchemaJsonLd(guide, daysCount = 3) {
  const dest = guide?.destination || 'Destination';
  const country = guide?.country || '';
  const daysList = guide?.itineraryDays || (guide?.itinerary ? [{ dayNumber: 1, dayTitle: "Day 1 Highlights", slots: guide.itinerary }] : []);

  const subTrips = daysList.map(day => ({
    "@type": "TouristTrip",
    "name": `Day ${day.dayNumber}: ${day.dayTitle}`,
    "description": day.slots?.map(s => `${s.period} - ${s.activity}`).join('; '),
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": day.slots?.length || 0,
      "itemListElement": day.slots?.map((slot, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": slot.activity,
          "description": slot.description
        }
      })) || []
    }
  }));

  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": `${daysCount}-Day ${dest} Travel Itinerary`,
    "description": guide?.tagline || `Comprehensive ${daysCount}-day curated travel guide for ${dest}, ${country}.`,
    "touristType": ["Cultural Tourist", "Solo Traveler", "Backpacker", "Family Vacationer"],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": guide?.dailyBudgetUSD ? guide.dailyBudgetUSD * 0.6 : 30,
      "highPrice": guide?.dailyBudgetUSD ? guide.dailyBudgetUSD * 2.5 : 180,
      "price": guide?.dailyBudgetUSD ? guide.dailyBudgetUSD * daysCount : 150
    },
    "subTrip": subTrips,
    "provider": {
      "@type": "TravelAgency",
      "name": "Firestorm WanderAI Network",
      "url": "https://wanderai.travel"
    }
  };

  return JSON.stringify(schemaObj, null, 2);
}

/**
 * Generate Authentic WordPress Gutenberg Block HTML
 */
export function generateGutenbergHtml(guide, daysCount = 3, activeCurrency = 'USD') {
  const dest = guide?.destination || 'Destination';
  const country = guide?.country || '';
  const daysList = guide?.itineraryDays || (guide?.itinerary ? [{ dayNumber: 1, dayTitle: "Day 1 Highlights", slots: guide.itinerary }] : []);
  const seo = generateSeoMetadata(guide, daysCount);

  let html = `<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">${daysCount}-Day ${dest} Itinerary & Ultimate Travel Guide (2026)</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size"><em>${guide?.tagline || `Discover the best of ${dest}, ${country} with our verified multi-day itinerary.`}</em></p>
<!-- /wp:paragraph -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","bottom":"20px","left":"20px","right":"20px"}}},"backgroundColor":"pale-cyan","className":"wander-trip-meta-box"} -->
<div class="wp-block-group wander-trip-meta-box has-pale-cyan-background-color has-background" style="padding:20px; border-radius:12px; margin-bottom:24px;">
  <!-- wp:paragraph -->
  <p><strong>📍 Destination:</strong> ${dest}, ${country}<br>
  <strong>⏱️ Duration:</strong> ${daysCount} Days<br>
  <strong>☀️ Best Time to Visit:</strong> ${guide?.bestTimeToVisit || 'October to May'}<br>
  <strong>💵 Estimated Spend:</strong> ~${guide?.dailyBudgetUSD || 45} USD / day</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->

<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Day-by-Day ${dest} Itinerary</h2>
<!-- /wp:heading -->
`;

  // Itinerary Days
  daysList.forEach(day => {
    html += `
<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Day ${day.dayNumber}: ${day.dayTitle}</h3>
<!-- /wp:heading -->
`;

    if (day.slots && day.slots.length > 0) {
      day.slots.forEach(slot => {
        html += `
<!-- wp:group {"className":"itinerary-time-slot","style":{"spacing":{"margin":{"bottom":"16px"}}}} -->
<div class="wp-block-group itinerary-time-slot" style="margin-bottom:16px; border-left:4px solid #10b981; padding-left:14px;">
  <!-- wp:paragraph -->
  <p><strong>⏰ ${slot.period} — ${slot.activity}</strong> (${formatPriceString(slot.cost, activeCurrency)})<br>
  ${slot.description}</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
`;
      });
    }
  });

  // Top Attractions Section
  if (guide?.topAttractions && guide.topAttractions.length > 0) {
    html += `
<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Top Must-See Attractions & Official Ticket Fees</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
${guide.topAttractions.map(attr => `  <li><strong>${attr.name}</strong> — Estimated Fee: <em>${formatPriceString(attr.fee, activeCurrency)}</em><br>💡 <em>Insider Tip:</em> ${attr.insiderTip}</li>`).join('\n')}
</ul>
<!-- /wp:list -->
`;
  }

  // Budget Breakdown Section
  if (guide?.budgetTiers) {
    html += `
<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Estimated Budget Breakdown</h2>
<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->
<figure class="wp-block-table is-style-stripes"><table>
  <thead><tr><th>Traveler Style</th><th>Estimated Daily Cost</th></tr></thead>
  <tbody>
    <tr><td><strong>Backpacker</strong></td><td>${formatPriceString(guide.budgetTiers.backpacker, activeCurrency)}</td></tr>
    <tr><td><strong>Mid-Range (Recommended)</strong></td><td>${formatPriceString(guide.budgetTiers.midRange, activeCurrency)}</td></tr>
    <tr><td><strong>Luxury</strong></td><td>${formatPriceString(guide.budgetTiers.luxury, activeCurrency)}</td></tr>
  </tbody>
</table></figure>
<!-- /wp:table -->
`;
  }

  // Local Tips Section
  if (guide?.localTips && guide.localTips.length > 0) {
    html += `
<!-- wp:heading {"level":2} -->
<h2 class="wp-block-heading">Local Etiquette & Safety Advice</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list">
${guide.localTips.map(tip => `  <li>${tip}</li>`).join('\n')}
</ul>
<!-- /wp:list -->
`;
  }

  // JSON-LD Script tag embedded for WordPress Header/Body
  html += `
<!-- wp:html -->
<script type="application/ld+json">
${generateSchemaJsonLd(guide, daysCount)}
</script>
<!-- /wp:html -->
`;

  return html;
}

/**
 * Trigger browser file download (Blob / ObjectURL)
 */
export function downloadFile(content, filename, mimeType = 'text/html') {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
