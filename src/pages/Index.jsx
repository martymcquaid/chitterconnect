import React from 'react';
import { Button } from "@/components/ui/button";
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-primary">ChitterChat</a>
            <div className="hidden md:flex space-x-4">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
          </div>
        </nav>
      </header>
      <main className="pt-16">
        <HeroSection />
        <div id="features">
          <FeatureSection />
        </div>
        <div id="testimonials">
          <TestimonialSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;