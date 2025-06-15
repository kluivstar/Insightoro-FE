
import { Heart, Target, Lightbulb, Users, Shield, Zap } from 'lucide-react';

const BrandVoiceSection = () => {
  const beliefs = [
    {
      icon: Heart,
      title: "Websites Should Feel Human",
      description: "We believe websites should feel human. Every visitor deserves to feel understood and valued from the very first moment they arrive. Your website isn't just code and pixels—it's your digital handshake, your first impression, your chance to connect.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      borderGradient: "from-pink-200 to-rose-200"
    },
    {
      icon: Target,
      title: "Stats Are Helpful, But Feelings Decide Trust",
      description: "We believe stats are helpful, but feelings decide trust. Real insights come from understanding actual user behavior and emotions, not just bounce rates and click-throughs. The numbers tell you what happened—the feelings tell you why.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderGradient: "from-blue-200 to-indigo-200"
    },
    {
      icon: Lightbulb,
      title: "If Your Copy Is Confusing, Nothing Else Matters",
      description: "We believe if your copy is confusing, nothing else matters. The best user experiences are invisible—they feel natural, intuitive, and effortless. Clear communication isn't just good writing; it's good business.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      borderGradient: "from-amber-200 to-orange-200"
    },
    {
      icon: Users,
      title: "Technology Should Serve People",
      description: "We believe technology should serve people, not the other way around. Every optimization, every recommendation, every insight we provide puts the human experience first. Because at the end of the day, websites are for people.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderGradient: "from-emerald-200 to-teal-200"
    },
    {
      icon: Shield,
      title: "Trust Is Built In Moments",
      description: "We believe trust is built in moments. Building trust online isn't optional—it's the foundation of every successful digital relationship. One confusing page, one broken link, one moment of friction can undo months of marketing.",
      gradient: "from-slate-500 to-gray-600",
      bgGradient: "from-slate-50 to-gray-50",
      borderGradient: "from-slate-200 to-gray-200"
    },
    {
      icon: Zap,
      title: "First Impressions Happen In Milliseconds",
      description: "We believe first impressions happen in milliseconds. In digital experiences, every second counts. Your visitors decide whether to stay or leave faster than they can blink. Make those milliseconds count.",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
      borderGradient: "from-purple-200 to-violet-200"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-100/30 to-pink-100/25 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-100/20 to-teal-100/15 rounded-full blur-3xl animate-float-fast"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full mb-10 border border-gray-200/60 shadow-xl">
            <Heart className="w-6 h-6 text-blue-600" />
            <span className="text-base font-bold text-gray-700 tracking-wide">Our Philosophy</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-10 tracking-tight leading-none">
            What We
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
              Believe
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our core beliefs shape every analysis, every insight, and every recommendation we make. 
            <br />
            <span className="font-semibold text-gray-700">These aren't just principles—they're promises.</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              className={`group relative p-10 rounded-3xl bg-white/60 backdrop-blur-sm border border-gradient-to-br ${belief.borderGradient} shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 overflow-hidden animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              {/* Animated border glow */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-700 bg-gradient-to-r ${belief.gradient} blur-sm -z-10`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${belief.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <belief.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-gray-800 transition-colors duration-500 leading-tight">
                    {belief.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-600 transition-colors duration-500 font-light">
                  {belief.description}
                </p>
              </div>
              
              {/* Modern decorative elements */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${belief.gradient} rounded-full opacity-5 group-hover:opacity-15 transition-all duration-700 group-hover:scale-125`}></div>
              <div className={`absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r ${belief.gradient} rounded-full opacity-3 group-hover:opacity-10 transition-all duration-700 group-hover:scale-110`}></div>
              
              {/* Scanning animation */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan-slow rounded-3xl`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modern call to action */}
        <div className="text-center mt-24">
          <p className="text-2xl font-semibold text-gray-700 mb-10">
            Ready to see these beliefs in action?
          </p>
          <div className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer text-xl group">
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Get Your Website Analysis
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVoiceSection;
