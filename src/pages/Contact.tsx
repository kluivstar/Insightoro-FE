import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
              <p className="text-xl text-gray-600 mb-12">
                Have questions about Insightoro? We'd love to hear from you.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Email us directly at: <strong>hello@insightoro.com</strong>
                    </p>
                    <p className="text-gray-600">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
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

export default Contact;