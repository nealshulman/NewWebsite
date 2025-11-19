import React from 'react';
import { Mail, FileText } from 'lucide-react';

const EmailDrafts = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFDFB] via-[#FFFDFB] to-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-24">
          {/* Text Content */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <Mail className="h-5 w-5 text-[#8b5cf6]" />
              </div>
              <p className="font-semibold text-[#8b5cf6]">
                AI Email Drafts
              </p>
            </div>
            <h3 className="text-4xl font-semibold leading-tight tracking-tight text-[#1a1a1a] lg:text-[48px] lg:leading-[1.2]">
              Spend 5 seconds per email, not 10 minutes
            </h3>
            <div className="mt-6 space-y-4 text-base font-normal leading-[1.6] text-[#6b7280]">
              <p>
                You're trying to respond to an important email... but it takes
                forever to check attachments, remember Slack discussions, and
                review previous conversations.
              </p>
              <p>
                Now you get intelligent drafts that include all the context
                automatically - attachments analyzed, calendar checked, Slack
                reviewed.
              </p>
              <p>
                Spend 5 seconds reviewing instead of 10 minutes researching.
              </p>
            </div>
          </div>

          {/* Video Content */}
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#e6d7ff] to-[#fff4e6] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              key="draft-video"
            >
              <source src="https://jace.ai/v3/animations/video/draft.webm" type="video/webm" />
              <source src="https://jace.ai/v3/animations/video/draft.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailDrafts;