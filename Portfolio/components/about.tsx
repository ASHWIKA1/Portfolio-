"use client"

import { motion } from 'framer-motion'
import { User, MapPin, Mail, GraduationCap, Code, Database } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Pre-final Year Student",
      description: "B.E. Computer Science and Engineering at K.S. Rangasamy College of Technology"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Proficient in modern web technologies and software development practices"
    },
    {
      icon: Database,
      title: "Data Science Enthusiast",
      description: "Passionate about machine learning, data analytics, and building intelligent solutions"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my journey, passions, and what drives me as a developer and data enthusiast
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <User className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ashwika Kuppusamy</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Data & Software Enthusiast</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={18} />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Mail size={18} />
                  <span>ashwika1137@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <GraduationCap size={18} />
                  <span>CGPA: 8.4 / 10</span>
                </div>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Pre-final year Computer Science student passionate about data analytics, machine learning, and software development. 
                  Skilled in building ML models, dashboards, and scalable applications. Interested in solving real-world problems 
                  using technology, especially in agriculture and logistics domains.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              My Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Continuous Learning",
                  description: "Always curious, always growing. Technology evolves, and so do I.",
                  icon: "📚"
                },
                {
                  title: "Problem Solving",
                  description: "Breaking down complex challenges into elegant, scalable solutions.",
                  icon: "🧩"
                },
                {
                  title: "Impact-Driven",
                  description: "Building technology that matters and creates real value.",
                  icon: "🚀"
                }
              ].map((philosophy, index) => (
                <motion.div
                  key={philosophy.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{philosophy.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{philosophy.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{philosophy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
