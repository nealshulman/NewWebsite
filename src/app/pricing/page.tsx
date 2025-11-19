import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose the plan that's right for you. All plans include our core features with different usage limits.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Free Plan */}
              <Card className="relative p-8 border border-gray-200 rounded-2xl bg-white shadow-lg">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Free</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">$0</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">Perfect for getting started with AI email assistance</p>
                </div>
                
                <Button className="w-full mb-8 bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300">
                  Get Started Free
                </Button>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>100 AI email drafts per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Basic smart rules</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Gmail integration</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
              </Card>

              {/* Pro Plan */}
              <Card className="relative p-8 border border-purple-200 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">$29</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">For professionals who need more AI assistance</p>
                </div>
                
                <Button className="w-full mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                  Start Free Trial
                </Button>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>1,000 AI email drafts per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Advanced smart rules</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Multiple integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>AI chief of staff features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Custom AI training</span>
                  </li>
                </ul>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative p-8 border border-gray-200 rounded-2xl bg-white shadow-lg">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">$99</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600">For teams and organizations with advanced needs</p>
                </div>
                
                <Button className="w-full mb-8 bg-gray-900 text-white hover:bg-gray-800">
                  Contact Sales
                </Button>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Unlimited AI email drafts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Team collaboration tools</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>SSO & advanced security</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-16">
              Frequently asked questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Can I change my plan at any time?</h3>
                <p className="text-gray-600 mb-8">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Is there a free trial?</h3>
                <p className="text-gray-600 mb-8">
                  Yes, we offer a 14-day free trial for our Pro plan. No credit card required.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">What happens if I exceed my plan limits?</h3>
                <p className="text-gray-600">
                  You'll receive a notification when you approach your limits. You can upgrade your plan or additional usage will be charged at our standard rates.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Do you offer refunds?</h3>
                <p className="text-gray-600 mb-8">
                  We offer a 30-day money-back guarantee for all paid plans if you're not completely satisfied.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Is my data secure?</h3>
                <p className="text-gray-600 mb-8">
                  Yes, we use enterprise-grade security with end-to-end encryption and comply with SOC 2 Type II standards.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Can I cancel anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your billing period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-5 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Ready to transform your email workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals who save hours every week with AI-powered email assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-8 py-3 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}