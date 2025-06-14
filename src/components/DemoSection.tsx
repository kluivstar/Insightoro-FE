import { Eye, Heart, Star, AlertCircle, CheckCircle, Target, Zap, ThumbsUp, HelpCircle, Lock, Crown, Users, Timer, Activity, FileText } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const insights = [
  { 
    category: "Visual Clarity", 
    score: 92, 
    metric: "2.3s", 
    metricLabel: "Clarity Time",
    color: "blue", 
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
    category: "First 5 Second Test", 
    score: 85, 
    metric: "4.2s", 
    metricLabel: "Recognition Time",
    color: "blue", 
    icon: Timer,
    tooltip: "Whether visitors can understand what you do and why it matters within 5 seconds"
  },
  { 
    category: "Confusion Triggers", 
    score: 88, 
    metric: "A-", 
    metricLabel: "Clarity Grade",
    color: "blue", 
    icon: AlertCircle,
    tooltip: "Elements that may confuse visitors and prevent them from taking action"
  }
];

const emotionalAnalysis = [
  { emotion: "Trust", level: 78, color: "blue", impact: "Higher trust leads to 32% more conversions and reduces cart abandonment by 40%" },
  { emotion: "Clarity", level: 92, color: "green", impact: "Clear messaging reduces bounce rate by 45% and increases page engagement by 2.3x" },
  { emotion: "Engagement", level: 85, color: "purple", impact: "Strong engagement increases time on site by 60% and improves lead generation by 35%" },
  { emotion: "Urgency", level: 65, color: "orange", impact: "Optimal urgency can boost immediate actions by 25% and email signups by 18%" }
];

const highImpactRecommendations = [
  { 
    type: "high", 
    text: "Increase CTA button size by 40% and improve contrast ratio", 
    impact: "High", 
    category: "Conversion",
    mockup: "Primary CTA buttons"
  },
  { 
    type: "high", 
    text: "Simplify headline to 8 words maximum for instant comprehension", 
    impact: "High", 
    category: "Clarity",
    mockup: "Hero headline section"
  }
];

