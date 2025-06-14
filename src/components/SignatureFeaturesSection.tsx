
import { Scan, Eye, Brain, MousePointer, Zap, TrendingUp } from 'lucide-react';

const SignatureFeaturesSection = () => {
  const features = [
    {
      icon: Scan,
      title: "First 5 Second Test",
      subtitle: "Make or break moments",
      description: "Deep behavioral analysis reveals what visitors see and feel in their crucial first 5 seconds on your site. Research shows that users form lasting impressions within milliseconds - we ensure yours is compelling and clear.",
      businessImpact: "Reduce bounce rate by up to 50%",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50"
    },
    {
      icon: Eye,
      title: "Visual Clarity Analysis",
      subtitle: "First impressions matter",
      description: "Comprehensive evaluation of how quickly visitors understand your core message and value proposition. Research shows 55% of visitors spend less than 15 seconds on a website - we help you maximize those crucial opening moments.",
      businessImpact: "Increase engagement rates by up to 40%",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100/50"
    },
    {
      icon: Brain,
      title: "Emotional Response Mapping",
      subtitle: "Build trust instantly",
      description: "Advanced psychological analysis of the emotional journey your visitors experience from landing to action. We analyze trust signals, credibility markers, and emotional triggers that influence purchasing decisions.",
      businessImpact: "Increase customer trust and brand perception",
      gradient: "from-blue-600 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: MousePointer,
      title: "CTA Visibility Score",
      subtitle: "Drive more conversions",
      description: "Data-driven optimization of your call-to-action placement, design, and messaging for maximum impact. We analyze visual hierarchy, contrast ratios, and positioning to ensure your CTAs command attention.",
      businessImpact: "Boost click-through rates by 25-60%",
      gradient: "from-indigo-600 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full mb-8">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">Signature Analysis</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Four Pillars of
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              First Impressions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Advanced behavioral analysis reveals exactly what your visitors experience in those critical first moments, 
            providing actionable insights to transform confusion into clarity and browsers into customers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative p-10 rounded-3xl bg-gradient-to-br ${feature.bgGradient} border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
            >
              {/* Minimal hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 mb-4">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/80">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800">{feature.businessImpact}</span>
                </div>
              </div>
              
              {/* Minimal decorative elements */}
              <div className={`absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r ${feature.gradient} rounded-full opacity-5`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureFeaturesSection;
