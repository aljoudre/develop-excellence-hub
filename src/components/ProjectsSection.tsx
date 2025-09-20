import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { language, direction, t } = useLanguage();

  const projects = [
    {
      id: 'blodar',
      name: t('blodarName', 'بلودار كمباوند', 'Blodar Compound'),
      location: 'Riyadh',
      status: t('availableStatus', 'متاح للبيع', 'Available for Sale'),
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      description: t('blodarDesc', 'مجتمع سكني راقي يوفر تجربة عيش استثنائية', 'Premium residential community offering exceptional living experience')
    },
    {
      id: 'ares',
      name: t('aresName', 'أريس كمباوند', 'Ares Compound'),
      location: 'Riyadh',
      status: t('availableStatus', 'متاح للبيع', 'Available for Sale'),
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      description: t('aresDesc', 'تطوير عقاري حديث بأحدث المعايير العالمية', 'Modern real estate development with latest international standards')
    },
    {
      id: 'nova',
      name: t('novaName', 'نوفا ريزيدنس', 'Nova Residence'),
      location: 'Jeddah',
      status: t('comingSoonStatus', 'قريباً', 'Coming Soon'),
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: t('novaDesc', 'مشروع سكني متميز على ساحل البحر الأحمر', 'Distinguished residential project on the Red Sea coast')
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('projectsTitle', 'مجتمعاتنا السكنية', 'Our Residential Communities')}
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('projectsSubtitle', 'اكتشف مجموعة متنوعة من المشاريع السكنية المتميزة التي تلبي جميع احتياجاتك', 'Discover a diverse range of distinguished residential projects that meet all your needs')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-card-hover transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className={`text-2xl font-bold text-foreground mb-2 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {project.name}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-2 ml-2" />
                  <span>{project.location}</span>
                </div>
                
                <p className={`text-muted-foreground mb-4 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {project.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <span>{t('viewDetails', 'تفاصيل أكثر', 'View Details')}</span>
                  {direction === 'rtl' ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-4 text-lg font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t('viewAllProjects', 'عرض جميع المشاريع', 'View All Projects')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;