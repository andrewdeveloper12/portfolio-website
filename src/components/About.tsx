import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
import { Code, Palette, Zap, Award, Users, Coffee } from 'lucide-react';
=======
import { 
  Code, 
  Palette, 
  Zap, 
  Award, 
  Users, 
  Coffee, 
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  icons
} from 'lucide-react';
>>>>>>> 64b7339 (first deploy)

const About: React.FC = () => {
  const { t } = useTranslation();

<<<<<<< HEAD
  const stats = [
    { icon: <Award size={24} className="sm:w-8 sm:h-8" />, number: '1+', label: t('about.stats.experience') },
    { icon: <Code size={24} className="sm:w-8 sm:h-8" />, number: '30+', label: t('about.stats.projects') },
    { icon: <Users size={24} className="sm:w-8 sm:h-8" />, number: '10+', label: t('about.stats.clients') },
    { icon: <Coffee size={24} className="sm:w-8 sm:h-8" />, number: '500+', label: t('about.stats.coffee') }
=======
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const stats = [
    { 
      icon: Award, 
      number: '1+', 
      label: t('about.stats.experience'),
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      icons: "text center"
    },
    { 
      icon: Code, 
      number: '50+', 
      label: t('about.stats.projects'),
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    { 
      icon: Users, 
      number: '25+', 
      label: t('about.stats.clients'),
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    { 
      icon: Coffee, 
      number: '1000+', 
      label: t('about.stats.coffee'),
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    }
>>>>>>> 64b7339 (first deploy)
  ];

  const features = [
    {
<<<<<<< HEAD
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
=======
      icon: Code,
      title: t('about.features.cleanCode.title'),
      description: t('about.features.cleanCode.description'),
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Palette,
      title: t('about.features.creativeDesign.title'),
      description: t('about.features.creativeDesign.description'),
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: Zap,
      title: t('about.features.fastPerformance.title'),
      description: t('about.features.fastPerformance.description'),
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    }
  ];

  const certificates = [
    {
      title: 'React Developer ',
      issuer: 'YAT',
      image: 'cert1.jpg ',
      color: 'from-blue-500 to-cyan-500 rounded-2xl'
    },
    {
      title: 'Frontend Web Development',
      issuer: 'YAT',
      image: 'cert2.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'JavaScript Advanced',
      issuer: 'YAT',
      image: 'cert3.jpg',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'UI/UX Design Professional',
      issuer: 'Route',
      image: 'cert4.jpg',
      color: 'from-purple-500 to-pink-500'
>>>>>>> 64b7339 (first deploy)
    }
  ];

  return (
<<<<<<< HEAD
    <section id="about" className="section-padding bg-gray-50  dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
=======
    <section id="about" className="relative min-h-screen py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 
         mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
>>>>>>> 64b7339 (first deploy)
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
            {t('about.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4  text-black dark:!text-white">
=======
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full mb-6"
          >
            <Rocket className="w-5 h-5 mr-2 text-purple-600" />
            <span className="text-purple-700 dark:text-purple-300 font-medium">{t('about.badge')}</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
>>>>>>> 64b7339 (first deploy)
            {t('about.description')}
          </p>
        </motion.div>

<<<<<<< HEAD
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
=======
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Stats & Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
           

            {/* Professional Image with Bio */}
        {/* Professional Image with Bio */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative group"
>
  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
  <div className="relative bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20">
    <div className="flex flex-col lg:flex-row gap-6 items-stretch">
      {/* زيادة عرض الصورة إلى 50% */}
      <div className="relative w-full lg:w-1/2 flex-shrink-0"> 
        <img
          src="andrew.png.jpg"
          alt="Andrew Osama - Professional Developer"
          className="w-full h-full object-cover rounded-xl shadow-lg"
          style={{ 
            minHeight: '300px',
            maxHeight: '600px'
          }}
        />
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
          {t('about.bio.greeting')}
        </h3>
        <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
          <p>{t('about.bio.paragraph1')}</p>
          <p>{t('about.bio.paragraph2')}</p>
          <p>{t('about.bio.paragraph3')}</p>
        </div>
      </div>
    </div>
  </div>
</motion.div>
          </motion.div>

          {/* Right Column - Certificates */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Certificates Section */}
            
            <div className="bg-white/70 dark:bg-gray-800/50 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 mb-2 text-center">
  {/* Title Container - Centered */} <div className="absolute -inset-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
  <div className="flex justify-center mb-12"> {/* Added flex container to center title */}
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
      <Award className="w-6 h-6 mr-2 text-yellow-600" />
      {t('about.certificates.title')}
    </h3>
  </div>
  
  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
    {certificates.map((certificate, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-white dark:bg-gray-700/50 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
      >
        
        <div className="relative h-33 ">
           <img
    src={certificate.image}
    alt={certificate.title}
    className="w-80 h-120 object-contain p-2 hover:scale-80 transition-transform duration-300 cursor-zoom-in rounded-2xl"
    onClick={(e) => {
      e.stopPropagation();
      window.open(certificate.image, '_blank');
    }}
  />
  <div className={`absolute inset-0 bg-gradient-to-t ${certificate.color} opacity-20 hover:opacity-30 transition-opacity duration-300 pointer-events-none`}></div>
</div>
<div className="p-2">
  <h4 className="font-semibold text-gray-800 dark:text-white text-l mb-3">
    {certificate.title}
  </h4>
  <p className="text-gray-600 dark:text-gray-300 text-xs">
    {certificate.issuer}
          </p>
        </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

       {/* Features Section - مؤكد الظهور */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="py-12 bg-gray-50 dark:bg-gray-900 mb-10 rounded-3xl"
>
  <div className="container mx-auto px-4">
    {/* العنوان */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        {t('about.features.sectionTitle')}
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        {t('about.features.sectionDescription')}
      </p>
    </div>

    {/* بطاقات الميزات */}
    <div className="grid md:grid-cols-3 gap-8 ">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
        >
          <div className="text-center">
            <feature.icon className="mx-auto h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-xl font-semibold">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

               {/* Story Section */}
>>>>>>> 64b7339 (first deploy)
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
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
=======
          className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-red-500" />
                  <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {t('about.story.title')}
                  </h3>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center"
              >
                {t('about.story.paragraph1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center"
              >
                {t('about.story.paragraph2')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center"
              >
                {t('about.story.paragraph3')}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25"></div>
              <img
                src="https://template.canva.com/EAE8563hW9s/1/0/1600w-auTe0-z9gZI.jpg"
                alt="Andrew Osama - Story"
                className="relative rounded-2xl  shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Space between Story and Stats */}
        <div className="my-16 sm:my-20 text-center  items-center justify-center" ></div>

        {/* Stats Grid - Centered and Responsive */}
        <div className="max-w-8xl mx-auto px-2 text-center items-center justify-center  ">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
  key={index}
  variants={itemVariants}
  whileHover={{ scale: 1.05, y: -5 }}
  className={`${stat.bgColor} dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 group cursor-pointer flex flex-col items-center justify-center text-center`}
>
  <div className={`${stat.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
    <stat.icon size={32} />
  </div>
  <motion.h3
    className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
    viewport={{ once: true }}
  >
    {stat.number}
  </motion.h3>
  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</p>
</motion.div>

            ))}
          </div>
        </div>
          <h3 className="text-3xl font-bold mb-12 pt-14 text-gray-800 dark:text-white text-center ">
  {t('services.process.title')}
</h3>

<div className="grid md:grid-cols-4 gap-8 text-center ">
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
</div>
                </div>


     
>>>>>>> 64b7339 (first deploy)
    </section>
  );
};

export default About;