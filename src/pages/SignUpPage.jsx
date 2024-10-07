import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SignUpPage = () => {
  const location = useLocation();
  const { selectedPlan } = location.state || {};

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-2xl font-bold text-center text-primary">Sign Up for {selectedPlan?.name || 'Starter'} Plan</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <stripe-pricing-table 
              pricing-table-id="prctbl_1Q7MUMKco8kEMt5yatZxsr8g"
              publishable-key="pk_test_51Q7MGUKco8kEMt5y4nfaguU23mTJIHSETmUCST7Vbsz57T8baLtPuy6BO1UBpfT1dosgevroLFZy6aheCFOoFqzS00wJGJge0z">
            </stripe-pricing-table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;