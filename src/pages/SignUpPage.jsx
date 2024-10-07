import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Phone, User, Building2, Hash, ArrowRight, ArrowLeft, Check } from 'lucide-react';

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
    switch (step) {
      case 1:
        return (
          <motion.div className="space-y-4" key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex items-center space-x-2">
              <User className="text-primary" />
              <Label htmlFor="name">Name</Label>
            </div>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            
            <div className="flex items-center space-x-2">
              <Mail className="text-primary" />
              <Label htmlFor="email">Email</Label>
            </div>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            
            <div className="flex items-center space-x-2">
              <Building2 className="text-primary" />
              <Label htmlFor="company">Company</Label>
            </div>
            <Input id="company" name="company" value={formData.company} onChange={handleInputChange} required />
          </motion.div>
        );
      case 2:
        return (
          <motion.div className="space-y-4" key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3 className="text-lg font-semibold">Choose Your Number</h3>
            <p className="text-sm text-muted-foreground">Select a prefix and enter your desired number. We'll do our best to accommodate your request.</p>
            <div className="flex space-x-2">
              <Select onValueChange={(value) => handleDesiredNumberChange('prefix', value)} value={formData.desiredNumber.prefix}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select prefix" />
                </SelectTrigger>
                <SelectContent>
                  {popularPrefixes.map((prefix) => (
                    <SelectItem key={prefix.value} value={prefix.value}>{prefix.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="Enter desired number"
                value={formData.desiredNumber.number}
                onChange={(e) => handleDesiredNumberChange('number', e.target.value)}
                className="flex-grow"
              />
            </div>
            <p className="text-sm text-muted-foreground">Your number will be confirmed via email upon successful sign-up.</p>
          </motion.div>
        );
      case 3:
        return (
          <motion.div className="space-y-4" key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3 className="text-lg font-semibold">Redirect Numbers</h3>
            <p className="text-sm text-muted-foreground">Add up to {selectedPlan.maxUsers} numbers to redirect calls to.</p>
            {formData.redirectNumbers.map((number, index) => (
              <div key={index} className="flex space-x-2">
                <Input
                  placeholder="Enter redirect number"
                  value={number}
                  onChange={(e) => handleRedirectNumberChange(index, e.target.value)}
                  className="flex-grow"
                />
                {index > 0 && (
                  <Button type="button" variant="destructive" onClick={() => removeRedirectNumber(index)}>Remove</Button>
                )}
              </div>
            ))}
            {formData.redirectNumbers.length < selectedPlan.maxUsers && (
              <Button type="button" onClick={addRedirectNumber} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Another Number
              </Button>
            )}
          </motion.div>
        );
      case 4:
        return (
          <motion.div className="space-y-4" key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3 className="text-lg font-semibold">Review Your Information</h3>
            <div className="space-y-2">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Company:</strong> {formData.company}</p>
              <p><strong>Desired Number:</strong> {formData.desiredNumber.prefix} {formData.desiredNumber.number}</p>
              <p><strong>Redirect Numbers:</strong></p>
              <ul className="list-disc list-inside">
                {formData.redirectNumbers.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Terms and Conditions</h4>
              <p className="text-sm text-muted-foreground">By signing up, you agree to our Terms of Service and Privacy Policy. Our services comply with EU GDPR regulations.</p>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked }))}
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>
          </motion.div>
        );
    }
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