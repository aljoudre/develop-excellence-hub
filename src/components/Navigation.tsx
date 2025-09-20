import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const menuItems = [
    {
      id: 'home',
      label: t('home', 'الرئيسية', 'Home'),
      href: '/'
    },
    {
      id: 'about',
      label: t('about', 'من نحن', 'About Us'),
      href: '/about'
    },
    {
      id: 'communities',
      label: t('communities', 'مجتمعاتنا', 'Our Communities'),
      href: '/communities'
    },
    {
      id: 'media',
      label: t('media', 'المركز الإعلامي', 'Media Center'),
      href: '#',
      submenu: [
        { label: t('news', 'الأخبار', 'News'), href: '/media/news' },
        { label: t('events', 'الفعاليات', 'Events'), href: '/media/events' },
        { label: t('blog', 'المدونة', 'Blog'), href: '/media/blog' },
        { label: t('branding', 'الهوية البصرية', 'Branding'), href: '/media/branding' }
      ]
    },
    {
      id: 'investors',
      label: t('investors', 'علاقات المستثمرين', 'Investor Relations'),
      href: '/investors'
    }
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">
              {t('logo', 'السليمان العقارية', 'AlSoliman')}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 space-x-reverse text-foreground hover:text-primary transition-colors">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-card z-50">
                        {item.submenu.map((subItem, index) => (
                          <a
                            key={index}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 space-x-reverse"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'ar' ? 'EN' : 'عربى'}</span>
            </Button>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t('bookUnit', 'احجز وحدتك', 'Book Your Unit')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border">
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="w-full mb-2 flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'ar' ? 'EN' : 'عربى'}</span>
                </Button>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t('bookUnit', 'احجز وحدتك', 'Book Your Unit')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;