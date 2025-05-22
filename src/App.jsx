import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const [theme, setTheme] = useState('light');
  const [showScroll, setShowScroll] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
        {showScroll && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="scroll-to-top"
          >
            ↑ Top
          </button>
        )}
      </motion.div>
    </div>
  );
}