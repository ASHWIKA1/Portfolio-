"use client"

import { motion } from 'framer-motion'
import { Database, Code, Brain, BarChart3, Cpu, Globe, Server, GitBranch } from 'lucide-react'

export default function Skills() {
  const dataSkills = [
    { name: "Python", level: 90, icon: Code },
    { name: "SQL", level: 85, icon: Database },
    { name: "Power BI", level: 80, icon: BarChart3 },
    { name: "Machine Learning", level: 75, icon: Brain },
    { name: "EDA", level: 85, icon: BarChart3 },
    { name: "Data Visualization", level: 80, icon: BarChart3 },
    { name: "pandas", level: 85, icon: Database },
    { name: "NumPy", level: 80, icon: Cpu },
    { name: "scikit-learn", level: 75, icon: Brain }
  ]

  const developmentSkills = [
    { name: "Java", level: 85, icon: Code },
    { name: "OOP", level: 80, icon: GitBranch },
    { name: "DSA", level: 75, icon: Cpu },
    { name: "HTML / CSS / JavaScript", level: 80, icon: Globe },
    { name: "Git & GitHub", level: 85, icon: GitBranch },
    { name: "MySQL", level: 80, icon: Database },
    { name: "MongoDB", level: 70, icon: Database },
    { name: "REST APIs", level: 75, icon: Server }
  ]

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <skill.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 }}
          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning data science, machine learning, and software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Data Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                  <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Data Skills</h3>
              </div>
              
              <div className="space-y-1">
                {dataSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
              >
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Focus:</strong> Data analysis, machine learning model development, and creating actionable insights from complex datasets
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                  <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Development Skills</h3>
              </div>
              
              <div className="space-y-1">
                {developmentSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + dataSkills.length} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
              >
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>Focus:</strong> Building scalable applications, clean architecture, and modern development practices
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skills Overview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Technical Competencies
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Machine Learning",
                  items: ["Supervised Learning", "Classification", "Regression", "Feature Engineering"]
                },
                {
                  icon: Database,
                  title: "Data Management",
                  items: ["SQL Queries", "Data Cleaning", "ETL Processes", "Database Design"]
                },
                {
                  icon: Code,
                  title: "Programming",
                  items: ["Python", "Java", "JavaScript", "Problem Solving"]
                },
                {
                  icon: Globe,
                  title: "Web Technologies",
                  items: ["React", "REST APIs", "Responsive Design", "Performance"]
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{category.title}</h4>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="text-xs text-gray-600 dark:text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
