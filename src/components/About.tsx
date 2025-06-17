import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Zap, Award, Users, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: <Award size={24} className="sm:w-8 sm:h-8" />, number: '1+', label: t('about.stats.experience') },
    { icon: <Code size={24} className="sm:w-8 sm:h-8" />, number: '30+', label: t('about.stats.projects') },
    { icon: <Users size={24} className="sm:w-8 sm:h-8" />, number: '10+', label: t('about.stats.clients') },
    { icon: <Coffee size={24} className="sm:w-8 sm:h-8" />, number: '500+', label: t('about.stats.coffee') }
  ];

  const features = [
    {
      icon: <Code size={24} className="sm:w-8 sm:h-8" />,
      title: t('about.features.cleanCode.title'),
      description: t('about.features.cleanCode.description')
    },
    {
      icon: <Palette size={24} className="sm:w-8 sm:h-8" />,
      title: t('about.features.creativeDesign.title'),
      description: t('about.features.creativeDesign.description')
    },
    {
      icon: <Zap size={24} className="sm:w-8 sm:h-8" />,
      title: t('about.features.fastPerformance.title'),
      description: t('about.features.fastPerformance.description')
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50  dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
            {t('about.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4  text-black dark:!text-white">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white p-4 sm:p-6 rounded-2xl shadow-lg card-hover"
            >
              <div className="text-purple-600 mb-3 sm:mb-4 flex justify-center">
                {stat.icon}
              </div>
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 sm:mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg card-hover text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-purple-600 mb-4 flex justify-center group-hover:text-blue-600 transition-colors duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Andrew Osama"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover max-w-md mx-auto lg:max-w-none"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2 px-4 lg:px-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gradient ">
              {t('about.story.title')}
            </h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed  text-black dark:!text-white"
            >
              {t('about.story.paragraph1')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed  text-black dark:!text-white"
            >
              {t('about.story.paragraph2')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed  text-black dark:!text-white"
            >
              {t('about.story.paragraph3')}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;