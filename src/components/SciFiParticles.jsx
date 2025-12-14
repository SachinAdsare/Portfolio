import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SciFiParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      type: i % 3, // 0: circle, 1: square, 2: triangle
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => {
        const colors = [
          "6, 182, 212", // cyan
          "139, 92, 246", // purple
          "59, 130, 246", // blue
        ];
        const color = colors[particle.type];

        return (
          <motion.div
            key={particle.id}
            className={`absolute ${
              particle.type === 0
                ? "rounded-full"
                : particle.type === 1
                ? "rounded-sm"
                : ""
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, rgba(${color}, 0.8), transparent)`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(${color}, 0.5)`,
              clipPath:
                particle.type === 2
                  ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                  : "none",
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              opacity: [0, 0.8, 0],
              rotate: particle.type === 1 ? [0, 180, 360] : 0,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default SciFiParticles;
