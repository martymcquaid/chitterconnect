import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    quote: "ChitterChat has revolutionized our on-call system. Our team response time has improved by 50%!"
  },
  {
    name: "Michael Lee",
    company: "HealthCare Solutions",
    quote: "As a healthcare provider, we need reliable communication. ChitterChat delivers every time."
  },
  {
    name: "Emily Brown",
    company: "Retail Giants",
    quote: "Managing our store managers' on-call schedules has never been easier. Thank you, ChitterChat!"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </CardHeader>
            <CardContent>
              <p className="italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;