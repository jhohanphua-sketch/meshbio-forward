import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MetricsSection from '@/components/MetricsSection';
import SolutionsSection from '@/components/SolutionsSection';
import UseCasesSection from '@/components/UseCasesSection';
import ChronicDiseasesSection from '@/components/ChronicDiseasesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TrustedBySection from '@/components/TrustedBySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <MetricsSection />
        <SolutionsSection />
        <UseCasesSection />
        <ChronicDiseasesSection />
        <CaseStudiesSection />
        <TrustedBySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