const mediumImpactRecommendations = [
  { 
    type: "medium", 
    text: "Add social proof above the fold to build immediate trust", 
    impact: "Medium", 
    category: "Trust",
    mockup: "Trust signals - Header area"
  },
  { 
    type: "medium", 
    text: "Improve button text contrast ratio for better accessibility", 
    impact: "Medium", 
    category: "Usability",
    mockup: "CTA buttons - Throughout page"
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

// New detailed First 5 Second Test data
const firstFiveSecondData = [
  { 
    metric: "Message Clarity", 
    score: 88, 
    description: "Visitors understand your main value proposition",
    businessImpact: "Clear messaging reduces bounce rate by 35% and increases conversions by 22%",
    scanData: "Headline readability: 8th grade level, Key benefits visible in 2.1 seconds"
  },
  { 
    metric: "Visual Hierarchy", 
    score: 82, 
    description: "Eye-tracking shows optimal content flow",
    businessImpact: "Good hierarchy increases page engagement by 40% and time on site by 1.8 minutes",
    scanData: "F-pattern compliance: 82%, Primary CTA noticed in 3.4 seconds"
  },
  { 
    metric: "Brand Recognition", 
    score: 91, 
    description: "Logo and brand elements create instant recognition",
    businessImpact: "Strong brand recall increases trust by 45% and repeat visits by 28%",
    scanData: "Logo visibility: 0.8 seconds, Brand consistency score: 91/100"
  },
  { 
    metric: "Cognitive Load", 
    score: 76, 
    description: "Information density and complexity analysis",
    businessImpact: "Lower cognitive load reduces abandonment by 25% and improves user satisfaction by 33%",
    scanData: "Text density: 42 words above fold, Visual elements: 7 (optimal: 5-8)"
  }
];

const InsightCard = ({ insight }) => (
  <div className="bg-gradient-to-br from-white to-gray-50/50 p-5 rounded-2xl border border-gray-200/60 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg`}>
        <insight.icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <div className="text-2xl font-bold text-gray-900">{insight.score}</div>
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
        className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000"
        style={{ width: `${insight.score}%` }}
      ></div>
    </div>
  </div>
);

const EmotionalAnalysisCard = ({ emotion }) => (
  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/80">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-semibold text-gray-700">{emotion.emotion}</span>
      <span className="text-lg font-bold text-gray-900">{emotion.level}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
      <div 
        className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000"
        style={{ width: `${emotion.level}%` }}
      ></div>
    </div>
    <p className="text-xs text-black font-medium">{emotion.impact}</p>
  </div>
);

const FirstFiveSecondCard = ({ item }) => (
  <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-white/80">
    <div className="flex items-center justify-between mb-3">
      <h5 className="text-sm font-bold text-gray-800">{item.metric}</h5>
      <div className="text-2xl font-bold text-orange-600">{item.score}%</div>
    </div>
    
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
      <div 
        className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-1000"
        style={{ width: `${item.score}%` }}
      ></div>
    </div>
    
    <p className="text-xs text-gray-700 mb-3">{item.description}</p>
    
    <div className="bg-orange-50/80 backdrop-blur-sm p-3 rounded-lg border border-orange-200/50 mb-3">
      <div className="text-xs font-semibold text-orange-800 mb-1">Business Impact:</div>
      <div className="text-xs text-black font-medium">{item.businessImpact}</div>
    </div>
    
    <div className="bg-gray-50/80 backdrop-blur-sm p-3 rounded-lg border border-gray-200/50">
      <div className="text-xs font-semibold text-gray-800 mb-1">Scan Data:</div>
      <div className="text-xs text-gray-600">{item.scanData}</div>
    </div>
  </div>
);

const RecommendationCard = ({ rec, isPremium }) => (
  <div className={isPremium ? "relative" : ""}>
    {isPremium && (
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] rounded-xl z-10 flex items-center justify-center">
        <div className="bg-amber-100/90 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200/80 flex items-center gap-2">
          <Lock className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-semibold text-amber-800">Premium Feature</span>
        </div>
      </div>
    )}
    <div className={`flex flex-col md:flex-row items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl border ${isPremium ? "bg-gradient-to-r from-amber-50/80 to-yellow-50/80 backdrop-blur-sm border-2 border-amber-200/50 border-dashed" : "bg-white/80 backdrop-blur-sm border border-white/80"}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isPremium ? "bg-amber-100" : "bg-yellow-100"}`}>
        {isPremium ? <Crown className="w-5 h-5 text-amber-600" /> : <CheckCircle className="w-5 h-5 text-yellow-600" />}
      </div>
      <div className="flex-1 w-full">
        <p className="text-gray-800 font-medium mb-3 text-sm md:text-base">{rec.text}</p>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
          <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium border ${isPremium ? "bg-amber-100/80 backdrop-blur-sm text-amber-700 border-amber-200/50" : "bg-yellow-100/80 backdrop-blur-sm text-yellow-700 border-yellow-200/50"}`}>
            {rec.impact} Impact
          </span>
          <span className="px-2 md:px-3 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium border border-gray-200/50">
            {rec.category}
          </span>
          {isPremium && (
            <span className="px-2 py-1 bg-amber-200/60 backdrop-blur-sm text-amber-800 rounded-full text-xs font-bold border border-amber-300/50">
              PREMIUM ONLY
            </span>
          )}
        </div>
        <div className="bg-gradient-to-r from-gray-100/80 to-gray-200/80 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-gray-300/50">
          <div className="flex flex-col md:flex-row md:items-center gap-2 text-xs md:text-sm text-gray-600 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="font-medium">Affected Section:</span>
            </div>
            <span className="md:ml-0">{rec.mockup}</span>
          </div>
          <div className="bg-white/60 backdrop-blur-sm h-6 md:h-8 rounded border border-gray-300/50 flex items-center px-2 md:px-3">
            <div className="text-xs text-gray-500">Visual mockup preview</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DemoSection = () => {
  return (
    <TooltipProvider>
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-indigo-200/50">
              <Star className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-900">Your Visitor Experience Report</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
              Deep Insights,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
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
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-[scan_3s_ease-in-out_infinite]"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Visitor Experience Analysis</h3>
                    <p className="text-gray-300">yourwebsite.com • Analyzed 3 minutes ago</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">86</div>
                    <div className="text-sm text-gray-300 font-medium">Overall Clarity Score</div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-10">
                {/* Core Metrics - Refined size */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                  {insights.map((insight, index) => (
                    <InsightCard key={index} insight={insight} />
                  ))}
                </div>

                {/* First 5 Second Test - Comprehensive Analysis (Full Width) & CTA Visibility Details Side by Side */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Enhanced First 5 Second Test - Expanded */}
                  <div className="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-orange-200/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Timer className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">First 5 Second Test - Detailed Analysis</h4>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-gray-400 hover:text-gray-600">
                            <HelpCircle className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Comprehensive analysis of how visitors process your page in the critical first 5 seconds</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">4.2s</div>
                      <div className="text-sm text-gray-600 mb-2">Average recognition time</div>
                      <div className="text-xs text-orange-600 font-medium bg-orange-100/70 backdrop-blur-sm px-3 py-2 rounded-full inline-block border border-orange-200/50 mb-4">
                        85% visitors understand your value proposition quickly
                      </div>
                      <div className="text-xs text-gray-600">
                        <strong>Business Impact:</strong> Fast recognition reduces bounce rate by 42% and increases page engagement by 2.1x
                      </div>
                    </div>

                    {/* Detailed metrics grid */}
                    <div className="grid grid-cols-1 gap-4 mb-4">
                      {firstFiveSecondData.slice(0, 2).map((item, index) => (
                        <FirstFiveSecondCard key={index} item={item} />
                      ))}
                    </div>

                    {/* Key findings summary */}
                    <div className="bg-gradient-to-r from-orange-100/80 to-red-100/80 backdrop-blur-sm p-4 rounded-xl border border-orange-300/50">
                      <h5 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-orange-600" />
                        Key Findings & Revenue Impact
                      </h5>
                      <div className="grid grid-cols-1 gap-3 text-xs">
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">Strengths:</div>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Strong brand recognition (0.8s)</li>
                            <li>• Clear value proposition messaging</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">Opportunities:</div>
                          <ul className="text-gray-700 space-y-1">
                            <li>• Reduce cognitive load by 18%</li>
                            <li>• Potential 28% conversion increase</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Visibility Details */}
                  <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-blue-200/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">CTA Visibility Analysis</h4>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-gray-400 hover:text-gray-600">
                            <HelpCircle className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Evaluates how well your call-to-action buttons capture visitor attention and drive conversions</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">78%</div>
                      <div className="text-sm text-gray-600 mb-4">Good visibility with room for improvement</div>
                      <div className="text-xs text-blue-600 font-medium bg-blue-100/70 backdrop-blur-sm px-3 py-2 rounded-full inline-block border border-blue-200/50">
                        Potential 25-35% conversion uplift
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/80">
                        <span className="text-sm font-medium text-gray-700">Button Contrast</span>
                        <span className="text-sm font-bold text-green-600">Excellent</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/80">
                        <span className="text-sm font-medium text-gray-700">Placement Score</span>
                        <span className="text-sm font-bold text-blue-600">Good</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/80">
                        <span className="text-sm font-medium text-gray-700">Button Size</span>
                        <span className="text-sm font-bold text-yellow-600">Needs Work</span>
                      </div>
                      <div className="p-3 bg-blue-100/70 backdrop-blur-sm rounded-lg border border-blue-200/50">
                        <div className="text-xs font-semibold text-blue-800 mb-1">Business Impact:</div>
                        <div className="text-xs text-black font-medium">Improving CTA visibility typically increases conversion rates by 15-40% and reduces visitor hesitation by 60%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional First 5 Second Test Metrics - Full Width */}
                <div className="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-orange-200/50 mb-8">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Timer className="w-5 h-5 text-white" />
                    </div>
                    Additional First 5 Second Metrics
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {firstFiveSecondData.slice(2).map((item, index) => (
                      <FirstFiveSecondCard key={index + 2} item={item} />
                    ))}
                  </div>
                </div>

                {/* Priority Recommendations - Made responsive */}
                <div className="bg-gradient-to-br from-slate-50/80 to-gray-50/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-200/50 mb-8">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    Priority Recommendations
                  </h4>
                  
                  {/* Medium Impact Recommendations */}
                  <div className="space-y-6 mb-8">
                    <h5 className="text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-yellow-600" />
                      </div>
                      Medium Impact Changes
                    </h5>
                    {mediumImpactRecommendations.map((rec, index) => (
                      <RecommendationCard key={index} rec={rec} isPremium={false} />
                    ))}
                  </div>

                  {/* High Impact Recommendations - Marked as Premium with blur */}
                  <div className="space-y-6 mb-8">
                    <h5 className="text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <Crown className="w-4 h-4 text-amber-600" />
                      </div>
                      High Impact Changes
                      <div className="flex items-center gap-1 bg-amber-100/80 backdrop-blur-sm px-2 py-1 rounded-full border border-amber-200/50">
                        <Lock className="w-3 h-3 text-amber-600" />
                        <span className="text-xs font-medium text-amber-700">Premium</span>
                      </div>
                    </h5>
                    {highImpactRecommendations.map((rec, index) => (
                      <RecommendationCard key={index} rec={rec} isPremium={true} />
                    ))}
                  </div>

                  {/* What's Working Well & Quick Wins */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50/80 backdrop-blur-sm p-6 rounded-xl border border-green-200/50">
                      <h5 className="text-base md:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5 text-green-600" />
                        What's Working Well
                      </h5>
                      <div className="space-y-3">
                        {workingWell.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs md:text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50">
                      <h5 className="text-base md:text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-600" />
                        Quick Wins
                      </h5>
                      <div className="space-y-3">
                        {quickWins.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs md:text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium In-depth Analysis Feature - Enhanced with Emotional Analysis */}
                <div className="bg-gradient-to-r from-amber-50/80 to-yellow-50/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-amber-200/50 border-dashed">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg md:text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                          Premium In-depth Analysis
                          <Lock className="w-4 h-4 text-amber-600" />
                        </h5>
                        <p className="text-sm md:text-base text-gray-600">Unlock advanced insights including emotional analysis, user journey mapping, and high-impact recommendations</p>
                      </div>
                    </div>
                    <button className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                      Upgrade Now
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/80">
                      <Heart className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">Emotional Impact Analysis</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/80">
                      <Users className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">User Journey Mapping</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/80">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">High-Impact Recommendations</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-white/80">
                      <FileText className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">Report - PDF Export</span>
                    </div>
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
