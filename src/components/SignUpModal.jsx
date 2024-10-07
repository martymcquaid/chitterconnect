import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { title: "Basic Info", fields: ["name", "email", "company"] },
  { title: "Team Size", fields: ["teamSize"] },
  { title: "Phone Numbers", fields: ["phoneNumbers"] },
  { title: "Confirmation", fields: [] }
];

const SignUpModal = ({ isOpen, onClose, selectedPlan }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    phoneNumbers: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign Up for {selectedPlan?.name} Plan</DialogTitle>
        </DialogHeader>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {steps[currentStep].fields.map(field => (
              <div key={field} className="mb-4">
                <Label htmlFor={field} className="mb-2 block">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Label>
                {field === "teamSize" ? (
                  <Select onValueChange={(value) => handleSelectChange("teamSize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5</SelectItem>
                      <SelectItem value="6-15">6-15</SelectItem>
                      <SelectItem value="16-50">16-50</SelectItem>
                      <SelectItem value="51+">51+</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${field}`}
                  />
                )}
              </div>
            ))}
            {currentStep === steps.length - 1 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Confirmation</h3>
                <p>Please review your information:</p>
                <ul className="list-disc list-inside mt-2">
                  {Object.entries(formData).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-6">
          {currentStep > 0 && (
            <Button onClick={handleBack} variant="outline">
              Back
            </Button>
          )}
          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="ml-auto">
              Submit
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;