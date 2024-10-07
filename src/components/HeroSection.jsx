import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-5xl font-bold mb-4 text-primary">Welcome to ChitterChat</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Streamline your on-call communication with a single, powerful number. 
          Connect your team effortlessly and never miss an important call again.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
      </motion.div>
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Background" className="w-full h-full object-cover opacity-10" />
      </div>
    </section>
  );
};

export default HeroSection;