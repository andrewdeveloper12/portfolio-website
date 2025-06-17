import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  useEffect(() => {
    document.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang, isRTL]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsOpen(false);
    
    // Small delay to allow menu to close smoothly
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element instanceof HTMLElement) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ 
          top: offsetTop, 
          behavior: 'smooth' 
        });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
className={`fixed top-0 left-0 right-0 z-50 transition-none ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/30 dark:border-gray-700/40'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#home')}
            className={`relative z-10 font-bold tracking-tight cursor-pointer transition-all duration-150 ease-out ${
              isScrolled 
                ? 'text-2xl sm:text-3xl text-gray-800 dark:text-white' 
                : 'text-2xl sm:text-3xl text-white drop-shadow-lg'
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('hero.name')}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-1 xl:space-x-reverse xl:space-x-3' : 'space-x-1 xl:space-x-3'}`}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.0 + 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-150 ease-out text-sm xl:text-base group ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span className="relative z-10">{t(`nav.${item.key}`)}</span>
                <motion.div
                  className={`absolute inset-0 rounded-full transition-all duration-150 ease-out ${
                    isScrolled 
                      ? 'bg-gray-100 dark:bg-gray-800' 
                      : 'bg-white/20 backdrop-blur-sm'
                  }`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                />
              </motion.button>
            ))}

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} px-4 py-2 rounded-full font-medium transition-all duration-150 ease-out ${
                isScrolled 
                  ? 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Globe size={18} />
              <motion.div
                key={currentLang}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
              >
                <span className="text-sm">{currentLang === 'en' ? '🇺🇸' : '🇸🇦'}</span>
                <span className="text-sm font-medium">
                  {currentLang === 'en' ? 'EN' : 'عربي'}
                </span>
              </motion.div>
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-all duration-150 ease-out ${
                isScrolled 
                  ? 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className={`lg:hidden flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-colors duration-150 ease-out flex items-center space-x-1 ${
                isScrolled ? 'text-gray-700 dark:text-white' : 'text-white'
              }`}
            >
              <motion.div
                key={currentLang}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-lg">{currentLang === 'en' ? '🇺🇸' : '🇸🇦'}</span>
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-150 ease-out ${
                isScrolled ? 'text-gray-700 dark:text-white' : 'text-white'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-150 ease-out ${
                isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-gray-200/20 dark:border-gray-700/30"
            >
              <div className="py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      x: isRTL ? -8 : 8, 
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full px-6 py-4 text-gray-700 dark:text-white font-medium transition-all duration-150 ease-out text-base rounded-xl mx-2 ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;