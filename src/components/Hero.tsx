import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const { language, direction, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('heroTitle', 'تطوير بإتقان', 'Development With Excellence')}
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('heroSubtitle', 'تجربة سكنية فريدة تجمع بين الفخامة والراحة في أرقى المجتمعات السكنية', 'A unique living experience that combines luxury and comfort in the finest residential communities')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium flex items-center space-x-2 space-x-reverse"
            >
              <span>{t('learnMore', 'تعرف على المزيد', 'Learn More')}</span>
              {direction === 'rtl' ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-medium backdrop-blur-sm"
            >
              {t('bookUnit', 'احجز وحدتك', 'Book Your Unit')}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;