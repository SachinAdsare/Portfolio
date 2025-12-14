import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: "Web Application Development",
      description:
        "Building enterprise-grade web applications using React, TypeScript, and modern frameworks. Specializing in scalable architectures, state management with Redux, and delivering high-performance solutions optimized for all devices and browsers.",
      gradient: "from-blue-500 to-purple-600",
      iconBg:
        "from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30",
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Full Stack Development",
      description:
        "End-to-end web development with expertise in React frontends and Node.js/Express backends. Creating seamless user experiences with RESTful APIs, secure authentication, and efficient database integration using PostgreSQL and MongoDB.",
      gradient: "from-purple-500 to-pink-600",
      iconBg:
        "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Responsive UI/UX",
      description:
        "Crafting pixel-perfect, responsive interfaces using Material UI, TailwindCSS, and Bootstrap. Ensuring exceptional user experiences across mobile, tablet, and desktop with accessibility standards and modern design principles.",
      gradient: "from-pink-500 to-rose-600",
      iconBg:
        "from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30",
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Database Design & Management",
      description:
        "Designing efficient database schemas and implementing robust data management solutions. Expertise in PostgreSQL, MongoDB, and optimizing queries for performance. Ensuring data integrity, security, and scalability for enterprise applications.",
      gradient: "from-green-500 to-teal-600",
      iconBg:
        "from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Analyzing and optimizing application performance through code splitting, lazy loading, and efficient rendering strategies. Implementing best practices for faster load times, improved SEO, and enhanced user engagement metrics.",
      gradient: "from-orange-500 to-red-600",
      iconBg:
        "from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30",
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing strategies using Jest and React Testing Library. Maintaining 80%+ test coverage with unit, integration, and end-to-end tests. Ensuring code quality through automated testing, CI/CD pipelines, and code reviews.",
      gradient: "from-indigo-500 to-blue-600",
      iconBg:
        "from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
      }}
    >
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      ></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
              <FiCode className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative">
              My Services
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            With 5.8+ years of professional experience, I specialize in creating
            responsive and user-friendly web applications. My passion for coding
            and attention to detail enable me to deliver custom solutions that
            drive business growth and enhance user engagement across all
            platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative rounded-2xl overflow-hidden`}
            >
              {/* Neon border glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-75 blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} p-[2px] rounded-2xl`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-scan"></div>
              </div>
              
              {/* Holographic grid overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, .1) 25%, rgba(59, 130, 246, .1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .1) 75%, rgba(59, 130, 246, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, .1) 25%, rgba(59, 130, 246, .1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .1) 75%, rgba(59, 130, 246, .1) 76%, transparent 77%, transparent)",
                  backgroundSize: "40px 40px",
                }}
              ></div>

              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/5 group-hover:border-cyan-400/30 transition-colors duration-300">
                {/* Icon */}
                <div
                  className={`relative inline-flex p-6 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 overflow-hidden`}
                >
                  {/* Pulsing glow background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-2xl group-hover:opacity-50 animate-pulse transition-opacity duration-300`}
                  ></div>
                  
                  {/* Icon border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 rounded-2xl`}></div>
                  <div className="absolute inset-[2px] bg-slate-800/80 rounded-2xl"></div>

                  {/* Icon */}
                  <div className={`relative text-5xl`} style={{
                    filter: 'drop-shadow(0 0 8px currentColor)',
                  }}>
                    {service.icon}
                  </div>

                  {/* Corner accents - cyberpunk style */}
                  <div className="absolute top-0 left-0 w-4 h-4">
                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${service.gradient}`}></div>
                    <div className={`absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b ${service.gradient}`}></div>
                  </div>
                  <div className="absolute top-0 right-0 w-4 h-4">
                    <div className={`absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l ${service.gradient}`}></div>
                    <div className={`absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b ${service.gradient}`}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-4 h-4">
                    <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${service.gradient}`}></div>
                    <div className={`absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t ${service.gradient}`}></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4">
                    <div className={`absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l ${service.gradient}`}></div>
                    <div className={`absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t ${service.gradient}`}></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 font-semibold text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text hover:gap-3 transition-all duration-200 group/link relative`}
                >
                  <span className="relative">
                    Learn More
                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r ${service.gradient} group-hover/link:w-full transition-all duration-300`}></span>
                  </span>
                  <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
