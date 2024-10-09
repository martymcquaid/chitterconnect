import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneOff, Wifi, PoundSterling, Clock, CheckCircle, Building, Store, Home, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }) => (
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

const PSTNSwitchoff = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold text-center text-primary mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The BT PSTN Switch-Off: Your Simple Guide
        </motion.h1>

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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-destructive/10">
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <PhoneOff className="mr-2" /> The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">BT's switch requires you to have broadband for your phone, which can mean:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Higher costs</li>
                <li>New equipment needed</li>
                <li>Potential disruptions during power outages</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <CheckCircle className="mr-2" /> ChitterChat's Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">We offer a simple, cost-effective alternative:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Keep your existing number</li>
                <li>No need for broadband</li>
                <li>Use your current phones or mobiles</li>
                <li>Easy setup, no tech expertise required</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.h2 
          className="text-4xl font-bold text-center text-primary mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Why ChitterChat is Your Best Choice
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FeatureCard
            icon={PoundSterling}
            title="Save Money"
            description="Avoid costly broadband upgrades and new phone systems. Our solution works with your existing setup, saving you money from day one."
          />
          <FeatureCard
            icon={Wifi}
            title="No Broadband Needed"
            description="Our service uses mobile networks, so you're not tied to an internet connection. Perfect for areas with poor broadband coverage."
          />
          <FeatureCard
            icon={PhoneOff}
            title="Keep Your Number"
            description="No need to change your business number. We'll port your existing landline number to our service, ensuring business continuity."
          />
        </motion.div>

        <motion.h2 
          className="text-4xl font-bold text-center text-primary mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Perfect for All Types of Businesses
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <BusinessTypeCard
            icon={Store}
            title="Retail Shops"
            description="Keep your familiar local number without the need for expensive new equipment or broadband upgrades."
          />
          <BusinessTypeCard
            icon={Building}
            title="Office-Based Businesses"
            description="Maintain professional communication with a reliable, cost-effective solution that doesn't rely on your internet connection."
          />
          <BusinessTypeCard
            icon={Home}
            title="Home-Based Businesses"
            description="Perfect for entrepreneurs and small businesses operating from home, providing a professional phone presence without extra costs."
          />
          <BusinessTypeCard
            icon={Briefcase}
            title="Mobile Professionals"
            description="Ideal for those always on the go. Route calls to your mobile while keeping your business number separate."
          />
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg shadow-lg text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-lg">Sign up for ChitterChat (it takes just minutes!)</li>
            <li className="text-lg">We port your existing number to our service</li>
            <li className="text-lg">Set up call forwarding to your preferred devices</li>
            <li className="text-lg">Continue using your phone as normal - no disruption!</li>
          </ol>
        </motion.div>

        <motion.div 
          className="text-center"
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

export default PSTNSwitchoff;