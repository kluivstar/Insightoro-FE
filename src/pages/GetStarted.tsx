import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    website: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account creation coming soon! We'll notify you when it's ready.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Started</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
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
                      Password
                    </label>
                    <Input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL (optional)
                    </label>
                    <Input
                      type="url"
                      placeholder="https://your-website.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                  >
                    Create Account
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Already have an account? <Link to="/sign-in" className="text-orange-600 hover:text-orange-700 font-semibold">Sign In</Link>
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

export default GetStarted;