import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PSTNHeader from '@/components/PSTNSwitchoff/PSTNHeader';
import PSTNTimeline from '@/components/PSTNSwitchoff/PSTNTimeline';
import PSTNFeatures from '@/components/PSTNSwitchoff/PSTNFeatures';
import PSTNBusinessTypes from '@/components/PSTNSwitchoff/PSTNBusinessTypes';
import PSTNHowItWorks from '@/components/PSTNSwitchoff/PSTNHowItWorks';

const PSTNSwitchoffPage = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <PSTNHeader />
        <PSTNTimeline />
        <PSTNFeatures />
        <PSTNBusinessTypes />
        <PSTNHowItWorks />
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Future-Proof Your Business Communication?</h2>
          <p className="text-xl mb-6">Join thousands of satisfied businesses who've made the smart switch with ChitterChat.</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4">
            <Link to="/signup" className="flex items-center">
              Get Started Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PSTNSwitchoffPage;