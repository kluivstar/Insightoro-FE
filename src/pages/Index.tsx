
import HeroSection from '@/components/HeroSection';
import SignatureFeaturesSection from '@/components/SignatureFeaturesSection';
import EmotionalJourneySection from '@/components/EmotionalJourneySection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import BrandVoiceSection from '@/components/BrandVoiceSection';
import DemoSection from '@/components/DemoSection';
import EmailFooter from '@/components/EmailFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SignatureFeaturesSection />
      <EmotionalJourneySection />
      <BeforeAfterSection />
      <BrandVoiceSection />
      <DemoSection />
      <EmailFooter />
    </div>
  );
};

export default Index;
