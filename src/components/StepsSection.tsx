
import { Eye, BarChart3, Lightbulb } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: Eye,
      number: "Step 1",
      title: "We Scan Your Website",
      description: "Our AI analyzes your entire website to understand visitor behavior patterns and identify confusion points.",
      detailedDescription: "Using advanced behavioral analysis algorithms, we examine every element of your homepage - from visual hierarchy to content placement. We identify friction points that cause visitors to hesitate or leave.",
      illustration: "🔍"
    },
    {
      icon: BarChart3,
      number: "Step 2", 
      title: "Generate Detailed Report",
      description: "Get a comprehensive report showing exactly where visitors get stuck and why they leave.",
      detailedDescription: "Our system generates a detailed breakdown of your website's first impression performance, highlighting critical issues and opportunities for improvement with actionable insights.",
      illustration: "📊"
    },
    {
      icon: Lightbulb,
      number: "Step 3",
      title: "Implement Clear Solutions",
      description: "Receive specific, actionable recommendations to transform confusion into clarity and boost conversions.",
      detailedDescription: "Get prioritized recommendations based on impact potential. Each suggestion comes with clear implementation guidance to help you optimize your visitor experience effectively.",
      illustration: "💡"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your website from confusing to crystal clear
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content Side */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {/* Step indicator */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full italic">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                    {step.description}
                  </p>
                  
                  <p className="text-gray-500 leading-relaxed">
                    {step.detailedDescription}
                  </p>
                </div>
              </div>
              
              {/* Illustration Side */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center shadow-lg border border-blue-100/50">
                    <div className="text-8xl opacity-60">{step.illustration}</div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-30"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-200 rounded-full opacity-40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
