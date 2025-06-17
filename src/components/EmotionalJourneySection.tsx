
import { Clock } from 'lucide-react';

const EmotionalJourneySection = () => {
  const journeySteps = [
    {
      time: "0-2 seconds",
      title: "First Glance",
      description: "Visitors form instant judgments about credibility and relevance",
      emotion: "Curiosity vs Skepticism",
      questions: [
        "What is this website about?",
        "Does this look professional?",
        "Can I trust this company?"
      ],
      color: "from-blue-50 to-blue-100/50",
      borderColor: "border-blue-200/60",
      icon: "👀",
      textColor: "text-blue-700"
    },
    {
      time: "3-8 seconds", 
      title: "Value Recognition",
      description: "They're scanning for clear value propositions and social proof",
      emotion: "Interest vs Confusion",
      questions: [
        "What's in it for me?",
        "How is this different?",
        "Do others trust this?"
      ],
      color: "from-blue-50 to-blue-100/50",
      borderColor: "border-blue-200/60", 
      icon: "🔍",
      textColor: "text-blue-700"
    },
    {
      time: "8-15 seconds",
      title: "Decision Point", 
      description: "The critical moment where they decide to engage or leave forever",
      emotion: "Confidence vs Doubt",
      questions: [
        "Should I stay or leave?",
        "What should I do next?",
        "Is this worth my time?"
      ],
      color: "from-blue-50 to-blue-100/50",
      borderColor: "border-blue-200/60",
      icon: "⚡", 
      textColor: "text-blue-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-100/15 to-blue-100/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-gray-200/50 shadow-lg">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-700">Experience What Your Visitors Feel</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            The Emotional Journey of
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Every First Visit
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding what happens in your visitor's mind during those critical first 15 seconds
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {journeySteps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connection line for desktop */}
              {index < journeySteps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-10"></div>
              )}
              
              <div className={`relative bg-gradient-to-br ${step.color} backdrop-blur-sm p-6 rounded-2xl border ${step.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full`}>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/10 to-indigo-200/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  {/* Time indicator */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{step.icon}</div>
                    <div className="text-sm font-bold text-blue-600 bg-blue-50/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200/50">
                      {step.time}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className={`text-base ${step.textColor} leading-relaxed mb-4`}>
                    {step.description}
                  </p>
                  
                  {/* Customer questions */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-800 mb-2">What they're thinking:</div>
                    <ul className="space-y-1">
                      {step.questions.map((question, qIndex) => (
                        <li key={qIndex} className="text-sm text-gray-700 italic">
                          "{question}"
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Emotional state indicator */}
                  <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-white/80">
                    <div className="text-xs font-semibold text-gray-800 mb-1">Emotional State:</div>
                    <div className="text-sm font-medium text-gray-700">{step.emotion}</div>
                  </div>
                </div>
                
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalJourneySection;
