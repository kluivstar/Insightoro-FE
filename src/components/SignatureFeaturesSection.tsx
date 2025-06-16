
import { Scan, Eye, Brain, MousePointer, Zap, TrendingUp } from 'lucide-react';

const SignatureFeaturesSection = () => {
  const features = [
    {
      icon: Scan,
      title: "First 5 Second Test",
      subtitle: "Make or break moments",
      description: "Deep behavioral analysis reveals what visitors see and feel in their crucial first 5 seconds. Research shows users form lasting impressions within milliseconds.",
      businessImpact: "Reduce bounce rate by up to 50%",
      gradient: "from-gray-600 to-gray-700",
      bgGradient: "from-gray-50 to-gray-100/50"
    },
    {
      icon: Eye,
      title: "Visual Clarity Analysis",
      subtitle: "First impressions matter",
      description: "Comprehensive evaluation of how quickly visitors understand your core message and value proposition. 55% of visitors spend less than 15 seconds on a website.",
      businessImpact: "Increase engagement rates by up to 40%",
      gradient: "from-gray-600 to-gray-700",
      bgGradient: "from-gray-50 to-gray-100/50"
    },
    {
      icon: Brain,
      title: "Emotional Response Mapping",
      subtitle: "Build trust instantly",
      description: "Advanced psychological analysis of the emotional journey your visitors experience. We analyze trust signals, credibility markers, and emotional triggers.",
      businessImpact: "Increase customer trust and brand perception",
      gradient: "from-gray-600 to-gray-700",
      bgGradient: "from-gray-50 to-gray-100/50"
    },
    {
      icon: MousePointer,
      title: "CTA Visibility Score",
      subtitle: "Drive more conversions",
      description: "Data-driven optimization of your call-to-action placement, design, and messaging. We analyze visual hierarchy, contrast ratios, and positioning.",
      businessImpact: "Boost click-through rates by 25-60%",
      gradient: "from-gray-600 to-gray-700",
      bgGradient: "from-gray-50 to-gray-100/50"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">Signature Analysis</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Four Pillars of
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              First Impressions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advanced behavioral analysis reveals exactly what your visitors experience in those critical first moments.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-lg bg-gradient-to-br ${feature.bgGradient} border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
            >
              {/* Minimal hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-base font-medium text-gray-600 mb-2">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-base mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800">{feature.businessImpact}</span>
                </div>
              </div>
              
              {/* Minimal decorative elements */}
              <div className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-r ${feature.gradient} rounded-full opacity-5`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureFeaturesSection;
