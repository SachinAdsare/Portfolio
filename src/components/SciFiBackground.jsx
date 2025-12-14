import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SciFiBackground = () => {
  const [connections, setConnections] = useState([]);
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    // Generate network nodes
    const newNodes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
    }));

    // Generate connections between nodes
    const newConnections = [];
    newNodes.forEach((node, i) => {
      if (i < newNodes.length - 1) {
        const nextNode = newNodes[i + 1];
        newConnections.push({
          id: `${i}-${i + 1}`,
          x1: node.x,
          y1: node.y,
          x2: nextNode.x,
          y2: nextNode.y,
        });
      }
    });

    setNodes(newNodes);
    setConnections(newConnections);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Hexagonal Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z' fill='none' stroke='%2306b6d4' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      ></div>

      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.8)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
        </defs>

        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>

      {/* Network Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: node.id * 0.2,
          }}
        >
          <div
            className="rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"
            style={{
              width: node.size,
              height: node.size,
            }}
          ></div>
          <div
            className="absolute inset-0 rounded-full bg-cyan-400 blur-sm"
            style={{
              width: node.size * 2,
              height: node.size * 2,
              marginLeft: -node.size / 2,
              marginTop: -node.size / 2,
            }}
          ></div>
        </motion.div>
      ))}

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-2 border border-purple-400/30"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 border-2 border-blue-400/20"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-sm"></div>
      </motion.div>

      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Holographic Panels */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-40 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="p-4 font-mono text-xs text-cyan-400/40">
          <div className="mb-1">╔═══════════════╗</div>
          <div className="mb-1">║ SYSTEM ACTIVE ║</div>
          <div>╚═══════════════╝</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 w-48 h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-400/20 rounded-lg"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
      >
        <div className="p-4 font-mono text-xs text-purple-400/40">
          <div>░░░░░░░░░░░░</div>
          <div>LOADING...</div>
          <div>░░░░░░░░░░░░</div>
        </div>
      </motion.div>
    </div>
  );
};

export default SciFiBackground;
