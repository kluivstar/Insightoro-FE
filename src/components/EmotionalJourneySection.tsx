
import { Heart, Eye, Brain } from 'lucide-react';

const EmotionalJourneySection = () => {
  const journeySteps = [
    {
      timeRange: "0-3 Seconds",
      title: "First Impression Formation",
      icon: Eye,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "Visitors instantly judge your credibility and relevance. Visual hierarchy and clarity determine if they stay or leave within these crucial opening moments.",
      emotions: ["Curious", "Interested", "Engaged"],
      keyFactors: ["Visual appeal", "Brand trust signals", "Clear value proposition"]
    },
    {
      timeRange: "3-7 Seconds",
      title: "Understanding & Navigation",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      description: "Users attempt to understand your offering and find what they need. Information architecture and navigation ease become critical factors in keeping them engaged.",
      emotions: ["Confused", "Frustrated", "Impatient"],
      keyFactors: ["Information clarity", "Navigation ease", "Content structure"]
    },
    {
      timeRange: "7-10 Seconds",
      title: "Decision Making",
      icon: Heart,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      description: "Final emotional assessment before taking action or leaving. Trust indicators, urgency, and clear calls-to-action determine the ultimate outcome.",
      emotions: ["Skeptical", "Doubtful", "Ready to Leave"],
      keyFactors: ["Trust indicators", "Call-to-action clarity", "Emotional connection"]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_60%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-8">
            <Heart className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-900">Emotional Intelligence</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Experience What Your
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Visitors Feel
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
            Step into your visitor's shoes and see exactly what happens in those critical first moments when someone lands on your homepage.
          </p>
          <p className="text-lg font-semibold text-indigo-600">
            The 10-Second Journey: Every visitor goes through this emotional rollercoaster
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {journeySteps.map((step, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${step.bgGradient} border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              {/* Minimal hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mb-1">{step.timeRange}</div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Emotions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Emotional States:</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.emotions.map((emotion, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-white/60 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-full border border-white/80"
                      >
                        {emotion}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Factors */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Factors:</h4>
                  <ul className="space-y-2">
                    {step.keyFactors.map((factor, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Minimal decorative elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${step.gradient} rounded-full opacity-5`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalJourneySection;
