import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HolographicDataCards = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const getProgress = () => {
    const hours = time.getHours();
    return Math.round((hours / 24) * 100);
  };

  return (
    <div className="fixed bottom-32 right-4 space-y-4 z-40 hidden xl:block">
      {/* Time Card */}
      <motion.div
        className="w-48 bg-slate-900/90 backdrop-blur-md border border-cyan-400/30 rounded-lg p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <div className="border-b border-cyan-400/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <h3 className="font-mono text-xs text-cyan-400 tracking-wider">
              SYSTEM TIME
            </h3>
          </div>
        </div>
        <div className="font-mono text-2xl text-white mb-2 tabular-nums">
          {formatTime(time)}
        </div>
        <div className="text-xs text-gray-400 font-mono">IST • ACTIVE</div>
      </motion.div>

      {/* Progress Card */}
      <motion.div
        className="w-48 bg-slate-900/90 backdrop-blur-md border border-purple-400/30 rounded-lg p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <div className="border-b border-purple-400/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <h3 className="font-mono text-xs text-purple-400 tracking-wider">
              DAY CYCLE
            </h3>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-xs mb-1">
            <span className="text-gray-400">PROGRESS</span>
            <span className="text-purple-400">{getProgress()}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${getProgress()}%` }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Status Card */}
      <motion.div
        className="w-48 bg-slate-900/90 backdrop-blur-md border border-green-400/30 rounded-lg p-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="border-b border-green-400/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="font-mono text-xs text-green-400 tracking-wider">
              CONNECTION
            </h3>
          </div>
        </div>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">STATUS:</span>
            <span className="text-green-400">ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">PING:</span>
            <span className="text-cyan-400">12ms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">UPTIME:</span>
            <span className="text-blue-400">99.9%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HolographicDataCards;
