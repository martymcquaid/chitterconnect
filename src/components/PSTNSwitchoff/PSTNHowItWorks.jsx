import React from 'react';
import { motion } from 'framer-motion';

const PSTNHowItWorks = () => (
  <motion.div 
    className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg shadow-lg text-white mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <h2 className="text-3xl font-bold mb-4">How It Works</h2>
    <ol className="list-decimal list-inside space-y-4">
      <li className="text-lg">Sign up for ChitterChat (it takes just minutes!)</li>
      <li className="text-lg">We port your existing number to our service</li>
      <li className="text-lg">Set up call forwarding to your preferred devices</li>
      <li className="text-lg">Continue using your phone as normal - no disruption!</li>
    </ol>
  </motion.div>
);

export default PSTNHowItWorks;