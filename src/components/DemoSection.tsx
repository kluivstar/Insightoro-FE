
import { Eye, Brain, Heart, TrendingUp, Star, AlertCircle, CheckCircle, Clock, Target, Zap, ThumbsUp, HelpCircle, Lock, Crown, BarChart3, Users, Timer, Activity } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const DemoSection = () => {
  const insights = [
    { 
      category: "Visual Clarity", 
      score: 92, 
      metric: "2.3s", 
      metricLabel: "Clarity Time",
      color: "emerald", 
      icon: Eye,
      tooltip: "How quickly visitors understand your main message and value proposition"
    },
    { 
      category: "CTA Visibility", 
      score: 78, 
      metric: "68%", 
      metricLabel: "Visibility Score",
      color: "blue", 
      icon: Target,
      tooltip: "How well your call-to-action buttons stand out and grab attention"
    },
    { 
      category: "Emotional Impact", 
      score: 85, 
      metric: "Trust+", 
      metricLabel: "Primary Emotion",
      color: "purple", 
      icon: Heart,
      tooltip: "The dominant emotional response your website triggers in first-time visitors"
    },
    { 
      category: "Visual Hierarchy", 
      score: 88, 
      metric: "A-", 
      metricLabel: "Structure Grade",
      color: "orange", 
      icon: BarChart3,
      tooltip: "How well your page guides the visitor's eye through your content flow"
    }
  ];

  const emotionalAnalysis = [
    { emotion: "Trust", level: 78, color: "blue", impact: "Higher trust leads to 32% more conversions" },
    { emotion: "Clarity", level: 92, color: "green", impact: "Clear messaging reduces bounce rate by 45%" },
    { emotion: "Engagement", level: 85, color: "purple", impact: "Strong engagement increases time on site by 60%" },
    { emotion: "Urgency", level: 65, color: "orange", impact: "Optimal urgency can boost immediate actions by 25%" }
  ];

  const priorityRecommendations = [
    { 
      type: "critical", 
      text: "Increase CTA button size by 40% and improve contrast ratio", 
      impact: "High", 
      category: "Conversion",
      mockup: "Primary CTA - Above fold section"
    },
    { 
      type: "medium", 
      text: "Reduce headline complexity - currently 18 words, optimal is 8-12", 
      impact: "Medium", 
      category: "Clarity",
      mockup: "Hero headline section"
    },
    { 
      type: "medium", 
      text: "Add social proof above the fold to build immediate trust", 
      impact: "Medium", 
      category: "Trust",
      mockup: "Trust signals - Header area"
    }
  ];

  const workingWell = [
    "Logo placement creates strong brand recognition",
    "Color scheme builds trust and professionalism",
    "Mobile responsiveness maintains clarity"
  ];

  const quickWins = [
    "Move testimonials 200px higher on page",
    "Change CTA text from 'Learn More' to 'Get Started'",
    "Add urgency indicator to special offer"
  ];

  return (
    <TooltipProvider>
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-8">
              <Star className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-900">Your Visitor Experience Report</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Deep Insights,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Actionable Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get a comprehensive analysis of your visitor's emotional and visual journey, 
              with specific recommendations to improve clarity and drive conversions.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto animate-fade-in">
            {/* Main Report Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Visitor Experience Analysis</h3>
                    <p className="text-gray-300">yourwebsite.com • Analyzed 3 minutes ago</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-white mb-1">86</div>
                    <div className="text-sm text-gray-300 font-medium">Overall Clarity Score</div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-10">
                {/* Core Metrics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {insights.map((insight, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r from-${insight.color}-500 to-${insight.color}-600 rounded-xl flex items-center justify-center shadow-lg`}>
                          <insight.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-3xl font-bold text-gray-900">{insight.score}</div>
                          <div className="text-xs text-gray-500 font-medium">/ 100</div>
                        </div>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="text-gray-400 hover:text-gray-600">
                              <HelpCircle className="w-4 h-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{insight.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">{insight.category}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500">{insight.metricLabel}: {insight.metric}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-${insight.color}-400 to-${insight.color}-500 rounded-full transition-all duration-1000`}
                          style={{ width: `${insight.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emotional Impact Analysis & Visual Hierarchy Side by Side */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Emotional Impact Analysis */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Emotional Impact Analysis</h4>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-gray-400 hover:text-gray-600">
                            <HelpCircle className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Measures the emotional responses your website triggers and their business impact</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    
                    <div className="space-y-4">
                      {emotionalAnalysis.map((emotion, index) => (
                        <div key={index} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-gray-700">{emotion.emotion}</span>
                            <span className="text-lg font-bold text-gray-900">{emotion.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                            <div 
                              className={`h-full bg-gradient-to-r from-${emotion.color}-400 to-${emotion.color}-500 rounded-full transition-all duration-1000`}
                              style={{ width: `${emotion.level}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-600">{emotion.impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Hierarchy Score */}
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Visual Hierarchy Score</h4>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-gray-400 hover:text-gray-600">
                            <HelpCircle className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Evaluates how well your page guides visitor attention through your content</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-6xl font-bold text-gray-900 mb-2">A-</div>
                      <div className="text-sm text-gray-600 mb-4">Excellent structure with minor improvements needed</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                        <span className="text-sm font-medium text-gray-700">Header Priority</span>
                        <span className="text-sm font-bold text-green-600">Excellent</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                        <span className="text-sm font-medium text-gray-700">Content Flow</span>
                        <span className="text-sm font-bold text-blue-600">Good</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                        <span className="text-sm font-medium text-gray-700">CTA Prominence</span>
                        <span className="text-sm font-bold text-yellow-600">Needs Work</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Priority Recommendations */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    Priority Recommendations
                  </h4>
                  
                  <div className="space-y-6 mb-8">
                    {priorityRecommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-6 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-white/60">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          rec.type === 'critical' ? 'bg-red-100' : 'bg-yellow-100'
                        }`}>
                          {rec.type === 'critical' ? 
                            <AlertCircle className="w-5 h-5 text-red-600" /> :
                            <CheckCircle className="w-5 h-5 text-yellow-600" />
                          }
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium mb-3">{rec.text}</p>
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              rec.impact === 'High' ? 'bg-red-100 text-red-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {rec.impact} Impact
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {rec.category}
                            </span>
                          </div>
                          {/* Mockup Visual */}
                          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-lg border-2 border-dashed border-gray-300">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                              <span className="font-medium">Affected Section:</span>
                              <span>{rec.mockup}</span>
                            </div>
                            <div className="mt-2 bg-white/50 h-8 rounded border border-gray-300 flex items-center px-3">
                              <div className="text-xs text-gray-500">Visual mockup preview</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* What's Working Well & Quick Wins */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50/50 p-6 rounded-xl">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5 text-green-600" />
                        What's Working Well
                      </h5>
                      <div className="space-y-3">
                        {workingWell.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50/50 p-6 rounded-xl">
                      <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-600" />
                        Quick Wins
                      </h5>
                      <div className="space-y-3">
                        {quickWins.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium In-depth Analysis Feature */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border-2 border-amber-200 border-dashed mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                          Premium In-depth Analysis
                          <Lock className="w-4 h-4 text-amber-600" />
                        </h5>
                        <p className="text-gray-600">Unlock advanced insights including heatmap analysis, user journey mapping, and A/B test recommendations</p>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      Upgrade Now
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg">
                      <Users className="w-5 h-5 text-amber-600" />
                      <span className="text-sm font-medium text-gray-700">User Journey Mapping</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg">
                      <BarChart3 className="w-5 h-5 text-amber-600" />
                      <span className="text-sm font-medium text-gray-700">Heatmap Analysis</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                      <span className="text-sm font-medium text-gray-700">A/B Test Recommendations</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Items */}
                <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-white font-bold text-lg mb-1">Ready to implement these improvements?</h5>
                      <p className="text-gray-300">Get detailed implementation guides for each recommendation</p>
                    </div>
                    <div className="text-3xl">🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default DemoSection;
