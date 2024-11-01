"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 0.5);
  return (
    <motion.section 
      ref ={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.175}}
      id="about"
    >

      <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
          Since childhood, I have been deeply immersed in{" "}
          <span className="font-medium">technology</span>. Upon graduating high school, I was certain that I wanted to pursue a path in this dynamic field{" "} My journey began at Miami Dade College, where I took my first programming class and discovered my passion for {" "}
          <span className="font-medium">coding</span>. {" "}
          After earning my AA, I continued my studies at FIU, where I built a {" "}
          <span className="font-medium">strong foundation in backend software development</span>. {" "}
          My primary tech stack includes {" "}
          <span className="font-medium">Java with Spring Boot, MySQL, PostgreSQL, Python, and Django I also have experience with React, Next.js, and Tailwind CSS</span>. {" "}
          I pride myself on being a {" "}
          <span className="italic">curious and proactive</span> {" "}
          learner, always seeking new knowledge and challenges in the ever-evolving world of technology. {" "}
          <span className="font-medium">I am currently looking for a full time postion</span>.
        </p>
        <p>
          In my free time, I enjoy playing video games, spending time with friends, and watching soccer. I have a passion for {" "}
          <span className="italic">continuous learning and love discovering</span> {" "}new things every day. I also find joy in creating music and express myself through playing the guitar..
        </p>
    </motion.section>
  )
}
