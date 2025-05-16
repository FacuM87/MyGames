import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <p className="text-center text-xs">
            Developed by Facu Mingorance - 2025
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/FacuM87"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/facundo-mingorance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 