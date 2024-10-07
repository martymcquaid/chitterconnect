import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    quote: "ChitterChat has revolutionized our on-call system. Our team response time has improved by 50%!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Michael Lee",
    company: "HealthCare Solutions",
    quote: "As a healthcare provider, we need reliable communication. ChitterChat delivers every time.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    name: "Emily Brown",
    company: "Retail Giants",
    quote: "Managing our store managers' on-call schedules has never been easier. Thank you, ChitterChat!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-card hover:bg-card/90 transition-colors duration-300">
              <CardHeader>
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <CardTitle className="text-center text-primary">{testimonial.name}</CardTitle>
                <p className="text-sm text-center text-muted-foreground">{testimonial.company}</p>
              </CardHeader>
              <CardContent>
                <p className="italic text-center">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;