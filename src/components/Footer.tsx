import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ArrowUp
=======
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Code,
  Palette,
  Database,
  Send
>>>>>>> 64b7339 (first deploy)
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' }
  ];

<<<<<<< HEAD
  const socialLinks = [
    { icon: Github, href: 'https://github.com/andrewdeveloper12', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/feed/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1CGdwoAWSw/', label: 'Facebook' },
    { icon: Mail, href: 'mailto:andrewdematry@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white  dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('hero.name')}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
                {t('footer.contactDescription')}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm sm:text-base">
                <Mail size={16} />
                <span>andrewdematry@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm sm:text-base">
                <Phone size={16} />
                <span>+201201082243</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm sm:text-base">
                <MapPin size={16} />
                <span>{t('contact.details.city')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">
              {t('footer.importantLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: isRTL ? -5 : 5, color: '#8B5CF6' }}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 cursor-pointer text-sm sm:text-base"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {t(`nav.${link.key}`)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">
              {t('footer.newsletter')}
            </h4>
            <p className="text-gray-400 mb-4 text-sm">
              {t('footer.newsletterDesc')}
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-200"
              >
                {t('footer.subscribe')}
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`flex gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-full transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-full transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 py-6"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm flex items-center">
              © 2024 {t('hero.name')}. {t('footer.rights')}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center">
              Made with <Heart className="text-red-500 mx-1" size={16} fill="currentColor" /> by {t('hero.name')}
            </p>
          </div>
        </div>
      </motion.div>
=======
  const services = [
    { icon: Code, name: 'Frontend Development', color: 'text-blue-400' },
    { icon: Database, name: 'Backend Development', color: 'text-green-400' },
    { icon: Palette, name: 'UI/UX Design', color: 'text-purple-400' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/andrewdeveloper12', 
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/feed/', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/share/1CGdwoAWSw/', 
      label: 'Facebook',
      color: 'hover:bg-blue-500'
    },
    { 
      icon: Mail, 
      href: 'mailto:andrewdematry@gmail.com', 
      label: 'Email',
      color: 'hover:bg-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%227%22%20cy=%227%22%20r=%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            
            {/* Brand Section - Full width on mobile, 2 cols on lg+ */}
            <motion.div 
              variants={itemVariants}
              className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src="dodo.png"
                    alt="Profile"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-purple-500/30"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    Andrew Dematry
                  </motion.h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Full Stack Developer</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                Crafting digital experiences with passion and precision. Let's build something amazing together.
              </p>

              {/* Contact Info - Responsive Stack */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Mail, text: "andrewdematry@gmail.com", href: "mailto:andrewdematry@gmail.com" },
                  { icon: Phone, text: "+201201082243", href: "tel:+201201082243" },
                  { icon: MapPin, text: "Cairo, Egypt", href: "#" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 group cursor-pointer"
                    whileHover={{ x: isRTL ? -3 : 3 }}
                    onClick={() => contact.href !== "#" && window.open(contact.href)}
                  >
                    <div className="p-1.5 sm:p-2 bg-gray-800/50 rounded-lg group-hover:bg-purple-600/20 transition-colors duration-300 flex-shrink-0">
                      <contact.icon size={14} className="sm:w-4 sm:h-4 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300 text-sm sm:text-base truncate">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Section - Responsive */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, x: isRTL ? -3 : 3 }}
                  >
                    <service.icon size={16} className={`sm:w-5 sm:h-5 ${service.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`} />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {service.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links - Responsive */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: isRTL ? -5 : 5, color: '#A855F7' }}
                      className="text-gray-400 hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center space-x-2 group text-sm sm:text-base"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors duration-300 flex-shrink-0"></span>
                      <span className="capitalize">{link.key}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section - Full Width Responsive */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl lg:rounded-2xl border border-purple-500/20 backdrop-blur-sm"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Stay Updated
              </h4>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Subscribe to get the latest updates on new projects and tech insights.
              </p>
              
              {/* Newsletter Form - Responsive */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm text-sm sm:text-base"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
                >
                  <Send size={14} className="sm:w-4 sm:h-4" />
                  <span>Subscribe</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Back to Top - Responsive */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700/50"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              {/* Social Links - Responsive Grid */}
              <div className={`flex gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 sm:p-3 bg-gray-800/50 rounded-full transition-all duration-300 ${social.color} backdrop-blur-sm border border-gray-700/30 hover:border-gray-600`}
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm"
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Section - Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 py-4 sm:py-6 bg-gray-900/50 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm flex items-center">
                © 2024 Andrew Osama. All rights reserved.
              </p>
              <motion.p
                className="text-gray-400 text-xs sm:text-sm flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                Made with{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="text-red-500 mx-1" size={14} fill="currentColor" />
                </motion.span>
                {' '}by Andrew Osama
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
>>>>>>> 64b7339 (first deploy)
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 64b7339 (first deploy)
