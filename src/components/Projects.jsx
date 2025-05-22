import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce App',
      description: 'A responsive e-commerce product page built with React and Tailwind CSS, featuring dynamic filtering.',
      link: '#',
      category: 'React',
    },
    {
      title: 'Task Manager',
      description: 'A task management app with state management using React hooks and mock API integration.',
      link: '#',
      category: 'JavaScript',
    },
    {
      title: 'Portfolio Site',
      description: 'This very portfolio, showcasing Modular components and responsive design with Tailwind CSS.',
      link: '#',
      category: 'CSS',
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <motion.section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <div className="flex justify-center gap-4 mb-8">
          {['All', 'React', 'JavaScript', 'CSS'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${filter === category ? 'bg-blue-500 text-white dark:bg-blue-700' : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200'} hover:bg-blue-400 hover:text-white dark:hover:bg-blue-600 transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}