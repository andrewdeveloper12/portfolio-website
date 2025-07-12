import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bubbleVariants = {
    animate: {
      y: [-20, -100, -20],
      x: [0, 30, 0],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white overflow-hidden relative"
    >
      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm"
            style={{
              width: Math.min(Math.random() * 60 + 20, 80),
              height: Math.min(Math.random() * 60 + 20, 80),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={bubbleVariants}
            animate="animate"
            transition={{
              delay: i * 0.5,
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ${
            isRTL ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`lg:w-1/2 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
          >
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-purple-200 dark:text-purple-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight break-words text-balance"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t('hero.name')}
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-purple-100 dark:text-purple-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {t('hero.title')}
              </span>
            </motion.h2>

            <motion.p
              className={`text-sm sm:text-base md:text-lg mb-8 sm:mb-12 text-purple-100 dark:text-purple-300 max-w-lg leading-relaxed ${
                isRTL ? 'mx-auto lg:mr-0 lg:ml-auto' : 'mx-auto lg:mx-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 mb-8 ${
                isRTL 
                  ? 'justify-center lg:justify-end sm:flex-row-reverse' 
                  : 'justify-center lg:justify-start'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
              >
                {t('hero.viewWork')}
              </motion.button>
              <a
                href="https://www.linkedin.com/in/andrew-osama-9a393b22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 sm:py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all"
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 border-white rounded-lg font-medium hover:bg-white hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open(
                    'https://drive.google.com/uc?export=download&id=1mtYw4EryFwa1RDAzVGBmlfW_h8P2OD9x',
                    '_blank'
                  );
                }}
              >
                {t('hero.contactMe')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[300px] md:max-w-[400px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 p-1 rounded-3xl"
              >
                <div className="w-full h-full bg-gradient-bg rounded-lg"></div>
              </motion.div>
              <div className="relative overflow-hidden aspect-square border-4 border-white/20 shadow-2xl rounded-3xl">
                <img
                  src="andrew.png.jpg"
                  alt={t('hero.name')}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Button */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
