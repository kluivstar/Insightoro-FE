
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { AlertCircle, CheckCircle, Zap } from 'lucide-react';

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
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-lg animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-pink-200/25 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200/35 rounded-full mix-blend-multiply filter blur-xl animate-bounce"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-indigo-300/20 rounded-lg rotate-45 animate-spin"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-300/25 rounded-full animate-ping"></div>
        </div>
        
        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOUM5MkFDIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-blue-100/20"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main headline with modern typography */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Feel what your visitors feel</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Your website might be{' '}
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent relative">
                pushing people away
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full"></div>
              </span>
              {' '}in seconds.
            </h1>
          </div>
          
          {/* Refined subtext */}
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            Insightoro reveals the emotional journey of your first-time visitors — what they see, feel, and experience before they decide to stay or leave.
          </p>
          
          {/* Email collection with modern design */}
          <div className="max-w-lg mx-auto mb-20">
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
            <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
              Join 500+ business owners • No spam, just insights
            </p>
          </div>
          
          {/* Improved visual metaphor */}
          <div className="flex justify-center items-center gap-12 md:gap-20">
            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
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
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
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
