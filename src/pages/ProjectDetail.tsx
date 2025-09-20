import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Home, Maximize, Bath, Bed, Car, ArrowRight, ArrowLeft, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectDetail = () => {
  const { slug } = useParams();
  const { language, direction, t } = useLanguage();
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: 'blodar_compound',
    name: t('blodarName', 'بلودار كمباوند', 'Blodar Compound'),
    status: 'for_sale',
    statusLabel: t('forSale', 'متاح للبيع', 'For Sale'),
    location: t('riyadh', 'الرياض', 'Riyadh'),
    description: t('blodarDetailDesc', 'مجتمع سكني راقي يقع في قلب الرياض، يوفر تجربة عيش استثنائية مع أحدث المرافق والخدمات العصرية. يضم المشروع مجموعة متنوعة من الوحدات السكنية التي تلبي احتياجات جميع العائلات.', 'A premium residential community located in the heart of Riyadh, offering an exceptional living experience with the latest modern facilities and services. The project includes a diverse range of residential units that meet the needs of all families.'),
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      { key: 'totalUnits', label: t('totalUnits', 'إجمالي الوحدات', 'Total Units'), value: '150' },
      { key: 'totalArea', label: t('totalArea', 'المساحة الإجمالية', 'Total Area'), value: '50,000 م²' },
      { key: 'completion', label: t('completion', 'نسبة الإنجاز', 'Completion'), value: '75%' },
      { key: 'delivery', label: t('delivery', 'تاريخ التسليم', 'Delivery Date'), value: '2025' }
    ],
    units: [
      {
        id: 'apt_1br',
        type: 'apartment',
        name: t('apartment1br', 'شقة غرفة نوم واحدة', '1 Bedroom Apartment'),
        area: '75',
        bedrooms: 1,
        bathrooms: 1,
        parking: 1,
        price: '450,000',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        features: [
          t('modernDesign', 'تصميم عصري', 'Modern Design'),
          t('balcony', 'شرفة', 'Balcony'),
          t('centralAC', 'تكييف مركزي', 'Central AC')
        ]
      },
      {
        id: 'apt_2br',
        type: 'apartment',
        name: t('apartment2br', 'شقة غرفتي نوم', '2 Bedroom Apartment'),
        area: '120',
        bedrooms: 2,
        bathrooms: 2,
        parking: 1,
        price: '650,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        features: [
          t('spaciousLayout', 'تصميم واسع', 'Spacious Layout'),
          t('masterBedroom', 'غرفة نوم رئيسية', 'Master Bedroom'),
          t('storageRoom', 'غرفة تخزين', 'Storage Room')
        ]
      },
      {
        id: 'villa_3br',
        type: 'villa',
        name: t('villa3br', 'فيلا 3 غرف نوم', '3 Bedroom Villa'),
        area: '250',
        bedrooms: 3,
        bathrooms: 3,
        parking: 2,
        price: '1,200,000',
        image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=800&q=80',
        features: [
          t('privateGarden', 'حديقة خاصة', 'Private Garden'),
          t('maidsRoom', 'غرفة خادمة', 'Maid\'s Room'),
          t('roof', 'سطح', 'Roof Terrace')
        ]
      }
    ],
    amenities: [
      t('swimmingPool', 'مسبح', 'Swimming Pool'),
      t('gym', 'صالة رياضية', 'Gym'),
      t('playground', 'ملعب أطفال', 'Children\'s Playground'),
      t('security', 'أمن 24/7', '24/7 Security'),
      t('parking', 'مواقف سيارات', 'Parking'),
      t('mosque', 'مسجد', 'Mosque'),
      t('commercialArea', 'منطقة تجارية', 'Commercial Area'),
      t('greenSpaces', 'مساحات خضراء', 'Green Spaces')
    ]
  };

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
                <BreadcrumbLink asChild>
                  <Link to="/communities">{t('communities', 'مجتمعاتنا', 'Communities')}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative">
          <div className="h-96 overflow-hidden">
            <img 
              src={project.gallery[0]} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <div className="text-white">
                <Badge className="bg-primary text-primary-foreground mb-4">
                  {project.statusLabel}
                </Badge>
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {project.name}
                </h1>
                <div className="flex items-center text-white/90">
                  <MapPin className="w-5 h-5 mr-2 ml-2" />
                  <span className="text-lg">{project.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">{t('overview', 'نظرة عامة', 'Overview')}</TabsTrigger>
                    <TabsTrigger value="units">{t('units', 'الوحدات', 'Units')}</TabsTrigger>
                    <TabsTrigger value="amenities">{t('amenities', 'المرافق', 'Amenities')}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className={`text-2xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t('aboutProject', 'عن المشروع', 'About the Project')}
                        </h2>
                        <p className={`text-muted-foreground leading-relaxed ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {project.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.features.map((feature, index) => (
                          <Card key={index}>
                            <CardContent className="p-4 text-center">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {feature.value}
                              </div>
                              <div className={`text-sm text-muted-foreground ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                                {feature.label}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {project.gallery.slice(1).map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden">
                            <img 
                              src={image} 
                              alt={`${project.name} ${index + 2}`}
                              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="units" className="mt-6">
                    <div className="space-y-6">
                      <h2 className={`text-2xl font-bold ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                        {t('availableUnits', 'الوحدات المتاحة', 'Available Units')}
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.units.map((unit) => (
                          <Card key={unit.id} className="overflow-hidden hover:shadow-card-hover transition-all duration-300">
                            <div className="relative">
                              <img 
                                src={unit.image} 
                                alt={unit.name}
                                className="w-full h-48 object-cover"
                              />
                              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                                {unit.type === 'apartment' ? t('apartment', 'شقة', 'Apartment') : t('villa', 'فيلا', 'Villa')}
                              </Badge>
                            </div>
                            
                            <CardContent className="p-6">
                              <h3 className={`text-xl font-bold mb-2 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                                {unit.name}
                              </h3>
                              
                              <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Maximize className="w-4 h-4 mr-1 ml-1" />
                                  <span>{unit.area} {t('sqm', 'م²', 'm²')}</span>
                                </div>
                                <div className="flex items-center">
                                  <Bed className="w-4 h-4 mr-1 ml-1" />
                                  <span>{unit.bedrooms}</span>
                                </div>
                                <div className="flex items-center">
                                  <Bath className="w-4 h-4 mr-1 ml-1" />
                                  <span>{unit.bathrooms}</span>
                                </div>
                                <div className="flex items-center">
                                  <Car className="w-4 h-4 mr-1 ml-1" />
                                  <span>{unit.parking}</span>
                                </div>
                              </div>
                              
                              <div className="space-y-2 mb-4">
                                {unit.features.map((feature, index) => (
                                  <div key={index} className="text-sm text-muted-foreground">
                                    • {feature}
                                  </div>
                                ))}
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="text-2xl font-bold text-primary">
                                  {unit.price} {t('sar', 'ريال', 'SAR')}
                                </div>
                                <Button 
                                  variant="outline"
                                  onClick={() => setSelectedUnit(unit.id)}
                                >
                                  {t('inquire', 'استفسار', 'Inquire')}
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="amenities" className="mt-6">
                    <div className="space-y-6">
                      <h2 className={`text-2xl font-bold ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                        {t('projectAmenities', 'مرافق المشروع', 'Project Amenities')}
                      </h2>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {project.amenities.map((amenity, index) => (
                          <Card key={index}>
                            <CardContent className="p-4 text-center">
                              <Home className="w-8 h-8 mx-auto mb-2 text-primary" />
                              <div className={`text-sm ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                                {amenity}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className={language === 'ar' ? 'font-arabic' : 'font-english'}>
                      {t('contactUs', 'تواصل معنا', 'Contact Us')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{t('callNow', 'اتصل الآن', 'Call Now')}</span>
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{t('sendEmail', 'أرسل إيميل', 'Send Email')}</span>
                    </Button>
                    <Button variant="secondary" className="w-full">
                      {t('bookVisit', 'احجز زيارة', 'Book a Visit')}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className={language === 'ar' ? 'font-arabic' : 'font-english'}>
                      {t('quickFacts', 'حقائق سريعة', 'Quick Facts')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex justify-between">
                        <span className={`text-muted-foreground ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {feature.label}
                        </span>
                        <span className="font-medium">{feature.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;