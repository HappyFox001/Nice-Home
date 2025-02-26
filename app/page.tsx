'use client';

import Link from 'next/link'
import Image from 'next/image'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Loading loading={loading} />
      <div className="main">
        <div className="left">
          <div className="left-logo"></div>
          <div className="left-place">
            <div className="left-place-word">Wuhan University</div>
            <div className="left-place-word">Full Stack Engineer</div>
          </div>
          <div className="left-tag">
            <div className="timeline">
              <div className="timeline-item"><span>2022</span>：&emsp;&emsp;University Life!</div>
              <div className="timeline-item"><span>2023</span>：&emsp;&emsp;Web3 Journey!</div>
              <div className="timeline-item"><span>2024</span>：&emsp;&emsp;Building the Future!</div>
              <div className="timeline-item"><span>2025</span>：&emsp;&emsp;Creating Something Bigger!</div>
            </div>
          </div>
        </div>
        
        <div className="right">
          <div className="right-header">
            <div className="right-welcome">
              <p className="right-title">Welcome to 0xhacker&apos;s World</p>
            </div>
            <div className="right-description">⏳&ensp;<span>Geek Enthusiast and Web3 Idealist</span></div>
            <div className="right-description">📝&ensp;<span>Do something cool and change the word!</span></div>
            <div className="right-about">
              <a className="right-icon" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="github" width={40} height={40} />
              </a>
              <a className="right-icon" href="https://im.qq.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/qq.svg" alt="qq" width={40} height={40} />
              </a>
              <a className="right-icon" href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/discord.svg" alt="discord" width={40} height={40} />
              </a>
            </div>
          </div>
          
          <div className="right-content">
            <div className="right-menu">
              <span className="right-title">I SAY</span>
            </div>
            <div className="right-project">
              <Link href="/succinct" className="project-link project-item">
                <div className="project-item-left">
                  <h1>About</h1>
                  <p>Unpolluted Mind</p>
                </div>
                <div className="project-item-right">
                  <Image src="/succinct.svg" alt="" width={50} height={50} />
                </div>
              </Link>
              
              <Link href="/blog" className="project-link project-item">
                <div className="project-item-left">
                  <h1>Blog</h1>
                  <p>Uncontaminated Territory</p>
                </div>
                <div className="project-item-right">
                  <Image src="/blog.svg" alt="" width={50} height={50} />
                </div>
              </Link>
              
              <Link href="/essay" className="project-link project-item">
                <div className="project-item-left">
                  <h1>Essays</h1>
                  <p>Uninhabited Wilderness</p>
                </div>
                <div className="project-item-right">
                  <Image src="/write.svg" alt="" width={50} height={50} />
                </div>
              </Link>
              
              <Link href="/project" className="project-link project-item">
                <div className="project-item-left">
                  <h1>Projects</h1>
                  <p>Unharmed Edifice</p>
                </div>
                <div className="project-item-right">
                  <Image src="/project.svg" alt="" width={50} height={50} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
