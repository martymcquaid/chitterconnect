import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const Testimonial = ({ quote, author, business }) => (
  <Card className="h-full">
    <CardContent className="pt-6">
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-muted-foreground">{business}</p>
    </CardContent>
  </Card>
);

const PSTNTestimonials = () => (
  <motion.div 
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-3xl font-bold text-center text-primary mb-8">
      What Our Customers Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Testimonial 
        quote="ChitterChat has been a game-changer for our chippy. We don't have broadband, but now we can manage our phone orders better than ever!"
        author="Mike Thompson"
        business="Thompson's Fish & Chips"
      />
      <Testimonial 
        quote="As a small café owner, I was worried about the PSTN switch-off. ChitterChat made the transition smooth and actually improved our phone system."
        author="Sarah Lee"
        business="The Cozy Corner Café"
      />
      <Testimonial 
        quote="We used to miss calls during busy hours. With ChitterChat, we never miss an order, and our customers love how quickly we respond."
        author="Li Wei"
        business="Golden Dragon Takeaway"
      />
    </div>
    <div className="mt-8 text-center">
      <img 
        src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Happy customers" 
        className="mx-auto rounded-lg shadow-lg"
      />
      <p className="mt-4 text-sm text-muted-foreground">Image: Satisfied ChitterChat customers</p>
    </div>
  </motion.div>
);

export default PSTNTestimonials;