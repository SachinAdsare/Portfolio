import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiExpress,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const TechCarousel = () => {
  const technologies = [
    {
      name: "React",
      gradient: "from-cyan-400 to-blue-500",
      icon: <SiReact className="text-cyan-400" />,
      bg: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
    },
    {
      name: "TypeScript",
      gradient: "from-blue-500 to-blue-700",
      icon: <SiTypescript className="text-blue-600" />,
      bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30",
    },
    {
      name: "Node.js",
      gradient: "from-green-400 to-emerald-600",
      icon: <SiNodedotjs className="text-green-600" />,
      bg: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      name: "TailwindCSS",
      gradient: "from-cyan-400 to-teal-500",
      icon: <SiTailwindcss className="text-cyan-500" />,
      bg: "from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20",
    },
    {
      name: "Redux",
      gradient: "from-purple-500 to-indigo-600",
      icon: <SiRedux className="text-purple-600" />,
      bg: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    },
    {
      name: "Next.js",
      gradient: "from-gray-700 to-gray-900",
      icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
      bg: "from-gray-100 to-gray-200 dark:from-gray-800/50 dark:to-gray-900/50",
    },
    {
      name: "Material UI",
      gradient: "from-blue-600 to-indigo-700",
      icon: <SiMui className="text-blue-600" />,
      bg: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    },
    {
      name: "Jest",
      gradient: "from-red-500 to-orange-500",
      icon: <SiJest className="text-red-600" />,
      bg: "from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20",
    },
    {
      name: "JavaScript",
      gradient: "from-yellow-400 to-yellow-600",
      icon: <SiJavascript className="text-yellow-500" />,
      bg: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/30",
    },
    {
      name: "PostgreSQL",
      gradient: "from-blue-400 to-blue-600",
      icon: <SiPostgresql className="text-blue-700" />,
      bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30",
    },
    {
      name: "MongoDB",
      gradient: "from-green-500 to-green-700",
      icon: <SiMongodb className="text-green-600" />,
      bg: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30",
    },
    {
      name: "Express.js",
      gradient: "from-gray-600 to-gray-800",
      icon: <SiExpress className="text-gray-700 dark:text-gray-300" />,
      bg: "from-gray-100 to-gray-200 dark:from-gray-800/50 dark:to-gray-900/50",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="relative overflow-hidden py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-orange-500 bg-clip-text text-transparent">
          Technologies I Work With
        </h3>
      </motion.div>

      {/* Sliding Carousel */}
      <div className="relative h-72 md:h-80 flex items-center justify-center overflow-hidden px-4">
        <div className="relative w-full max-w-7xl h-full flex items-center justify-center mx-auto">
          {technologies.map((tech, index) => {
            const offset =
              (index - currentIndex + technologies.length) %
              technologies.length;

            let translateX = "0%";
            let scale = 0.7;
            let opacity = 0.3;
            let zIndex = 0;

            if (offset === 0) {
              // Center
              translateX = "0%";
              scale = 1.2;
              opacity = 1;
              zIndex = 30;
            } else if (offset === 1) {
              // Right side
              translateX = "150%";
              scale = 0.9;
              opacity = 0.7;
              zIndex = 20;
            } else if (offset === technologies.length - 1) {
              // Left side
              translateX = "-150%";
              scale = 0.9;
              opacity = 0.7;
              zIndex = 20;
            } else if (offset === 2) {
              // Far right
              translateX = "280%";
              scale = 0.75;
              opacity = 0.4;
              zIndex = 10;
            } else if (offset === technologies.length - 2) {
              // Far left
              translateX = "-280%";
              scale = 0.75;
              opacity = 0.4;
              zIndex = 10;
            } else {
              opacity = 0;
              translateX = offset < technologies.length / 2 ? "400%" : "-400%";
            }

            return (
              <motion.div
                key={tech.name}
                animate={{
                  x: translateX,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={`w-36 h-36 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br ${tech.gradient} p-[3px] shadow-2xl hover:shadow-3xl transition-shadow duration-300`}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center gap-3 p-4">
                    <div className="text-5xl md:text-6xl transform transition-transform duration-300 hover:scale-110 drop-shadow-lg">
                      {tech.icon}
                    </div>
                    <span className="text-sm md:text-base font-bold text-gray-900 dark:text-white text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-16">
        {technologies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-primary-500 to-accent-500 w-8"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
