import HeroSection from "@/components/HeroSection";
import StrategiesSection from "@/components/StrategiesSection";
import TipsSection from "@/components/TipsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <StrategiesSection />
      <TipsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
