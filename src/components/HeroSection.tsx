
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Eye, MousePointer, Clock } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main headline with modern typography */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 mb-8">
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
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
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
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Early Access
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              Join 500+ business owners • No spam, just insights
            </p>
          </div>
          
          {/* Modern visual metaphor */}
          <div className="flex justify-center items-center gap-12 md:gap-20">
            <div className="text-center group animate-slide-in-left">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Eye className="w-6 h-6 text-red-500" />
                    <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">?</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Confused<br />Experience</p>
            </div>
            
            <div className="flex flex-col items-center animate-fade-in delay-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MousePointer className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Insightoro
              </div>
            </div>
            
            <div className="text-center group animate-slide-in-right">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Eye className="w-6 h-6 text-green-500" />
                    <Clock className="w-4 h-4 text-green-400" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Clear<br />Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
