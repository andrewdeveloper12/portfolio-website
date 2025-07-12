import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code size={40} />,
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      features: [
        t('services.features.responsiveDesign'),
        t('services.features.seoOptimization'),
        t('services.features.performanceOptimization'),
        t('services.features.crossBrowserCompatibility')
      ],
      color: 'from-blue-500 to-blue-600',
      learnMoreLink: 'https://www.google.com/search?q=web+development+services'
    },
    {
      icon: <Database size={40} />,
      title: t('services.backendDevelopment.title'),
      description: t('services.backendDevelopment.description'),
      features: [
        t('services.features.restfulApis'),
        t('services.features.databaseDesign'),
        t('services.features.authentication'),
        t('services.features.cloudIntegration')
      ],
      color: 'from-orange-500 to-orange-600',
      learnMoreLink: 'https://www.google.com/search?q=backend+development+services'
    },
    {
      icon: <Settings size={40} />,
      title: t('services.technicalConsulting.title'),
      description: t('services.technicalConsulting.description'),
      features: [
        t('services.features.architecture'),
        t('services.features.techStack'),
        t('services.features.codeReview'),
        t('services.features.audits')
      ],
      color: 'from-indigo-500 to-indigo-600',
      learnMoreLink: 'https://www.google.com/search?q=technical+consulting+services'
    }
  ];

  return (
<<<<<<< HEAD
    <section id="services" className="section-padding bg-white  dark:bg-black">
=======
    <section id="services" className="section-padding bg-white  dark:bg-black pt-2 ">
>>>>>>> 64b7339 (first deploy)
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gradient">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto  text-black dark:!text-white">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg card-hover overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mt-4 relative z-10">
                  {service.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-medium text-gray-800">
                    {t('common.features')}:
                  </h4>
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href={service.learnMoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>{t('common.learnMore')}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
<<<<<<< HEAD
         <h3 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">
=======
         {/* <h3 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">
>>>>>>> 64b7339 (first deploy)
  {t('services.process.title')}
</h3>

<div className="grid md:grid-cols-4 gap-8">
  {Object.values(t('services.process.steps', { returnObjects: true })).map((step: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
        {`0${index + 1}`}
      </div>
      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
    </motion.div>
  ))}
<<<<<<< HEAD
</div>
=======
</div> */}
>>>>>>> 64b7339 (first deploy)

        </motion.div>
      </div>
    </section>
  );
};

export default Services;