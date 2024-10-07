export const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  return parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
};

export const calculateTotalPrice = (plan, numbers) => {
  const basePrice = parsePrice(plan.price);
  const totalAdditionalMinutes = numbers.reduce((sum, number) => sum + (number.additionalMinutes || 0), 0);
  const additionalCost = calculateAdditionalCost(plan, totalAdditionalMinutes);
  return basePrice + additionalCost;
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