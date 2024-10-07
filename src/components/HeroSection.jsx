import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ChitterChat</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Streamline your on-call communication with a single, powerful number. 
        Connect your team effortlessly and never miss an important call again.
      </p>
      <Button size="lg">Get Started</Button>
    </section>
  );
};

export default HeroSection;