import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Clock, Users, TrendingUp, CheckCircle, AlertCircle, Eye, Brain, Zap, Target, MessageSquare } from 'lucide-react';

const DemoSection = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const analysisData = {
    score: 86,
    summary: "Overall, your website provides a solid first impression, but there's room to enhance user engagement and clarity.",
    insights: [
      {
        category: 'Critical',
        title: 'Optimize Mobile Experience',
        description: 'Your mobile experience needs improvement. Many users are accessing your site on mobile devices, and a poor experience can lead to high bounce rates.',
        recommendation: 'Implement a responsive design that adapts seamlessly to different screen sizes. Ensure fast loading times and easy navigation on mobile.',
        impact: 'High'
      },
      {
        category: 'Conversion',
        title: 'Improve Call-to-Action Visibility',
        description: 'Your primary call-to-action is not immediately visible. Visitors may struggle to find the main action you want them to take.',
        recommendation: 'Place your call-to-action prominently above the fold. Use contrasting colors and clear, concise language to draw attention.',
        impact: 'Medium'
      },
      {
        category: 'UX',
        title: 'Enhance Website Navigation',
        description: 'Website navigation is not intuitive. Visitors may have difficulty finding the information they need.',
        recommendation: 'Simplify your navigation menu and use clear, descriptive labels. Implement breadcrumbs to help users understand their location on the site.',
        impact: 'Medium'
      },
      {
        category: 'UX',
        title: 'Optimize Page Load Speed',
        description: 'Page load speed is slow, leading to a poor user experience and potentially higher bounce rates.',
        recommendation: 'Optimize images, leverage browser caching, and minimize HTTP requests to improve page load speed.',
        impact: 'High'
      },
      {
        category: 'Conversion',
        title: 'Implement a Chatbot for Instant Support',
        description: 'Visitors may have questions or need assistance while browsing your site. Providing instant support can increase engagement and conversions.',
        recommendation: 'Implement a chatbot to answer common questions and provide real-time support. Ensure the chatbot is easy to find and use.',
        impact: 'Medium'
      }
    ],
    metrics: {
      bounceRate: '45%',
      avgSessionDuration: '2:30',
      conversionRate: '3.2%'
    }
  };

  const handleAnalyzeWebsite = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsVisible(true);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-100/15 to-blue-100/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Unlock the Secrets Behind
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
              High-Converting Websites
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See exactly what your visitors experience in the first few seconds and discover hidden opportunities to boost conversions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 shadow-xl rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Analyze Your Website</h3>
              <p className="text-gray-600 mb-8">Enter your website URL to receive a detailed visitor experience report.</p>
              <div className="mb-4">
                <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                <input
                  type="url"
                  id="websiteUrl"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-4 py-2"
                  placeholder="https://yourwebsite.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  disabled={isAnalyzing}
                />
              </div>
              <button
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleAnalyzeWebsite}
                disabled={isAnalyzing || !websiteUrl}
              >
                {isAnalyzing ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  'Get Instant Analysis'
                )}
              </button>
              <p className="mt-4 text-sm text-gray-500">
                By clicking "Get Instant Analysis", you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-xl rounded-xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Visitor Experience Report</h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                    Live Analysis
                  </Badge>
                </div>

                {/* Analysis Results */}
                <div className="space-y-6">
                  {/* Overall Score */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-600 font-medium">Overall Score</div>
                      <div className="text-3xl font-bold text-indigo-700">{analysisData.score}/100</div>
                    </div>
                    <p className="text-sm text-gray-500">{analysisData.summary}</p>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>Avg. Session: {analysisData.metrics.avgSessionDuration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>Bounce Rate: {analysisData.metrics.bounceRate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <TrendingUp className="w-4 h-4" />
                        <span>Conversion: {analysisData.metrics.conversionRate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Insights</h4>
                    
                    {analysisData.insights.map((insight, index) => (
                      <div 
                        key={index} 
                        className={`opacity-0 translate-y-4 transition-all duration-700 ease-out ${
                          isVisible ? 'opacity-100 translate-y-0' : ''
                        } border-l-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow`}
                        style={{ 
                          animationDelay: `${index * 200}ms`,
                          borderLeftColor: insight.category === 'Critical' ? '#ef4444' : 
                                         insight.category === 'Conversion' ? '#f97316' : 
                                         insight.category === 'UX' ? '#3b82f6' : '#10b981'
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            insight.category === 'Critical' ? 'bg-red-100' : 
                            insight.category === 'Conversion' ? 'bg-orange-100' : 
                            insight.category === 'UX' ? 'bg-blue-100' : 'bg-green-100'
                          }`}>
                            {insight.category === 'Critical' ? <AlertCircle className="w-5 h-5 text-red-600" /> :
                             insight.category === 'Conversion' ? <TrendingUp className="w-5 h-5 text-orange-600" /> :
                             insight.category === 'UX' ? <Eye className="w-5 h-5 text-blue-600" /> :
                             <CheckCircle className="w-5 h-5 text-green-600" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge 
                                variant="outline" 
                                className={`${
                                  insight.category === 'Critical' ? 'border-red-200 text-red-700 bg-red-50' : 
                                  insight.category === 'Conversion' ? 'border-orange-200 text-orange-700 bg-orange-50' : 
                                  insight.category === 'UX' ? 'border-blue-200 text-blue-700 bg-blue-50' : 
                                  'border-green-200 text-green-700 bg-green-50'
                                }`}
                              >
                                {insight.category}
                              </Badge>
                              <span className="text-sm font-medium text-gray-600">Impact: {insight.impact}</span>
                            </div>
                            <h5 className="font-semibold text-gray-900 mb-3">{insight.title}</h5>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{insight.description}</p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <p className="text-xs font-medium text-gray-500 mb-2">Recommendation:</p>
                              <p className="text-sm text-gray-700">{insight.recommendation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* More Metrics */}
                  <div className="bg-white border border-gray-200/50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Additional Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Eye className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">Page Views</div>
                          <div className="text-xl font-bold text-gray-700">2,458</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Brain className="w-5 h-5 text-orange-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">Avg. Time on Page</div>
                          <div className="text-xl font-bold text-gray-700">1:45</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">Bounce Rate</div>
                          <div className="text-xl font-bold text-gray-700">48%</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-red-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">Conversion Rate</div>
                          <div className="text-xl font-bold text-gray-700">2.8%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Ready to Improve Your Website?</h4>
                    <p className="text-gray-600 mb-6">Get personalized recommendations to optimize your visitor experience and boost conversions.</p>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                      Book a Consultation
                    </button>
                  </div>
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
