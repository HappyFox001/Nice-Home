'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: "Vue.js", icon: "⚡" },
  { name: "Next.js", icon: "🚀" },
  { name: "Rust", icon: "⚙️" },
  { name: "Go", icon: "🔵" },
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "💻" },
  { name: "Solidity", icon: "📊" },
  { name: "Supabase", icon: "🗃️" }
]

const projects = [
  { name: "Personal Website", icon: "🌍", status: "Finished" },
  { name: "Trading Bot", icon: "🤖", status: "Developing" },
  { name: "On-chain ZK Casino", icon: "🎰", status: "Planning" },
  { name: "Natural Language Trading", icon: "🗣️", status: "Concept" },
  { name: "Smart Car Navigation", icon: "🚗", status: "Finished" },
  { name: "BTC Trading Risk Detection", icon: "⚡", status: "Finished" }
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-8"
        >
          {/* Hero Section */}
          <div className="text-center">
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
            <p className="text-gray-400 text-lg">Full Stack Engineer | Solidity Smart Contract Developer</p>
          </div>

          {/* About Section */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <div className="text-gray-300 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">🎓</span>
                <p>Junior in Communication Engineering at Wuhan University</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">📖</span>
                <p>Breaking free from exam-oriented education</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">🚀</span>
                <p>Aspiring entrepreneur</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">🔥</span>
                <p>Building strength</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-xl">🌐</span>
                <p>Website: <a href="https://0xhacker.dev/" className="text-blue-400 hover:text-blue-300 underline">0xhacker.dev</a></p>
              </div>
            </div>
          </motion.div>

          {/* Skills & Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">💡 Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold text-gray-200 mb-6">🚀 Projects</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div 
                    key={project.name}
                    className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{project.icon}</span>
                      <span className="text-gray-300">{project.name}</span>
                    </div>
                    <span className="text-sm text-blue-400 px-3 py-1 bg-blue-900/30 rounded-full">
                      {project.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6">📊 Experience</h2>
            <div className="bg-gray-700/30 rounded-lg p-6">
              <h3 className="text-xl text-blue-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">🏢</span>
                Investment Research Intern at Trustless Lab
              </h3>
              <div className="space-y-3 text-gray-300 ml-8">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">📝</span>
                  <p>10+ Research Reports</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">📈</span>
                  <p>In-depth research on Web3 projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open Source */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6">🌱 Open Source</h2>
            <div className="bg-gray-700/30 rounded-lg p-6 text-gray-300">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🎯</span>
                <p>Open Source Beginner</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔓</span>
                <p>Ready to step into the open source world!</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
 