import React from 'react';
import { motion } from 'framer-motion';

const PSTNHeader = () => (
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-5xl font-bold text-primary mb-4">
      The BT PSTN Switch-Off: Your Simple Guide
    </h1>
    <p className="text-xl text-muted-foreground">
      Prepare your business for the future of telecommunications
    </p>
  </motion.div>
);

export default PSTNHeader;