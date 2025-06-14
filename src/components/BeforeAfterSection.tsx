
const BeforeAfterSection = () => {
  const beforeItems = [
    "Visitors leave confused.",
    "They don't trust your brand.",
    "They miss your CTA.",
    "Your homepage feels cluttered.",
    "Bounce rate goes up."
  ];

  const afterItems = [
    "Visitors immediately 'get it.'",
    "Trust is built with clean clarity.",
    "Your CTA stands out.",
    "Your homepage is focused.",
    "More people stay, click, and convert."
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-brand-gray-light to-brand-blue-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Transformation
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            See the difference Insightoro makes for your website's first impression.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before Section */}
          <div className="animate-slide-in-left">
            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-400">
              <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center">
                <span className="text-3xl mr-3">😞</span>
                Before Insightoro
              </h3>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* After Section */}
          <div className="animate-slide-in-right">
            <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-400">
              <h3 className="text-2xl font-bold text-green-700 mb-8 flex items-center">
                <span className="text-3xl mr-3">🎉</span>
                After Insightoro
              </h3>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
