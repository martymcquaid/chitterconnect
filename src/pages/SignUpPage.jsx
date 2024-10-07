import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { SignUpStepOne, SignUpStepTwo, SignUpStepThree, SignUpStepFour } from '@/components/SignUpSteps';
import { Progress } from "@/components/ui/progress";
import { calculateTotalPrice, parsePrice } from '@/utils/pricingUtils';
import { convertCurrency, formatCurrency } from '@/utils/currencyUtils';
import { CurrencyContext } from '@/contexts/CurrencyContext';
import { loadStripe } from '@stripe/stripe-js';
import { useSignUpForm } from '@/hooks/useSignUpForm';
import { popularPrefixes, renderStep, handleStripeCheckout } from '@/utils/signUpUtils.jsx';

const stripePromise = loadStripe('your_stripe_publishable_key');

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPlan } = location.state || {};
  const [step, setStep] = useState(1);
  const [showPricingTable, setShowPricingTable] = useState(false);
  const { currency } = useContext(CurrencyContext);
  const { formData, handleInputChange, handleNumberChange, addNumber, removeNumber, 
          handleRedirectNumberChange, addRedirectNumber, removeRedirectNumber, setFormData } = useSignUpForm(selectedPlan);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 4) {
      if (step === 2 && formData.numbers.some(number => !number.prefix)) {
        alert("Please select a prefix for all numbers.");
        return;
      }
      if (step === 3 && formData.redirectNumbers.length === 0) {
        alert("Please add at least one team member.");
        return;
      }
      setStep(step + 1);
    } else {
      await handleStripeCheckout(selectedPlan, formData, currency, stripePromise);
    }
  };

  if (showPricingTable) {
    return (
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">Complete Your Subscription</h2>
          <stripe-pricing-table 
            pricing-table-id="prctbl_1Q7OKlKco8kEMt5yHYg9tYF7"
            publishable-key="pk_test_51Q7MGUKco8kEMt5y4nfaguU23mTJIHSETmUCST7Vbsz57T8baLtPuy6BO1UBpfT1dosgevroLFZy6aheCFOoFqzS00wJGJge0z"
            currency={currency.toLowerCase()}
          >
          </stripe-pricing-table>
        </div>
      </div>
    );
  }

  const convertedPrice = selectedPlan?.price === "Custom" 
    ? "Custom" 
    : formatCurrency(convertCurrency(parsePrice(selectedPlan?.price), 'GBP', currency), currency);

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-primary">
              Sign Up for {selectedPlan?.name} Plan
            </CardTitle>
            <p className="text-center text-lg">
              {convertedPrice}/month
            </p>
          </CardHeader>
          <CardContent>
            <Progress value={(step / 4) * 100} className="mb-6" />
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {renderStep(step, formData, handleInputChange, handleNumberChange, addNumber, removeNumber, 
                            handleRedirectNumberChange, addRedirectNumber, removeRedirectNumber, setFormData, 
                            selectedPlan, popularPrefixes, currency)}
              </AnimatePresence>
              <div className="mt-6 flex justify-between">
                {step > 1 && (
                  <Button type="button" onClick={() => setStep(step - 1)} variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                )}
                <Button type="submit" disabled={step === 4 && !formData.termsAccepted} className="ml-auto">
                  {step < 4 ? (
                    <>
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Complete Sign Up <Check className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;