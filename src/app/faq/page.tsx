import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqData = [
    {
      question: "What is Jace?",
      answer: "Jace is an AI email assistant that helps you organize, respond to, and manage your email more efficiently. It integrates with Gmail to provide intelligent automation, smart rules, and AI-powered email drafting to save you time and reduce email overwhelm."
    },
    {
      question: "How does Jace integrate with Gmail?",
      answer: "Jace seamlessly integrates with your existing Gmail account through secure OAuth authentication. Once connected, Jace can read your emails, organize them according to your preferences, and help draft responses - all while maintaining the highest security standards."
    },
    {
      question: "Is my email data secure with Jace?",
      answer: "Absolutely. We take data security extremely seriously. Jace uses enterprise-grade encryption, follows SOC 2 compliance standards, and never stores your email content permanently. All data processing happens securely in the cloud with strict access controls and regular security audits."
    },
    {
      question: "What makes Jace different from other email tools?",
      answer: "Unlike traditional email tools that focus on single features, Jace provides a comprehensive AI-powered email management system. Our unique combination of smart rules, AI drafting, intelligent labeling, and business integrations makes email management truly effortless."
    },
    {
      question: "How accurate are Jace's AI responses?",
      answer: "Jace's AI is trained on millions of professional email patterns and continuously learns from your writing style and preferences. Most users report 85-95% satisfaction with AI-generated drafts, which can be easily customized before sending."
    },
    {
      question: "Can I customize Jace's behavior for my specific needs?",
      answer: "Yes! Jace is highly customizable. You can set up custom rules, train the AI on your specific writing style, configure priority levels, create custom labels, and set preferences for how different types of emails should be handled."
    },
    {
      question: "How much time can Jace save me?",
      answer: "Most users report saving 2-4 hours per week on email management. Heavy email users (100+ emails daily) often see even greater time savings through automated organization, quick AI responses, and reduced email processing time."
    },
    {
      question: "What happens if I want to cancel my subscription?",
      answer: "You can cancel your subscription at any time through your account settings. Upon cancellation, you'll retain access to Jace until the end of your current billing period. All your data can be exported, and we offer a complete data deletion option if requested."
    },
    {
      question: "Does Jace work with other email providers besides Gmail?",
      answer: "Currently, Jace is optimized for Gmail and Google Workspace accounts. We're actively working on expanding support to other email providers like Outlook and Apple Mail. Join our waitlist to be notified when additional integrations become available."
    },
    {
      question: "How do I get started with Jace?",
      answer: "Getting started is simple! Sign up for a free trial, connect your Gmail account through our secure integration, and follow our guided onboarding process. You'll be managing email more efficiently within minutes of setup."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all Jace features. No credit card required to start your trial. This gives you time to experience how Jace can transform your email management workflow."
    },
    {
      question: "Can teams and businesses use Jace?",
      answer: "Absolutely! Jace offers business plans with team management features, shared rules and templates, admin controls, and enterprise-grade security. Contact our sales team to discuss custom enterprise solutions for larger organizations."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about Jace and how our AI email assistant can transform your email experience.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 py-2 transition-all hover:shadow-md"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#1a1a1a] hover:text-[#8b5cf6] transition-colors py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b7280] leading-relaxed pb-6 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#f8e6f0] to-[#e6d7ff] rounded-2xl">
            <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
              Still have questions?
            </h3>
            <p className="text-[#6b7280] mb-6 max-w-md mx-auto">
              Our support team is here to help. Reach out and we'll get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-[#1a1a1a] text-white rounded-lg font-medium hover:bg-[#2a2a2a] transition-colors">
                Contact Support
              </button>
              <button className="px-6 py-3 bg-white text-[#1a1a1a] border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}