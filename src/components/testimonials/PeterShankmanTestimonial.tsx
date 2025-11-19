import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface PeterShankmanTestimonialProps {
  className?: string;
}

export const PeterShankmanTestimonial: React.FC<PeterShankmanTestimonialProps> = ({
  className
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto px-4 max-w-7xl">
        <div
          className="flex items-center justify-center !flex !items-stretch !justify-between"
          style={{ gap: '20px' }}>

          {/* First Card */}
          <Card className="w-[450px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-500 p-6 flex items-center gap-4 !flex-row !px-10">
            {/* Div 1: Left vertical flex */}
            <div className="flex flex-col items-center justify-center !flex-col !items-center">
              {/* Top: PS logo */}
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex-shrink-0 flex items-center justify-center -ml-4">
                <img
                  src="https://cdn.prod.website-files.com/6595b6e9550fa8586026173f/673bc6d7ffaac4cbc88f1a68_Group%206357378.svg"
                  alt="Peter Shankman Logo"
                  className="w-full h-full object-contain !text-[23px] !p-0" />

              </div>

              {/* Bottom: stars */}
              <div className="flex text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) =>
                <Star key={i} className="w-6 h-6 fill-current" />
                )}
              </div>
            </div>

            {/* Div 2: Right vertical flex */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-800 text-lg font-medium mb-2 leading-tight">
                "If you're not using PodPitch,{' '}
                <span className="font-semibold text-gray-900 !w-[218px] !h-[67px] !whitespace-pre-line !whitespace-pre-line">
                  you're missing out big time.
                </span>"
              </p>

              <div className="text-gray-700 font-semibold">Peter Shankman</div>
              <div className="text-gray-400 text-sm mt-1 font-normal">
                Founder of HARO<br />
                July 2024
              </div>
            </div>
          </Card>

          {/* Second Card - Gini Dietrich */}
          <Card className="w-[450px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-500 p-6 flex items-center gap-4 !flex-row !px-10">
            {/* Div 1: Left vertical flex */}
            <div className="flex flex-col items-center justify-center !flex-col !items-center">
              {/* Top: Gini Dietrich logo - Removed broken image */}
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex-shrink-0 flex items-center justify-center -ml-4">
                {/* Removed broken image and alt text */}
              </div>

              {/* Bottom: stars */}
              <div className="flex text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) =>
                <Star key={i} className="w-6 h-6 fill-current" />
                )}
              </div>
            </div>

            {/* Div 2: Right vertical flex */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-800 text-lg font-medium mb-2 leading-tight">
                <span className="font-semibold text-gray-900">
                  "PR Hero makes pitching stupid simple. You should take a demo ASAP!"
                </span>
              </p>

              <div className="text-gray-700 font-semibold">Gini Dietrich</div>
              <div className="text-gray-400 text-sm mt-1 font-normal">
                Founder of Spin Sucks<br />
                August 2025.
              </div>
            </div>
          </Card>

          {/* Third Card - You */}
          <Card className="w-[450px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-500 p-6 flex items-center gap-4 !flex-row !px-10">
            {/* Div 1: Left vertical flex */}
            <div className="flex flex-col items-center justify-center !flex-col !items-center">
              {/* Top: Logo placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex-shrink-0 flex items-center justify-center -ml-4">
                {/* Empty logo area */}
              </div>

              {/* Bottom: stars */}
              <div className="flex text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) =>
                <Star key={i} className="w-6 h-6 fill-current" />
                )}
              </div>
            </div>

            {/* Div 2: Right vertical flex */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-800 text-lg font-medium mb-2 leading-tight">
                <span className="font-semibold text-gray-900 !w-[218px] !h-[67px] !whitespace-pre-line">
                  "This is better than Muck Rack, Cision, and Qwoted combined."
                </span>
              </p>

              <div className="text-gray-700 font-semibold">You</div>
              <div className="text-gray-400 text-sm mt-1 font-normal">
                Next Week
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>);

};

// Also export as default for compatibility
export default PeterShankmanTestimonial;