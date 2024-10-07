import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, Users, Bell, Shield, Zap, Globe } from 'lucide-react';
import { motion } from "framer-motion";

const features = [
  {
    title: "Global Connectivity",
    description: "Connect your team across borders with our international number support.",
    icon: <Globe className="h-8 w-8" />
  },
  {
    title: "Smart Routing",
    description: "Automatically direct calls to the right team member based on schedules and expertise.",
    icon: <Zap className="h-8 w-8" />
  },
  {
    title: "Team Management",
    description: "Easily add or remove team members and update call routing with our intuitive interface.",
    icon: <Users className="h-8 w-8" />
  },
  {
    title: "24/7 Availability",
    description: "Ensure round-the-clock coverage with our advanced scheduling and notification system.",
    icon: <Bell className="h-8 w-8" />
  },
  {
    title: "Secure Communications",
    description: "Keep your team's personal numbers private while maintaining professional communication.",
    icon: <Shield className="h-8 w-8" />
  },
  {
    title: "One Number, Infinite Possibilities",
    description: "Streamline client communication with a single, powerful contact point for your business.",
    icon: <PhoneCall className="h-8 w-8" />
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Powerful Features for Modern Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      {feature.icon}
                    </div>
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;