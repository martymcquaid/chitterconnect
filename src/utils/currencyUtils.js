const exchangeRates = {
  GBP: 1,
  EUR: 1.17,
  USD: 1.27
};

export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
  return Number(convertedAmount.toFixed(2));
};

export const formatCurrency = (amount, currency) => {
  const symbols = {
    GBP: '£',
    EUR: '€',
    USD: '$'
  };
  return `${symbols[currency]}${amount.toFixed(2)}`;
};