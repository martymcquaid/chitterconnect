import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { SignUpStepOne, SignUpStepTwo, SignUpStepThree, SignUpStepFour } from '@/components/SignUpSteps';
import { Progress } from "@/components/ui/progress";

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
    numbers: [{ prefix: "", minutes: 500 }],
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
      numbers: [...prev.numbers, { prefix: "", minutes: 500 }],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setShowPricingTable(true);
    }
  };

  const renderStep = () => {
    const steps = [
      <SignUpStepOne formData={formData} handleInputChange={handleInputChange} />,
      <SignUpStepTwo 
        formData={formData} 
        handleNumberChange={handleNumberChange}
        addNumber={addNumber}
        removeNumber={removeNumber}
        popularPrefixes={popularPrefixes}
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
                <motion.div 
                  className="mt-6 flex justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
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
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpPage;