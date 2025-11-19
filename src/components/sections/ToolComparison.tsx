import type { FC } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  price: number;
}

interface Feature {
  name: string;
  replaces: string;
}

const withoutJaceTools: Tool[] = [
  { name: 'Fyixer.ai', description: 'Email organizer', price: 35 },
  { name: 'Chat GPT', description: 'Answers many general questions', price: 23 },
  { name: 'Calendly', description: 'Scheduling tool', price: 10 },
  { name: 'Superhuman', description: 'Productivity-focused email inbox', price: 30 },
];

const withJaceFeatures: Feature[] = [
  { name: 'Full-stack AI Chief of Staff', replaces: 'Fyixer.ai' },
  { name: 'Answers any question, even about your business', replaces: 'Chat GPT' },
  { name: 'Seamless scheduling without switching apps', replaces: 'Calendly' },
  { name: 'AI-native, productivity-focused email inbox', replaces: 'Superhuman' },
];

const ToolComparison: FC = () => {
  const totalWithoutJace = withoutJaceTools.reduce((acc, tool) => acc + tool.price, 0);

  return (
    <section className="bg-gradient-to-b from-[#fff4e6] to-[#ffe6cc] py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[48px] font-semibold text-primary-black leading-tight tracking-tight">
            Replace 4 tools with one intelligent assistant
          </h2>
          <p className="mt-4 text-lg text-gray-medium leading-relaxed">
            Stop paying for multiple subscriptions. Jace consolidates your email workflow into one powerful platform.
          </p>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Without Jace Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 w-full max-w-lg lg:max-w-md">
            <ul>
              {withoutJaceTools.map((tool, index) => (
                <li key={tool.name} className={`flex justify-between items-center py-4 ${index !== withoutJaceTools.length - 1 ? 'border-b border-gray-light' : ''}`}>
                  <div>
                    <p className="font-medium text-primary-black">{tool.name}</p>
                    <p className="text-sm text-gray-medium">{tool.description}</p>
                  </div>
                  <div className="bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-primary-black">
                    ${tool.price}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-light">
              <p className="text-gray-medium">In total</p>
              <p className="text-2xl font-bold text-primary-black">
                ${totalWithoutJace}<span className="text-base font-normal text-gray-medium">/month</span>
              </p>
            </div>
          </div>
          
          <div className="text-center text-gray-400 font-bold text-2xl my-4 lg:my-0 lg:mx-4">
            VS
          </div>

          {/* With Jace Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 w-full max-w-lg lg:max-w-md">
            <div className="flex items-center justify-between pb-4">
               <div className="inline-flex items-center gap-2 rounded-lg bg-[#EBE4FF] px-4 py-2">
                 <span className="font-bold text-lg text-[#8b5cf6]">jace</span>
               </div>
            </div>
            <ul>
                {withJaceFeatures.map((feature, index) => (
                    <li key={feature.name} className={`flex items-start gap-3 py-4 ${index !== withJaceFeatures.length - 1 ? 'border-b border-gray-light' : ''}`}>
                        <CheckCircle2 className="h-5 w-5 text-purple-accent flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-medium text-primary-black">{feature.name}</p>
                            <p className="text-sm text-gray-medium">Replaces <del>{feature.replaces}</del></p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-light">
                <p className="text-gray-medium">In total</p>
                <p className="text-2xl font-bold text-primary-black">
                    $25<span className="text-base font-normal text-gray-medium">/month</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolComparison;
