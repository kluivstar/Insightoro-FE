import Header from '@/components/Header';
import Footer from '@/components/Footer';

const API = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">API Documentation</h1>
              <p className="text-xl text-gray-600 mb-12">
                Integrate Insightoro's emotional journey analysis into your applications.
              </p>
              
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Coming Soon
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Our API is currently in development. It will allow you to:
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Trigger website scans programmatically</li>
                    <li>• Retrieve detailed analysis reports</li>
                    <li>• Access emotional journey data</li>
                    <li>• Integrate with your existing tools</li>
                  </ul>
                  <p className="text-gray-600">
                    Sign up for early access to be notified when our API becomes available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default API;