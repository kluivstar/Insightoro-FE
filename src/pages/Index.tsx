
import HeroSection from '@/components/HeroSection';
import EmotionalJourneySection from '@/components/EmotionalJourneySection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import StepsSection from '@/components/StepsSection';
import DemoSection from '@/components/DemoSection';
import EmailFooter from '@/components/EmailFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EmotionalJourneySection />
      <BeforeAfterSection />
      <StepsSection />
      <div id="demo-section">
        <DemoSection />
      </div>
      <EmailFooter />
    </div>
  );
};

export default Index;
