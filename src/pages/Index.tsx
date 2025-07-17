
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EmotionalJourneySection from '@/components/EmotionalJourneySection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import StepsSection from '@/components/StepsSection';
import DemoSection from '@/components/DemoSection';
import EmailFooter from '@/components/EmailFooter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <EmotionalJourneySection />
        <BeforeAfterSection />
        <StepsSection />
        <div id="demo-section">
          <DemoSection />
        </div>
        <EmailFooter />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
