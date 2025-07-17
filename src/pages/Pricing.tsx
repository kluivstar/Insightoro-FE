import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      features: [
        "5 website scans per month",
        "Basic emotional journey analysis",
        "Email support",
        "PDF reports"
      ]
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      popular: true,
      features: [
        "20 website scans per month",
        "Detailed emotional journey analysis",
        "Priority support",
        "Advanced PDF reports",
        "Team collaboration",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "Unlimited website scans",
        "Complete emotional journey analysis",
        "Dedicated support",
        "Custom integrations",
        "White-label reports",
        "Advanced analytics"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Pricing Plans</h1>
                <p className="text-xl text-gray-600">
                  Choose the plan that fits your business needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div key={index} className={`relative bg-white border-2 rounded-xl p-8 ${plan.popular ? 'border-orange-500 shadow-xl' : 'border-gray-200'}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular 
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;