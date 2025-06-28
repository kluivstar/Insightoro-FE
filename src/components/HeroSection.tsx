
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-300/8 to-indigo-300/8 rounded-full mix-blend-multiply filter blur-2xl animate-float-fast"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='m 40 0 l 0 0 0 40' fill='none' stroke='%233B82F6' stroke-width='1' opacity='0.5'/%3e%3cpath d='m 0 40 l 40 0 0 0' fill='none' stroke='%233B82F6' stroke-width='1' opacity='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
          }} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-blue-200/30 mb-8 shadow-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Experience What Your Visitors Feel</span>
          </div>
          
          {/* Main headline - more modern typography with reduced size */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Your website might be{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent relative inline-block">
              pushing people away
              <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-full"></div>
            </span>
            {' '}in seconds.
          </h1>
          
          {/* Subtitle - refined spacing and typography */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-normal">
            Insightoro reveals the emotional journey of your first-time visitors — what they see, feel, and experience before they decide to stay or leave.
          </p>
          
          {/* Modern email capture */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleEmailSubmit} className="flex gap-3 p-1.5 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-xl">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-base border-0 bg-transparent focus:ring-0 focus:outline-none placeholder:text-gray-500"
                required
              />
              <Button 
                type="submit"
                className="h-14 px-8 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Get Early Access
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              Join 500+ business owners • No spam, just insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
