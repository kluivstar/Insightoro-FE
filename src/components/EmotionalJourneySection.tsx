
import { Gauge, MousePointer, Search } from 'lucide-react';

const EmotionalJourneySection = () => {
  const journeySteps = [
    {
      timeRange: "0-3 Seconds",
      title: "First Impression Formation",
      icon: Gauge,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100/50",
      description: "Visitors instantly judge your credibility and relevance. Visual hierarchy and clarity determine if they stay or leave within these crucial opening moments.",
      emotions: ["Curious", "Interested", "Engaged"],
      keyFactors: ["Does this look professional?", "Can I trust this company?", "Is this what I'm looking for?"]
    },
    {
      timeRange: "3-7 Seconds",
      title: "Understanding & Navigation",
      icon: Search,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100/50",
      description: "Users attempt to understand your offering and find what they need. Information architecture and navigation ease become critical factors in keeping them engaged.",
      emotions: ["Confused", "Frustrated", "Impatient"],
      keyFactors: ["Where do I go next?", "What exactly do you do?", "How do I find what I need?"]
    },
    {
      timeRange: "7-10 Seconds",
      title: "Decision Making",
      icon: MousePointer,
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100/50",
      description: "Final emotional assessment before taking action or leaving. Trust indicators, urgency, and clear calls-to-action determine the ultimate outcome.",
      emotions: ["Skeptical", "Doubtful", "Ready to Leave"],
      keyFactors: ["Should I stay or go?", "What's in it for me?", "Is this worth my time?"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_60%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full mb-6">
            <Gauge className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">Emotional Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience What Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Visitors Feel
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-3">
            Step into your visitor's shoes and see exactly what happens in those critical first moments when someone lands on your homepage.
          </p>
          <p className="text-base font-semibold text-blue-600">
            The 10-Second Journey: Every visitor goes through this emotional rollercoaster
          </p>
        </div>

        {/* Journey Steps - Restored original colors */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journeySteps.map((step, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${step.bgGradient} border border-white/60 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600 mb-1">{step.timeRange}</div>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Emotions */}
                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-gray-800 mb-2">Emotional States:</h4>
                  <div className="flex flex-wrap gap-1">
                    {step.emotions.map((emotion, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-white/60 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full border border-white/80"
                      >
                        {emotion}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Factors */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-800 mb-2">What they're thinking:</h4>
                  <ul className="space-y-1">
                    {step.keyFactors.map((factor, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        "{factor}"
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Subtle decorative element */}
              <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full opacity-5`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalJourneySection;
