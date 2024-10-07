import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$49",
    features: ["1 phone number", "Up to 5 team members", "Basic call routing", "24/7 support"],
  },
  {
    name: "Professional",
    price: "$99",
    features: ["3 phone numbers", "Up to 15 team members", "Advanced call routing", "Analytics dashboard", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited phone numbers", "Unlimited team members", "Custom integrations", "Dedicated account manager"],
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <p className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal">/month</span></p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;