import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to ChitterChat
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Elevate your business communication with professional phone numbers and smart call routing.
        </motion.p>
        <motion.div
          className="text-lg mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="mb-4">
            Choose from a variety of professional number types:
          </p>
          <ul className="list-disc list-inside mb-4 text-left inline-block">
            <li>Toll-free numbers (e.g., 0800 434 9349)</li>
            <li>Local numbers (e.g., +44 7xxx xxxxxx)</li>
            <li>International numbers for global presence</li>
          </ul>
          <p className="mb-4">
            ChitterChat not only enhances your business image but also protects your team's privacy:
          </p>
          <ul className="list-disc list-inside text-left inline-block">
            <li>Hide personal phone numbers of your staff</li>
            <li>Route calls intelligently to the right team member</li>
            <li>Maintain professional communication 24/7</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 mr-4">Get Started</Button>
          <Button size="lg" variant="outline" className="bg-background text-primary hover:bg-primary/10">Learn More</Button>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;