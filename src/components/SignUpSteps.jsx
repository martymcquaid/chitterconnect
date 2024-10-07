import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { User, Mail, Building2, Plus } from 'lucide-react';

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

export const SignUpStepTwo = ({ formData, handleDesiredNumberChange, popularPrefixes }) => (
  <div className="space-y-4">
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
  </div>
);