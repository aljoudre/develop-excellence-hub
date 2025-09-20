import React from 'react';
import { Shield, Lightbulb, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ValuesSection = () => {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('qualityTitle', 'الجودة والاستدامة', 'Quality & Sustainability'),
      description: t('qualityDesc', 'نسعى لتحقيق أعلى معايير الجودة والاستدامة في جميع مشاريعنا لضمان راحة العملاء', 'We strive to achieve the highest standards of quality and sustainability in all our projects to ensure customer comfort')
    },
    {
      icon: Lightbulb,
      title: t('innovationTitle', 'الابتكار والتطوير', 'Innovation & Development'),
      description: t('innovationDesc', 'نوفر بيئة تفاعلية حديثة ومبتكرة مع مواكبة أحدث التطورات التقنية والعمرانية', 'We provide a modern and innovative interactive environment while keeping up with the latest technical and urban developments')
    },
    {
      icon: Award,
      title: t('excellenceTitle', 'التميز والإتقان', 'Excellence & Mastery'),
      description: t('excellenceDesc', 'نلتزم بتقديم خدمات متميزة وحلول عقارية مبتكرة تفوق توقعات عملائنا', 'We are committed to providing distinguished services and innovative real estate solutions that exceed our customers\' expectations')
    },
    {
      icon: Users,
      title: t('customerTitle', 'خدمة العملاء', 'Customer Service'),
      description: t('customerDesc', 'نضع العميل في المقدمة ونسعى لبناء علاقات طويلة الأمد قائمة على الثقة والشفافية', 'We put the customer first and strive to build long-term relationships based on trust and transparency')
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('valuesTitle', 'نستند على قيم ثابتة', 'We Build on Solid Values')}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('valuesSubtitle', 'قيمنا تشكل أساس عملنا ونهجنا في تطوير أفضل المشاريع العقارية', 'Our values form the foundation of our work and approach in developing the best real estate projects')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className={`text-xl font-bold text-foreground mb-4 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {value.title}
                </h3>
                
                <p className={`text-muted-foreground leading-relaxed ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;