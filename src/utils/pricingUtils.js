export const calculateTotalPrice = (plan, additionalMinutes) => {
  const basePrice = parseFloat(plan.price.replace('$', ''));
  const additionalCost = calculateAdditionalCost(plan, additionalMinutes);
  return basePrice + additionalCost;
};

const calculateAdditionalCost = (plan, additionalMinutes) => {
  const regularPrice = additionalMinutes * 0.05;
  const discountedBlocks = Math.floor(additionalMinutes / 500);
  const discountedMinutes = discountedBlocks * 500;
  const remainingMinutes = additionalMinutes % 500;
  const discountedPrice = plan.name === "Starter" 
    ? discountedMinutes * 0.045 + remainingMinutes * 0.05
    : discountedMinutes * 0.04 + remainingMinutes * 0.045;
  return discountedPrice;
};

export const formatPrice = (price) => `$${price.toFixed(2)}`;