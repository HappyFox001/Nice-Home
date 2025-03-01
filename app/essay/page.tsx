'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export default function EssayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8">
      <div className="max-w-7xl mx-auto pt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center py-12"
        >
          <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Research Paper
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
            Bitcoin Illegal Transaction Detection
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            A Method Based on Graph Neural Networks
          </p>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
          >
            <iframe 
              src="/eaasy/Bitcoin_Illegal_Transaction_Detection_Method_Based_on_Graph_Neural_Networks.pdf"
              className="w-full min-h-[800px] border-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
