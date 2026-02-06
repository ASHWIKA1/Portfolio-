"use client"

import { motion } from 'framer-motion'
import { ArrowLeft, Download } from 'lucide-react'
import Link from 'next/link'

export default function Resume() {
  const handleDownloadResume = () => {
    try {
      // Create a direct download link
      const link = document.createElement('a')
      link.href = 'file:///C:/Users/ashwi/OneDrive/Desktop/Developer%20Resume/Ashwika%20K.pdf'
      link.download = 'Ashwika_Kuppusamy_Resume.pdf'
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Show success feedback
      console.log('Resume download initiated')
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback: open in new window if download fails
      window.open('file:///C:/Users/ashwi/OneDrive/Desktop/Developer%20Resume/Ashwika%20K.pdf', '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Download size={32} className="text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          My Resume
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 dark:text-gray-400 mb-8"
        >
          Download my resume to learn more about my skills, experience, and qualifications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4"
        >
          <button
            onClick={handleDownloadResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            <Download size={16} />
            Download Resume
          </button>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
