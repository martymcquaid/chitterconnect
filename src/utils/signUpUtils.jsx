import React from 'react';
import { motion } from "framer-motion";
import { SignUpStepOne, SignUpStepTwo, SignUpStepThree, SignUpStepFour } from '@/components/SignUpSteps';
import { calculateTotalPrice } from '@/utils/pricingUtils';
import { convertCurrency } from '@/utils/currencyUtils';

export const popularPrefixes = [
  { value: "0800", label: "0800 (Toll-Free UK)" },
  { value: "1800", label: "1800 (Toll-Free US)" },
  { value: "44", label: "+44 (UK)" },
  { value: "1", label: "+1 (US/Canada)" },
  { value: "61", label: "+61 (Australia)" },
  { value: "33", label: "+33 (France)" },
];

export const renderStep = (step, formData, handleInputChange, handleNumberChange, addNumber, removeNumber, 
                           handleRedirectNumberChange, addRedirectNumber, removeRedirectNumber, setFormData, 
                           selectedPlan, popularPrefixes) => {
  const steps = [
    <SignUpStepOne formData={formData} handleInputChange={handleInputChange} selectedPlan={selectedPlan} />,
    <SignUpStepTwo 
      formData={formData} 
      handleNumberChange={handleNumberChange}
      addNumber={addNumber}
      removeNumber={removeNumber}
      popularPrefixes={popularPrefixes}
      selectedPlan={selectedPlan}
    />,
    <SignUpStepThree 
      formData={formData} 
      handleRedirectNumberChange={handleRedirectNumberChange}
      addRedirectNumber={addRedirectNumber}
      removeRedirectNumber={removeRedirectNumber}
      selectedPlan={selectedPlan}
    />,
    <SignUpStepFour 
      formData={formData} 
      setFormData={setFormData}
      selectedPlan={selectedPlan}
    />
  ];

  return (
    <motion.div 
      key={`step${step}`} 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {steps[step - 1]}
    </motion.div>
  );
};

export const handleStripeCheckout = async (selectedPlan, formData, currency, stripePromise) => {
  try {
    const totalPrice = calculateTotalPrice(selectedPlan, formData.numbers);
    const convertedTotalPrice = convertCurrency(totalPrice, 'GBP', currency);
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: selectedPlan.stripePriceId,
        quantity: 1,
        totalPrice: convertedTotalPrice,
        currency: currency,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error);
    }
  } catch (error) {
    console.error("Error during checkout:", error);
  }
};