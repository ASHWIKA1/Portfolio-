"use client"

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, Database, Code, Brain, Globe, Server, Smartphone } from 'lucide-react'

export default function Projects() {
  const dataProjects = [
    {
      icon: Brain,
      title: "ShipmentSure",
      description: "End-to-end ML-powered logistics platform for shipment tracking and delivery optimization with real-time analytics and predictive insights.",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      highlights: ["95% accuracy in delivery predictions", "Real-time tracking dashboard", "Route optimization algorithm"],
      github: "https://github.com/ASHWIKA1/ShipmentSure",
      featured: true
    },
    {
      icon: Database,
      title: "Employee Salary Prediction",
      description: "ML model to predict employee salaries based on experience, skills, and market factors with comprehensive data analysis.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      highlights: ["87% prediction accuracy", "Feature importance analysis", "Market trend insights"],
      github: "https://github.com/ASHWIKA1/Salary-Prediction"
    },
    {
      icon: Globe,
      title: "Cricket Tournament Analysis",
      description: "Comprehensive data analysis platform for cricket tournaments with player performance metrics and match predictions.",
      technologies: ["Python", "Pandas", "NumPy", "Plotly", "Flask"],
      highlights: ["Player performance analytics", "Match outcome predictions", "Interactive visualizations"],
      github: "https://github.com/ASHWIKA1/Cricket-Analysis"
    }
  ]

  const softwareProjects = [
    {
      icon: Server,
      title: "Banking Management System",
      description: "Full-stack banking application with secure transactions, user authentication, and comprehensive account management.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
      highlights: ["Secure authentication", "Real-time transactions", "Admin dashboard", "Transaction history"],
      github: "https://github.com/ASHWIKA1/Banking-System",
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive showcase of my work in data science, machine learning, and software development
          </p>
        </motion.div>

        {/* Data & ML Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Brain className="inline-block w-8 h-8 mr-3 text-primary-600 dark:text-primary-400" />
              Data & Machine Learning Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Intelligent solutions leveraging data analytics, machine learning, and predictive modeling
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dataProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`relative h-full p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                  project.featured 
                    ? 'border-gradient-border gradient-border' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                    >
                      <Star size={14} fill="currentColor" />
                      Featured
                    </motion.div>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
                      <project.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm border border-primary-200 dark:border-primary-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Highlights</h5>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Software Development Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              <Code className="inline-block w-8 h-8 mr-3 text-secondary-600 dark:text-secondary-400" />
              Software Development Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Full-stack applications and software solutions with modern architectures and best practices
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {softwareProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`relative h-full p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                  project.featured 
                    ? 'border-gradient-border gradient-border' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-secondary-500 to-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                    >
                      <Star size={14} fill="currentColor" />
                      Featured
                    </motion.div>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-secondary-100 to-primary-100 dark:from-secondary-900/20 dark:to-primary-900/20">
                      <project.icon className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-lg text-sm border border-secondary-200 dark:border-secondary-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features</h5>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Combined Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Project Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Projects", value: "4", icon: "🚀" },
                { label: "ML Projects", value: "3", icon: "🤖" },
                { label: "Software Projects", value: "1", icon: "💻" },
                { label: "Technologies", value: "12+", icon: "⚡" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
