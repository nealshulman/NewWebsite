import { Info } from "lucide-react";

const ChiefOfStaff = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">
          {/* Left Column: Text content */}
          <div>
            <div className="max-w-xl">
              <h3 className="text-4xl font-semibold tracking-tight text-[#1a1a1a]">
                AI Chief of Staff
              </h3>
              <h4 className="mt-4 text-2xl font-semibold tracking-tight text-[#1a1a1a]">
                Ask anything. Get it done.
              </h4>
              <p className="mt-6 text-base leading-7 text-gray-600">
                You need business information or want to complete tasks... but
                searching through emails, docs, and tools takes forever.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Now ask your AI assistant anything about your business and get
                instant answers plus actions completed.
              </p>
              <div className="mt-8 flex items-start gap-x-4 rounded-xl bg-[#f4f0ff] p-4 ring-1 ring-inset ring-[#e3d7ff]">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#8b5cf6]">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-6 text-[#5c3bd3]">
                    <span className="font-bold">Chat with Jace</span> to fetch
                    data, create docs, and automate tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Video */}
          <div className="relative aspect-[1.3] w-full rounded-2xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:aspect-[1.4] lg:rounded-3xl">
            <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
              >
                <source
                  src="https://jace.ai/v3/animations/video/chat.webm"
                  type="video/webm"
                />
                <source
                  src="https://jace.ai/v3/animations/video/chat.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute inset-x-0 top-0 z-10 flex h-10 items-center justify-center bg-white/50 backdrop-blur-sm">
              <p className="text-xs font-medium text-gray-600">
                Chat with Jace
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefOfStaff;
