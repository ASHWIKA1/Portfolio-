"use client"

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Lightbulb, Rocket, Cpu, Database } from 'lucide-react'

export default function FutureVision() {
  const visions = [
    {
      icon: Cpu,
      title: "AI for Agriculture",
      description: "Developing intelligent solutions for crop monitoring, yield prediction, and precision farming using computer vision and machine learning.",
      technologies: ["Computer Vision", "IoT Sensors", "ML Models", "Data Analytics"],
      color: "from-green-400 to-blue-500",
      featured: true
    },
    {
      icon: Database,
      title: "Sericulture Technology",
      description: "Creating data-driven platforms for silk production optimization, disease detection, and supply chain management in sericulture.",
      technologies: ["Data Science", "Predictive Analytics", "Supply Chain", "Quality Control"],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Smart Logistics",
      description: "Building intelligent logistics systems with route optimization, demand forecasting, and real-time tracking for efficient supply chain management.",
      technologies: ["Optimization Algorithms", "Real-time Analytics", "GPS Tracking", "ML Forecasting"],
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "Data-Driven Farming",
      description: "Implementing comprehensive agricultural data platforms that integrate weather patterns, soil health, and market trends for informed decision making.",
      technologies: ["Big Data", "Weather Analytics", "Market Intelligence", "Decision Support"],
      color: "from-blue-400 to-indigo-500"
    }
  ]

  const goals = [
    "Bridge the gap between traditional agriculture and modern technology",
    "Create scalable solutions for rural development",
    "Empower farmers with data-driven insights",
    "Develop sustainable and efficient agricultural practices"
  ]

  const techStack = [
    { name: "Advanced ML", icon: "🤖", description: "Deep Learning, NLP, Computer Vision", level: 90 },
    { name: "IoT & Edge", icon: "📡", description: "Sensor Networks, Edge Computing", level: 85 },
    { name: "Cloud Architecture", icon: "☁️", description: "Scalable Systems, Microservices", level: 80 },
    { name: "Big Data", icon: "📊", description: "Real-time Analytics, Data Pipelines", level: 88 }
  ]

  return (
    <section id="future-vision" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Future Tech Vision</span>
            </h2>
            <Sparkles className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Interested in building AI solutions for agriculture analytics, sericulture technology, smart logistics, and data-driven farming platforms
          </p>
        </motion.div>

        {/* Vision Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {visions.map((vision, index) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative`}
            >
              <div className={`relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 ${
                vision.featured 
                  ? 'border-gradient-border gradient-border shadow-2xl' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}>
                {vision.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                  >
                    <Sparkles size={14} fill="currentColor" />
                    Featured
                  </motion.div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${vision.color} flex items-center justify-center flex-shrink-0`}>
                    <vision.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {vision.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {vision.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {vision.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-300 rounded-lg text-sm border border-primary-200 dark:border-primary-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Core Goals & Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Future Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Future Tech Stack & Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow relative overflow-hidden"
                >
                  <div className="relative">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{tech.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{tech.description}</p>
                    {tech.level && (
                      <div className="absolute top-2 right-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{tech.level}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full">
            <Rocket className="w-5 h-5" />
            <span className="font-semibold">Building the Future of AgriTech & Smart Solutions</span>
            <Rocket className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
