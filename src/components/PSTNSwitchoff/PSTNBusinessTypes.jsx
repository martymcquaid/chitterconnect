import React from 'react';
import { motion } from 'framer-motion';
import { Store, Building, Home, Briefcase } from 'lucide-react';

const BusinessTypeCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="text-primary w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </motion.div>
);

const PSTNBusinessTypes = () => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <h2 className="text-3xl font-bold text-center text-primary mb-8">
      Perfect for All Types of Businesses
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <BusinessTypeCard
        icon={Store}
        title="Retail Shops"
        description="Keep your local number without expensive new equipment."
      />
      <BusinessTypeCard
        icon={Building}
        title="Office-Based Businesses"
        description="Maintain professional communication with a reliable solution."
      />
      <BusinessTypeCard
        icon={Home}
        title="Home-Based Businesses"
        description="Professional phone presence without extra costs."
      />
      <BusinessTypeCard
        icon={Briefcase}
        title="Mobile Professionals"
        description="Route calls to your mobile while keeping your business number separate."
      />
    </div>
  </motion.div>
);

export default PSTNBusinessTypes;