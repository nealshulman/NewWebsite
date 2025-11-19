"use-client";

import { Lightbulb, Settings, Zap } from "lucide-react";

const SmartRules = () => {
  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="container mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center text-left">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-purple-100">
              <Settings className="h-5 w-5 text-[#8b5cf6]" />
            </div>
            <h2 className="text-[48px] font-semibold leading-[1.2] text-primary-black">
              Smart Rules
            </h2>
          </div>
          <h4 className="mt-6 text-xl font-medium text-primary-black">
            Your personal email assistant.
          </h4>
          <p className="mt-4 text-base leading-[1.6] text-gray-medium">
            You're managing business emails... but you constantly need to CC
            people, use templates, or create calendar events.
          </p>
          <p className="mt-4 text-base leading-[1.6] text-gray-medium">
            Now you can set custom rules that automatically handle CCs, apply
            templates, and trigger actions based on who you're emailing.
          </p>
          <div className="mt-8 flex items-start gap-4 rounded-lg border border-gray-200 p-4">
            <Zap
              className="h-5 w-5 flex-shrink-0 text-purple-accent"
              aria-hidden="true"
            />
            <p className="text-sm text-primary-black">
              Always CC my manager when we finalize contracts.
            </p>
          </div>
        </div>

        <div className="relative flex min-h-[480px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gradient-orange-start to-gradient-orange-end p-4 shadow-card">
          <div className="h-full w-full overflow-hidden rounded-lg">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/07e4863f-381a-459d-844d-47b586e5b3b1-jace-ai/assets/images/smart-rules-poster.png"
            >
              <source
                src="https://jace.ai/v3/animations/video/rules.webm"
                type="video/webm"
              />
              <source
                src="https://jace.ai/v3/animations/video/rules.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartRules;