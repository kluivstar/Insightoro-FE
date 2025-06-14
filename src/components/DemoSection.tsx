
const DemoSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You'll Get
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            After scanning your site, you'll receive a comprehensive clarity scorecard.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-brand-blue-soft to-brand-orange-light p-8 rounded-3xl shadow-2xl">
            <div className="bg-white p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Clarity Scorecard</h3>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                  Score: 85/100
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">First 3 Seconds</span>
                    <div className="flex">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded-full ml-1"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Visual Clarity</span>
                    <div className="flex">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full ml-1"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">CTA Visibility</span>
                    <div className="flex">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded-full ml-1"></div>
                      <div className="w-4 h-4 bg-gray-200 rounded-full ml-1"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-brand-blue-light p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Recommendations:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Make your main headline bigger</li>
                    <li>• Add more contrast to your CTA button</li>
                    <li>• Reduce clutter in the hero section</li>
                    <li>• Clarify your value proposition</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-brand-gray">
                  Complete analysis with actionable steps to improve your homepage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
