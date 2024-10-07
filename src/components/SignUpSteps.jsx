import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Building2, Plus, Phone, Settings, Clock, CreditCard, Globe, Shield, Users } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, description }) => (
  <Card className="mb-4 bg-secondary/10">
    <CardContent className="flex items-start p-4">
      <Icon className="text-primary mr-3 mt-1" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const calculatePrice = (minutes) => {
  const baseMinutes = 500;
  const additionalMinutes = Math.max(0, minutes - baseMinutes);
  const additionalCost = additionalMinutes * 0.07; // 7p per minute
  return additionalCost.toFixed(2);
};

export const SignUpStepOne = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <InfoCard
      icon={Globe}
      title="Global Communication Solution"
      description="Set up your account to start connecting with customers worldwide."
    />
    <div className="flex items-center space-x-2">
      <User className="text-primary" />
      <Label htmlFor="name">Full Name</Label>
    </div>
    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="John Doe" />
    
    <div className="flex items-center space-x-2">
      <Mail className="text-primary" />
      <Label htmlFor="email">Business Email</Label>
    </div>
    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="john@company.com" />
    
    <div className="flex items-center space-x-2">
      <Building2 className="text-primary" />
      <Label htmlFor="company">Company Name</Label>
    </div>
    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} required placeholder="Acme Inc." />
  </div>
);

export const SignUpStepTwo = ({ formData, handleNumberChange, addNumber, removeNumber, popularPrefixes }) => (
  <div className="space-y-4">
    <InfoCard
      icon={Phone}
      title="Choose Your Numbers"
      description="Select your preferred prefixes and set up minutes for each number."
    />
    <h3 className="text-lg font-semibold">Your Virtual Numbers</h3>
    {formData.numbers.map((number, index) => (
      <Card key={index} className="p-4 mb-4">
        <div className="flex space-x-2 items-center mb-4">
          <Select onValueChange={(value) => handleNumberChange(index, 'prefix', value)} value={number.prefix}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select prefix" />
            </SelectTrigger>
            <SelectContent>
              {popularPrefixes.map((prefix) => (
                <SelectItem key={prefix.value} value={prefix.value}>{prefix.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {index > 0 && (
            <Button type="button" variant="destructive" onClick={() => removeNumber(index)}>Remove</Button>
          )}
        </div>
        <div className="space-y-2">
          <Label>Minutes: {number.minutes}</Label>
          <Slider
            min={500}
            max={5000}
            step={50}
            value={[number.minutes]}
            onValueChange={(value) => handleNumberChange(index, 'minutes', value[0])}
          />
          <p className="text-sm text-muted-foreground">
            Additional cost: £{calculatePrice(number.minutes)} for {number.minutes} minutes
          </p>
          <p className="text-xs text-muted-foreground">
            (Includes 500 free minutes, additional minutes at 7p per minute)
          </p>
        </div>
      </Card>
    ))}
    <Button type="button" onClick={addNumber} className="w-full">
      <Plus className="mr-2 h-4 w-4" /> Add Another Number
    </Button>
  </div>
);

export const SignUpStepThree = ({ formData, handleRedirectNumberChange, addRedirectNumber, removeRedirectNumber, selectedPlan }) => (
  <div className="space-y-4">
    <InfoCard
      icon={Users}
      title="Team Setup"
      description="Add team members' numbers for call routing. You can modify these later in your admin panel."
    />
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
        <Plus className="mr-2 h-4 w-4" /> Add Team Member
      </Button>
    )}
  </div>
);

export const SignUpStepFour = ({ formData, setFormData }) => (
  <div className="space-y-4">
    <InfoCard
      icon={Clock}
      title="Almost There!"
      description="Review your information and accept our terms to complete your sign-up."
    />
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Review Your Information</h3>
      <div className="space-y-2">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Company:</strong> {formData.company}</p>
        <p><strong>Selected Numbers:</strong></p>
        <ul className="list-disc list-inside pl-4">
          {formData.numbers.map((number, index) => (
            <li key={index}>
              {number.prefix} - {number.minutes} minutes (£{calculatePrice(number.minutes)} additional)
            </li>
          ))}
        </ul>
        <p><strong>Redirect Numbers:</strong></p>
        <ul className="list-disc list-inside pl-4">
          {formData.redirectNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </Card>
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
  </div>
);