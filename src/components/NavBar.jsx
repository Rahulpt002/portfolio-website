import { Button } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

export default function NavBar({ theme, toggleTheme }) {
  return (
    <nav className="bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-100 shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Contact</a></li>
          </ul>
          <Button
            type="primary"
            icon={theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>
      </div>
    </nav>
  );
}