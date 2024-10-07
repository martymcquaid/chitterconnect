import React, { useContext } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CurrencyContext } from '@/contexts/CurrencyContext';

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <Select value={currency} onValueChange={setCurrency}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="GBP">GBP (£)</SelectItem>
        <SelectItem value="EUR">EUR (€)</SelectItem>
        <SelectItem value="USD">USD ($)</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CurrencySelector;