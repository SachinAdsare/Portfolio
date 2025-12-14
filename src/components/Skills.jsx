import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiPackage,
  FiTool,
} from "react-icons/fi";
import ImageSlider from "./ImageSlider";
import TechCarousel from "./TechCarousel";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode className="w-6 h-6" />,
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Redux / Redux Toolkit", level: 90 },
        { name: "React Query (Tanstack Query)", level: 85 },
        { name: "HTML5 / CSS3", level: 95 },
      ],
    },
    {
      title: "UI Frameworks & Libraries",
      icon: <FiLayers className="w-6 h-6" />,
      skills: [
        { name: "Material UI", level: 90 },
        { name: "TailwindCSS", level: 85 },
        { name: "Bootstrap", level: 85 },
        { name: "Formik", level: 85 },
        { name: "A-Frame (VR/AR)", level: 75 },
      ],
    },
    {
      title: "Backend & Database",
      icon: <FiDatabase className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Testing & Quality",
      icon: <FiTool className="w-6 h-6" />,
      skills: [
        { name: "Jest", level: 90 },
        { name: "React Testing Library", level: 90 },
        { name: "Unit Testing", level: 90 },
        { name: "Integration Testing", level: 85 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FiGitBranch className="w-6 h-6" />,
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Azure DevOps", level: 80 },
        { name: "Jira", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 85 },
      ],
    },
    {
      title: "Methodologies",
      icon: <FiPackage className="w-6 h-6" />,
      skills: [
        { name: "Agile / Scrum", level: 90 },
        { name: "Wireframing", level: 80 },
        { name: "Code Review", level: 90 },
        { name: "Performance Optimization", level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section
      id="skills"
      className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Comprehensive technical skill set built over 5.8+ years of
            professional software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-600 dark:text-primary-400 rounded-lg transform hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-primary-600 dark:from-white dark:to-accent-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 via-accent-500 to-orange-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 card bg-gradient-to-br from-blue-50 to-primary-100 dark:from-blue-900/20 dark:to-primary-900/30 border-2 border-primary-200 dark:border-primary-800">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
              5.8+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Years of Experience
            </div>
          </div>
          <div className="text-center p-6 card bg-gradient-to-br from-purple-50 to-accent-100 dark:from-purple-900/20 dark:to-accent-900/30 border-2 border-accent-200 dark:border-accent-800">
            <div className="text-4xl font-bold bg-gradient-to-r from-accent-600 to-orange-600 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Technologies Mastered
            </div>
          </div>
          <div className="text-center p-6 card bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/30 border-2 border-orange-200 dark:border-orange-800">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-primary-600 bg-clip-text text-transparent mb-2">
              80%+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Test Coverage Standard
            </div>
          </div>
        </motion.div>

        {/* Tech Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <TechCarousel />
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <ImageSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
