import { FiGithub, FiHeart, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      link: "https://linkedin.com/in/sachin-adsare-0971b216a3",
      label: "LinkedIn",
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      link: "https://github.com/sachin-adsare",
      label: "GitHub",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      link: "mailto:sachin.adsare@outlook.com",
      label: "Email",
    },
  ];

  return (
    <footer className="holographic-section text-gray-300">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <div className="section-container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Sachin Adsare<span className="text-accent-400">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Senior Software Developer with 5.8+ years of experience building
              exceptional web applications using React, TypeScript, Node.js, and
              modern frameworks. Currently at Vimo India, delivering scalable
              enterprise solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-600 transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:sachin.adsare@outlook.com"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  sachin.adsare@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919309787026"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  +91 9309787026
                </a>
              </li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Sachin Adsare. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Built with <FiHeart className="text-red-500 w-4 h-4" /> using
              React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
