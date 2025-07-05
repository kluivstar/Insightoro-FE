
const StepsSection = () => {
  const steps = [
    {
      title: "We Scan Your Website",
      description: "Our AI analyzes your entire website to understand visitor behavior patterns and identify confusion points. Using advanced behavioral analysis algorithms, we examine every element of your homepage - from visual hierarchy to content placement. We identify friction points that cause visitors to hesitate or leave.",
      mockupContent: (
        <div className="w-full h-full bg-white p-4 flex flex-col">
          <div className="bg-gray-100 mb-3 h-8 flex items-center px-3">
            <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
            <div className="flex-1 bg-gray-200 ml-3 h-2"></div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-60"></div>
            <div className="relative z-10 p-3">
              <div className="bg-blue-200 h-4 mb-2 animate-pulse"></div>
              <div className="bg-blue-150 h-3 mb-3 w-3/4"></div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="bg-blue-100 h-6"></div>
                <div className="bg-blue-100 h-6"></div>
              </div>
              <div className="bg-blue-200 h-2 mb-1"></div>
              <div className="bg-blue-200 h-2 w-2/3"></div>
            </div>
            <div className="absolute top-1/4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <div className="absolute bottom-1/4 left-6 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>
      )
    },
    {
      title: "Generate Detailed Report",
      description: "Get a comprehensive report that allows your business to experience exactly what visitors see and feel when they land on your site. Our system generates a detailed breakdown of your website's first impression performance, highlighting critical issues and opportunities for improvement with actionable insights.",
      mockupContent: (
        <div className="w-full h-full bg-white p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-gray-800">Analysis Report</h4>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-red-50 border border-red-200 p-2">
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <div className="text-xs text-red-700 font-medium">Critical Issues</div>
              </div>
              <div className="bg-red-100 h-2 mb-1"></div>
              <div className="bg-red-100 h-2 w-3/4"></div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-2">
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <div className="text-xs text-yellow-700 font-medium">Improvements</div>
              </div>
              <div className="bg-yellow-100 h-2 mb-1"></div>
              <div className="bg-yellow-100 h-2 w-2/3"></div>
            </div>
            <div className="bg-green-50 border border-green-200 p-2">
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <div className="text-xs text-green-700 font-medium">Good Practices</div>
              </div>
              <div className="bg-green-100 h-2"></div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-gray-200">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Score: 72/100</span>
              <div className="w-3 h-3 bg-blue-500" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Implement Clear Solutions",
      description: "Receive specific, actionable recommendations to transform confusion into clarity and boost conversions. Get prioritized recommendations based on impact potential. Each suggestion comes with clear implementation guidance to help you optimize your visitor experience effectively.",
      mockupContent: (
        <div className="w-full h-full bg-white p-4 flex flex-col">
          <div className="flex items-center mb-3">
            <div className="w-4 h-4 bg-yellow-500 mr-2" />
            <h4 className="text-sm font-semibold text-gray-800">Recommendations</h4>
          </div>
          <div className="flex-1 space-y-2">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-2">
              <div className="text-xs font-medium text-blue-800 mb-1">High Priority</div>
              <div className="bg-blue-100 h-2 mb-1"></div>
              <div className="bg-blue-100 h-2 w-4/5"></div>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-2">
              <div className="text-xs font-medium text-orange-800 mb-1">Medium Priority</div>
              <div className="bg-orange-100 h-2 mb-1"></div>
              <div className="bg-orange-100 h-2 w-3/4"></div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-2">
              <div className="text-xs font-medium text-green-800 mb-1">Quick Wins</div>
              <div className="bg-green-100 h-2 mb-1"></div>
              <div className="bg-green-100 h-2 w-2/3"></div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-600">12 Actions</div>
              <div className="bg-blue-500 text-white text-xs px-2 py-1">
                Implement
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your website from confusing to crystal clear
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 h-full" style={{borderRadius: '2px'}}>
              {/* Image/Mockup first */}
              <div className="p-6 border-b border-gray-300">
                <div className="w-full aspect-square">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 p-4">
                    {step.mockupContent}
                  </div>
                </div>
              </div>
              
              {/* Title and description */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
