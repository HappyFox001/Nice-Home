'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const constructionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const projects = [
  {
    image: "NoSandWichSwap.png",
    title: "NoSandWichSwap",
    description: "A MEV-resistant Swap protocol won Polkadot 2024 Hackathon",
    tech: ["Vue.js", "Solidity", "Web3.js"],
    status: "Finished",
    url: "https://github.com/TreapGoGo/hackathon-2024-10-13"
  },
  {
    image: "DeepSearch.png",
    title: "DeepSearch",
    description: "A Deep Search Engine for Web3",
    tech: ["Python", "OpenAI","Ethereum"],
    status: "Still in progress",
    url: "https://github.com/TreapGoGo/hackathon-2024-10-13"
  },
]

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8">
      <div className="max-w-7xl mx-auto pt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={constructionAnimation}
          className="text-center py-20"
        >
          <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Projects
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
            Exploring Web3 Frontiers
          </p>
          <p className="text-gray-400 mb-16">
            Building innovative solutions at the intersection of blockchain and technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-full h-48 bg-gray-700/50 rounded-lg mb-4 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={`/${project.image}`}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                        <span className="text-blue-400 text-5xl opacity-30">⚡</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 text-sm">
                      {project.status}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-800/50"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
