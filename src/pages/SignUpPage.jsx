import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { SignUpStepOne, SignUpStepTwo, SignUpStepThree, SignUpStepFour } from '@/components/SignUpSteps';
import { Progress } from "@/components/ui/progress";
import { calculateTotalPrice } from '@/utils/pricingUtils';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key');

const popularPrefixes = [
  { value: "0800", label: "0800 (Toll-Free UK)" },
  { value: "1800", label: "1800 (Toll-Free US)" },
  { value: "44", label: "+44 (UK)" },
  { value: "1", label: "+1 (US/Canada)" },
  { value: "61", label: "+61 (Australia)" },
  { value: "33", label: "+33 (France)" },
];

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPlan } = location.state || {};
  const [step, setStep] = useState(1);
  const [showPricingTable, setShowPricingTable] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    numbers: [{ prefix: "", additionalMinutes: 0 }],
    redirectNumbers: [""],
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (index, field, value) => {
    const updatedNumbers = [...formData.numbers];
    updatedNumbers[index] = { ...updatedNumbers[index], [field]: value };
    setFormData((prev) => ({ ...prev, numbers: updatedNumbers }));
  };

  const addNumber = () => {
    setFormData((prev) => ({
      ...prev,
      numbers: [...prev.numbers, { prefix: "", additionalMinutes: 0 }],
    }));
  };

  const removeNumber = (index) => {
    const updatedNumbers = formData.numbers.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, numbers: updatedNumbers }));
  };

  const handleRedirectNumberChange = (index, value) => {
    const updatedRedirectNumbers = [...formData.redirectNumbers];
    updatedRedirectNumbers[index] = value;
    setFormData((prev) => ({ ...prev, redirectNumbers: updatedRedirectNumbers }));
  };

  const addRedirectNumber = () => {
    if (formData.redirectNumbers.length < selectedPlan.maxUsers) {
      setFormData((prev) => ({
        ...prev,
        redirectNumbers: [...prev.redirectNumbers, ""],
      }));
    }
  };

  const removeRedirectNumber = (index) => {
    const updatedRedirectNumbers = formData.redirectNumbers.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, redirectNumbers: updatedRedirectNumbers }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      try {
        const totalPrice = calculateTotalPrice(selectedPlan, formData.numbers);
        const stripe = await stripePromise;
        const response = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            priceId: selectedPlan.stripePriceId,
            quantity: 1,
            totalPrice: totalPrice,
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
        // Handle the error, maybe show a user-friendly message
      }
    }
  };

  const renderStep = () => {
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

  if (showPricingTable) {
    return (
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">Complete Your Subscription</h2>
          <stripe-pricing-table 
            pricing-table-id="prctbl_1Q7OKlKco8kEMt5yHYg9tYF7"
            publishable-key="pk_test_51Q7MGUKco8kEMt5y4nfaguU23mTJIHSETmUCST7Vbsz57T8baLtPuy6BO1UBpfT1dosgevroLFZy6aheCFOoFqzS00wJGJge0z"
          >
          </stripe-pricing-table>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-primary">Sign Up for {selectedPlan?.name} Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={(step / 4) * 100} className="mb-6" />
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {renderStep()}
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