import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, FileCheck, Globe, Users, Building, CheckCircle, Award, Zap } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-light">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-accent to-yellow-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-xl font-semibold text-primary-black">Jace</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-medium hover:text-primary-black transition-colors">Home</a>
            <a href="/features" className="text-gray-medium hover:text-primary-black transition-colors">Features</a>
            <a href="/pricing" className="text-gray-medium hover:text-primary-black transition-colors">Pricing</a>
            <a href="/security" className="text-primary-black font-medium">Security</a>
            <a href="/support" className="text-gray-medium hover:text-primary-black transition-colors">Support</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-medium hover:text-primary-black">
              Sign In
            </Button>
            <Button className="bg-primary-black hover:bg-gray-800 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gradient-pink-start to-gradient-pink-end relative overflow-hidden">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-primary-black mb-6">
            Security & Trust
          </h1>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto mb-12">
            Your data security is our top priority. Built with enterprise-grade security, 
            compliance standards, and transparent practices to keep your information safe.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-purple-accent" />
              <span className="font-medium">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
              <Lock className="w-5 h-5 text-purple-accent" />
              <span className="font-medium">256-bit Encryption</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-purple-accent" />
              <span className="font-medium">GDPR Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-primary-black mb-6">
              Our Security Commitments
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              We implement industry-leading security measures to protect your data 
              and ensure your privacy at every level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-card hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-black mb-4">
                Data Encryption
              </h3>
              <p className="text-gray-medium leading-relaxed">
                All data is encrypted in transit and at rest using AES-256 encryption, 
                the same standard used by banks and governments worldwide.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-card hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-purple-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-black mb-4">
                Access Controls
              </h3>
              <p className="text-gray-medium leading-relaxed">
                Multi-factor authentication, role-based access controls, and 
                regular access reviews ensure only authorized users access your data.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-card hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-purple-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-black mb-4">
                Continuous Monitoring
              </h3>
              <p className="text-gray-medium leading-relaxed">
                24/7 security monitoring, threat detection, and automated response 
                systems protect against potential security incidents.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-card hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-accent/10 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-purple-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-black mb-4">
                Regular Audits
              </h3>
              <p className="text-gray-medium leading-relaxed">
                Independent security audits and penetration testing ensure our 
                security measures meet the highest industry standards.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-card hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-black mb-4">
                Privacy by Design
              </h3>
              <p className="text-gray-medium leading-relaxed">
                Privacy protection is built into every aspect of our platform, 
                ensuring your personal information remains confidential.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-card hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-purple-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-black mb-4">
                Secure Infrastructure
              </h3>
              <p className="text-gray-medium leading-relaxed">
                Hosted on enterprise-grade cloud infrastructure with redundancy, 
                backup systems, and disaster recovery capabilities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-gradient-orange-start to-gradient-orange-end relative">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-primary-black mb-6">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              We adhere to the strictest compliance standards to ensure your data 
              is handled with the utmost care and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-8 text-center border-0 shadow-card bg-white/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary-black mb-2">SOC 2 Type II</h3>
              <p className="text-gray-medium text-sm">Audited security controls</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-card bg-white/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary-black mb-2">GDPR</h3>
              <p className="text-gray-medium text-sm">EU privacy regulation</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-card bg-white/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary-black mb-2">CCPA</h3>
              <p className="text-gray-medium text-sm">California privacy act</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-card bg-white/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary-black mb-2">ISO 27001</h3>
              <p className="text-gray-medium text-sm">Information security</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Handling Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-semibold text-primary-black mb-6">
                Transparent Data Handling
              </h2>
              <p className="text-xl text-gray-medium mb-8">
                We believe in complete transparency about how we collect, use, 
                and protect your data. Your privacy is not negotiable.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-purple-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-2">
                      No Data Mining
                    </h3>
                    <p className="text-gray-medium">
                      We never sell, rent, or share your personal data with third parties for marketing purposes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-purple-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-2">
                      Purpose Limitation
                    </h3>
                    <p className="text-gray-medium">
                      Your data is only used for the specific purposes you've consented to.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-purple-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-2">
                      Right to Deletion
                    </h3>
                    <p className="text-gray-medium">
                      You can request deletion of your data at any time, and we'll comply within 30 days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-purple-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-black mb-2">
                      Data Portability
                    </h3>
                    <p className="text-gray-medium">
                      Export your data in standard formats whenever you need it.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-primary-black hover:bg-gray-800 text-white">
                Read Our Privacy Policy
              </Button>
            </div>

            <Card className="p-12 border-0 shadow-card bg-gradient-to-br from-purple-accent/5 to-yellow-accent/5">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-purple-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-black mb-4">
                  $10M+
                </h3>
                <p className="text-gray-medium mb-6">
                  Cyber liability insurance coverage protecting your data
                </p>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-sm text-gray-medium">
                    Our comprehensive insurance policy covers data breaches, 
                    cyber attacks, and business interruption, ensuring you're 
                    protected even in worst-case scenarios.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gradient-pink-start to-gradient-pink-end relative">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold text-primary-black mb-6">
            Questions about security?
          </h2>
          <p className="text-xl text-gray-medium mb-8">
            Our security team is here to answer any questions and provide 
            detailed information about our security practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-black hover:bg-gray-800 text-white">
              Contact Security Team
            </Button>
            <Button variant="outline" className="border-primary-black text-primary-black hover:bg-primary-black hover:text-white">
              View Security Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-accent to-yellow-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <span className="text-xl font-semibold">Jace</span>
              </div>
              <p className="text-gray-400 mb-6">
                The AI email assistant that helps you write less and achieve more.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-3">
                <a href="/features" className="text-gray-400 hover:text-white block transition-colors">Features</a>
                <a href="/pricing" className="text-gray-400 hover:text-white block transition-colors">Pricing</a>
                <a href="/integrations" className="text-gray-400 hover:text-white block transition-colors">Integrations</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-3">
                <a href="/about" className="text-gray-400 hover:text-white block transition-colors">About</a>
                <a href="/security" className="text-gray-400 hover:text-white block transition-colors">Security</a>
                <a href="/careers" className="text-gray-400 hover:text-white block transition-colors">Careers</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-3">
                <a href="/help" className="text-gray-400 hover:text-white block transition-colors">Help Center</a>
                <a href="/contact" className="text-gray-400 hover:text-white block transition-colors">Contact</a>
                <a href="/privacy" className="text-gray-400 hover:text-white block transition-colors">Privacy</a>
                <a href="/terms" className="text-gray-400 hover:text-white block transition-colors">Terms</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Jace AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}