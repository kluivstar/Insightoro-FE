
import { Eye, Brain, Heart, TrendingUp, Star, AlertCircle, CheckCircle } from 'lucide-react';

const DemoSection = () => {
  const insights = [
    { category: "Visual Hierarchy", score: 92, color: "emerald", icon: Eye },
    { category: "Cognitive Load", score: 78, color: "blue", icon: Brain },
    { category: "Emotional Impact", score: 85, color: "purple", icon: Heart },
    { category: "Conversion Flow", score: 88, color: "orange", icon: TrendingUp }
  ];

  const recommendations = [
    { type: "critical", text: "Reduce headline complexity by 40%", impact: "High" },
    { type: "medium", text: "Increase CTA button contrast ratio", impact: "Medium" },
    { type: "low", text: "Optimize mobile visual hierarchy", impact: "Low" }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-8">
            <Star className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-900">Your Clarity Report</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Deep Insights,
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Clear Actions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a comprehensive analysis of your visitor's emotional and visual journey, 
            with specific recommendations to improve clarity and conversion.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Main Report Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-gray-800 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Visitor Experience Report</h3>
                  <p className="text-gray-300">yourwebsite.com • Analyzed 3 minutes ago</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-white mb-1">86</div>
                  <div className="text-sm text-gray-300">Clarity Score</div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              {/* Insight Metrics */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {insights.map((insight, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200/50 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-r from-${insight.color}-500 to-${insight.color}-600 rounded-xl flex items-center justify-center`}>
                        <insight.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-gray-900">{insight.score}</div>
                        <div className="text-xs text-gray-500">/ 100</div>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{insight.category}</p>
                    <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${insight.color}-400 to-${insight.color}-500 rounded-full transition-all duration-1000`}
                        style={{ width: `${insight.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Recommendations */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200/50">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  Priority Recommendations
                </h4>
                
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        rec.type === 'critical' ? 'bg-red-100' : 
                        rec.type === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                      }`}>
                        {rec.type === 'critical' ? 
                          <AlertCircle className="w-4 h-4 text-red-600" /> :
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        }
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{rec.text}</p>
                        <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                          rec.impact === 'High' ? 'bg-red-100 text-red-700' :
                          rec.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {rec.impact} Impact
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Items */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-white font-semibold">Ready to implement these changes?</h5>
                    <p className="text-gray-300 text-sm">Get step-by-step guidance for each improvement</p>
                  </div>
                  <div className="text-2xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
