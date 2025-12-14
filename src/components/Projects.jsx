import { motion } from "framer-motion";
import { FiCode, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Web Applications",
      company: "Vimo India",
      role: "Senior Software Developer",
      description:
        "Leading frontend development initiatives for cutting-edge web applications, implementing modern React architecture and best practices to deliver high-performance, scalable solutions.",
      challenges: [
        "Architecting scalable frontend solutions with modern React patterns",
        "Implementing responsive designs with optimal user experience",
        "Ensuring code quality through comprehensive testing and reviews",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Redux Toolkit",
        "Jest",
      ],
      achievements: [
        "Driving frontend architecture decisions and technical standards",
        "Mentoring team members on best practices",
        "Delivering feature-rich applications with exceptional performance",
      ],
      period: "Oct 2024 - Present",
      type: "Enterprise Development",
      featured: true,
    },
    {
      title: "AI Virtual Assistant Platform",
      company: "Globant",
      role: "Senior Software Developer",
      description:
        "Enterprise-level AI-powered virtual assistance platform streamlining business information gathering for Engineering, Data & AI, Cloud Ops, and Agile Delivery teams with DocConvo for real-time document management.",
      challenges: [
        "Implemented complex file upload and approval flow for document processing",
        "Designed user-friendly interface to enhance user experience",
        "Ensured component reliability through comprehensive testing with React Testing Library",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "React Query",
        "Material UI",
        "Jest",
        "React Testing Library",
      ],
      achievements: [
        "Led FE development team ensuring efficient task delegation",
        "Drove adoption of best practices in coding standards",
        "Achieved 80%+ test coverage for quality assurance",
      ],
      period: "Apr 2021 - Sep 2024",
      type: "Enterprise Application",
    },
    {
      title: "EY Asubs - Subscription Management Platform",
      company: "EY",
      role: "Frontend Developer",
      description:
        "Comprehensive subscription application with distinct roles for admin, user, team member, and approver, streamlining subscription management and approval processes with Agile methodology.",
      challenges: [
        "Implemented role-based access control for different user types",
        "Engineered reusable components for scalability",
        "Mastered Redux toolkit for efficient state management",
      ],
      technologies: [
        "React",
        "Redux Toolkit",
        "TypeScript",
        "Material UI",
        "Jest",
      ],
      achievements: [
        "Built flexible and efficient development workflows",
        "Consistently maintained 80%+ test coverage",
        "Delivered features meeting tight project requirements",
      ],
      period: "06/2021 - 07/2023",
      type: "Enterprise SaaS",
    },
    {
      title: "Experizer - VR/AR Experience Platform",
      company: "Equations Work IT Services",
      role: "Software Engineer",
      description:
        "Company's flagship 360-degree immersive experience platform providing zero-programming-skills solution for creating VR/AR experiences with A-Frame framework integration.",
      challenges: [
        "Developed 3 distinct virtual reality experiences",
        "Implemented 4 Augmented Reality experiences",
        "Created intuitive asset management functionality",
      ],
      technologies: [
        "React",
        "TypeScript",
        "A-Frame",
        "HTML",
        "CSS",
        "Bootstrap",
        "Node.js",
      ],
      achievements: [
        "Delivered platform enabling non-technical users to create VR/AR content",
        "Managed documentation using Postman",
        "Facilitated efficient project resource organization",
      ],
      period: "Jan 2019 - Mar 2021",
      link: "https://studio.experizer.com",
      type: "VR/AR Platform",
    },
    {
      title: "Pipeline Tracker",
      company: "Equations Work IT Services",
      role: "Full Stack Developer",
      description:
        "Comprehensive project tracking and deployment management system built with ASP.Net MVC and modern frontend technologies.",
      technologies: ["ASP.Net MVC", "JavaScript", "Azure DevOps", "Bootstrap"],
      achievements: [
        "Project Setup, Development and Deployment",
        "UI Design and functionality implementation",
        "Full API development and integration",
      ],
      period: "2019 - 2021",
      type: "Project Management Tool",
    },
    {
      title: "Monolith",
      company: "Equations Work IT Services",
      role: "Full Stack Developer",
      description:
        "Full-featured project management and development platform with comprehensive UI design and API development.",
      technologies: ["Angular", "jQuery", "CSS", "Bootstrap", "Node.js"],
      achievements: [
        "Complete project setup and deployment lifecycle",
        "Comprehensive UI/UX implementation",
        "API development and documentation",
      ],
      period: "2019 - 2021",
      type: "Development Platform",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="holographic-section section-padding">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
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
            <div className="p-3 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-xl border border-orange-400/30 shadow-lg shadow-orange-500/20">
              <FiCode className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent relative">
              Featured Projects
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-orange-400 to-transparent"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            A curated showcase of my most{" "}
            <span className="text-orange-400 font-semibold">
              impactful work
            </span>{" "}
            across enterprise applications, VR/AR platforms, and development
            tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* Neon border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  project.featured
                    ? "from-cyan-500 to-blue-600"
                    : "from-blue-500 to-purple-600"
                } opacity-50 blur-lg group-hover:blur-xl transition-all duration-500`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  project.featured
                    ? "from-cyan-500 to-blue-600"
                    : "from-blue-500 to-purple-600"
                } p-[2px] rounded-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-scan"></div>
              </div>

              {/* Tech grid overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              >
                {" "}
              </div>

              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-cyan-400/10 group-hover:border-cyan-400/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full animate-pulse">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <p className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-semibold mb-1">
                          {project.company} • {project.role}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <FiCode className="w-4 h-4" />
                            {project.type}
                          </span>
                          <span>•</span>
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                {project.challenges && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Challenges & Solutions:
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1">
                            •
                          </span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.achievements && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-green-600 dark:text-green-400 mt-1">
                            ✓
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
