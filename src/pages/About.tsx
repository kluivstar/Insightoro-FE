import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">About Insightoro</h1>
              <div className="prose prose-lg">
                <p className="text-xl text-gray-600 mb-6">
                  Insightoro was born from a simple observation: most website owners have no idea what their first-time visitors actually experience.
                </p>
                <p className="text-gray-600 mb-6">
                  We analyze the emotional journey of your website visitors, providing detailed insights into what they see, feel, and experience during those critical first 10 seconds that determine whether they stay or leave.
                </p>
                <p className="text-gray-600 mb-6">
                  Our mission is to bridge the gap between business owners and their visitors, transforming confusion into clarity and improving website conversions through emotional intelligence.
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

export default About;