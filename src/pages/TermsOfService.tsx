import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using Insightoro, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-600 mb-6">
                  Permission is granted to temporarily use Insightoro for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Description</h2>
                <p className="text-gray-600 mb-6">
                  Insightoro provides website analysis services that help businesses understand 
                  their visitors' emotional journey and optimize their websites accordingly.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                <p className="text-gray-600 mb-4">Users agree to:</p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Provide accurate information when using our services</li>
                  <li>Only analyze websites they own or have permission to analyze</li>
                  <li>Use the service in compliance with applicable laws</li>
                  <li>Not attempt to reverse engineer or compromise our platform</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  Insightoro shall not be liable for any damages arising from the use or inability 
                  to use our service, even if we have been advised of the possibility of such damages.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  For questions about these Terms of Service, contact us at legal@insightoro.com
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

export default TermsOfService;