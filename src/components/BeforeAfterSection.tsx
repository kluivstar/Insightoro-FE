
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
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.05),transparent_50%)]"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            The Business
            <br />
            <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how Insightoro transforms your visitor experience from friction to flow, 
            turning lost opportunities into measurable business growth.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Before Section */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white p-12 rounded-3xl border border-red-100 shadow-2xl">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingDown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Before Insightoro</h3>
                      <p className="text-red-600 font-semibold text-lg">The Hidden Revenue Leak</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    {beforeItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-6 p-4 bg-red-50/50 rounded-xl border border-red-100/50">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 text-lg font-medium leading-relaxed mb-2">{item.text}</p>
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                            {item.metric}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
            </div>
            
            {/* After Section */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white p-12 rounded-3xl border border-green-100 shadow-2xl">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">After Insightoro</h3>
                      <p className="text-green-600 font-semibold text-lg">The Growth Catalyst</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    {afterItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-6 p-4 bg-green-50/50 rounded-xl border border-green-100/50">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 text-lg font-medium leading-relaxed mb-2">{item.text}</p>
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
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
      </div>
    </section>
  );
};

export default BeforeAfterSection;
