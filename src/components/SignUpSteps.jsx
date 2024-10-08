import React, { useContext } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Mail, Building2, Plus, Phone, Clock, Globe, Users, Info } from "lucide-react";
import { calculateTotalPrice, formatPrice, parsePrice } from '@/utils/pricingUtils';
import PricingSummary from './PricingSummary';
import InfoCard from './InfoCard';
import NumberSetup from './NumberSetup';
import { CurrencyContext } from '@/contexts/CurrencyContext';

export const SignUpStepOne = ({ formData, handleInputChange, selectedPlan }) => {
  const { currency } = useContext(CurrencyContext);
  return (
    <div className="space-y-4">
      <InfoCard
        icon={Globe}
        title="Global Communication Solution"
        description="Set up your account to start connecting with customers worldwide."
      />
      <PricingSummary plan={selectedPlan} numbers={[]} currency={currency} />
      {['name', 'email', 'company'].map((field) => (
        <div key={field} className="space-y-2">
          <div className="flex items-center space-x-2">
            {field === 'name' && <User className="text-primary" />}
            {field === 'email' && <Mail className="text-primary" />}
            {field === 'company' && <Building2 className="text-primary" />}
            <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
          </div>
          <Input
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleInputChange}
            required={field !== 'company'}
            placeholder={`Enter your ${field}`}
          />
        </div>
      ))}
    </div>
  );
};

export const SignUpStepTwo = ({ formData, handleNumberChange, addNumber, removeNumber, popularPrefixes, selectedPlan }) => {
  const { currency } = useContext(CurrencyContext);
  return (
    <div className="space-y-4">
      <InfoCard
        icon={Phone}
        title="Choose Your Numbers"
        description="Select your preferred prefixes and add extra minutes as needed."
      />
      <PricingSummary plan={selectedPlan} numbers={formData.numbers} currency={currency} />
      <Card className="p-4 bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-2">
          <Info className="w-5 h-5 text-blue-500 mt-0.5" />
          <p className="text-sm text-blue-700">
            Any purchased and unused minutes each month will be carried over to the next month, up to a maximum of 90 days. This ensures you get the most value from your plan!
          </p>
        </div>
      </Card>
      {formData.numbers.map((number, index) => (
        <NumberSetup
          key={index}
          number={number}
          index={index}
          handleNumberChange={handleNumberChange}
          removeNumber={removeNumber}
          popularPrefixes={popularPrefixes}
          plan={selectedPlan}
          currency={currency}
        />
      ))}
      <Button type="button" onClick={addNumber} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        <Plus className="mr-2 h-4 w-4" /> Add Another Number
      </Button>
    </div>
  );
};

export const SignUpStepThree = ({ formData, handleRedirectNumberChange, addRedirectNumber, removeRedirectNumber, selectedPlan }) => {
  const { currency } = useContext(CurrencyContext);
  return (
    <div className="space-y-4">
      <InfoCard
        icon={Users}
        title="Team Setup"
        description="Add team members' numbers for call routing. You can modify these later in your admin panel."
      />
      <PricingSummary plan={selectedPlan} numbers={formData.numbers} currency={currency} />
      {formData.redirectNumbers.map((number, index) => (
        <div key={index} className="flex space-x-2">
          <Input
            placeholder="Team Member Name"
            value={number.name}
            onChange={(e) => handleRedirectNumberChange(index, 'name', e.target.value)}
            className="flex-grow"
            required
          />
          <Input
            placeholder="Enter redirect number"
            value={number.number}
            onChange={(e) => handleRedirectNumberChange(index, 'number', e.target.value)}
            className="flex-grow"
            required
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
};

export const SignUpStepFour = ({ formData, setFormData, selectedPlan }) => {
  const { currency } = useContext(CurrencyContext);
  return (
    <div className="space-y-4">
      <InfoCard
        icon={Clock}
        title="Almost There!"
        description="Review your information and accept our terms to complete your sign-up."
      />
      <PricingSummary plan={selectedPlan} numbers={formData.numbers} currency={currency} />
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Review Your Information</h3>
        <div className="space-y-2">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Company:</strong> {formData.company || 'Not provided'}</p>
          <p><strong>Selected Numbers:</strong></p>
          <ul className="list-disc list-inside pl-4">
            {formData.numbers.map((number, index) => (
              <li key={index}>
                {number.prefix} - {selectedPlan.includedMinutes} included minutes + {number.additionalMinutes} extra minutes
              </li>
            ))}
          </ul>
          <p><strong>Team Members:</strong></p>
          <ul className="list-disc list-inside pl-4">
            {formData.redirectNumbers.map((member, index) => (
              <li key={index}>{member.name}: {member.number}</li>
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
};