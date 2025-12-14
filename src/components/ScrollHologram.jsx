import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollHologram = () => {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);

  // Transform scroll progress to rotation and scale
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.6, 1, 1, 0.6]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Change hologram based on scroll position
      if (latest < 0.15) setCurrentSection(0); // Home
      else if (latest < 0.3) setCurrentSection(1); // Services
      else if (latest < 0.45) setCurrentSection(2); // Developer
      else if (latest < 0.6) setCurrentSection(3); // Projects
      else if (latest < 0.75) setCurrentSection(4); // Skills
      else if (latest < 0.9) setCurrentSection(5); // About
      else setCurrentSection(6); // Contact
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const hologramTypes = [
    {
      // Home - Geometric Core
      shape: (
        <div className="relative w-full h-full">
          <motion.div
            className="absolute inset-0 border-4 border-cyan-400/50"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute inset-4 border-2 border-blue-400/30"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            ></div>
          </motion.div>
          <div className="absolute inset-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
        </div>
      ),
      color: "cyan",
    },
    {
      // Services - Hexagonal Grid
      shape: (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.path
                key={i}
                d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                fill="none"
                stroke="rgba(6, 182, 212, 0.6)"
                strokeWidth="1.5"
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                transform={`scale(${1 - i * 0.15})`}
                transform-origin="50 50"
              />
            ))}
          </svg>
        </div>
      ),
      color: "cyan",
    },
    {
      // Developer - Spinning Cube
      shape: (
        <div className="relative w-full h-full perspective-1000">
          <motion.div
            className="w-32 h-32 mx-auto"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border-2 border-purple-400/60"></div>
            <div className="absolute inset-4 border border-pink-400/40"></div>
          </motion.div>
        </div>
      ),
      color: "purple",
    },
    {
      // Projects - Network Nodes
      shape: (
        <div className="relative w-full h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Central Node */}
            <motion.circle
              cx="100"
              cy="100"
              r="20"
              fill="none"
              stroke="rgba(251, 146, 60, 0.8)"
              strokeWidth="2"
              animate={{ r: [20, 25, 20] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Connecting Lines */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const x = 100 + Math.cos((angle * Math.PI) / 180) * 60;
              const y = 100 + Math.sin((angle * Math.PI) / 180) * 60;
              return (
                <g key={i}>
                  <motion.line
                    x1="100"
                    y1="100"
                    x2={x}
                    y2={y}
                    stroke="rgba(251, 146, 60, 0.4)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="none"
                    stroke="rgba(251, 146, 60, 0.6)"
                    strokeWidth="1.5"
                    animate={{ r: [8, 12, 8] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      ),
      color: "orange",
    },
    {
      // Skills - Data Matrix
      shape: (
        <div className="relative w-full h-full">
          <motion.div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-cyan-400/40 rounded-sm"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: (i % 8) * 0.1 + Math.floor(i / 8) * 0.05,
                }}
              ></motion.div>
            ))}
          </motion.div>
        </div>
      ),
      color: "cyan",
    },
    {
      // About - Orbiting Rings
      shape: (
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-green-400/50 rounded-full"
              style={{
                width: `${80 - i * 20}%`,
                height: `${80 - i * 20}%`,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 15 - i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-green-400 rounded-full -translate-x-1/2"></div>
            </motion.div>
          ))}
          <div className="absolute w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full"></div>
        </div>
      ),
      color: "green",
    },
    {
      // Contact - Pulse Wave
      shape: (
        <div className="relative w-full h-full flex items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-blue-400/60 rounded-full"
              style={{
                width: "30%",
                height: "30%",
              }}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: [1, 3, 3], opacity: [0.6, 0, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.7,
              }}
            ></motion.div>
          ))}
          <div className="absolute w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
        </div>
      ),
      color: "blue",
    },
  ];

  const current = hologramTypes[currentSection];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 pointer-events-none hidden lg:block">
      <motion.div className="relative w-48 h-48" style={{ scale, opacity }}>
        {/* Hologram Container */}
        <motion.div className="relative w-full h-full" style={{ rotate }}>
          {/* Outer Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-${current.color}-500/20 to-${current.color}-600/20 rounded-full blur-2xl`}
          ></div>

          {/* Main Hologram Shape */}
          <div className="relative w-full h-full">{current.shape}</div>

          {/* Scanning Effect */}
          <motion.div
            className={`absolute inset-0 border-t-2 border-${current.color}-400/60`}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          {/* Holographic Glitch Lines */}
          <div className="absolute inset-0">
            {[20, 40, 60, 80].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-full h-0.5 bg-${current.color}-400/30`}
                style={{ top: `${pos}%` }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              ></motion.div>
            ))}
          </div>

          {/* Corner Brackets */}
          <div className="absolute inset-0">
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60"></div>
            {/* Top Right */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60"></div>
            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60"></div>
            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60"></div>
          </div>
        </motion.div>

        {/* Data Panel */}
        <motion.div
          className="absolute -right-32 top-0 w-28 bg-slate-900/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-2 text-xs font-mono"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-cyan-400 mb-1 flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            SYSTEM STATUS
          </div>
          <div className="text-gray-400 space-y-0.5">
            <div className="flex justify-between">
              <span>LEVEL:</span>
              <span className="text-cyan-300">{currentSection + 1}/7</span>
            </div>
            <div className="flex justify-between">
              <span>SYNC:</span>
              <span className="text-green-400">100%</span>
            </div>
          </div>
          <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              style={{ width: `${(currentSection + 1) * 14.28}%` }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Section Label */}
        <motion.div
          className="absolute -left-32 bottom-0 bg-slate-900/90 backdrop-blur-sm border border-cyan-400/30 rounded px-3 py-1 text-xs font-mono text-cyan-400"
          key={currentSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {
            [
              "HOME",
              "SERVICES",
              "DEVELOPER",
              "PROJECTS",
              "SKILLS",
              "ABOUT",
              "CONTACT",
            ][currentSection]
          }
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollHologram;
