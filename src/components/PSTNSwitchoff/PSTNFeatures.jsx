import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, Wifi, PhoneForwarded, Clock, VoicemailIcon, MessageSquare } from 'lucide-react';

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

const PSTNFeatures = () => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-3xl font-bold text-center text-primary mb-8">
      ChitterChat's Advanced Features
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        icon={PoundSterling}
        title="Save Money"
        description="Avoid costly broadband upgrades and new phone systems. Our solution works with your existing setup."
      />
      <FeatureCard
        icon={Wifi}
        title="No Broadband Needed"
        description="Our service uses mobile networks, so you're not tied to an internet connection."
      />
      <FeatureCard
        icon={PhoneForwarded}
        title="Keep Your Number"
        description="Port your existing landline number to our service, ensuring business continuity."
      />
      <FeatureCard
        icon={Clock}
        title="24/7 Availability"
        description="Auto call forwarding outside business hours ensures you never miss a call."
      />
      <FeatureCard
        icon={VoicemailIcon}
        title="Voicemail to Email"
        description="Receive voicemails as email attachments for easy management."
      />
      <FeatureCard
        icon={MessageSquare}
        title="SMS Integration"
        description="Send and receive SMS messages through your business number."
      />
    </div>
  </motion.div>
);

export default PSTNFeatures;