import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
              <p className="text-xl text-gray-600 mb-12">
                Join us in revolutionizing how businesses understand their website visitors.
              </p>
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    We're Growing!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We're always looking for talented individuals who are passionate about user experience, 
                    data analysis, and helping businesses succeed online.
                  </p>
                  <p className="text-gray-600">
                    Currently, we don't have any open positions, but we'd love to hear from you if you think 
                    you'd be a great fit for our team.
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

export default Careers;