import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import ValuesSection from '@/components/ValuesSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <ValuesSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
