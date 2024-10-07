import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SliderWithValue } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Building2, Plus, Phone, Clock, Globe, Users } from "lucide-react";

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

const calculatePrice = (additionalMinutes) => {
  const regularPrice = additionalMinutes * 0.05;
  const discountedBlocks = Math.floor(additionalMinutes / 500);
  const discountedMinutes = discountedBlocks * 500;
  const remainingMinutes = additionalMinutes % 500;
  const discountedPrice = discountedMinutes * 0.045 + remainingMinutes * 0.05;
  const savings = regularPrice - discountedPrice;
  return { regularPrice, discountedPrice, savings };
};

const MAX_ADDITIONAL_MINUTES = 10000;
const formatMinutes = (minutes) => `${minutes} mins`;

export const SignUpStepOne = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
    <InfoCard
      icon={Globe}
      title="Global Communication Solution"
      description="Set up your account to start connecting with customers worldwide."
    />
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
          required
          placeholder={`Enter your ${field}`}
        />
      </div>
    ))}
  </div>
);

const NumberSetup = ({ number, index, handleNumberChange, removeNumber, popularPrefixes }) => {
  const { regularPrice, discountedPrice, savings } = calculatePrice(number.additionalMinutes);

  return (
    <Card key={index} className="p-4 mb-4 bg-gradient-to-br from-secondary/20 to-background">
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
      <div className="space-y-4">
        <div className="bg-primary/10 p-3 rounded-md">
          <p className="font-semibold">Included in plan: 500 minutes</p>
        </div>
        <Label className="text-lg font-semibold">Additional Minutes: {formatMinutes(number.additionalMinutes)}</Label>
        <SliderWithValue
          min={0}
          max={MAX_ADDITIONAL_MINUTES}
          step={1}
          value={[number.additionalMinutes]}
          onValueChange={(value) => handleNumberChange(index, 'additionalMinutes', value[0])}
          className="py-4"
          formatValue={formatMinutes}
        />
        <div className="space-y-2 bg-secondary/10 p-3 rounded-md">
          <p className="text-sm font-medium">Regular price: £{regularPrice.toFixed(2)} (5p per minute)</p>
          <p className="text-sm font-medium text-primary">Discounted price: £{discountedPrice.toFixed(2)} (4.5p per minute for 500-minute blocks)</p>
          <p className="text-sm font-medium text-green-600">Total savings: £{savings.toFixed(2)}</p>
        </div>
      </div>
    </Card>
  );
};

export const SignUpStepTwo = ({ formData, handleNumberChange, addNumber, removeNumber, popularPrefixes }) => (
  <div className="space-y-4">
    <InfoCard
      icon={Phone}
      title="Choose Your Numbers"
      description="Select your preferred prefixes and add extra minutes as needed."
    />
    {formData.numbers.map((number, index) => (
      <NumberSetup
        key={index}
        number={number}
        index={index}
        handleNumberChange={handleNumberChange}
        removeNumber={removeNumber}
        popularPrefixes={popularPrefixes}
      />
    ))}
    <Button type="button" onClick={addNumber} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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
    {formData.redirectNumbers.map((number, index) => (
      <div key={index} className="flex space-x-2">
        <Input
          placeholder="Team Member Name"
          value={number.name}
          onChange={(e) => handleRedirectNumberChange(index, 'name', e.target.value)}
          className="flex-grow"
        />
        <Input
          placeholder="Enter redirect number"
          value={number.number}
          onChange={(e) => handleRedirectNumberChange(index, 'number', e.target.value)}
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
              {number.prefix} - 500 included minutes + {number.additionalMinutes} extra minutes (£{calculatePrice(500, number.additionalMinutes)} additional)
            </li>
          ))}
        </ul>
        <p><strong>Redirect Numbers:</strong></p>
        <ul className="list-disc list-inside pl-4">
          {formData.redirectNumbers.map((number, index) => (
            <li key={index}>{number.name}: {number.number}</li>
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
