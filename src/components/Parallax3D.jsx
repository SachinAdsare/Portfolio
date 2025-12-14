import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax3D = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Parallax transformations for cubes
  const cube1Y = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const cube1Rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const cube2Y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const cube2Rotate = useTransform(scrollYProgress, [0, 1], [0, -540]);

  const cube3Y = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const cube3Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const cube4Y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const cube4Rotate = useTransform(scrollYProgress, [0, 1], [0, -480]);

  // Sphere transformations
  const sphere1Y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const sphere1Scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.2, 0.8]
  );

  const sphere2Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const sphere2Scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.8, 1.2]
  );

  const sphere3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Hologram transformations
  const hologram1Y = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const hologram2Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const hologram3Y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none overflow-hidden z-10"
    >
      {/* 3D Cube 1 - Top Right */}
      <motion.div
        style={{ y: cube1Y, rotateY: cube1Rotate, rotateX: cube1Rotate }}
        className="absolute top-20 right-20 w-32 h-32 preserve-3d"
      >
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Wireframe Cube */}
          <div
            className="absolute inset-0 border-2 border-cyan-400/40 bg-cyan-500/5 backdrop-blur-sm"
            style={{
              transform: "translateZ(0px)",
              boxShadow:
                "0 0 30px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(6, 182, 212, 0.1)",
            }}
          >
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
          </div>
        </div>
      </motion.div>

      {/* 3D Cube 2 - Bottom Left */}
      <motion.div
        style={{ y: cube2Y, rotateY: cube2Rotate, rotateZ: cube2Rotate }}
        className="absolute bottom-32 left-32 w-24 h-24"
      >
        <div
          className="relative w-full h-full border-2 border-purple-400/40 bg-purple-500/5 backdrop-blur-sm"
          style={{
            boxShadow:
              "0 0 20px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)",
          }}
        >
          <div className="absolute inset-1 border border-purple-300/30"></div>
        </div>
      </motion.div>

      {/* 3D Cube 3 - Middle Right */}
      <motion.div
        style={{ y: cube3Y, rotateX: cube3Rotate, rotateY: cube3Rotate }}
        className="absolute top-1/2 right-40 w-20 h-20"
      >
        <div
          className="relative w-full h-full border-2 border-blue-400/40 bg-blue-500/10 backdrop-blur-sm"
          style={{
            boxShadow:
              "0 0 25px rgba(59, 130, 246, 0.4), inset 0 0 15px rgba(59, 130, 246, 0.2)",
          }}
        >
          <div className="absolute inset-2 border border-blue-300/30"></div>
          <div className="absolute inset-4 border border-cyan-300/20"></div>
        </div>
      </motion.div>

      {/* 3D Cube 4 - Bottom Center */}
      <motion.div
        style={{ y: cube4Y, rotateY: cube4Rotate }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 w-28 h-28"
      >
        <div
          className="relative w-full h-full border-2 border-orange-400/40 bg-orange-500/10 backdrop-blur-sm"
          style={{
            boxShadow:
              "0 0 25px rgba(249, 115, 22, 0.4), inset 0 0 15px rgba(249, 115, 22, 0.2)",
          }}
        >
          <div className="absolute inset-3 border border-orange-300/30"></div>
        </div>
      </motion.div>

      {/* Holographic Sphere 1 - Large with multiple rings */}
      <motion.div
        style={{ y: sphere1Y, scale: sphere1Scale }}
        className="absolute top-1/3 left-1/4 w-48 h-48"
      >
        <div className="relative w-full h-full">
          {/* Multiple rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-blue-400/40 rounded-full"
            style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-2 border-cyan-400/40 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 border border-cyan-300/30 rounded-full"
          ></motion.div>

          {/* Glowing core */}
          <div
            className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/40 backdrop-blur-sm border border-cyan-400/60"
            style={{
              boxShadow:
                "0 0 40px rgba(6, 182, 212, 0.6), inset 0 0 20px rgba(6, 182, 212, 0.3)",
            }}
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-2 rounded-full bg-cyan-400/30"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Holographic Sphere 2 */}
      <motion.div
        style={{ y: sphere2Y, scale: sphere2Scale }}
        className="absolute bottom-1/4 right-1/4 w-36 h-36"
      >
        <div className="relative w-full h-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-purple-400/40 rounded-full"
            style={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)" }}
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 border border-pink-400/30 rounded-full"
          ></motion.div>
          <div
            className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 backdrop-blur-sm border border-purple-400/60"
            style={{
              boxShadow:
                "0 0 30px rgba(168, 85, 247, 0.5), inset 0 0 15px rgba(168, 85, 247, 0.3)",
            }}
          ></div>
        </div>
      </motion.div>

      {/* Holographic Sphere 3 - Small */}
      <motion.div
        style={{ y: sphere3Y }}
        className="absolute top-2/3 left-1/3 w-24 h-24"
      >
        <div className="relative w-full h-full">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-green-400/40 rounded-full"
            style={{ boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)" }}
          ></motion.div>
          <div
            className="absolute inset-5 rounded-full bg-gradient-to-br from-green-500/40 to-cyan-500/40 backdrop-blur-sm border border-green-400/50"
            style={{
              boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)",
            }}
          ></div>
        </div>
      </motion.div>

      {/* Holographic Data Panel 1 */}
      <motion.div
        style={{ y: hologram1Y }}
        className="absolute top-1/2 right-10 w-56 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-400/30 rounded-lg overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="p-4 font-mono text-xs text-cyan-400/60 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span>SYSTEM: ONLINE</span>
          </div>
          <div className="opacity-50">╔══════════════╗</div>
          <div className="opacity-50">║ STATUS: OK ║</div>
          <div className="opacity-50">╚══════════════╝</div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-cyan-400/50"
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>
      </motion.div>

      {/* Holographic Data Panel 2 */}
      <motion.div
        style={{ y: hologram2Y }}
        className="absolute top-2/3 left-10 w-48 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-400/30 rounded-lg overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        <div className="p-4 font-mono text-xs text-purple-400/60 space-y-1">
          <div>▓▓▓▓▓▓▓▓░░░░</div>
          <div>LOADING: 66%</div>
          <div className="text-[10px] opacity-50">CORE_SYSTEMS_ACTIVE</div>
        </div>
      </motion.div>

      {/* Holographic Data Panel 3 - Analytics */}
      <motion.div
        style={{ y: hologram3Y }}
        className="absolute top-1/4 left-20 w-52 h-36 bg-gradient-to-br from-cyan-500/10 to-green-500/10 backdrop-blur-md border border-cyan-400/30 rounded-lg overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div className="p-4 font-mono text-xs text-cyan-400/60 space-y-2">
          <div className="flex items-center justify-between">
            <span>PERFORMANCE</span>
            <span className="text-green-400">99.9%</span>
          </div>
          <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-green-400"
              animate={{ width: ["0%", "99%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </div>
          <div className="grid grid-cols-3 gap-1 text-[10px]">
            <div className="text-center">
              <div className="text-cyan-400">CPU</div>
              <div>45%</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400">RAM</div>
              <div>67%</div>
            </div>
            <div className="text-center">
              <div className="text-green-400">GPU</div>
              <div>89%</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Diamond Shape */}
      <motion.div
        style={{ y: cube1Y }}
        className="absolute top-1/4 left-1/3 w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full border-2 border-orange-400/30 bg-orange-500/5 backdrop-blur-sm"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
          }}
        >
          <div
            className="absolute inset-2 border border-orange-300/20"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          ></div>
        </div>
      </motion.div>

      {/* Hexagon */}
      <motion.div
        style={{ y: sphere2Y }}
        className="absolute bottom-1/3 right-1/3 w-28 h-28"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full border-2 border-pink-400/30 bg-pink-500/5 backdrop-blur-sm"
          style={{
            clipPath:
              "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)",
          }}
        ></div>
      </motion.div>
    </div>
  );
};

export default Parallax3D;
