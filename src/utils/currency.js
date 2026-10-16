/**
 * Currency conversion and formatting utilities
 */

export const CURRENCY_CONFIG = {
  USD: { symbol: '$', rate: 1.0 },
  INR: { symbol: '₹', rate: 83.0 },
  EUR: { symbol: '€', rate: 0.92 }
};

export function convertAmount(usdAmount, currency = 'USD') {
  const config = CURRENCY_CONFIG[currency] || CURRENCY_CONFIG.USD;
  return Math.round(usdAmount * config.rate);
}

export function formatCurrency(usdAmount, currency = 'USD') {
  const config = CURRENCY_CONFIG[currency] || CURRENCY_CONFIG.USD;
  const converted = Math.round(usdAmount * config.rate);
  return `${config.symbol}${converted.toLocaleString()}`;
}

export function formatPriceString(priceStr, currency = 'USD') {
  if (!priceStr) return '';
  if (priceStr.toLowerCase().includes('free')) return 'Free';

  let formatted = priceStr;

  if (currency === 'INR') {
    // Convert USD ($) to INR
    formatted = formatted.replace(/\$(\d+(?:\.\d+)?)/g, (_, num) => {
      const inr = Math.round(parseFloat(num) * 83);
      return `₹${inr.toLocaleString()}`;
    });
    // Convert Euro (€) to INR
    formatted = formatted.replace(/€(\d+(?:\.\d+)?)/g, (_, num) => {
      const inr = Math.round(parseFloat(num) * 90);
      return `₹${inr.toLocaleString()}`;
    });
    // Convert Yen (¥) to INR
    formatted = formatted.replace(/¥(\d+(?:\.\d+)?)/g, (_, num) => {
      const inr = Math.round(parseFloat(num) * 0.55);
      return `₹${inr.toLocaleString()}`;
    });
    // Convert IDR to INR
    formatted = formatted.replace(/IDR\s*([\d,.]+)/gi, (_, num) => {
      const cleanNum = parseFloat(num.replace(/,/g, ''));
      const inr = Math.round(cleanNum * 0.0053);
      return `₹${inr.toLocaleString()}`;
    });
  } else if (currency === 'EUR') {
    // Convert USD ($) to EUR
    formatted = formatted.replace(/\$(\d+(?:\.\d+)?)/g, (_, num) => {
      const eur = Math.round(parseFloat(num) * 0.92);
      return `€${eur.toLocaleString()}`;
    });
    // Convert INR (₹) to EUR
    formatted = formatted.replace(/₹\s*([\d,]+)/g, (_, num) => {
      const cleanNum = parseFloat(num.replace(/,/g, ''));
      const eur = Math.max(1, Math.round(cleanNum / 90));
      return `€${eur.toLocaleString()}`;
    });
  } else if (currency === 'USD') {
    // Convert INR (₹) to USD
    formatted = formatted.replace(/₹\s*([\d,]+)/g, (_, num) => {
      const cleanNum = parseFloat(num.replace(/,/g, ''));
      const usd = Math.max(1, Math.round(cleanNum / 83));
      return `$${usd.toLocaleString()}`;
    });
    // Convert Euro (€) to USD
    formatted = formatted.replace(/€(\d+(?:\.\d+)?)/g, (_, num) => {
      const usd = Math.round(parseFloat(num) * 1.09);
      return `$${usd.toLocaleString()}`;
    });
  }

  return formatted;
}

