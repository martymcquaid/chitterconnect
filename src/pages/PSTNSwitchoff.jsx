import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneOff, Wifi, PoundSterling, Clock, CheckCircle, Building, Store, Home, Briefcase, ArrowRight, PhoneForwarded, Voicemail, MessageSquare } from 'lucide-react';
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

const PSTNSwitchoff = () => {
  const features = [
    { icon: PoundSterling, title: "Save Money", description: "Avoid costly broadband upgrades and new phone systems." },
    { icon: Wifi, title: "No Broadband Needed", description: "Our service uses mobile networks, not tied to internet connection." },
    { icon: PhoneOff, title: "Keep Your Number", description: "Port your existing landline number to our service." },
    { icon: PhoneForwarded, title: "Smart Call Routing", description: "Automated answering service to direct calls to the right department." },
    { icon: Clock, title: "24/7 Availability", description: "Auto call forwarding outside business hours ensures you never miss a call." },
    { icon: Voicemail, title: "Voicemail to Email", description: "Receive voicemails as email attachments for easy management." },
    { icon: MessageSquare, title: "SMS Integration", description: "Send and receive SMS messages through your business number." },
  ];

  const businessTypes = [
    { icon: Store, title: "Retail Shops", description: "Keep your local number without expensive new equipment." },
    { icon: Building, title: "Office-Based Businesses", description: "Maintain professional communication with a reliable solution." },
    { icon: Home, title: "Home-Based Businesses", description: "Professional phone presence without extra costs." },
    { icon: Briefcase, title: "Mobile Professionals", description: "Route calls to your mobile while keeping your business number separate." },
  ];

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
            BT is switching off its traditional phone network (PSTN) by December 2025. All landline phones will need to work over the internet.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>September 2023: No more new traditional landlines</li>
            <li>April 2025: Most areas switch to digital</li>
            <li>December 2025: Complete switch-off</li>
          </ul>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
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
          {businessTypes.map((business, index) => (
            <Card key={index} className="p-6">
              <business.icon className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{business.title}</h3>
              <p className="text-sm">{business.description}</p>
            </Card>
          ))}
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