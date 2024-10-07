import React from 'react';
import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { calculateTotalPrice, formatPrice, parsePrice } from '@/utils/pricingUtils';

const PricingSummary = ({ plan, numbers }) => {
  const basePrice = parsePrice(plan.price);
  const totalPrice = calculateTotalPrice(plan, numbers);
  const additionalNumbersCost = (numbers.length - 1) * 9;
  const additionalMinutesCost = totalPrice - basePrice - additionalNumbersCost;

  return (
    <Card className="mb-4 bg-primary/10 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <DollarSign className="text-primary mr-2" />
          <h4 className="font-semibold">Monthly Price</h4>
        </div>
        <span className="text-xl font-bold text-primary">
          {formatPrice(totalPrice)}
        </span>
      </div>
      <div className="text-sm text-muted-foreground space-y-1">
        <p>Base plan: {formatPrice(basePrice)}/month</p>
        {numbers.length > 1 && (
          <p>Additional numbers: {numbers.length - 1} x £9 = {formatPrice(additionalNumbersCost)}</p>
        )}
        {additionalMinutesCost > 0 && (
          <p>Additional minutes cost: {formatPrice(additionalMinutesCost)}</p>
        )}
        <p>Total additional minutes: {numbers.reduce((sum, number, index) => {
          const includedMinutes = index === 0 ? plan.includedMinutes : 500;
          return sum + Math.max(0, (number.additionalMinutes || 0) - includedMinutes);
        }, 0)}</p>
      </div>
    </Card>
  );
};

export default PricingSummary;