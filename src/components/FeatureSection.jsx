import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, Users, Bell, Shield } from 'lucide-react';

const features = [
  {
    title: "One Number, Infinite Possibilities",
    description: "Distribute a single number to clients and route calls to the right team member instantly.",
    icon: <PhoneCall className="h-6 w-6" />
  },
  {
    title: "Team Management Made Easy",
    description: "Add or remove team members and update call routing with just a few clicks.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Never Miss a Call",
    description: "Ensure 24/7 coverage with smart call routing and scheduling features.",
    icon: <Bell className="h-6 w-6" />
  },
  {
    title: "Secure and Reliable",
    description: "Keep your team's personal numbers private while maintaining professional communication.",
    icon: <Shield className="h-6 w-6" />
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose ChitterChat?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {feature.icon}
                <span className="ml-2">{feature.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;