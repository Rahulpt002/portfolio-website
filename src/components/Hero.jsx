import { motion } from 'framer-motion';
import { Button, Tooltip } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white dark:from-blue-900 dark:to-cyan-900 py-24 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm Rahul pt
        </motion.h2>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          A passionate frontend developer skilled in React, CSS, and JavaScript
        </p>
        <div className="flex justify-center items-center gap-4">
          <Tooltip title="See my projects">
            <Button
              type="primary"
              icon={<EyeOutlined />}
              href="#projects"
              className="rounded-full px-6 py-2 h-10 flex items-center"
            >
              View My Work
            </Button>
          </Tooltip>
          <Tooltip title="Download my resume">
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              href="/resume.pdf"
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-2 h-10 flex items-center"
            >
              Download Resume
            </Button>
          </Tooltip>
        </div>
      </div>
    </motion.section>
  );
}