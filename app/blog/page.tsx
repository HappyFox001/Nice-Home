'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Total Reads', value: '3000k+', icon: '👀' },
  { label: 'Articles', value: '10+', icon: '📝' },
  { label: 'Industries', value: '5+', icon: '🏢' },
  { label: 'Research', value: '10+', icon: '🔍' }
]

const reports = [
  {
    title: '纵观GameFi历史发展 未来如何孕育新的辉煌？',
    description: '入选金色财经晚间推荐和金色精选',
    url: 'https://jinse.cn/blockchain/3692298.html',
    views: '1000k+',
    date: '2024.07.22',
    tags: ['GameFi', '区块链游戏', '投资研究']
  },
  {
    title: '房间里的大象，探究 TON 生态的发展脉络与未来潜力',
    description: '第一篇投研，入选深潮精选',
    url: 'https://www.techflowpost.com/article/detail_18816.html',
    views: '100k+',
    date: '2024.06.22',
    tags: ['TON', '生态研究', '深度分析']
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8">
      <div className="max-w-7xl mx-auto pt-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center py-20"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Web3 Research Insights
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
            深度解析区块链与Web3生态
          </p>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            为您提供前沿的行业洞察与投资研究
          </p>

          {/* 统计数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* 研究报告列表 */}
          <div className="text-left">
            <h2 className="text-2xl font-semibold mb-8 text-gray-200">精选研究报告</h2>
            <div className="grid gap-8">
              {reports.map((report) => (
                <motion.div
                  key={report.title}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-gray-200">{report.title}</h3>
                    <p className="text-gray-400 mb-4">{report.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {report.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-gray-700/30 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>📅 {report.date}</span>
                        <span>👀 {report.views} Reads</span>
                      </div>
                      <motion.a
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-800/50 inline-flex items-center gap-2 hover:bg-blue-900/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        阅读全文
                        <span>→</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
