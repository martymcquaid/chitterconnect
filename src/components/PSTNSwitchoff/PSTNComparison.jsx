import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ComparisonItem = ({ feature, chitterChat, traditional }) => (
  <div className="grid grid-cols-3 gap-4 mb-4 items-center">
    <div>{feature}</div>
    <div className="text-center">
      {chitterChat ? <Check className="inline text-green-500" /> : <X className="inline text-red-500" />}
    </div>
    <div className="text-center">
      {traditional ? <Check className="inline text-green-500" /> : <X className="inline text-red-500" />}
    </div>
  </div>
);

const PSTNComparison = () => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-3xl font-bold text-center text-primary mb-8">
      ChitterChat vs Traditional Providers
    </h2>
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-3 gap-4 mb-6 font-bold">
        <div>Feature</div>
        <div className="text-center">ChitterChat</div>
        <div className="text-center">Traditional (e.g., BT)</div>
      </div>
      <ComparisonItem feature="Works without broadband" chitterChat={true} traditional={false} />
      <ComparisonItem feature="Keep existing number" chitterChat={true} traditional={true} />
      <ComparisonItem feature="No new equipment needed" chitterChat={true} traditional={false} />
      <ComparisonItem feature="Easy setup" chitterChat={true} traditional={false} />
      <ComparisonItem feature="Lower costs" chitterChat={true} traditional={false} />
      <ComparisonItem feature="24/7 support" chitterChat={true} traditional={false} />
    </div>
    <div className="mt-8 text-center">
      <img 
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Business comparison" 
        className="mx-auto rounded-lg shadow-lg"
      />
      <p className="mt-4 text-sm text-muted-foreground">Image: Choosing the right solution for your business</p>
    </div>
  </motion.div>
);

export default PSTNComparison;