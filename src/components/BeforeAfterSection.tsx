
import { ArrowRight, X, Check, TrendingDown, TrendingUp, Sparkles } from 'lucide-react';

const BeforeAfterSection = () => {
  const beforeItems = [
    { text: "Visitors leave within 3 seconds without engaging", metric: "High bounce rate", icon: "🔥" },
    { text: "Trust signals are buried or completely missing", metric: "Low credibility", icon: "⚠️" },
    { text: "Call-to-actions blend into the background", metric: "Poor conversion", icon: "👻" },
    { text: "Message clarity creates cognitive overload", metric: "User confusion", icon: "🌪️" }
  ];

  const afterItems = [
    { text: "Visitors immediately understand your value", metric: "Clear messaging", icon: "💡" },
    { text: "Trust is established within the first glance", metric: "Strong credibility", icon: "🛡️" },
    { text: "CTAs command attention and drive action", metric: "Higher conversions", icon: "🎯" },
    { text: "Smooth, intuitive user journey flows naturally", metric: "Seamless UX", icon: "✨" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-indigo-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-gray-200/50 shadow-lg">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-700">The Transformation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
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
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Before Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-red-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-red-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingDown className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Before</h3>
                    <p className="text-red-600 font-semibold">The Problem</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {beforeItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-red-50/80 backdrop-blur-sm rounded-xl border border-red-100/50 hover:bg-red-50 transition-colors duration-300">
                      <div className="text-xl">{item.icon}</div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium text-sm leading-relaxed mb-2">{item.text}</p>
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Animated Arrow */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Multiple pulse rings */}
                <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full animate-ping"></div>
                <div className="absolute inset-1 w-22 h-22 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full animate-pulse delay-75"></div>
                <div className="absolute inset-2 w-20 h-20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full animate-pulse delay-150"></div>
                
                {/* Main arrow container with enhanced styling */}
                <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500 hover:shadow-blue-500/25">
                  <ArrowRight className="w-10 h-10 text-white animate-[bounce_1s_ease-in-out_infinite] transform translate-x-1" />
                </div>
                
                {/* Enhanced scanning effect */}
                <div className="absolute inset-0 w-24 h-24 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-[scan_3s_linear_infinite] transform -skew-x-12"></div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
            
            {/* After Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-green-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-green-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">After</h3>
                    <p className="text-green-600 font-semibold">The Solution</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {afterItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-green-50/80 backdrop-blur-sm rounded-xl border border-green-100/50 hover:bg-green-50 transition-colors duration-300">
                      <div className="text-xl">{item.icon}</div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium text-sm leading-relaxed mb-2">{item.text}</p>
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          {item.metric}
                        </span>
                      </div>
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
