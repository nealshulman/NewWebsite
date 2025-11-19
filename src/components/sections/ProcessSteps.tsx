import { Button } from "@/components/ui/button";

const STEPS = [
  {
    badge: "Add your client in 60 seconds",
    badgeBg: "bg-[#E8DAF5]",
    cardBg: "from-[#F2ECF9]",
    title: "Add a Client",
    description: "Just enter your client's name and website—PR Hero sets up everything automatically.",
    video: {
      webm: "https://jace.ai/v3/animations/video/folders.webm",
      mp4: "https://jace.ai/v3/animations/video/folders.mp4",
    },
  },
  {
    badge: "Starts pitching in 5 minutes",
    badgeBg: "bg-[#FFE5C1]",
    cardBg: "from-[#FFF2E0]",
    title: "PR Hero personalizes everything",
    description:
      "No templates, no busywork—PR Hero learns your brand voice, finds the right shows, writers, and newsletters, and sends tailored pitches.",
    video: {
      webm: "https://jace.ai/v3/animations/video/draft.webm",
      mp4: "https://jace.ai/v3/animations/video/draft.mp4",
    },
  },
  {
    badge: "Save 10+ hours a week",
    badgeBg: "bg-[#D6D6FD]",
    cardBg: "from-[#E7E7FF]",
    title: "Reply without lifting a finger",
    description:
      "When replies come in, PR Hero drafts the perfect follow-up. Just click send—or let it run on autopilot.",
    video: {
      webm: "https://jace.ai/v3/animations/video/drafts.webm",
      mp4: "https://jace.ai/v3/animations/video/drafts.mp4",
    },
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-[#FCFBFA] py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
          <div className="max-w-lg">
            <h2 className="text-[44px] font-semibold leading-[52px] text-primary-black">
              Do PR 10X Faster, Smarter, and Better
            </h2>
            <p className="text-gray-medium mt-4 text-base">
              See how PR Hero automates outreach, surfaces hidden opportunities, and handles follow-up—so you land more coverage with less effort.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Button
              className="bg-primary-black text-primary-white hover:bg-black/90 rounded-lg text-sm font-medium px-5 h-10"
            >
              Get Started for Free
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${step.cardBg} to-[#FCFBFA] rounded-[20px] p-8 flex flex-col justify-between overflow-hidden`}
            >
              <div>
                <span className={`inline-block py-1 px-3 text-sm font-medium ${step.badgeBg} rounded-full text-primary-black`}>
                  {step.badge}
                </span>
                <h3 className="text-2xl font-semibold mt-4 text-primary-black">
                  {step.title}
                </h3>
                <p className="text-gray-medium mt-2 text-[15px] leading-6">
                  {step.description}
                </p>
              </div>
              <div className="mt-8 -mx-8 -mb-8">
                <video
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={step.video.webm} type="video/webm" />
                  <source src={step.video.mp4} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;