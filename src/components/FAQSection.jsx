import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ChitterChat work?",
    answer: "ChitterChat provides a single phone number that you can distribute to your clients. When someone calls this number, our smart routing system directs the call to the appropriate team member based on your predefined rules and schedules."
  },
  {
    question: "Can I use ChitterChat with my existing phone system?",
    answer: "Yes, ChitterChat is designed to integrate seamlessly with most existing phone systems. Our team can help you set up the integration to ensure smooth operation with your current infrastructure."
  },
  {
    question: "How many team members can I add to my ChitterChat account?",
    answer: "The number of team members you can add depends on your chosen plan. Our Starter plan supports up to 5 team members, while our Professional plan allows up to 15. For larger teams, our Enterprise plan offers unlimited team member support."
  },
  {
    question: "Is ChitterChat secure?",
    answer: "Absolutely. We prioritize the security and privacy of your communications. ChitterChat uses end-to-end encryption for all calls and adheres to strict data protection standards to keep your information safe."
  },
  {
    question: "Can I try ChitterChat before committing to a plan?",
    answer: "Yes, we offer a 14-day free trial for all new users. This allows you to experience the full features of ChitterChat and ensure it meets your team's needs before making a commitment."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;