import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const PSTNTimeline = () => (
  <motion.div 
    className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg shadow-lg mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-3xl font-semibold mb-4 flex items-center">
      <Clock className="mr-2 text-primary" /> What's Happening?
    </h2>
    <p className="text-lg mb-4">
      BT is switching off its traditional phone network (PSTN) by December 2025. This means all landline phones will need to work over the internet.
    </p>
    <ul className="list-disc list-inside space-y-2 text-lg">
      <li>September 2023: No more new traditional landlines</li>
      <li>April 2025: Most areas switch to digital</li>
      <li>December 2025: Complete switch-off</li>
    </ul>
  </motion.div>
);

export default PSTNTimeline;