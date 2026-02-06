"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Trophy, Code, Target, Zap } from 'lucide-react'

export default function CompetitiveCoding() {
  const platforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/ASHWIKA_K/",
      icon: Code,
      color: "from-orange-400 to-yellow-400",
      stats: {
        problems: "150+",
        contests: "10+",
        rating: "Max: 1650",
        streak: "30+ days"
      },
      achievements: [
        "Solved 150+ algorithmic problems",
        "Active in weekly contests",
        "Strong in DSA and problem solving",
        "Consistent daily practice"
      ]
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/ashwika1137",
      icon: Trophy,
      color: "from-green-400 to-blue-400",
      stats: {
        problems: "100+",
        certificates: "5+",
        level: "4 star",
        domains: "5+"
      },
      achievements: [
        "5+ problem solving certificates",
        "4 star coder in multiple domains",
        "Strong foundation in algorithms",
        "Proficient in SQL challenges"
      ]
    }
  ]

  const skills = [
    { name: "Data Structures", level: 85, icon: "🌳" },
    { name: "Algorithms", level: 80, icon: "⚡" },
    { name: "Problem Solving", level: 85, icon: "🧩" },
    { name: "Optimization", level: 75, icon: "🎯" },
    { name: "Time Complexity", level: 80, icon: "⏱️" },
    { name: "Space Complexity", level: 75, icon: "💾" }
  ]

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-4"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center text-2xl">
        {skill.icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          />
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="competitive-coding" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Competitive Coding</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Strong foundation in DSA, OOP, and problem solving with consistent practice on leading platforms
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${platform.color}`}>
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {platform.name}
                  </h3>
                </div>
                <motion.a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <ExternalLink size={18} className="text-gray-600 dark:text-gray-400" />
                </motion.a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(platform.stats).map(([key, value]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + Object.keys(platform.stats).indexOf(key) * 0.05 }}
                    className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Achievements</h4>
                <ul className="space-y-2">
                  {platform.achievements.map((achievement, idx) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Problem Solving Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Practice Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Coding Practice Analytics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Target, label: "Problems Solved", value: "250+", color: "text-blue-600" },
                { icon: Zap, label: "Contest Rating", value: "1650", color: "text-orange-600" },
                { icon: Trophy, label: "Certificates", value: "10+", color: "text-green-600" },
                { icon: Code, label: "Languages", value: "5+", color: "text-purple-600" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
