'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { 
    name: "Vue.js", 
    icon: "/icons/vue.svg", 
    description: "Frontend Development" 
  },
  { 
    name: "Next.js", 
    icon: "/icons/nextjs.svg", 
    description: "Full Stack Framework" 
  },
  { 
    name: "Rust", 
    icon: "/icons/rust.svg", 
    description: "Systems Programming" 
  },
  { 
    name: "Go", 
    icon: "/icons/go.svg", 
    description: "Backend Development" 
  },
  { 
    name: "Python", 
    icon: "/icons/python.svg", 
    description: "AI & Data Analysis" 
  },
  { 
    name: "C", 
    icon: "/icons/c.svg", 
    description: "Low Level Programming" 
  },
  { 
    name: "Solidity", 
    icon: "/icons/solidity.svg", 
    description: "Smart Contracts" 
  },
  { 
    name: "Supabase", 
    icon: "/icons/supabase.svg", 
    description: "Database & Backend" 
  }
]

const experiences = [
  {
    title: "Investment Research Intern",
    company: "Trustless Lab",
    period: "2024.06 - 2024.10",
    achievements: [
      "10+ Research Reports",
      "In-depth research on Web3 projects",
      "Market analysis and trend forecasting"
    ]
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export default function SuccinctPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8">
      <div className="max-w-7xl mx-auto pt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center py-20"
        >
          <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h1>
          
          <div className="relative w-24 h-24 mx-auto mb-8">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full"
            >
              <div className="absolute inset-0 border-t-4 border-blue-400 rounded-full"></div>
            </motion.div>
          </div>

          <p className="text-gray-300 text-xl mb-4">
            0xhacker | Full Stack Engineer
          </p>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Breaking free from exam-oriented education, building innovative solutions in Web3
          </p>

          {/* Education & Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-left">🎓 Education</h2>
              <div className="text-left bg-gray-700/30 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <h3 className="text-xl text-blue-400">Wuhan University</h3>
                    <p className="text-gray-400">Communication Engineering</p>
                  </div>
                </div>
                <div className="text-gray-300 space-y-2 ml-10">
                  <p>• Junior Year Student</p>
                  <p>• Focus on Web3 Development</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-left">🎯 Goals</h2>
              <div className="text-left bg-gray-700/30 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🚀</span>
                    <p className="text-gray-300">Aspiring entrepreneur</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💪</span>
                    <p className="text-gray-300">Building strength</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌐</span>
                    <p className="text-gray-300">
                      <a href="https://0xhacker.dev/" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-blue-400 hover:text-blue-300 underline">
                        0xhacker.dev
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all mb-16"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-left">💡 Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Image 
                        src={skill.icon} 
                        alt={skill.name} 
                        width={24} 
                        height={24} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <span className="text-gray-200">{skill.name}</span>
                  </div>
                  <p className="text-gray-400 text-sm ml-9">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-left">💼 Experience</h2>
            {experiences.map((exp) => (
              <motion.div 
                key={exp.title} 
                className="bg-gray-700/30 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        <p className="text-gray-300 text-lg">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20 flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>
                <div className="ml-5 space-y-4 text-left">
                  {exp.achievements.map((achievement, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-3 group pl-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2 group-hover:animate-ping"></span>
                      <div className="flex-1">
                        <p className="text-gray-300 group-hover:text-blue-400 transition-colors text-left">
                          {achievement}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
 