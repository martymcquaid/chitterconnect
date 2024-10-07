import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'testimonials', 'pricing', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />
      <header className="bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-40">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-primary">ChitterChat</a>
            <div className="hidden md:flex space-x-4">
              {['features', 'testimonials', 'pricing', 'faq'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`hover:text-primary transition-colors ${activeSection === section ? 'text-primary' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
          </div>
        </nav>
      </header>
      <main className="pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <FeatureSection />
        </section>
        <section id="testimonials">
          <TestimonialSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;