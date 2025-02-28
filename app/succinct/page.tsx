'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: "Vue.js", icon: "⚡", description: "Frontend Development" },
  { name: "Next.js", icon: "🚀", description: "Full Stack Framework" },
  { name: "Rust", icon: "⚙️", description: "Systems Programming" },
  { name: "Go", icon: "🔵", description: "Backend Development" },
  { name: "Python", icon: "🐍", description: "AI & Data Analysis" },
  { name: "C", icon: "💻", description: "Low Level Programming" },
  { name: "Solidity", icon: "📊", description: "Smart Contracts" },
  { name: "Supabase", icon: "🗃️", description: "Database & Backend" }
]

const projects = [
  { name: "Personal Website", icon: "🌍", status: "Finished" },
  { name: "Trading Bot", icon: "🤖", status: "Developing" },
  { name: "On-chain ZK Casino", icon: "🎰", status: "Planning" },
  { name: "Natural Language Trading", icon: "🗣️", status: "Concept" },
  { name: "Smart Car Navigation", icon: "🚗", status: "Finished" },
  { name: "BTC Trading Risk Detection", icon: "⚡", status: "Finished" }
]

const experiences = [
  {
    title: "Investment Research Intern",
    company: "Trustless Lab",
    period: "2023 - Present",
    description: "Leading Web3 research and analysis",
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
    transition: { duration: 0.6, ease: "easeOut" }
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
          {/* Hero Section */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <Image src="/hacker.svg" alt="" width={100} height={100} />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            0xhacker
          </h1>
          <p className="text-gray-300 text-xl mb-4">
            Full Stack Engineer | Solidity Smart Contract Developer
          </p>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Breaking free from exam-oriented education, building innovative solutions in Web3
          </p>

          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              variants={fadeInUp}
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              variants={fadeInUp}
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
                      <a href="https://0xhacker.dev/" className="text-blue-400 hover:text-blue-300 underline">
                        0xhacker.dev
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-left">💡 Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-200">{skill.name}</span>
                  </div>
                  <p className="text-gray-400 text-sm ml-9">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-left">💼 Experience</h2>
            {experiences.map((exp) => (
              <div key={exp.title} className="bg-gray-700/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-blue-400">{exp.title}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
 