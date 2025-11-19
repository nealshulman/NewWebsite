'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Checkmark = () => (
  <div className="w-2 h-2 bg-[#E1D1FF] rounded-full flex-shrink-0 mt-1.5" />
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'Plus plan',
      description: 'Perfect for busy professionals',
      monthlyPrice: '19.58',
      yearlyPrice: '17.50',
      features: [
        '1 inbox and calendar per user (Try for free)',
        'The best email drafts on the market',
        'Email Sorting and Categorization',
        'AI Chief of Staff - Jace chat',
      ],
      ctaText: 'Get Started for Free',
      ctaLink: '#',
      isPopular: false,
    },
    {
      name: 'Pro Plan',
      description: 'For teams and power users',
      monthlyPrice: '45.00',
      yearlyPrice: '39.00',
      features: [
        'Everything in Plus',
        'Extended usage limits',
        'Priority support',
        'Custom integrations',
        'Multi-Account Support',
      ],
      ctaText: 'Get Started for Free',
      ctaLink: '#',
      isPopular: true,
    },
    {
      name: 'Team Plan',
      description: 'Most powerful model for your business',
      priceText: 'Talk to sales',
      features: [
        'Talk to us about advanced features for bigger teams',
        'Team wide-rules',
        'Usage-based pricing',
        'Dedicated Account Manager',
      ],
      ctaText: 'Talk to sales',
      ctaLink: 'mailto:support@jace.ai',
      isPopular: false,
      isCustom: true,
    },
  ];

  return (
    <section id="pricing" className="bg-gradient-to-b from-[#FFF4E6] to-[#FFE6CC] py-20 lg:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary-black tracking-tight">
            Perfect knowledge and perfect voice
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 my-10">
          <div className="relative">
            <span className={cn('text-sm font-medium', isYearly ? 'text-primary-black' : 'text-gray-medium')}>
              Bill yearly
            </span>
            <div className="absolute -top-6 -right-12 bg-yellow-accent text-primary-black text-xs font-semibold px-2 py-0.5 rounded-full">
              60% off
            </div>
          </div>
          <Switch
            checked={!isYearly}
            onCheckedChange={(checked) => setIsYearly(!checked)}
            aria-label="Toggle between yearly and monthly billing"
          />
          <span className={cn('text-sm font-medium', !isYearly ? 'text-primary-black' : 'text-gray-medium')}>
            Bill monthly
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-2xl p-8 flex flex-col h-full shadow-card relative',
                plan.isPopular ? 'bg-[#F9F9FA] border-t-4 border-purple-accent' : 'bg-white/70 border border-transparent',
                index === 0 ? 'lg:mt-6' : '',
                index === 2 ? 'lg:mt-6' : ''
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-accent text-primary-black text-sm font-medium px-4 py-1 rounded-full">
                  Most popular
                </div>
              )}
              
              <h3 className="text-lg font-semibold text-primary-black">{plan.name}</h3>
              
              {plan.isCustom ? (
                <div className="mt-4">
                  <p className="text-5xl font-semibold leading-none text-primary-black">
                    {plan.priceText}
                  </p>
                </div>
              ) : (
                <div className="mt-4">
                  <span className="text-5xl font-semibold text-primary-black">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-base text-gray-medium">/month</span>
                </div>
              )}
              
              <p className="mt-4 text-sm text-gray-medium h-10">{plan.description}</p>
              
              <ul className="space-y-4 my-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-sm">
                    <Checkmark />
                    <span className="text-primary-black leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button 
                    asChild 
                    size="lg" 
                    className={cn(
                        'w-full text-base h-12 rounded-lg',
                        plan.isPopular ? 'bg-primary-black text-white hover:bg-black/80' : 
                        plan.isCustom ? 'bg-white text-primary-black border border-gray-300 hover:bg-gray-100' : 
                        'bg-primary-black text-white hover:bg-black/80'
                    )}
                >
                  <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                </Button>
                {!plan.isCustom && (
                  <p className="text-center text-xs text-gray-medium mt-4">
                    Your 7-day free trial included – cancel anytime
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
