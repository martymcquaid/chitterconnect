import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const regions = [
  { value: "na", label: "North America" },
  { value: "eu", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "sa", label: "South America" },
  { value: "af", label: "Africa" },
  { value: "au", label: "Australia" },
];

const popularPrefixes = [
  { value: "0800", label: "0800 (Toll-Free)" },
  { value: "1800", label: "1800 (Toll-Free)" },
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
    phoneNumbers: [{ region: "", prefix: "", number: "" }],
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneNumberChange = (index, field, value) => {
    const updatedPhoneNumbers = [...formData.phoneNumbers];
    updatedPhoneNumbers[index][field] = value;
    setFormData((prev) => ({ ...prev, phoneNumbers: updatedPhoneNumbers }));
  };

  const addPhoneNumber = () => {
    setFormData((prev) => ({
      ...prev,
      phoneNumbers: [...prev.phoneNumbers, { region: "", prefix: "", number: "" }],
    }));
  };

  const removePhoneNumber = (index) => {
    const updatedPhoneNumbers = formData.phoneNumbers.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, phoneNumbers: updatedPhoneNumbers }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      toast.success("Sign up successful! Check your email for further instructions.");
      navigate('/');
    }
  };

  const calculateTotalCost = () => {
    const baseCost = selectedPlan.price === "Custom" ? 0 : parseInt(selectedPlan.price.slice(1));
    const numberCost = formData.phoneNumbers.length * 10; // Assume $10 per number
    return baseCost + numberCost;
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
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} required />
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    {formData.phoneNumbers.map((phone, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Select onValueChange={(value) => handlePhoneNumberChange(index, 'region', value)} value={phone.region}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select region" />
                            </SelectTrigger>
                            <SelectContent>
                              {regions.map((region) => (
                                <SelectItem key={region.value} value={region.value}>{region.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Select onValueChange={(value) => handlePhoneNumberChange(index, 'prefix', value)} value={phone.prefix}>
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
                            placeholder="Enter number"
                            value={phone.number}
                            onChange={(e) => handlePhoneNumberChange(index, 'number', e.target.value)}
                            className="flex-grow"
                          />
                          {index > 0 && (
                            <Button type="button" variant="destructive" onClick={() => removePhoneNumber(index)}>Remove</Button>
                          )}
                        </div>
                      </div>
                    ))}
                    <Button type="button" onClick={addPhoneNumber}>Add Another Number</Button>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Review Your Information</h3>
                    <div>
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Company:</strong> {formData.company}</p>
                      <p><strong>Phone Numbers:</strong></p>
                      <ul>
                        {formData.phoneNumbers.map((phone, index) => (
                          <li key={index}>{phone.prefix} {phone.number} ({regions.find(r => r.value === phone.region)?.label})</li>
                        ))}
                      </ul>
                      <p><strong>Total Monthly Cost:</strong> ${calculateTotalCost()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked }))}
                      />
                      <label htmlFor="terms" className="text-sm">
                        I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a>
                      </label>
                    </div>
                  </div>
                )}
              </motion.div>
              <div className="mt-6 flex justify-between">
                {step > 1 && (
                  <Button type="button" onClick={() => setStep(step - 1)}>Back</Button>
                )}
                <Button type="submit" disabled={step === 3 && !formData.termsAccepted}>
                  {step < 3 ? "Next" : "Complete Sign Up"}
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