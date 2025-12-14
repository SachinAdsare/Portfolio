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
      className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl">
              <FiCode className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-orange-500 bg-clip-text text-transparent">
              My Services
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
              whileHover={{ y: -10 }}
              className={`group relative rounded-2xl p-[2px] bg-gradient-to-br ${service.gradient} shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`text-transparent bg-gradient-to-br ${service.gradient} bg-clip-text`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-200`}
                >
                  Learn More →
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
