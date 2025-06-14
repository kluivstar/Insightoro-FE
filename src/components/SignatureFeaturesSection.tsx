
import { Eye, Target, AlertTriangle, Zap, Timer, Brain, Heart, TrendingUp } from 'lucide-react';

const SignatureFeaturesSection = () => {
  const features = [
    {
      icon: Timer,
      title: "First 3 Seconds Analysis",
      description: "Capture the critical moment when visitors form their first impression of your website.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Brain,
      title: "Cognitive Load Assessment",
      description: "Measure how much mental effort visitors need to understand your message.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Heart,
      title: "Emotional Response Mapping",
      description: "Understand the feelings your homepage evokes in first-time visitors.",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Clarity Impact Score",
      description: "Get actionable metrics on how clarity improvements affect user behavior.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_25%,rgba(68,68,68,.05)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.05)_75%,rgba(68,68,68,.05))] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full mb-8">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">Signature Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Four Dimensions of
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              First Impressions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI analyzes the complete emotional and visual journey of your first-time visitors, 
            revealing insights that traditional analytics miss.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgGradient} border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in group overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureFeaturesSection;
