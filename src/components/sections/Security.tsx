import React from 'react';
import { Shield, Lock, Server, Eye } from 'lucide-react';

const securityPillars = [
  {
    title: 'CASA Tier 3 Compliance',
    description: 'Industry-leading security standards for sensitive data',
    icon: Shield,
  },
  {
    title: 'Encryption',
    description: 'Your emails are encrypted in transit and at rest',
    icon: Lock,
  },
  {
    title: 'Enterprise-Grade Infrastructure',
    description: 'Built on secure cloud infrastructure with 99.9% uptime',
    icon: Server,
  },
  {
    title: 'Privacy First',
    description: 'We never train AI models on your data. Your information stays yours.',
    icon: Eye,
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="bg-[#191919] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-[42px] font-semibold leading-tight tracking-tight">
            Bank-level security for your peace of mind
          </h2>
        </div>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-center lg:text-left">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title}>
                <div className="inline-flex p-3 bg-[#8b5cf610] rounded-lg mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium">{pillar.title}</h3>
                <p className="mt-2 text-gray-400 text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto my-20">
          <div className="border-t border-dashed border-white/20"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <div className="relative w-28 h-28 p-[1.5px] rounded-full bg-gradient-to-b from-[#555] to-[#222] flex-shrink-0">
            <div className="w-full h-full bg-[#191919] rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-300">GDPR</span>
            </div>
          </div>
          <div className="relative w-28 h-28 p-[1.5px] rounded-full bg-gradient-to-b from-[#555] to-[#222] flex-shrink-0">
            <div className="w-full h-full bg-[#191919] rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-300">CCPA</span>
            </div>
          </div>
          <div className="relative w-28 h-28 p-[1.5px] rounded-full bg-gradient-to-b from-purple-400 to-purple-700 shadow-[0_0_20px_rgba(139,92,246,0.5)] flex-shrink-0">
            <div className="w-full h-full bg-[#191919] rounded-full flex flex-col items-center justify-center text-center leading-tight space-y-1">
              <span className="text-[10px] font-bold text-gray-400">TIER 3</span>
              <span className="text-xl font-bold text-white">CASA</span>
              <span className="text-[10px] font-bold text-gray-400">CERTIFIED</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold">
            Secure. Private. Encrypted.
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            With CASA Tier 3 compliance and industry-leading encryption, your emails stay private, secure, and protected—always.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;