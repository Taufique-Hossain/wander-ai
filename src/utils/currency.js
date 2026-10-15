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

  const config = CURRENCY_CONFIG[currency] || CURRENCY_CONFIG.USD;

  // Convert USD ($) amounts
  let formatted = priceStr.replace(/\$(\d+(?:\.\d+)?)/g, (_, num) => {
    const converted = Math.round(parseFloat(num) * config.rate);
    return `${config.symbol}${converted.toLocaleString()}`;
  });

  // Convert Euro (€) amounts if currency is INR or USD
  if (currency === 'INR') {
    formatted = formatted.replace(/€(\d+(?:\.\d+)?)/g, (_, num) => {
      const inr = Math.round(parseFloat(num) * 90);
      return `₹${inr.toLocaleString()}`;
    });
    formatted = formatted.replace(/¥(\d+(?:\.\d+)?)/g, (_, num) => {
      const inr = Math.round(parseFloat(num) * 0.55);
      return `₹${inr.toLocaleString()}`;
    });
    formatted = formatted.replace(/IDR\s*([\d,.]+)/gi, (_, num) => {
      const cleanNum = parseFloat(num.replace(/,/g, ''));
      const inr = Math.round(cleanNum * 0.0053);
      return `₹${inr.toLocaleString()}`;
    });
  } else if (currency === 'EUR') {
    formatted = formatted.replace(/\$(\d+(?:\.\d+)?)/g, (_, num) => {
      const eur = Math.round(parseFloat(num) * 0.92);
      return `€${eur.toLocaleString()}`;
    });
  } else if (currency === 'USD') {
    formatted = formatted.replace(/€(\d+(?:\.\d+)?)/g, (_, num) => {
      const usd = Math.round(parseFloat(num) * 1.09);
      return `$${usd.toLocaleString()}`;
    });
  }

  return formatted;
}
