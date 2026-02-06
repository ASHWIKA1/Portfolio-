"use client"

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Building, Star, Download, FileText, Shield } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate",
      issuer: "Oracle",
      date: "2025",
      type: "Professional Certification",
      level: "Associate",
      description: "Official Oracle certification demonstrating expertise in AI foundations, cloud infrastructure, and machine learning services on Oracle Cloud Infrastructure.",
      skills: ["AI Foundations", "Cloud Infrastructure", "Machine Learning", "Oracle Cloud", "AI Services"],
      credentialId: "OCI-AI-FOUNDATION-2025",
      credentialUrl: "https://education.oracle.com/",
      featured: true
    },
    {
      title: "IBM SkillsBuild - AI & Data Analytics",
      issuer: "IBM",
      date: "2023 - 2024",
      type: "Professional Certification",
      level: "Advanced",
      description: "Comprehensive program covering AI fundamentals, machine learning, data analytics, and practical applications in real-world scenarios.",
      skills: ["Machine Learning", "Data Analytics", "AI Fundamentals", "Python", "Statistical Analysis"],
      credentialId: "IBM-SKILLS-2024",
      credentialUrl: "https://skillsbuild.org/",
      featured: false
    },
    {
      title: "Deloitte Forage - Data Analytics Consulting",
      issuer: "Deloitte",
      date: "2024",
      type: "Virtual Experience",
      level: "Intermediate",
      description: "Hands-on simulation of real data analytics consulting work with KPI reporting, business insights, and client presentations.",
      skills: ["Data Analysis", "KPI Reporting", "Business Intelligence", "Client Communication", "Problem Solving"],
      credentialId: "DELOITTE-FORAGE-2024",
      credentialUrl: "https://www.theforage.com/jobs/deloitte/data-analytics-consulting-simulation",
      featured: false
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "2023",
      type: "Online Course",
      level: "Intermediate",
      description: "Complete Python programming course focused on data science applications including data manipulation, analysis, and visualization.",
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Data Visualization"],
      credentialId: "COURSERA-PYTHON-2023",
      credentialUrl: "https://www.coursera.org/",
      featured: false
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Udemy",
      date: "2023",
      type: "Online Course",
      level: "Beginner",
      description: "Introduction to machine learning concepts, algorithms, and practical implementation using Python and popular ML libraries.",
      skills: ["Machine Learning", "Scikit-learn", "TensorFlow", "Deep Learning", "Neural Networks"],
      credentialId: "UDEMY-ML-2023",
      credentialUrl: "https://www.udemy.com/",
      featured: false
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2022",
      type: "Online Course",
      level: "Intermediate",
      description: "Full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, and modern web technologies.",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "REST APIs"],
      credentialId: "UDEMY-WEB-2022",
      credentialUrl: "https://www.udemy.com/",
      featured: false
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "2023",
      type: "Self-Paced Course",
      level: "Intermediate",
      description: "Comprehensive study of data structures, algorithms, problem-solving techniques, and competitive programming.",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Complexity Analysis", "Competitive Programming"],
      credentialId: "GFG-DSA-2023",
      credentialUrl: "https://www.geeksforgeeks.org/",
      featured: false
    }
  ]

  const skills = [
    "Machine Learning", "Data Analytics", "Python", "JavaScript", "React", 
    "Node.js", "MongoDB", "SQL", "Data Visualization", "Web Development"
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <span className="text-gradient">Certifications & Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and courses that validate my expertise in data science, machine learning, and software development
          </p>
        </motion.div>

        {/* Featured Certification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-1">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Certification</h3>
                  <p className="text-gray-600 dark:text-gray-400">IBM SkillsBuild - AI & Data Analytics</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Program Overview</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Comprehensive program covering AI fundamentals, machine learning, data analytics, and practical applications in real-world scenarios.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Machine Learning", "Data Analytics", "AI Fundamentals", "Python"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href="https://skillsbuild.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Verify Credential
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
                
                <div className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                  >
                    <Shield className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Certifications Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      cert.featured 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'bg-gradient-to-r from-gray-500 to-gray-600'
                    }`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                  {cert.featured && (
                    <div className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Building size={14} />
                    <span>{cert.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Star size={14} />
                    <span>{cert.level}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Credential
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass dark:glass-dark rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Skills Validated Through Certifications
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium"
              >
                {skill}
              </motion.div>
            ))}
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
          
           
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            <motion.a
              href="https://drive.google.com/drive/folders/1VMrEIgK4dpJav_D2G9-IZgsW8Lwaqpmx?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all certificates in Google Drive
              <ExternalLink size={14} className="inline ml-1" />
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
