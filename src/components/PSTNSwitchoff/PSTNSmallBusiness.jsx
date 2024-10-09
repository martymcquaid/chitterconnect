import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Utensils, Coffee, ShoppingBag } from 'lucide-react';

const BusinessCard = ({ icon: Icon, title, description }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="flex items-center text-primary">
        <Icon className="mr-2" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const PSTNSmallBusiness = () => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-3xl font-bold text-center text-primary mb-8">
      Perfect for Small Businesses Without Broadband
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <BusinessCard
        icon={Utensils}
        title="Fish & Chip Shops"
        description="Keep your local number and take orders efficiently without relying on broadband."
      />
      <BusinessCard
        icon={Store}
        title="Chinese Takeaways"
        description="Manage high call volumes during peak hours with our reliable mobile-based solution."
      />
      <BusinessCard
        icon={Coffee}
        title="Cafés"
        description="Handle reservations and takeaway orders seamlessly, even in areas with poor internet."
      />
      <BusinessCard
        icon={ShoppingBag}
        title="Local Shops"
        description="Maintain customer service excellence with a professional phone system that doesn't require internet."
      />
    </div>
    <div className="mt-8 text-center">
      <img 
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Small business owner" 
        className="mx-auto rounded-lg shadow-lg"
      />
      <p className="mt-4 text-sm text-muted-foreground">Image: Small business owner using ChitterChat's mobile solution</p>
    </div>
  </motion.div>
);

export default PSTNSmallBusiness;