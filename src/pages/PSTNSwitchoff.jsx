import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneOff, Wifi, PoundSterling, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PSTNSwitchoff = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-primary mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          BT PSTN Switch-Off: What You Need to Know
        </motion.h1>

        <motion.div 
          className="bg-card p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2 text-primary" /> Important Dates
          </h2>
          <p className="mb-4">
            BT is planning to switch off the PSTN network by December 2025. This means that all traditional landline phones will need to be replaced or adapted to work over an internet connection.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>September 2023: BT stops selling new PSTN and ISDN lines</li>
            <li>April 2025: Majority of exchanges to be migrated to digital</li>
            <li>December 2025: Complete PSTN switch-off</li>
          </ul>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PhoneOff className="mr-2 text-primary" /> The Problem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>BT's switch to VoIP requires customers to have broadband, potentially increasing costs and complexity for homes and small businesses.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 text-primary" /> Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>ChitterChat offers a cost-effective alternative: port your number to our service and connect it to mobile numbers, eliminating the need for broadband.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.h2 
          className="text-3xl font-bold text-center text-primary mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Why Choose ChitterChat?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PoundSterling className="mr-2 text-primary" /> Cost Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Avoid additional broadband costs and expensive VoIP phones. Use your existing mobile phones or low-cost alternatives.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wifi className="mr-2 text-primary" /> No Broadband Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our service works with mobile networks, so you don't need to worry about internet connectivity or power outages affecting your phone line.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PhoneOff className="mr-2 text-primary" /> Keep Your Number
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Port your existing landline number to our service. Your contacts can still reach you on the same number they've always used.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Future-Proof Your Phone Line?</h2>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/signup">Get Started with ChitterChat</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PSTNSwitchoff;