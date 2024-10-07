import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { SignUpSteps } from '@/components/SignUpSteps';
import { Progress } from "@/components/ui/progress";

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
    numbers: [{ prefix: "", minutes: selectedPlan?.includedMinutes || 500 }],
    redirectNumbers: [""],
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setShowPricingTable(true);
    }
  };

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
                  <SignUpSteps
                    step={step}
                    formData={formData}
                    setFormData={setFormData}
                    handleInputChange={handleInputChange}
                    selectedPlan={selectedPlan}
                  />
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
