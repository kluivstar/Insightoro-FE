
import { Eye, Target, AlertTriangle, Zap } from 'lucide-react';

const SignatureFeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "First 3 Seconds Test",
      description: "See exactly what happens when someone lands on your page for the very first time."
    },
    {
      icon: Eye,
      title: "Visual Clarity Meter",
      description: "Get a clear score on how easy your homepage is to understand at first glance."
    },
    {
      icon: Target,
      title: "CTA Visibility Score",
      description: "Discover if your call-to-action buttons actually stand out to new visitors."
    },
    {
      icon: AlertTriangle,
      title: "Confusion Triggers",
      description: "Identify specific elements that might be causing visitors to leave quickly."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Signature Touches
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Four powerful insights that reveal exactly how first-time visitors experience your website.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-brand-blue-light p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureFeaturesSection;
