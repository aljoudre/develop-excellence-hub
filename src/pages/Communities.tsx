import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Communities = () => {
  const { language, direction, t } = useLanguage();
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');

  const statusOptions = [
    { key: 'all', label: t('statusAll', 'الكل', 'All') },
    { key: 'for_sale', label: t('forSale', 'متاح للبيع', 'For Sale') },
    { key: 'coming_soon', label: t('comingSoon', 'قريباً', 'Coming Soon') },
    { key: 'sold_out', label: t('soldOut', 'مباع بالكامل', 'Sold Out') },
    { key: 'under_construction', label: t('underConstruction', 'تحت الإنشاء', 'Under Construction') }
  ];

  const typeOptions = [
    { key: 'all', label: t('allTypes', 'الكل', 'All Types') },
    { key: 'villa_duplex', label: t('villaDuplex', 'فلل دبلكس', 'Villa Duplex') },
    { key: 'villa', label: t('villas', 'فلل', 'Villas') },
    { key: 'compound_apartments', label: t('compoundApartments', 'كمباوند شقق', 'Compound Apartments') },
    { key: 'office_complex', label: t('officeComplex', 'مجمع مكتبي', 'Office Complex') },
    { key: 'compound_villas', label: t('compoundVillas', 'كمباوند فلل', 'Compound Villas') },
    { key: 'apartment_buildings', label: t('apartmentBuildings', 'عمائر شقق', 'Apartment Buildings') },
    { key: 'separated_floors', label: t('separatedFloors', 'أدوار مفصولة', 'Separated Floors') }
  ];

  const cityOptions = [
    { key: 'all', label: t('chooseCity', 'اختر المدينة', 'Choose City') },
    { key: 'riyadh', label: t('riyadh', 'الرياض', 'Riyadh') },
    { key: 'makkah', label: t('makkah', 'مكة المكرمة', 'Makkah') },
    { key: 'madinah', label: t('madinah', 'المدينة المنورة', 'Madinah') },
    { key: 'dhahran', label: t('dhahran', 'الظهران', 'Dhahran') },
    { key: 'hota_bani_tameem', label: t('hotaBaniTameem', 'حوطة بني تميم', 'Hota Bani Tamim') }
  ];

  const projects = [
    {
      id: 'blodar_compound',
      slug: 'blodar-compound',
      name: t('blodarName', 'بلودار كمباوند', 'Blodar Compound'),
      status: 'for_sale',
      type: 'compound_apartments',
      city: 'riyadh',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      statusLabel: t('forSale', 'متاح للبيع', 'For Sale'),
      typeLabel: t('compoundApartments', 'كمباوند شقق', 'Compound Apartments'),
      description: t('blodarDesc', 'مجتمع سكني راقي يوفر تجربة عيش استثنائية', 'Premium residential community offering exceptional living experience')
    },
    {
      id: 'business_compound',
      slug: 'business-compound',
      name: t('businessName', 'بيزنس كمباوند', 'Business Compound'),
      status: 'under_construction',
      type: 'office_complex',
      city: 'riyadh',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      statusLabel: t('underConstruction', 'تحت الإنشاء', 'Under Construction'),
      typeLabel: t('officeComplex', 'مجمع مكتبي', 'Office Complex'),
      description: t('businessDesc', 'مجمع مكتبي متطور بأحدث المواصفات العالمية', 'Advanced office complex with latest international specifications')
    },
    {
      id: 'nova_residence',
      slug: 'nova-residence',
      name: t('novaName', 'نوفا ريزيدنس', 'Nova Residence'),
      status: 'coming_soon',
      type: 'compound_villas',
      city: 'makkah',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      statusLabel: t('comingSoon', 'قريباً', 'Coming Soon'),
      typeLabel: t('compoundVillas', 'كمباوند فلل', 'Compound Villas'),
      description: t('novaDesc', 'مشروع سكني متميز على ساحل البحر الأحمر', 'Distinguished residential project on the Red Sea coast')
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (statusFilter !== 'all' && project.status !== statusFilter) return false;
    if (typeFilter !== 'all' && project.type !== typeFilter) return false;
    if (cityFilter !== 'all' && project.city !== cityFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">{t('home', 'الرئيسية', 'Home')}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{t('communities', 'مجتمعاتنا', 'Communities')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('projectsTitle', 'مشاريعنا', 'Our Projects')}
            </h1>
            <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('projectsIntro', 'تعرف على مشاريع شركة السليمان العقارية', 'Explore AlSoliman Real Estate Company\'s projects')}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={t('selectStatus', 'اختر الحالة', 'Select Status')} />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map(option => (
                    <SelectItem key={option.key} value={option.key}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={t('selectType', 'اختر النوع', 'Select Type')} />
                </SelectTrigger>
                <SelectContent>
                  {typeOptions.map(option => (
                    <SelectItem key={option.key} value={option.key}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={t('selectCity', 'اختر المدينة', 'Select City')} />
                </SelectTrigger>
                <SelectContent>
                  {cityOptions.map(option => (
                    <SelectItem key={option.key} value={option.key}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-card-hover transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {project.statusLabel}
                      </Badge>
                      <Badge variant="outline" className="bg-background/90">
                        {project.typeLabel}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className={`text-2xl font-bold text-foreground mb-2 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-2 ml-2" />
                      <span>{cityOptions.find(c => c.key === project.city)?.label}</span>
                    </div>
                    
                    <p className={`text-muted-foreground mb-4 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                      {project.description}
                    </p>
                    
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                    >
                      <Link to={`/project/${project.slug}`}>
                        <span>{t('viewDetails', 'تفاصيل أكثر', 'View Details')}</span>
                        {direction === 'rtl' ? (
                          <ArrowLeft className="w-4 h-4" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className={`text-xl text-muted-foreground ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {t('noProjects', 'لا توجد مشاريع تطابق المعايير المحددة', 'No projects match the selected criteria')}
                </p>
              </div>
            )}

            {/* Call to Action */}
            {filteredProjects.length > 0 && (
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-medium"
                >
                  {t('registerInterest', 'سجل اهتماماتك', 'Register Your Interest')}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Communities;