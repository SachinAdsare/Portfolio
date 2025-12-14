import { motion } from "framer-motion";

const ImageSlider = () => {
  const images = [
    {
      emoji: "🚀",
      title: "Innovation",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      emoji: "💡",
      title: "Ideas",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      emoji: "⚡",
      title: "Performance",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      emoji: "🎯",
      title: "Precision",
      gradient: "from-green-400 to-blue-500",
    },
    {
      emoji: "🌟",
      title: "Excellence",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      emoji: "🔥",
      title: "Passion",
      gradient: "from-red-500 to-orange-600",
    },
  ];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-slide">
        {/* First set */}
        {images.map((img, index) => (
          <motion.div
            key={`first-${index}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex-shrink-0 mx-4"
          >
            <div
              className={`w-40 h-40 rounded-2xl bg-gradient-to-br ${img.gradient} p-1 shadow-xl`}
            >
              <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm">
                <span className="text-5xl mb-2">{img.emoji}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {img.title}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((img, index) => (
          <motion.div
            key={`second-${index}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex-shrink-0 mx-4"
          >
            <div
              className={`w-40 h-40 rounded-2xl bg-gradient-to-br ${img.gradient} p-1 shadow-xl`}
            >
              <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm">
                <span className="text-5xl mb-2">{img.emoji}</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {img.title}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
