
import { ArrowRight, X, Check } from 'lucide-react';

const BeforeAfterSection = () => {
  const beforeItems = [
    { text: "Visitors land and feel overwhelmed", icon: "😰" },
    { text: "Trust signals are buried or missing", icon: "🤔" },
    { text: "Call-to-actions blend into the background", icon: "👻" },
    { text: "Message clarity creates cognitive friction", icon: "🧩" },
    { text: "Bounce rates climb silently", icon: "📈" }
  ];

  const afterItems = [
    { text: "Instant clarity and understanding", icon: "💡" },
    { text: "Trust is established within seconds", icon: "🤝" },
    { text: "CTAs are impossible to miss", icon: "🎯" },
    { text: "Smooth, effortless user journey", icon: "✨" },
    { text: "Visitors stay, engage, and convert", icon: "🚀" }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            The Complete
            <br />
            <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch how Insightoro transforms your visitors' emotional journey from confusion to clarity.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Before Section */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-white p-10 rounded-3xl border border-red-200/50 shadow-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                      <X className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Before Insightoro</h3>
                      <p className="text-red-600 font-medium">The Struggle</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {beforeItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="hidden lg:flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* After Section */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-white p-10 rounded-3xl border border-green-200/50 shadow-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">After Insightoro</h3>
                      <p className="text-green-600 font-medium">The Success</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {afterItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
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
