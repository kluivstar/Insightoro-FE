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
      ]
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
      ]
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
      ]
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
            <Clock className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">Experience What Your Visitors Feel</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            The Emotional Journey of
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
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
              <div className="relative bg-white p-8 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-red-500/10 blur-xl"></div>
                
                <div className="relative z-10">
                  {/* Time indicator */}
                  <div className="mb-6">
                    <div className="text-sm font-bold text-gray-900 bg-gray-100 px-4 py-2 border border-gray-300 inline-block">
                      {step.time}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Customer questions */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-gray-500 mb-3">What they're thinking:</div>
                    <ul className="space-y-2">
                      {step.questions.map((question, qIndex) => (
                        <li key={qIndex} className="text-sm text-gray-600 italic">
                          "{question}"
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Emotional state indicator */}
                  <div className="bg-gray-50 p-4 border border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 mb-2">Emotional State:</div>
                    <div className="text-sm font-medium text-gray-900">{step.emotion}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalJourneySection;
