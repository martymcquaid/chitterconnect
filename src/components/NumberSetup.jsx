import React, { useContext } from 'react';
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SliderWithValue } from "@/components/ui/slider";
import { formatPrice, calculateAdditionalCost } from '@/utils/pricingUtils';
import { CurrencyContext } from '@/contexts/CurrencyContext';
import { convertCurrency, formatCurrency } from '@/utils/currencyUtils';

const NumberSetup = ({ number, index, handleNumberChange, removeNumber, popularPrefixes, plan }) => {
  const { currency } = useContext(CurrencyContext);
  const additionalCost = calculateAdditionalCost(plan, number.additionalMinutes);
  const regularPrice = number.additionalMinutes * 0.05;
  const savings = regularPrice - additionalCost;

  const convertedRegularPrice = convertCurrency(regularPrice, 'GBP', currency);
  const convertedDiscountedPrice = convertCurrency(additionalCost, 'GBP', currency);
  const convertedSavings = convertCurrency(savings, 'GBP', currency);

  return (
    <Card key={index} className="p-4 mb-4 bg-gradient-to-br from-secondary/20 to-background">
      <div className="flex space-x-2 items-center mb-4">
        <Select 
          onValueChange={(value) => handleNumberChange(index, 'prefix', value)} 
          value={number.prefix}
          required
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select prefix (required)" />
          </SelectTrigger>
          <SelectContent>
            {popularPrefixes.map((prefix) => (
              <SelectItem key={prefix.value} value={prefix.value}>{prefix.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {index > 0 && (
          <Button type="button" variant="destructive" onClick={() => removeNumber(index)}>Remove</Button>
        )}
      </div>
      <div className="space-y-4">
        <div className="bg-primary/10 p-3 rounded-md">
          <p className="font-semibold">Included in plan: {plan.includedMinutes} minutes</p>
        </div>
        <Label className="text-lg font-semibold">Additional Minutes: {number.additionalMinutes}</Label>
        <SliderWithValue
          min={0}
          max={1000}
          step={1}
          value={[number.additionalMinutes]}
          onValueChange={(value) => handleNumberChange(index, 'additionalMinutes', value[0])}
          className="py-4"
          formatValue={(value) => `${value} mins`}
        />
        <div className="space-y-2 bg-secondary/10 p-3 rounded-md">
          <p className="text-sm font-medium">Regular price: {formatCurrency(convertedRegularPrice, currency)} (5p per minute)</p>
          <p className="text-sm font-medium text-primary">Discounted price: {formatCurrency(convertedDiscountedPrice, currency)} ({plan.name === "Starter" ? "4.5" : "4"}p per minute for 500-minute blocks)</p>
          <p className="text-sm font-medium text-green-600">Total savings: {formatCurrency(convertedSavings, currency)}</p>
        </div>
      </div>
    </Card>
  );
};

export default NumberSetup;