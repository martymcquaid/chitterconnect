import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <motion.div 
        className="bg-yellow-100 p-6 my-8 rounded-lg shadow-md max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <AlertTriangle className="text-yellow-600 mr-2" />
          <h2 className="text-2xl font-bold text-yellow-800">Important: BT PSTN Switch-Off</h2>
        </div>
        <p className="text-yellow-800 mb-4">
          BT is phasing out traditional landlines by 2025. Don't get caught off guard! Learn how ChitterChat can help you transition smoothly and potentially save on costs.
        </p>
        <Button asChild className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600">
          <Link to="/pstn-switchoff">Learn More About the PSTN Switch-Off</Link>
        </Button>
      </motion.div>
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;