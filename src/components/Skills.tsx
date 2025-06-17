import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.JS', level: 95, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'Html&CSS', level: 85, color: 'bg-gray-800' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Express.js', level: 80, color: 'bg-gray-700' },
        { name: 'MongoDB', level: 75, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 70, color: 'bg-blue-700' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90, color: 'bg-orange-500' },
        { name: 'Photoshop', level: 70, color: 'bg-blue-500' },
        { name: 'Word', level: 65, color: 'bg-yellow-600' },
        { name: 'Excel', level: 80, color: 'bg-purple-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white  dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gradient">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto  text-black dark:!text-white">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg card-hover"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full ${skill.color} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800  text-black dark:!text-white">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'HTML5', 'CSS3',
              'SASS', 'Bootstrap',
              'Firebase',  'Vercel', 'Photoshop'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;