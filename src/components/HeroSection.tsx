
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! You're on the list for early access.");
      setEmail('');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue-light via-white to-brand-orange-light overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-orange/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your website might be{' '}
            <span className="text-brand-blue relative">
              pushing people away
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-orange/30 rounded"></div>
            </span>
            {' '}— in the first 3 seconds.
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-brand-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            Insightoro reveals what's confusing or unclear about your homepage before visitors bounce.
          </p>
          
          {/* Email collection form */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg border-2 border-brand-blue/20 focus:border-brand-blue rounded-xl"
                required
              />
              <Button 
                type="submit"
                className="h-14 px-8 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
              >
                Get Early Access
              </Button>
            </form>
            <p className="text-sm text-brand-gray mt-3">Join 500+ business owners waiting for launch</p>
          </div>
          
          {/* Visual metaphor */}
          <div className="flex justify-center items-center gap-8 md:gap-16">
            <div className="text-center animate-slide-in-left">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">😕</span>
              </div>
              <p className="text-brand-gray font-medium">Confused Visitors</p>
            </div>
            
            <div className="text-4xl text-brand-orange animate-fade-in delay-300">→</div>
            
            <div className="text-center animate-slide-in-right">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl">😊</span>
              </div>
              <p className="text-brand-gray font-medium">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
