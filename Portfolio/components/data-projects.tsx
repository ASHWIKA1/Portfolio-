"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, TrendingUp, Database, BarChart3 } from 'lucide-react'

export default function DataProjects() {
  const projects = [
    {
      title: "ShipmentSure",
      description: "ML project predicting on-time vs delayed shipments using logistics data with real-time prediction capabilities.",
      tech: ["Python", "pandas", "NumPy", "scikit-learn", "Streamlit"],
      highlights: ["Feature engineering", "Model evaluation", "Real-time prediction app", "Business impact focus"],
      github: "https://github.com/springboardmentor2501/Shipment-Sure/tree/Ashwika",
      featured: true,
      icon: TrendingUp
    },
    {
      title: "Employee Salary Prediction",
      description: "Comprehensive salary prediction model with data cleaning, EDA, and interactive dashboard visualization.",
      tech: ["Python", "pandas", "scikit-learn", "Streamlit", "Power BI"],
      highlights: ["Data cleaning", "EDA", "Dashboard visualization", "Random Forest model"],
      github: "https://github.com/ASHWIKA1/EMPLOYEE-SALARY-PREDICTION",
      featured: false,
      icon: Database
    },
    {
      title: "Cricket Tournament Analysis",
      description: "Power BI dashboard analyzing player and team performance with advanced KPI metrics and data storytelling.",
      tech: ["Power BI", "DAX", "Data Visualization", "KPI Dashboards"],
      highlights: ["DAX measures", "KPI dashboards", "Data storytelling", "Performance analytics"],
      github: "#",
      featured: false,
      icon: BarChart3
    }
  ]

  return (
    <section id="data-projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Data & Machine Learning Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building intelligent solutions from data, turning complex datasets into actionable insights
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group`}
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
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={20} className="text-gray-600 dark:text-gray-400" />
                  </motion.a>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Highlights</h4>
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  View on GitHub
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Data Science Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My data science projects follow a comprehensive approach from data collection and cleaning to 
              advanced machine learning model development. I focus on creating solutions that not only provide 
              accurate predictions but also deliver actionable business insights through interactive visualizations 
              and user-friendly interfaces.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Data Analysis", "ML Models", "Visualization", "Deployment"].map((skill) => (
                <div key={skill} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
