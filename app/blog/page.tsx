'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Read', value: '3000k+' },
  { label: 'Articles', value: '10+' },
  { label: 'Industry', value: '5+' },
  { label: 'Research', value: '10+' }
]

const reports = [
  {
    title: '纵观GameFi历史发展 未来如何孕育新的辉煌？',
    description: '入选金色财经晚间推荐和金色精选',
    url: 'https://jinse.cn/blockchain/3692298.html',
    views: '1000k+',
    date: '2024.07.22'
  },
  {
    title: '房间里的大象，探究 TON 生态的发展脉络与未来潜力',
    description: '第一篇投研，入选深潮精选',
    url: 'https://www.techflowpost.com/article/detail_18816.html',
    views: '100k+',
    date: '2024.06.22'
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8">
      {/* 头部区域 */}
      <div className="max-w-7xl mx-auto pt-4">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Web3 Research Insights
        </h1>
        <p className="text-gray-300 text-lg mb-12">
          Deep analysis of blockchain and Web3 ecosystems, providing industry insights and investment research
        </p>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
            >
              <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 研究报告列表 */}
        <h2 className="text-2xl font-semibold mb-8 text-gray-200">Selected Research Reports</h2>
        <div className="grid gap-8">
          {reports.map((report) => (
            <motion.div
              key={report.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">{report.title}</h3>
                  <p className="text-gray-400 mb-4">{report.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="text-gray-400">📅 {report.date}</span>
                    <span className="text-gray-400">👀 {report.views} Reads</span>
                  </div>
                </div>
                <div className="bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-800/50">
                  <a href={report.url} target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">🔗 View Details</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
