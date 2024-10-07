import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$49",
    maxUsers: 5,
    features: ["1 phone number", "Up to 5 team members", "Basic call routing", "24/7 support"],
  },
  {
    name: "Professional",
    price: "$99",
    maxUsers: 15,
    features: ["Up to 3 phone numbers", "Up to 15 team members", "Advanced call routing", "Analytics dashboard", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    maxUsers: Infinity,
    features: ["Unlimited phone numbers", "Unlimited team members", "Custom integrations", "Dedicated account manager"],
  }
];

const PricingSection = () => {
  const navigate = useNavigate();

  const handlePlanSelection = (plan) => {
    navigate('/signup', { state: { selectedPlan: plan } });
  };

  return (
    <section className="py-20 px-4 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Simple, Transparent Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex flex-col h-full bg-card hover:bg-card/90 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">{plan.name}</CardTitle>
                <p className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal">/month</span></p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => handlePlanSelection(plan)}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;