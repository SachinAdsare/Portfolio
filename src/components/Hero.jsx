import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="holographic-section min-h-screen flex items-center justify-center pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-300 font-bold text-xl mb-4 drop-shadow-lg"
              style={{
                textShadow: "0 0 20px rgba(6, 182, 212, 0.6)",
              }}
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
            >
              <span
                className="text-white relative z-10 drop-shadow-2xl"
                style={{
                  textShadow:
                    "0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.4), 0 4px 8px rgba(0, 0, 0, 0.8)",
                }}
              >
                Sachin Adsare
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-3xl -z-10"></div>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
            >
              <span className="relative inline-block">
                <span className="text-cyan-300 drop-shadow-lg font-bold">
                  Senior Software{" "}
                </span>
                <span className="text-orange-400 drop-shadow-lg font-bold">
                  Developer
                </span>
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-400/50 to-orange-400/50 -z-10"></span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg font-semibold mb-4 relative inline-block"
            >
              <span className="text-gray-100 drop-shadow-md">Currently at</span>{" "}
              <span className="text-cyan-300 relative drop-shadow-md font-bold">
                Vimo India
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
              </span>{" "}
              <span className="text-gray-200 drop-shadow-md">
                • Since Oct 2024
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Take your business to the next level with{" "}
              <span className="font-bold text-cyan-300">
                custom web development solutions
              </span>
              . Crafting dynamic applications with{" "}
              <span className="text-cyan-300 font-bold">5.8+ years</span> of
              experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button onClick={scrollToContact} className="btn-primary">
                Get In Touch →
              </button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-base font-medium rounded-lg text-primary-600 dark:text-primary-400 bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 transform hover:scale-105 justify-center"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://linkedin.com/in/sachin-adsare-0971b216a3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/sachin-adsare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="mailto:sachin.adsare@outlook.com"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-200"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main gradient blob background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-purple-600 rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-400 via-accent-500 to-orange-500 p-2 animate-gradient-shift bg-400%">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-2xl">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-200 via-accent-200 to-orange-200 dark:from-primary-900 dark:via-accent-900 dark:to-orange-900 flex items-center justify-center text-6xl md:text-8xl font-bold text-white">
                    SA
                  </div>
                </div>
              </div>

              {/* Achievement Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -left-4 md:-left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border-2 border-primary-200 dark:border-primary-700"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    5.8+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Years Exp
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 md:-right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border-2 border-accent-200 dark:border-accent-700"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-600 to-orange-600 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Projects
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-8 -right-12 md:-right-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 border-2 border-orange-200 dark:border-orange-700"
              >
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-primary-600 bg-clip-text text-transparent">
                    80%+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    Coverage
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-gray-400 dark:text-gray-600"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
