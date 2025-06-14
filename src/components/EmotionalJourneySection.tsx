import { Heart, Eye, Brain } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const EmotionalJourneySection = () => {
  const emotionData = [
    { time: 0, emotion: 20, label: "Curious" },
    { time: 1, emotion: 35, label: "Interested" },
    { time: 2, emotion: 45, label: "Engaged" },
    { time: 3, emotion: 25, label: "Confused" },
    { time: 4, emotion: 15, label: "Frustrated" },
    { time: 5, emotion: 10, label: "Impatient" },
    { time: 6, emotion: 8, label: "Overwhelmed" },
    { time: 7, emotion: 5, label: "Skeptical" },
    { time: 8, emotion: 3, label: "Doubtful" },
    { time: 9, emotion: 2, label: "Ready to Leave" },
    { time: 10, emotion: 1, label: "Bounced" }
  ];

  const journeySteps = [
    {
      timeRange: "0-3 Seconds",
      title: "First Impression Formation",
      icon: Eye,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      description: "Visitors form instant judgments about credibility and relevance. Visual hierarchy and clarity determine if they stay or leave.",
      emotions: ["Curious", "Interested", "Engaged"],
      keyFactors: ["Visual appeal", "Brand trust signals", "Clear value proposition"]
    },
    {
      timeRange: "3-7 Seconds",
      title: "Understanding & Navigation",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      description: "Users attempt to understand your offering and find what they need. Cognitive load and information architecture are critical.",
      emotions: ["Confused", "Frustrated", "Impatient"],
      keyFactors: ["Information clarity", "Navigation ease", "Cognitive load"]
    },
    {
      timeRange: "7-10 Seconds",
      title: "Decision Making",
      icon: Heart,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      description: "Final emotional assessment before taking action or leaving. Trust, urgency, and clear CTAs determine the outcome.",
      emotions: ["Skeptical", "Doubtful", "Ready to Leave"],
      keyFactors: ["Trust indicators", "Call-to-action clarity", "Emotional connection"]
    }
  ];

  const chartConfig = {
    emotion: {
      label: "Emotional Engagement",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_60%)]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
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

        {/* Emotional Journey Chart */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Visitor Emotional Engagement Over Time
            </h3>
            <div className="h-80">
              <ChartContainer config={chartConfig}>
                <BarChart data={emotionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis 
                    dataKey="time" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                    label={{ value: 'Seconds', position: 'insideBottom', offset: -10 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                    label={{ value: 'Engagement Level', angle: -90, position: 'insideLeft' }}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value, name, props) => [
                      `${value}% - ${props.payload.label}`,
                      'Engagement'
                    ]}
                  />
                  <Bar 
                    dataKey="emotion" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>

        {/* Journey Steps */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {journeySteps.map((step, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl bg-gradient-to-br ${step.bgGradient} border border-white/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in group overflow-hidden`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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

              {/* Decorative elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${step.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalJourneySection;
