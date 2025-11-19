import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Users, DollarSign, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#f8e6f0] to-[#e6d7ff] rounded-[16px] p-16 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h1 className="text-[72px] font-[700] leading-[1.1] text-[#1a1a1a] mb-6">
                Join the Jace
                <br />
                Affiliate Program
              </h1>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] mb-8 max-w-2xl mx-auto">
                Partner with Jace and earn generous commissions while helping businesses automate their email workflows with AI-powered assistance.
              </p>
              <Button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-[8px] font-[500] text-[14px] hover:bg-[#2a2a2a] transition-colors duration-300">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-[600] leading-[1.2] text-[#1a1a1a] mb-6">
              Why Partner with Jace?
            </h2>
            <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] max-w-2xl mx-auto">
              Join a growing network of partners earning substantial commissions while promoting cutting-edge AI email automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-[#f3f4f6] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#8b5cf6] rounded-[8px] flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[24px] font-[600] text-[#1a1a1a] mb-4">
                High Commissions
              </h3>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] mb-4">
                Earn up to 30% recurring commission on every successful referral with no cap on earnings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  30-day cookie duration
                </li>
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  Monthly payouts
                </li>
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  No minimum threshold
                </li>
              </ul>
            </Card>

            <Card className="p-8 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-[#f3f4f6] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#fbbf24] rounded-[8px] flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[24px] font-[600] text-[#1a1a1a] mb-4">
                Premium Support
              </h3>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] mb-4">
                Get dedicated support, marketing materials, and training to maximize your success.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  Dedicated affiliate manager
                </li>
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  Marketing assets provided
                </li>
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  Performance analytics
                </li>
              </ul>
            </Card>

            <Card className="p-8 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-[#f3f4f6] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#8b5cf6] rounded-[8px] flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[24px] font-[600] text-[#1a1a1a] mb-4">
                Growing Market
              </h3>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] mb-4">
                Promote a product with proven demand in the rapidly growing AI automation space.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  High conversion rates
                </li>
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  Enterprise customers
                </li>
                <li className="flex items-center text-[14px] text-[#6b7280]">
                  <Check className="h-4 w-4 text-[#8b5cf6] mr-2" />
                  Recurring revenue model
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#fff4e6] to-[#ffe6cc] rounded-[16px] p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-[48px] font-[600] leading-[1.2] text-[#1a1a1a] mb-6">
                  Commission Structure
                </h2>
                <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] max-w-2xl mx-auto">
                  Earn competitive commissions on all plans with performance bonuses for top affiliates.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-8 rounded-[16px] bg-white/80 backdrop-blur-sm border-[#f3f4f6] text-center">
                  <div className="text-[32px] font-[700] text-[#8b5cf6] mb-2">20%</div>
                  <h3 className="text-[20px] font-[600] text-[#1a1a1a] mb-4">Starter Plan</h3>
                  <p className="text-[14px] text-[#6b7280] mb-4">$29/month plans</p>
                  <div className="text-[24px] font-[600] text-[#1a1a1a]">$5.80/month</div>
                  <p className="text-[12px] text-[#6b7280] mt-2">recurring commission</p>
                </Card>

                <Card className="p-8 rounded-[16px] bg-white/80 backdrop-blur-sm border-[#8b5cf6] border-2 text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#8b5cf6] text-white px-4 py-1 rounded-[8px] text-[12px] font-[500]">
                    Most Popular
                  </div>
                  <div className="text-[32px] font-[700] text-[#8b5cf6] mb-2">25%</div>
                  <h3 className="text-[20px] font-[600] text-[#1a1a1a] mb-4">Professional Plan</h3>
                  <p className="text-[14px] text-[#6b7280] mb-4">$79/month plans</p>
                  <div className="text-[24px] font-[600] text-[#1a1a1a]">$19.75/month</div>
                  <p className="text-[12px] text-[#6b7280] mt-2">recurring commission</p>
                </Card>

                <Card className="p-8 rounded-[16px] bg-white/80 backdrop-blur-sm border-[#f3f4f6] text-center">
                  <div className="text-[32px] font-[700] text-[#8b5cf6] mb-2">30%</div>
                  <h3 className="text-[20px] font-[600] text-[#1a1a1a] mb-4">Enterprise Plan</h3>
                  <p className="text-[14px] text-[#6b7280] mb-4">$199/month plans</p>
                  <div className="text-[24px] font-[600] text-[#1a1a1a]">$59.70/month</div>
                  <p className="text-[12px] text-[#6b7280] mt-2">recurring commission</p>
                </Card>
              </div>

              <div className="text-center mt-12">
                <p className="text-[14px] text-[#6b7280] mb-6">
                  * Commission rates increase with performance. Top affiliates earn up to 35% commission.
                </p>
                <Button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-[8px] font-[500] text-[14px] hover:bg-[#2a2a2a] transition-colors duration-300">
                  Start Earning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-[600] leading-[1.2] text-[#1a1a1a] mb-6">
              How It Works
            </h2>
            <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] max-w-2xl mx-auto">
              Getting started as a Jace affiliate is simple. Follow these three steps to begin earning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[32px] font-[700] text-white">1</span>
              </div>
              <h3 className="text-[24px] font-[600] text-[#1a1a1a] mb-4">Apply & Get Approved</h3>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280]">
                Submit your application and get approved within 24 hours. No experience required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[32px] font-[700] text-white">2</span>
              </div>
              <h3 className="text-[24px] font-[600] text-[#1a1a1a] mb-4">Share Your Link</h3>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280]">
                Use your unique affiliate link to promote Jace across your channels and networks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[32px] font-[700] text-white">3</span>
              </div>
              <h3 className="text-[24px] font-[600] text-[#1a1a1a] mb-4">Earn Commissions</h3>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280]">
                Get paid monthly for every successful referral with no limits on your earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-[#f3f4f6]">
            <div className="text-center mb-12">
              <h2 className="text-[48px] font-[600] leading-[1.2] text-[#1a1a1a] mb-6">
                Affiliate Requirements
              </h2>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] max-w-2xl mx-auto">
                We're looking for partners who align with our values and can effectively promote Jace.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[20px] font-[600] text-[#1a1a1a] mb-4">Who We're Looking For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <span className="text-[16px] text-[#6b7280]">SaaS reviewers and bloggers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <span className="text-[16px] text-[#6b7280]">YouTube creators and podcasters</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <span className="text-[16px] text-[#6b7280]">Business consultants</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <span className="text-[16px] text-[#6b7280]">Social media influencers in business/tech</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[20px] font-[600] text-[#1a1a1a] mb-4">Basic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <span className="text-[16px] text-[#6b7280]">Active online presence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <span className="text-[16px] text-[#6b7280]">Quality content creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <span className="text-[16px] text-[#6b7280]">Audience interested in business tools</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#8b5cf6] mr-3 mt-0.5" />
                    <span className="text-[16px] text-[#6b7280]">Commitment to ethical promotion</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#f8e6f0] to-[#e6d7ff] rounded-[16px] p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-[48px] font-[600] leading-[1.2] text-[#1a1a1a] mb-6">
                Ready to Start Earning?
              </h2>
              <p className="text-[16px] font-[400] leading-[1.6] text-[#6b7280] mb-8 max-w-2xl mx-auto">
                Join our affiliate program today and start earning commissions while helping businesses automate their email workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-[8px] font-[500] text-[14px] hover:bg-[#2a2a2a] transition-colors duration-300">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 rounded-[8px] font-[500] text-[14px] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                  Learn More
                </Button>
              </div>
              <p className="text-[14px] text-[#6b7280] mt-6">
                Questions? Email us at <span className="text-[#8b5cf6]">affiliates@jace.ai</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}