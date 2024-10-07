import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;