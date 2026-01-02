import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-5" style={{ background: '#ffffff' }}>
      <div className="container">

        {/* Top Row: Brand & Socials */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">

          {/* Left: Brand */}
          <div className="text-center text-md-start mb-3 mb-md-0">
            <h4 className="fw-bold mb-1 text-primary">Abhishek Dangi</h4>
            <p className="text-secondary mb-0 small">
              Bringing ideas to life through code.
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="d-flex gap-3 justify-content-center justify-content-md-end">
            <a href="https://github.com/Abhishek-Dangi" target="_blank" rel="noopener noreferrer" className="text-secondary hover-primary transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/abhishek-dangi-7b757b241/" target="_blank" rel="noopener noreferrer" className="text-secondary hover-primary transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:abhishekdangi2841@gmail.com" className="text-secondary hover-primary transition-colors">
              <FiMail size={20} />
            </a>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-4 text-secondary opacity-25" />

        {/* Bottom Row: Copyright */}
        <div className="text-center">
          <p className="text-secondary mb-0 small opacity-75">
            © {new Date().getFullYear()} Abhishek Dangi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}