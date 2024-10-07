import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { User, Mail, Building2, Plus, Phone } from 'lucide-react';

export const SignUpStepOne = ({ formData, handleInputChange }) => (
  <div className="space-y-4">
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
  </div>
);

export const SignUpStepTwo = ({ formData, handleNumberChange, addNumber, removeNumber, popularPrefixes }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Choose Your Numbers</h3>
    <p className="text-sm text-muted-foreground">Select prefixes for your numbers. The first number is included with your plan. Each additional number costs £6 per month.</p>
    {formData.numbers.map((number, index) => (
      <div key={index} className="flex space-x-2 items-center">
        <Select onValueChange={(value) => handleNumberChange(index, value)} value={number.prefix}>
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
        {index === 0 && <span className="text-sm text-muted-foreground">Included with plan</span>}
        {index > 0 && <span className="text-sm text-muted-foreground">£6/month</span>}
      </div>
    ))}
    <Button type="button" onClick={addNumber} className="w-full">
      <Plus className="mr-2 h-4 w-4" /> Add Another Number (£6/month)
    </Button>
  </div>
);

export const SignUpStepThree = ({ formData, handleRedirectNumberChange, addRedirectNumber, removeRedirectNumber, selectedPlan }) => (
  <div className="space-y-4">
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
  </div>
);

export const SignUpStepFour = ({ formData, setFormData }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Review Your Information</h3>
    <div className="space-y-2">
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Company:</strong> {formData.company}</p>
      <p><strong>Selected Numbers:</strong></p>
      <ul className="list-disc list-inside">
        {formData.numbers.map((number, index) => (
          <li key={index}>
            {number.prefix} {index === 0 ? '(Included with plan)' : '(£6/month)'}
          </li>
        ))}
      </ul>
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
  </div>
);
