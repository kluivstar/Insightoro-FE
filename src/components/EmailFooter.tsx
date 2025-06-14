
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const EmailFooter = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Insightoro family! We'll be in touch soon.");
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-brand-blue to-brand-blue/90">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See What Your Visitors See?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Join 500+ business owners who are already improving their websites with clarity.
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg bg-white border-0 rounded-xl"
                required
              />
              <Button 
                type="submit"
                className="h-14 px-8 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
              >
                Get Early Access
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <p className="text-blue-100">No spam. Just clarity.</p>
            <div className="flex items-center space-x-2 text-blue-200">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm">Launch expected early 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailFooter;
