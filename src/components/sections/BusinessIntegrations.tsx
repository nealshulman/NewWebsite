import { Puzzle, Link, Zap } from 'lucide-react';
import React from 'react';

const BusinessIntegrations = () => {
  return (
    <section className="py-20 px-5">
      <div className="container mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-purple-100">
              <Puzzle className="h-5 w-5 text-[#8b5cf6]" />
            </div>
            <h2 className="text-[48px] font-semibold leading-[1.2] text-primary-black">
              Business Integrations
            </h2>
          </div>
          <h4 className="text-xl font-medium text-primary-black">
            Email in. Task done.
          </h4>
          <p className="mt-4 text-base leading-[1.6] text-gray-medium">
            You receive customer requests and feedback... but you have to manually create tickets, send Slack updates, and notify your team.
          </p>
          <p className="mt-4 text-base leading-[1.6] text-gray-medium">
            Now actions happen automatically when emails arrive - tickets created, Slack notifications sent, documents saved.
          </p>
          <p className="mt-4 text-base leading-[1.6] text-gray-medium">
            Complete work across all your tools without leaving email.
          </p>
        </div>

        <div className="relative flex min-h-[480px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gradient-orange-start to-gradient-orange-end p-4 shadow-card">
          <div className="h-full w-full overflow-hidden rounded-lg">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://jace.ai/v3/animations/video/integrations.webm" type="video/webm" />
              <source src="https://jace.ai/v3/animations/video/integrations.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute bottom-4 left-4 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
            +200 more!
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntegrations;