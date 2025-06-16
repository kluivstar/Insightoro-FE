
import { Eye, BarChart3, Lightbulb } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: Eye,
      number: "01",
      title: "We Scan Your Website",
      description: "Our AI analyzes your entire website to understand visitor behavior patterns and identify confusion points."
    },
    {
      icon: BarChart3,
      number: "02", 
      title: "Generate Detailed Report",
      description: "Get a comprehensive report showing exactly where visitors get stuck and why they leave."
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Implement Clear Solutions",
      description: "Receive specific, actionable recommendations to transform confusion into clarity and boost conversions."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your website from confusing to crystal clear
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg mx-auto flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
