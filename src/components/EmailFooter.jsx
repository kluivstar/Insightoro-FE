
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Sparkles, Clock, Shield } from 'lucide-react';

const EmailFooter = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the future of website clarity! We'll be in touch soon.");
      setEmail('');
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8">
              <Sparkles className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-semibold text-blue-100">Join the Beta</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8 tracking-tight">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Visitor Experience?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-16 max-w-3xl mx-auto leading-relaxed">
              Join forward-thinking business owners who are already creating clearer, 
              more emotionally engaging websites that convert.
            </p>
          </div>
          
          {/* Email Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg bg-white/90 border-0 rounded-xl text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-400"
                required
              />
              <Button 
                type="submit"
                className="h-14 px-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get Early Access
              </Button>
            </form>
          </div>
          
          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">500+ Beta Users</div>
                <div className="text-blue-200 text-sm">Already signed up</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">No Spam Promise</div>
                <div className="text-blue-200 text-sm">Only valuable insights</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Early 2025 Launch</div>
                <div className="text-blue-200 text-sm">Be among the first</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailFooter;
