
import { Eye, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: Eye,
      number: "Step 1",
      title: "We Scan Your Website",
      description: "Our AI analyzes your entire website to understand visitor behavior patterns and identify confusion points.",
      illustration: "🔍"
    },
    {
      icon: BarChart3,
      number: "Step 2", 
      title: "Generate Detailed Report",
      description: "Get a comprehensive report showing exactly where visitors get stuck and why they leave.",
      illustration: "📊"
    },
    {
      icon: Lightbulb,
      number: "Step 3",
      title: "Implement Clear Solutions",
      description: "Receive specific, actionable recommendations to transform confusion into clarity and boost conversions.",
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
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-6 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </div>
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Step number and illustration */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{step.illustration}</div>
                  <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full italic">
                    {step.number}
                  </div>
                </div>
                
                {/* Icon and title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                
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
