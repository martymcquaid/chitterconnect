import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden bg-gradient-to-b from-background to-secondary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Revolutionize Your On-Call Communication</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          ChitterChat provides a seamless, efficient solution for businesses of all sizes. 
          Streamline your team's communication with our innovative platform.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </motion.div>
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Background" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;