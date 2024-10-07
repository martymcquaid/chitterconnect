export const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  return parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
};

export const calculateTotalPrice = (plan, numbers) => {
  const basePrice = parsePrice(plan.price);
  const additionalNumbersCost = (numbers.length - 1) * 9; // £9 for each additional number
  const totalAdditionalMinutes = numbers.reduce((sum, number, index) => {
    // First number uses plan's included minutes, additional numbers get 500 minutes each
    const includedMinutes = index === 0 ? plan.includedMinutes : 500;
    return sum + Math.max(0, (number.additionalMinutes || 0) - includedMinutes);
  }, 0);
  const additionalCost = calculateAdditionalCost(plan, totalAdditionalMinutes);
  return basePrice + additionalNumbersCost + additionalCost;
};

export const calculateAdditionalCost = (plan, additionalMinutes) => {
  const regularPrice = additionalMinutes * 0.05;
  const discountedBlocks = Math.floor(additionalMinutes / 500);
  const discountedMinutes = discountedBlocks * 500;
  const remainingMinutes = additionalMinutes % 500;
  const discountedPrice = plan.name === "Starter" 
    ? discountedMinutes * 0.045 + remainingMinutes * 0.05
    : discountedMinutes * 0.04 + remainingMinutes * 0.045;
  return discountedPrice;
};

export const formatPrice = (price) => `£${price.toFixed(2)}`;