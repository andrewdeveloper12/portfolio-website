import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.items.0.title'),
      description: t('projects.items.0.description'),
<<<<<<< HEAD
      image: 'favicon (1).png',
=======
      image: 'ea1.png',
>>>>>>> 64b7339 (first deploy)
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/andrewdeveloper12/yummyyy.git',
      demo: 'https://andrewdeveloper12.github.io/yummyyy/',
      date: '2024'
    },
    {
      title: t('projects.items.1.title'),
      description: t('projects.items.1.description'),
<<<<<<< HEAD
      image: 'hero-img.png',
=======
      image: 'ea2.png',
>>>>>>> 64b7339 (first deploy)
      tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/andrewdeveloper12/Mealify.git',
      demo: 'https://andrewdeveloper12.github.io/Mealify/',
      date: '2024'
    },
    {
      title: t('projects.items.2.title'),
      description: t('projects.items.2.description'),
      image: 'Screenshot 2025-06-10 224342.png',
      tags: ['React Native', 'Weather API', 'Redux'],
      github: 'https://github.com/andrewdeveloper12/faridLeather.git',
      demo: 'https://farid.kmteam.tech/',
      date: '2023'
    },
    {
      title: t('projects.items.3.title'),
      description: t('projects.items.3.description'),
      image: 'Screenshot 2025-06-10 224459.png',
      tags: ['React.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com/andrewdeveloper12/project-gg.git',
      demo: 'https://checkup.techlabeg.com/#/',
<<<<<<< HEAD
      date: '2023'
=======
      date: '2025'
>>>>>>> 64b7339 (first deploy)
    },
    {
      title: t('projects.items.4.title'),
      description: t('projects.items.4.description'),
      image: 'bg.jpg',
      tags: ['React', 'Node.js', 'MySQL', 'Google Maps API'],
      github: 'https://github.com/andrewdeveloper12/daniels.git',
      demo: 'https://andrewdeveloper12.github.io/daniels/',
      date: '2023'
    },
    {
      title: t('projects.items.5.title'),
      description: t('projects.items.5.description'),
      image: 'Screenshot 2024-08-07 175551.png',
      tags: ['Angular', 'NestJS', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/andrewdeveloper12/Devfolio-DEPI.git',
      demo: '#',
      date: '2022'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50  dark:bg-black" >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gradient">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto  text-black dark:!text-white">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg card-hover overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github size={18} className="text-gray-700" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="text-gray-700" />
                  </motion.a>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Calendar size={14} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center space-x-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      <Tag size={12} />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium text-center transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Github size={16} />
                    <span>{t('projects.code')}</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>{t('projects.demo')}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            {t('projects.viewAll')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;