"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function EducationExperience() {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "K.S. Rangasamy College of Technology",
      institutionUrl: "https://ksrct.ac.in/",
      period: "2023 – 2027",
      cgpa: "8.4 / 10",
      location: "Tamil Nadu, India",
      highlights: [
        "Pre-final year student with strong academic foundation",
        "Focus on Data Science and Machine Learning",
        "Active participant in technical workshops and hackathons"
      ]
    }
  ]

  const experience = [
    {
      title: "R&D Intern",
      company: "SNR Automations",
      companyUrl: "https://snrautomations.com/",
      period: "Summer 2024",
      location: "Coimbatore, India",
      type: "Internship",
      highlights: [
        "Automation data analysis and visualization",
        "Developed dashboards for operational metrics",
        "Worked on IoT sensor data processing",
        "Created automated reporting systems"
      ]
    },
    {
      title: "AI & Data Analytics Track",
      company: "IBM SkillsBuild",
      companyUrl: "https://skillsbuild.org/",
      period: "2023 - 2024",
      location: "Online",
      type: "Certification",
      highlights: [
        "Completed AI fundamentals and machine learning courses",
        "Hands-on projects in data analytics",
        "Industry-recognized certification program",
        "Focus on practical AI applications"
      ]
    },
    {
      title: "Data Analytics Consulting Simulation",
      company: "Deloitte Forage",
      companyUrl: "https://www.theforage.com/jobs/deloitte/data-analytics-consulting-simulation",
      period: "2024",
      location: "Virtual",
      type: "Simulation",
      highlights: [
        "Data analytics consulting simulation",
        "KPI reporting and business insights",
        "Client presentation and communication",
        "Real-world business problem solving"
      ]
    }
  ]

  const TimelineItem = ({ item, index, type }: { item: any; index: number; type: 'education' | 'experience' }) => (
    <motion.div
      initial={{ opacity: 0, x: type === 'education' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-start gap-6 ${
        type === 'education' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Timeline Line */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500" />
      
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0"
      >
        {type === 'education' ? (
          <GraduationCap size={20} className="text-white" />
        ) : (
          <Briefcase size={20} className="text-white" />
        )}
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
        className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow ${
          type === 'education' ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
        }`}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {type === 'education' ? item.degree : item.title}
            </h3>
            <div className="flex items-center gap-2">
              <motion.a
                href={type === 'education' ? item.institutionUrl : item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type === 'education' ? item.institution : item.company}
                <ExternalLink size={12} className="opacity-70" />
              </motion.a>
            </div>
          </div>
          {type === 'experience' && item.type && (
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
              {item.type}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{item.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{item.location}</span>
          </div>
          {type === 'education' && item.cgpa && (
            <div className="flex items-center gap-1">
              <span className="font-medium">CGPA: {item.cgpa}</span>
            </div>
          )}
        </div>

        <ul className="space-y-2">
          {item.highlights.map((highlight: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="education" className="py-20 pb-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Strong academic foundation in Computer Science with focus on emerging technologies
            </p>
          </div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <TimelineItem key={item.degree} item={item} index={index} type="education" />
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Practical experience applying technical skills in real-world scenarios
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} type="experience" />
            ))}
          </div>
        </motion.div>

        {/* Skills Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="glass dark:glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Continuous Learning & Development
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Technical Certifications",
                  description: "IBM SkillsBuild, Coursera, and industry-recognized certifications",
                  icon: "🎓"
                },
                {
                  title: "Hands-on Projects",
                  description: "Real-world projects applying classroom knowledge to practical problems",
                  icon: "🚀"
                },
                {
                  title: "Industry Exposure",
                  description: "Internships and simulations providing professional experience",
                  icon: "💼"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
