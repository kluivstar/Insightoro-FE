
import { ArrowRight, ArrowDown, X, Check, TrendingDown, TrendingUp, Sparkles } from 'lucide-react';

const BeforeAfterSection = () => {
  const beforeItems = [
    { text: "Visitors leave within 3 seconds without engaging", metric: "High bounce rate" },
    { text: "Trust signals are buried or completely missing", metric: "Low credibility" },
    { text: "Call-to-actions blend into the background", metric: "Poor conversion" },
    { text: "Message clarity creates cognitive overload", metric: "User confusion" }
  ];

  const afterItems = [
    { text: "Visitors immediately understand your value", metric: "Clear messaging" },
    { text: "Trust is established within the first glance", metric: "Strong credibility" },
    { text: "CTAs command attention and drive action", metric: "Higher conversions" },
    { text: "Smooth, intuitive user journey flows naturally", metric: "Seamless UX" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-indigo-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-gray-200/50 shadow-lg">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-700">The Transformation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            From Confusion to
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Conversion
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how visitor experience optimization transforms your website's performance
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Before Section - Made wider */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 to-red-200/20 rounded-2xl blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-red-100/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Before</h3>
                    <p className="text-red-600 font-medium text-sm">The Problem</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {beforeItems.map((item, index) => (
                    <div key={index} className="p-3 bg-red-50/80 backdrop-blur-sm rounded-lg border border-red-100/50 hover:bg-red-50 transition-colors duration-300">
                      <p className="text-gray-800 font-medium text-sm leading-relaxed mb-2">{item.text}</p>
                      <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                        {item.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Animated Arrow - Desktop (Right) / Mobile (Down) */}
            <div className="flex justify-center lg:order-none order-2">
              <div className="relative">
                {/* Multiple pulse rings */}
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full animate-ping"></div>
                <div className="absolute inset-1 w-18 h-18 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full animate-pulse delay-75"></div>
                
                {/* Main arrow container with enhanced styling */}
                <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-blue-500/25">
                  {/* Desktop: Right Arrow */}
                  <ArrowRight className="hidden lg:block w-8 h-8 text-white animate-[bounce_1s_ease-in-out_infinite] transform translate-x-1" />
                  {/* Mobile: Down Arrow */}
                  <ArrowDown className="lg:hidden w-8 h-8 text-white animate-[bounce_1s_ease-in-out_infinite] transform translate-y-1" />
                </div>
                
                {/* Enhanced scanning effect */}
                <div className="absolute inset-0 w-20 h-20 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-[scan_3s_linear_infinite] transform -skew-x-12"></div>
                </div>
              </div>
            </div>
            
            {/* After Section - Made wider */}
            <div className="relative group lg:order-none order-3">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-green-200/20 rounded-2xl blur-xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-green-100/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">After</h3>
                    <p className="text-green-600 font-medium text-sm">The Solution</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {afterItems.map((item, index) => (
                    <div key={index} className="p-3 bg-green-50/80 backdrop-blur-sm rounded-lg border border-green-100/50 hover:bg-green-50 transition-colors duration-300">
                      <p className="text-gray-800 font-medium text-sm leading-relaxed mb-2">{item.text}</p>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {item.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
