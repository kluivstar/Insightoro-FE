import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 mb-6">
                  At Insightoro, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our website analysis service.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">We may collect information about you in the following ways:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Personal information you provide directly (email, name, website URL)</li>
                  <li>Website analysis data from URLs you submit for scanning</li>
                  <li>Usage data about how you interact with our service</li>
                  <li>Technical data like IP addresses and browser information</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Provide and maintain our website analysis service</li>
                  <li>Generate detailed reports about website visitor experience</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve and optimize our platform</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at privacy@insightoro.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;