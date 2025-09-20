import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, TrendingUp, Settings, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { language, direction, t } = useLanguage();

  const services = [
    {
      icon: Building,
      title: t('developmentTitle', 'التطوير العقاري', 'Real Estate Development'),
      description: t('developmentDesc', 'نقوم بتطوير مشاريع عقارية متكاملة تجمع بين التصميم العصري والوظائف المتقدمة', 'We develop integrated real estate projects that combine modern design with advanced functions'),
      features: [
        t('feature1', 'تصميم معماري متميز', 'Distinguished architectural design'),
        t('feature2', 'مواد بناء عالية الجودة', 'High-quality building materials'),
        t('feature3', 'مرافق وخدمات متكاملة', 'Integrated facilities and services')
      ]
    },
    {
      icon: TrendingUp,
      title: t('marketingTitle', 'التسويق العقاري', 'Real Estate Marketing'),
      description: t('marketingDesc', 'استراتيجيات تسويقية مبتكرة لضمان نجاح المشاريع العقارية وتحقيق أفضل العوائد', 'Innovative marketing strategies to ensure the success of real estate projects and achieve the best returns'),
      features: [
        t('marketingFeature1', 'تسويق رقمي متطور', 'Advanced digital marketing'),
        t('marketingFeature2', 'حملات إعلانية مستهدفة', 'Targeted advertising campaigns'),
        t('marketingFeature3', 'تحليل السوق والمنافسين', 'Market and competitor analysis')
      ]
    },
    {
      icon: Settings,
      title: t('managementTitle', 'إدارة الأملاك', 'Property Management'),
      description: t('managementDesc', 'خدمات إدارة شاملة للعقارات تشمل الصيانة والتشغيل وخدمة العملاء', 'Comprehensive property management services including maintenance, operation and customer service'),
      features: [
        t('managementFeature1', 'صيانة دورية ومتخصصة', 'Regular and specialized maintenance'),
        t('managementFeature2', 'خدمة عملاء على مدار الساعة', '24/7 customer service'),
        t('managementFeature3', 'إدارة مالية وقانونية', 'Financial and legal management')
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('servicesTitle', 'خدماتنا المتميزة', 'Our Distinguished Services')}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('servicesSubtitle', 'نقدم مجموعة شاملة من الخدمات العقارية المتخصصة لتلبية جميع احتياجاتكم', 'We provide a comprehensive range of specialized real estate services to meet all your needs')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-card-hover transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-foreground mb-4 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-muted-foreground mb-6 leading-relaxed ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm text-muted-foreground ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 ml-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <span>{t('learnMore', 'تعرف على المزيد', 'Learn More')}</span>
                    {direction === 'rtl' ? (
                      <ArrowLeft className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;