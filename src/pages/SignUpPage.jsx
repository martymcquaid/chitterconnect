import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { SignUpStepOne, SignUpStepTwo, SignUpStepThree, SignUpStepFour } from '@/components/SignUpSteps';

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    desiredNumber: { prefix: "", number: "" },
    redirectNumbers: [""],
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDesiredNumberChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      desiredNumber: { ...prev.desiredNumber, [field]: value },
    }));
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
      console.log("Form submitted:", formData);
      toast.success("Sign up successful! Check your email for your new number and further instructions.");
      navigate('/');
    }
  };

  const renderStep = () => {
    const steps = [
      <SignUpStepOne formData={formData} handleInputChange={handleInputChange} />,
      <SignUpStepTwo 
        formData={formData} 
        handleDesiredNumberChange={handleDesiredNumberChange}
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
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
      >
        {steps[step - 1]}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Sign Up for {selectedPlan?.name} Plan</CardTitle>
          </CardHeader>
          <CardContent>
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