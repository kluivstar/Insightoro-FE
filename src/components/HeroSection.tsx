
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { TrendingDown, TrendingUp, Zap } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scanning effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Multiple animated scanning lines */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent w-full h-2 animate-scan-slow top-1/4"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200/20 to-transparent w-full h-3 animate-scan-medium top-2/3"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/15 to-transparent w-full h-1 animate-scan-fast top-1/2"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/25 to-transparent w-full h-2 animate-scan-reverse top-3/4"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 0 0 60' fill='none' stroke='%233B82F6' stroke-width='0.8' opacity='0.4'/%3e%3cpath d='m 0 60 l 60 0 0 0' fill='none' stroke='%233B82F6' stroke-width='0.8' opacity='0.4'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
          }} />
        </div>
        
        {/* Dynamic floating elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-indigo-200/25 rounded-full mix-blend-multiply filter blur-lg animate-float-fast"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/15 rounded-full mix-blend-multiply filter blur-md animate-float-medium"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              {/* Main headline */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 mb-8">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Feel what your visitors feel</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Your website might be{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative">
                    pushing people away
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full"></div>
                  </span>
                  {' '}in seconds.
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Insightoro reveals the emotional journey of your first-time visitors — what they see, feel, and experience before they decide to stay or leave.
              </p>
              
              {/* Email collection */}
              <div className="max-w-lg mx-auto lg:mx-0 mb-12">
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 p-2 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 text-base border-0 bg-transparent focus:ring-0 focus:outline-none"
                    required
                  />
                  <Button 
                    type="submit"
                    className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg"
                  >
                    Get Early Access
                  </Button>
                </form>
                <p className="text-sm text-gray-500 mt-4 flex items-center justify-center lg:justify-start gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                  Join 500+ business owners • No spam, just insights
                </p>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Woman analyzing website data on laptop"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                {/* Overlay with scan effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-scan-slow"></div>
                
                {/* Floating analysis cards */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float-slow">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Clarity Score: 94%</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">5-Second Test</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-float-fast"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-xl animate-float-slow"></div>
            </div>
          </div>

          {/* Visual metaphor section moved below the main content */}
          <div className="flex justify-center items-center gap-12 md:gap-20 mt-20">
            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <TrendingDown className="w-8 h-8 text-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>
              <p className="text-gray-700 font-medium">Visitors feel lost<br />and leave quickly</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-lg animate-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Insightoro
              </div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <p className="text-gray-700 font-medium">Visitors understand<br />and take action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
