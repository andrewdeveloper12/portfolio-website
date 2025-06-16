import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Bubble animation variants
  const bubbleVariants = {
    animate: {
      y: [-20, -100, -20],
      x: [0, 30, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg text-white overflow-hidden relative">
      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={bubbleVariants}
            animate="animate"
            transition={{
              delay: i * 0.5,
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 text-purple-200 font-medium"
            >
              {t('hero.greeting')}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              {t('hero.name')}
            </motion.h1>
            
            <div className="h-2"></div> {/* مسافة إضافية */}
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-purple-100"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {t('hero.title')}
              </span>
            </motion.h2>
            
            <div className="h-4"></div> {/* مسافة إضافية */}
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl mb-12 text-purple-100 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                {t('hero.viewWork')}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-white rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-all"
              >
                {t('hero.contactMe')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center relative mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1 rounded-lg"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                }}
              >
                <div className="w-full h-full bg-gradient-bg rounded-lg"></div>
              </motion.div>
              <div className="relative overflow-hidden w-full h-full aspect-square border-4 border-white/20 shadow-2xl rounded-lg">
                <img
                  src="andrew.png.jpg"
                  alt={t('hero.name')}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;