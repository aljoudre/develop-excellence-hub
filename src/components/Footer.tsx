import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();

  const quickLinks = [
    { label: t('homeLink', 'الرئيسية', 'Home'), href: '/' },
    { label: t('aboutLink', 'من نحن', 'About Us'), href: '/about' },
    { label: t('communitiesLink', 'مجتمعاتنا', 'Our Communities'), href: '/communities' },
    { label: t('investorsLink', 'علاقات المستثمرين', 'Investor Relations'), href: '/investors' }
  ];

  const policies = [
    { label: t('privacyPolicy', 'سياسة الخصوصية', 'Privacy Policy'), href: '/privacy' },
    { label: t('termsConditions', 'الشروط والأحكام', 'Terms & Conditions'), href: '/terms' },
    { label: t('cookiePolicy', 'سياسة ملفات تعريف الارتباط', 'Cookie Policy'), href: '/cookies' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-6">
              {t('companyName', 'السليمان العقارية', 'AlSoliman Real Estate')}
            </div>
            <p className={`text-primary-foreground/80 mb-6 leading-relaxed ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('companyDesc', 'شركة رائدة في مجال التطوير العقاري تقدم حلولاً سكنية متميزة ومبتكرة', 'A leading company in real estate development providing distinguished and innovative residential solutions')}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{t('address', 'الرياض، المملكة العربية السعودية', 'Riyadh, Saudi Arabia')}</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">920003511</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@alsoliman.com.sa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('quickLinksTitle', 'روابط سريعة', 'Quick Links')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className={`text-primary-foreground/80 hover:text-primary-foreground transition-colors ${language === 'ar' ? 'font-arabic' : 'font-english'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('policiesTitle', 'السياسات', 'Policies')}
            </h3>
            <ul className="space-y-3">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a 
                    href={policy.href}
                    className={`text-primary-foreground/80 hover:text-primary-foreground transition-colors ${language === 'ar' ? 'font-arabic' : 'font-english'}`}
                  >
                    {policy.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('newsletterTitle', 'اشترك في نشرتنا الإخبارية', 'Subscribe to our Newsletter')}
            </h3>
            <p className={`text-primary-foreground/80 mb-4 text-sm ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('newsletterDesc', 'احصل على آخر الأخبار والعروض الحصرية', 'Get the latest news and exclusive offers')}
            </p>
            
            <div className="space-y-3">
              <Input 
                placeholder={t('emailPlaceholder', 'بريدك الإلكتروني', 'Your email')}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button 
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                {t('subscribe', 'اشترك', 'Subscribe')}
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <p className={`text-primary-foreground/80 text-sm ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('copyright', '© شركة السليمان العقارية 2025', '© AlSoliman Real Estate Company 2025')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;