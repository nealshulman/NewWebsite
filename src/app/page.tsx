import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import LogoWall from '@/components/sections/LogoWall';
import ThreeFunctions from '@/components/sections/ThreeFunctions';
import ProcessSteps from '@/components/sections/ProcessSteps';
import FeaturesOverview from '@/components/sections/FeaturesOverview';
import EmailDrafts from '@/components/sections/EmailDrafts';
import SmartRules from '@/components/sections/SmartRules';
import BusinessIntegrations from '@/components/sections/BusinessIntegrations';
import AILabels from '@/components/sections/AILabels';
import ChiefOfStaff from '@/components/sections/ChiefOfStaff';
import VideoDemo from '@/components/sections/VideoDemo';
import Testimonial from '@/components/sections/Testimonial';
import Pricing from '@/components/sections/Pricing';
import ToolComparison from '@/components/sections/ToolComparison';
import SecuritySection from '@/components/sections/Security';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import { AutoSwipingTestimonials } from '@/components/sections/AutoSwipingTestimonials';
import PeterShankmanTestimonial from '@/components/testimonials/PeterShankmanTestimonial';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <section className="bg-gradient-to-b from-[#f8e6f0] to-[#e6d7ff] py-12">
          <PeterShankmanTestimonial />
        </section>
        <LogoWall />
        <ThreeFunctions />
        <ProcessSteps />
        <FeaturesOverview />
        <EmailDrafts />
        <SmartRules />
        <BusinessIntegrations />
        <AILabels />
        <ChiefOfStaff />
        <VideoDemo />
        <AutoSwipingTestimonials />
        <Pricing />
        <ToolComparison />
        <SecuritySection />
        <FAQ />
        <section className="bg-primary-white py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FinalCTA />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}