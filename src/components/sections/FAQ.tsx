"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    id: "item-1",
    question: "What is Jace AI and how does it work?",
    answer: "Jace AI is an advanced email assistant that uses artificial intelligence to draft replies, organize your inbox, and manage email-related tasks. It securely connects to your Gmail account, learns your communication style and company context, and then starts to automate your workflow, saving you hours each day.",
  },
  {
    id: "item-2",
    question: "Where can I access Jace?",
    answer: "You can access Jace through our web application. After signing up and connecting your Gmail account, you can manage your settings, review drafts, and interact with your AI assistant directly from your browser on any computer.",
  },
  {
    id: "item-3",
    question: "Is Jace available on mobile?",
    answer: "While Jace's primary interface is web-based for desktop use, its effects are visible in any email client you use, including mobile apps. Since Jace organizes your Gmail inbox directly, you'll see the sorted emails and labels on your phone. Full mobile app functionality is on our roadmap.",
  },
  {
    id: "item-4",
    question: "Does Jace send emails automatically?",
    answer: "No, Jace does not send emails without your approval. It drafts intelligent replies for you, which you can then review, edit if necessary, and send with a single click. You always remain in full control of your communications.",
  },
  {
    id: "item-5",
    question: "Do I need to install anything?",
    answer: "No installation is required. Jace is a cloud-based service that securely connects to your Gmail account via API. You just need to sign up on our website, and you can get started in under a minute without downloading any software or browser extensions.",
  },
  {
    id: "item-6",
    question: "How secure is my data with Jace?",
    answer: "Security is our top priority. We use industry-leading encryption for data in transit and at rest and are CASA Tier 3 compliant. We never train our AI models on your data, ensuring your information remains private and secure.",
  },
  {
    id: "item-7",
    question: "What integrations do you support?",
    answer: "Jace integrates seamlessly with your business tools. Out of the box, it connects with Slack, CRMs, project management software, and more, allowing it to pull context and automate tasks across your entire software stack.",
  },
  {
    id: "item-8",
    question: "Can I customize Jace's behavior?",
    answer: "Yes, Jace is highly customizable. You can create Smart Rules to define specific actions based on sender, keywords, or other criteria. This allows you to tailor Jace to your unique workflow, such as automatically CC'ing your manager on certain emails.",
  },
];

const FAQ = () => {
    const [showAll, setShowAll] = useState(false);
    
    const initialDisplayCount = 5;
    const itemsToDisplay = showAll ? faqItems : faqItems.slice(0, initialDisplayCount);
    const totalQuestions = 18;

    return (
        <section id="faq" className="bg-primary-white py-20 lg:py-[120px]">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[720px] text-center">
                    <h2 className="text-4xl font-semibold leading-tight text-primary-black sm:text-5xl sm:leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-medium">
                        Still have a question in mind?{" "}
                        <a 
                            href="mailto:support@jace.ai" 
                            className="text-gray-medium underline decoration-gray-400/80 decoration-1 underline-offset-2 transition hover:text-primary-black"
                        >
                            Contact us
                        </a>
                    </p>
                </div>

                <div className="mt-12">
                     <Accordion type="single" collapsible className="w-full">
                        {itemsToDisplay.map((item) => (
                            <AccordionItem value={item.id} key={item.id} className="border-b border-gray-200">
                                <AccordionTrigger className="py-6 text-left text-lg font-medium text-primary-black transition hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-gray-medium pb-6 pr-8">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {!showAll && (
                    <div className="mt-12 text-center">
                        <Button
                            variant="outline"
                            className="h-auto rounded-lg border-zinc-200 bg-transparent px-8 py-3.5 text-sm font-medium text-primary-black shadow-sm transition-colors hover:bg-gray-light"
                            onClick={() => setShowAll(true)}
                        >
                            Show All {totalQuestions} Questions
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FAQ;