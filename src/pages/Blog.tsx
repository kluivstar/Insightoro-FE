import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
              <p className="text-xl text-gray-600 mb-12">
                Insights and tips on website optimization and user experience.
              </p>
              <div className="space-y-8">
                <article className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    The Psychology Behind First Impressions on Websites
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Understanding how visitors form instant judgments about your website and what you can do to make those judgments work in your favor.
                  </p>
                  <div className="text-sm text-gray-500">Coming soon...</div>
                </article>
                <article className="border-b border-gray-200 pb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    10 Common Website Mistakes That Drive Visitors Away
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Learn about the most common pitfalls that create confusion and how to avoid them.
                  </p>
                  <div className="text-sm text-gray-500">Coming soon...</div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;