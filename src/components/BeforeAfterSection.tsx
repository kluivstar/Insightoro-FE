
import { ArrowRight, X, Check, TrendingDown, TrendingUp } from 'lucide-react';

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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See The
            <br />
            <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your visitor experience from confusion to clarity
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Before Section */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl border border-red-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Before</h3>
                    <p className="text-red-600 font-medium">The Problem</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {beforeItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <div className="w-5 h-5 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium text-sm leading-relaxed mb-1">{item.text}</p>
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-md">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Animated Arrow */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <ArrowRight className="w-8 h-8 text-white animate-bounce" />
                </div>
                {/* Ripple effect */}
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full animate-ping"></div>
                <div className="absolute inset-2 w-12 h-12 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* After Section */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">After</h3>
                    <p className="text-green-600 font-medium">The Solution</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {afterItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium text-sm leading-relaxed mb-1">{item.text}</p>
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md">
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
