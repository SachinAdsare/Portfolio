import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiHeart, FiTrendingUp } from "react-icons/fi";

const About = () => {
  const highlights = [
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Professional Journey",
      description:
        "5.8+ years of experience in creating dynamic web applications, from enterprise platforms to innovative VR/AR solutions",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Leadership",
      description:
        "Led development teams, drove adoption of best practices, and ensured efficient task delivery and timely project completion",
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Quality Focus",
      description:
        "Consistently maintained 80%+ test coverage and championed coding standards and performance optimization",
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Passion",
      description:
        "Dedicated to continuous learning and staying current with the latest web development technologies and methodologies",
    },
  ];

  const timeline = [
    {
      period: "Oct 2024 - Present",
      title: "Senior Software Developer",
      company: "Vimo India",
      description:
        "Leading frontend development initiatives, architecting scalable React applications, and driving technical excellence through modern development practices and mentorship.",
      current: true,
    },
    {
      period: "Apr 2021 - Sep 2024",
      title: "Senior Software Developer",
      company: "Globant",
      description:
        "Led frontend development for AI Virtual Assistance platform, managed teams, and implemented enterprise-level solutions with React, TypeScript, and modern testing practices.",
    },
    {
      period: "Jan 2019 - Mar 2021",
      title: "Software Engineer",
      company: "Equations Work IT Services",
      description:
        "Developed innovative VR/AR experiences, full-stack applications, and project management tools. Worked on flagship products using React, Angular, Node.js, and A-Frame.",
    },
  ];

  return (
    <section id="about" className="holographic-section section-padding">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-32 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="p-3 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl border border-green-400/30 shadow-lg shadow-green-500/20">
              <FiBriefcase className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-green-400 to-transparent"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            My journey,{" "}
            <span className="text-cyan-400 font-semibold">passion</span>, and
            commitment to excellence in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Crafting Digital Experiences with Code
            </h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                As a{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  Senior Software Developer
                </span>{" "}
                with over 5.8 years of experience, I've had the privilege of
                working with leading companies like Vimo India, Globant, and
                Equations Work. I specialize in creating enterprise-grade web
                applications using cutting-edge technologies including{" "}
                <span className="font-semibold">
                  React, TypeScript, Next.js, Node.js, Redux Toolkit,
                  TailwindCSS, and Material UI
                </span>
                .
              </p>

              <p>
                Currently at{" "}
                <span className="font-semibold text-accent-600 dark:text-accent-400">
                  Vimo India
                </span>
                , I lead frontend development initiatives, driving technical
                excellence and mentoring team members. My full-stack expertise
                in{" "}
                <span className="font-semibold">
                  Node.js, Express.js, and PostgreSQL
                </span>{" "}
                enables me to architect complete solutions from database design
                to user interface implementation.
              </p>

              <p>
                Throughout my career, I've successfully delivered{" "}
                <span className="font-semibold text-orange-600 dark:text-orange-400">
                  20+ projects
                </span>{" "}
                —from AI-powered virtual assistance platforms at Globant to
                immersive VR/AR experiences at Equations Work. Each project has
                strengthened my passion for creating intuitive, scalable, and
                maintainable solutions that drive real business value.
              </p>

              <p>
                I'm a strong advocate for quality, consistently maintaining{" "}
                <span className="font-semibold">80%+ test coverage</span> using
                Jest and React Testing Library. I believe in clean code,
                thorough documentation, and agile development practices that
                ensure timely delivery without compromising quality.
              </p>
            </div>

            {/* Personal Interests */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 via-accent-50 to-orange-50 dark:from-primary-900/20 dark:via-accent-900/20 dark:to-orange-900/20 rounded-xl border-2 border-primary-200 dark:border-primary-800">
              <h4 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">
                Beyond Coding
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not immersed in code, you'll find me{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  bike riding
                </span>{" "}
                through scenic routes,{" "}
                <span className="font-semibold text-accent-600 dark:text-accent-400">
                  hiking
                </span>{" "}
                through nature trails, or{" "}
                <span className="font-semibold text-orange-600 dark:text-orange-400">
                  swimming
                </span>
                . These activities help me maintain balance, stay energized, and
                bring fresh perspectives to problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden group"
              >
                {/* Neon border */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-cyan-600 opacity-30 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-cyan-600 p-[2px] rounded-2xl"></div>

                <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-green-400/10 group-hover:border-green-400/30 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex-shrink-0 transform hover:scale-110 transition-transform duration-200">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Master's in Computer Science
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">
                    Savitribai Phule Pune University
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  2017 - 2019
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                CGPA: 7.3 MCCS-II & 8.8 (MCS-II)
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    B.Sc. Computer Science
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">
                    Savitribai Phule Pune University
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  2014 - 2017
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Percentage: 69%
              </p>
            </div>
          </div>
        </motion.div>

        {/* Professional Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                  <div
                    className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`card p-6 ${
                        item.current
                          ? "border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="px-2 py-1 bg-gradient-to-r from-success-500 to-primary-500 text-white text-xs font-bold rounded-full">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                        {item.title}
                      </h4>
                      <p
                        className={`font-semibold mt-1 ${
                          item.current
                            ? "bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {item.company}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mt-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
