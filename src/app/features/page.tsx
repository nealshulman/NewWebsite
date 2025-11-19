import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FeaturesOverview from "@/components/sections/FeaturesOverview";
import EmailDrafts from "@/components/sections/EmailDrafts";
import SmartRules from "@/components/sections/SmartRules";
import BusinessIntegrations from "@/components/sections/BusinessIntegrations";
import AILabels from "@/components/sections/AILabels";
import ChiefOfStaff from "@/components/sections/ChiefOfStaff";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Zap, Target, Users, Brain, Shield, Workflow, MessageSquare } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#f8e6f0] to-[#e6d7ff]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm">
            <Bot className="w-4 h-4 text-[#8b5cf6]" />
            <span className="text-sm font-medium text-gray-800">AI-Powered Email Management</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-[#1a1a1a] mb-6 leading-[1.1]">
            Features that transform
            <br />
            your email workflow
          </h1>
          
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover the powerful AI capabilities that help thousands of professionals 
            manage their inbox more efficiently and focus on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-4 text-base rounded-lg transition-all duration-300">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-8 py-4 text-base rounded-lg transition-all duration-300">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-[#1a1a1a] mb-6">
              Everything you need to manage email
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              From AI-powered drafting to intelligent automation, our features work together 
              to give you back hours of your day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* AI Email Drafts */}
            <Card className="p-8 bg-white border-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">AI Email Drafts</h3>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Generate professional email responses in seconds with context-aware AI that understands your communication style.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Context-aware responses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Personal tone matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Multi-language support</span>
                </div>
              </div>
            </Card>

            {/* Smart Rules */}
            <Card className="p-8 bg-white border-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Smart Rules</h3>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Automate email management with intelligent rules that learn from your behavior and adapt over time.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#fbbf24] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Automatic categorization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#fbbf24] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Priority detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#fbbf24] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Custom workflows</span>
                </div>
              </div>
            </Card>

            {/* AI Labels */}
            <Card className="p-8 bg-white border-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">AI Labels</h3>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Automatically organize emails with intelligent labeling that understands content, context, and importance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Content analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Smart categorization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Custom label creation</span>
                </div>
              </div>
            </Card>

            {/* Business Integrations */}
            <Card className="p-8 bg-white border-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-xl flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Business Integrations</h3>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Connect with your favorite tools and platforms for seamless workflow automation across your business.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">CRM synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Calendar integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Task management</span>
                </div>
              </div>
            </Card>

            {/* AI Chief of Staff */}
            <Card className="p-8 bg-white border-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">AI Chief of Staff</h3>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Get intelligent insights and recommendations to optimize your email management and productivity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Performance analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Smart recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">Productivity insights</span>
                </div>
              </div>
            </Card>

            {/* Advanced Security */}
            <Card className="p-8 bg-white border-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Advanced Security</h3>
              <p className="text-[#6b7280] leading-relaxed mb-6">
                Enterprise-grade security measures to protect your sensitive email data and maintain compliance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#ef4444] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#ef4444] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">GDPR compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#ef4444] rounded-full"></div>
                  <span className="text-sm text-[#6b7280]">SOC 2 certified</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Showcase Sections */}
      <FeaturesOverview />
      <EmailDrafts />
      <SmartRules />
      <BusinessIntegrations />
      <AILabels />
      <ChiefOfStaff />

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#fff4e6] to-[#ffe6cc]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold text-[#1a1a1a] mb-6">
            Ready to transform your email workflow?
          </h2>
          <p className="text-xl text-[#6b7280] mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who have already revolutionized their email management with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-10 py-4 text-lg rounded-lg transition-all duration-300">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-10 py-4 text-lg rounded-lg transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}