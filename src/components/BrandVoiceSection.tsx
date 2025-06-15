
import { Heart, Target, Lightbulb, Users, Shield, Zap } from 'lucide-react';

const BrandVoiceSection = () => {
  const beliefs = [
    {
      icon: Heart,
      title: "Empathy-Driven Design",
      description: "Every website visitor deserves to feel understood and valued from the very first moment they arrive.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Target,
      title: "Data Speaks Truth",
      description: "Real insights come from understanding actual user behavior, not assumptions or guesswork.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Lightbulb,
      title: "Clarity Over Complexity",
      description: "The best user experiences are invisible - they feel natural, intuitive, and effortless.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: Users,
      title: "Human-Centered Approach",
      description: "Technology should serve people, not the other way around. Every optimization puts the user first.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: Shield,
      title: "Trust is Everything",
      description: "Building trust online isn't optional - it's the foundation of every successful digital relationship.",
      gradient: "from-slate-500 to-gray-600",
      bgGradient: "from-slate-50 to-gray-50"
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description: "In digital experiences, every second counts. First impressions happen in milliseconds, not minutes.",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-5 py-2.5 rounded-full mb-8 border border-white/60 shadow-lg">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Our Philosophy</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            What We
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Believe
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our core principles guide every analysis, every insight, and every recommendation we make.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              className={`relative group p-6 rounded-2xl bg-gradient-to-br ${belief.bgGradient} border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${belief.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <belief.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {belief.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-600 transition-colors duration-300">
                  {belief.description}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r ${belief.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[scan_3s_linear_infinite]"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg font-medium text-gray-700 mb-6">
            Ready to see these principles in action?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <Zap className="w-4 h-4" />
            Get Your Website Analysis
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVoiceSection;
