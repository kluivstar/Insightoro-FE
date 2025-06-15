
import { Heart, Target, Lightbulb, Users, Shield, Zap } from 'lucide-react';

const BrandVoiceSection = () => {
  const beliefs = [
    {
      icon: Heart,
      title: "Websites Should Feel Human",
      description: "We believe websites should feel human. Every visitor deserves to feel understood and valued from the very first moment they arrive. Your website isn't just code and pixels—it's your digital handshake, your first impression, your chance to connect.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: Target,
      title: "Stats Are Helpful, But Feelings Decide Trust",
      description: "We believe stats are helpful, but feelings decide trust. Real insights come from understanding actual user behavior and emotions, not just bounce rates and click-throughs. The numbers tell you what happened—the feelings tell you why.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Lightbulb,
      title: "If Your Copy Is Confusing, Nothing Else Matters",
      description: "We believe if your copy is confusing, nothing else matters. The best user experiences are invisible—they feel natural, intuitive, and effortless. Clear communication isn't just good writing; it's good business.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: Users,
      title: "Technology Should Serve People",
      description: "We believe technology should serve people, not the other way around. Every optimization, every recommendation, every insight we provide puts the human experience first. Because at the end of the day, websites are for people.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: Shield,
      title: "Trust Is Built In Moments",
      description: "We believe trust is built in moments. Building trust online isn't optional—it's the foundation of every successful digital relationship. One confusing page, one broken link, one moment of friction can undo months of marketing.",
      gradient: "from-slate-500 to-gray-600",
      bgGradient: "from-slate-50 to-gray-50"
    },
    {
      icon: Zap,
      title: "First Impressions Happen In Milliseconds",
      description: "We believe first impressions happen in milliseconds. In digital experiences, every second counts. Your visitors decide whether to stay or leave faster than they can blink. Make those milliseconds count.",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-8 border border-white/60 shadow-lg">
            <Heart className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Our Philosophy</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            What We
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Believe
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our core beliefs shape every analysis, every insight, and every recommendation we make. 
            These aren't just principles—they're promises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              className={`relative group p-8 rounded-3xl bg-gradient-to-br ${belief.bgGradient} border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden`}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${belief.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <belief.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                    {belief.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-base group-hover:text-gray-600 transition-colors duration-300">
                  {belief.description}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r ${belief.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[scan_3s_linear_infinite]"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <p className="text-xl font-medium text-gray-700 mb-8">
            Ready to see these beliefs in action?
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer text-lg">
            <Zap className="w-5 h-5" />
            Get Your Website Analysis
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVoiceSection;
