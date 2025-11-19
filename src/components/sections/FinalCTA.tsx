import { Button } from "@/components/ui/button";
import { Clock, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FinalCTA = () => {
    return (
        <div className="bg-[#1C1C1C] rounded-[24px] overflow-hidden p-8 sm:p-12 lg:p-16 relative">
            <div className="relative text-center text-white flex flex-col items-center z-10">
                <h2 className="font-semibold text-[48px] leading-[1.2] tracking-[-0.02em]">
                    Ready to reclaim your time?
                </h2>
                <p className="mt-4 text-lg text-neutral-300 max-w-[580px]">
                    Join thousands of professionals who've already transformed their email workflow.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button
                        asChild
                        className="bg-white text-black hover:bg-neutral-200 font-medium text-sm rounded-lg h-auto px-6 py-3 transition-colors duration-300"
                    >
                        <Link href="#">Get Started for Free</Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm rounded-lg h-auto px-6 py-3 transition-colors duration-300 backdrop-blur-sm"
                    >
                        <Link href="https://cal.com/pawel-jace-ai/jace-personal-demo">Schedule Demo Call</Link>
                    </Button>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-10 text-neutral-400 text-sm font-medium">
                    <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-neutral-400" />
                        <span>7 days free trial</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-neutral-400" />
                        <span>Takes 30 seconds</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-neutral-400" />
                        <span>30days money back guarantee</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalCTA;