import { motion } from "framer-motion";

const HolographicPanels = () => {
  return (
    <>
      {/* Top Left Panel - System Info */}
      <motion.div
        className="fixed top-24 left-4 w-64 bg-slate-900/80 backdrop-blur-md border border-cyan-400/30 rounded-lg p-4 z-40 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="border-b border-cyan-400/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <h3 className="font-mono text-xs text-cyan-400 tracking-wider">
              SYSTEM IDENTITY
            </h3>
          </div>
        </div>
        <div className="font-mono text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">NAME:</span>
            <span className="text-cyan-300">SACHIN ADSARE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">ROLE:</span>
            <span className="text-blue-300">SR. DEVELOPER</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">EXP:</span>
            <span className="text-green-300">5.8+ YEARS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">STATUS:</span>
            <span className="text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              ACTIVE
            </span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-cyan-400/20">
          <div className="text-gray-500 font-mono text-xs mb-1">
            PROJECTS COMPLETED
          </div>
          <div className="flex items-end gap-1">
            {[85, 95, 70, 100, 60, 90, 75].map((height, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-sm"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1, delay: 1 + i * 0.1 }}
              ></motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Top Right Panel - Tech Stack */}
      <motion.div
        className="fixed top-24 right-4 w-56 bg-slate-900/80 backdrop-blur-md border border-purple-400/30 rounded-lg p-4 z-40 hidden xl:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="border-b border-purple-400/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <h3 className="font-mono text-xs text-purple-400 tracking-wider">
              TECH STACK
            </h3>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { name: "React", level: 95, color: "cyan" },
            { name: "TypeScript", level: 90, color: "blue" },
            { name: "Node.js", level: 85, color: "green" },
            { name: "Next.js", level: 85, color: "purple" },
          ].map((tech, i) => (
            <div key={i}>
              <div className="flex justify-between font-mono text-xs mb-1">
                <span className="text-gray-400">{tech.name}</span>
                <span className={`text-${tech.color}-400`}>{tech.level}%</span>
              </div>
              <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r from-${tech.color}-500 to-${tech.color}-400`}
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Left Panel - Network Status */}
      <motion.div
        className="fixed bottom-24 left-4 w-48 bg-slate-900/80 backdrop-blur-md border border-green-400/30 rounded-lg p-3 z-40 hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="border-b border-green-400/20 pb-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="font-mono text-xs text-green-400 tracking-wider">
              NETWORK
            </h3>
          </div>
        </div>
        <div className="relative h-16">
          <svg className="w-full h-full" viewBox="0 0 100 40">
            {/* Network Graph */}
            <motion.polyline
              points="0,35 15,30 25,25 35,32 50,15 65,20 75,10 90,12 100,8"
              fill="none"
              stroke="rgba(74, 222, 128, 0.6)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />
            <motion.polyline
              points="0,38 15,35 25,32 35,36 50,28 65,30 75,25 90,27 100,24"
              fill="none"
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.4 }}
            />
          </svg>
        </div>
        <div className="font-mono text-xs text-gray-400 flex justify-between mt-1">
          <span>LATENCY</span>
          <span className="text-green-400">12ms</span>
        </div>
      </motion.div>

      {/* Floating Corner Brackets */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {/* Top Left Corner */}
        <motion.div
          className="absolute top-4 left-4 w-16 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
        </motion.div>

        {/* Top Right Corner */}
        <motion.div
          className="absolute top-4 right-4 w-16 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute right-0 w-full h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
          <div className="absolute right-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
        </motion.div>

        {/* Bottom Left Corner */}
        <motion.div
          className="absolute bottom-4 left-4 w-16 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 w-0.5 h-full bg-gradient-to-t from-cyan-400 to-transparent"></div>
        </motion.div>

        {/* Bottom Right Corner */}
        <motion.div
          className="absolute bottom-4 right-4 w-16 h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-cyan-400 to-transparent"></div>
        </motion.div>
      </div>

      {/* Scan Line Effect */}
      <motion.div
        className="fixed left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent z-50 pointer-events-none"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      ></div>
    </>
  );
};

export default HolographicPanels;
