import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TechCarousel = () => {
  const technologies = [
    {
      name: "React",
      gradient: "from-blue-400 to-cyan-400",
      icon: "⚛️",
    },
    {
      name: "TypeScript",
      gradient: "from-blue-500 to-blue-700",
      icon: "📘",
    },
    {
      name: "Node.js",
      gradient: "from-green-400 to-emerald-600",
      icon: "🟢",
    },
    {
      name: "TailwindCSS",
      gradient: "from-cyan-400 to-blue-500",
      icon: "🎨",
    },
    {
      name: "Redux",
      gradient: "from-purple-500 to-indigo-600",
      icon: "🔄",
    },
    {
      name: "Next.js",
      gradient: "from-gray-700 to-black",
      icon: "▲",
    },
    {
      name: "Material UI",
      gradient: "from-blue-600 to-indigo-700",
      icon: "🎭",
    },
    {
      name: "Jest",
      gradient: "from-red-500 to-orange-500",
      icon: "🃏",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <div className="relative overflow-hidden py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-orange-500 bg-clip-text text-transparent">
          Technologies I Work With
        </h3>
      </motion.div>

      {/* Sliding Carousel */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {technologies.map((tech, index) => {
            const offset =
              (index - currentIndex + technologies.length) %
              technologies.length;
            const isCenter = offset === 0;
            const isNear = offset === 1 || offset === technologies.length - 1;

            let translateX = 0;
            let scale = 0.7;
            let opacity = 0.3;
            let zIndex = 0;

            if (isCenter) {
              translateX = 0;
              scale = 1.2;
              opacity = 1;
              zIndex = 30;
            } else if (offset === 1) {
              translateX = 120;
              scale = 0.9;
              opacity = 0.6;
              zIndex = 20;
            } else if (offset === technologies.length - 1) {
              translateX = -120;
              scale = 0.9;
              opacity = 0.6;
              zIndex = 20;
            } else if (offset === 2) {
              translateX = 240;
              scale = 0.7;
              opacity = 0.3;
              zIndex = 10;
            } else if (offset === technologies.length - 2) {
              translateX = -240;
              scale = 0.7;
              opacity = 0.3;
              zIndex = 10;
            } else {
              opacity = 0;
            }

            return (
              <motion.div
                key={tech.name}
                animate={{
                  x: `${translateX}%`,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${tech.gradient} p-1 shadow-2xl`}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2">{tech.icon}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
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
      <div className="flex justify-center gap-2 mt-8">
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
