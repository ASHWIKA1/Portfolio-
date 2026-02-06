"use client"

import { motion } from 'framer-motion'
import { Code, Server, ExternalLink, Github, Rocket, Zap, Shield } from 'lucide-react'
import { AnimatedCard, AnimatedSkillBar, GlitchText, PulseAnimation } from './enhanced-animations'

export default function SoftwareProjects() {
  const projects = [
    {
      title: "Banking Management System",
      description: "Full-stack banking application with secure transactions, user authentication, and comprehensive account management.",
      tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
      icon: Server,
      featured: true,
      github: "https://github.com/ASHWIKA1/Banking-System"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application for online shopping with payment integration and real-time inventory management.",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe API", "Redux"],
      icon: Rocket
    },
    {
      title: "Task Management Platform",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      tech: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Docker"],
      icon: Zap
    }
  ]

  const additionalProjects = [
    {
      title: "Web Development Portfolio",
      description: "Modern responsive portfolio website built with React and Tailwind CSS featuring smooth animations.",
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      icon: Code
    },
    {
      title: "REST API Services",
      description: "Scalable RESTful API services with authentication, validation, and comprehensive error handling.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      icon: Server
    }
  ]

  return (
    <section id="software-projects" className="py-20 bg-white dark:bg-gray-800">
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
            <GlitchText text="Software Development Projects" />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full-stack applications, APIs, and development tools showcasing modern software engineering practices
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      project.featured 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                        : 'bg-gradient-to-r from-gray-500 to-gray-600'
                    }`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-semibold flex items-center gap-1"
                    >
                      <Shield className="w-3 h-3" />
                      Featured
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.4 }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Development Work
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalProjects.map((project, index) => (
              <AnimatedCard key={project.title} delay={0.5 + index * 0.1}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0"
                    >
                      <project.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <PulseAnimation>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold">
              <Rocket className="w-5 h-5" />
              Explore More Projects
              <ExternalLink className="w-4 h-4" />
                <div key={category.name} className="text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{category.name}</h4>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="text-sm text-gray-600 dark:text-gray-400">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
