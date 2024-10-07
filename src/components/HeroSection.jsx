import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PhoneCall, Shield, Users, Globe, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-primary w-10 h-10 mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Global Business Communication, Simplified
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Elevate your global presence with professional numbers worldwide. From US toll-free to UK freephone, 
            we offer a range of options to suit your business needs while keeping your team's personal numbers private.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/pricing">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background text-primary hover:bg-primary/10">Watch Demo</Button>
          </div>
          <Link to="/faq" className="inline-flex items-center mt-4 text-primary hover:underline">
            <HelpCircle className="mr-2 h-4 w-4" />
            Learn More (FAQ)
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={Globe}
            title="Global Number Selection"
            description="Choose from various international prefixes and local numbers to establish your presence worldwide."
          />
          <FeatureCard
            icon={Shield}
            title="Enhanced Privacy"
            description="Protect your team's personal numbers while maintaining professional communication channels."
          />
          <FeatureCard
            icon={Users}
            title="Smart Global Routing"
            description="Efficiently direct calls to the right team member anywhere in the world."
          />
        </div>
      </div>

      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
        </svg>
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
      </motion.div>
    </section>
  );
};

export default HeroSection;