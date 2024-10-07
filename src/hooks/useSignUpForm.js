import { useState } from 'react';

export const useSignUpForm = (selectedPlan) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    numbers: [{ prefix: "", additionalMinutes: 0 }],
    redirectNumbers: [""],
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (index, field, value) => {
    const updatedNumbers = [...formData.numbers];
    updatedNumbers[index] = { ...updatedNumbers[index], [field]: value };
    setFormData((prev) => ({ ...prev, numbers: updatedNumbers }));
  };

  const addNumber = () => {
    setFormData((prev) => ({
      ...prev,
      numbers: [...prev.numbers, { prefix: "", additionalMinutes: 0 }],
    }));
  };

  const removeNumber = (index) => {
    const updatedNumbers = formData.numbers.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, numbers: updatedNumbers }));
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

  return {
    formData,
    handleInputChange,
    handleNumberChange,
    addNumber,
    removeNumber,
    handleRedirectNumberChange,
    addRedirectNumber,
    removeRedirectNumber,
    setFormData,
  };
};