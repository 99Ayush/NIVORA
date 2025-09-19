import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Nivora?",
    answer: "Nivora is a platform designed to help students find the best PGs, messes, and flats near their college with AI-powered insights and user reviews."
  },
  {
    question: "How do I search for accommodations?",
    answer: "Simply select your city and college from the dropdown menus on the homepage and click 'Search Accommodations' to see a list of available options."
  },
  {
    question: "Are the listings on Nivora verified?",
    answer: "We strive to provide accurate information based on user-submitted reviews. We recommend visiting the location before making any commitments."
  },
  {
    question: "Can I list my own property?",
    answer: "Currently, we do not have a feature for property owners to list their accommodations directly. This feature may be added in the future."
  }
];

export default function Help() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-headline">Help & Support</h2>
        <p className="text-muted-foreground mt-2">
          Have questions? We've got answers.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
