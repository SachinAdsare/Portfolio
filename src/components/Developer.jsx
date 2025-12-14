import { motion } from "framer-motion";
import { FiCode, FiCoffee, FiZap } from "react-icons/fi";

const Developer = () => {
  const stats = [
    { icon: <FiCode />, label: "Clean Code", value: "100%" },
    { icon: <FiZap />, label: "Performance", value: "95%" },
    { icon: <FiCoffee />, label: "Coffee Cups", value: "∞" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-orange-500 p-[3px] rounded-2xl">
                <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
              </div>

              {/* Code Editor Mockup */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl min-h-[400px] flex items-center justify-center">
                <div className="w-full space-y-4">
                  {/* Code Lines */}
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex gap-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400">developer</span>
                      <span className="text-white">=</span>
                      <span className="text-yellow-400">{`{`}</span>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className="text-blue-400">name:</span>
                      <span className="text-green-400">'Sachin Adsare'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className="text-blue-400">role:</span>
                      <span className="text-green-400">
                        'Full Stack Developer'
                      </span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className="text-blue-400">skills:</span>
                      <span className="text-white">[</span>
                    </div>
                    <div className="flex gap-2 ml-8">
                      <span className="text-green-400">'React'</span>
                      <span className="text-white">,</span>
                      <span className="text-green-400">'TypeScript'</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex gap-2 ml-8">
                      <span className="text-green-400">'Node.js'</span>
                      <span className="text-white">,</span>
                      <span className="text-green-400">'Next.js'</span>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className="text-white">],</span>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className="text-blue-400">passion:</span>
                      <span className="text-green-400">
                        'Building Amazing Apps'
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-yellow-400">{`}`}</span>
                      <span className="text-white">;</span>
                    </div>
                  </div>

                  {/* Cursor Blink */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-4 bg-white animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border-2 border-primary-200 dark:border-primary-700"
                >
                  <div className="text-primary-600 dark:text-primary-400 text-lg mb-1">
                    {stat.icon}
                  </div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-lg">
                <FiCode className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                Sachin Adsare
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              A{" "}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-orange-500 bg-clip-text text-transparent">
                Full Stack
              </span>{" "}
              Web Developer
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                As a Senior Full Stack Web Developer, I am{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  passionate about architecting and building
                </span>{" "}
                enterprise-grade web applications that solve real business
                challenges.
              </p>

              <p>
                Currently leading development initiatives at Vimo India, I
                specialize in creating{" "}
                <span className="font-semibold text-accent-600 dark:text-accent-400">
                  scalable React applications
                </span>
                , implementing robust backend services with Node.js, and
                maintaining high code quality through comprehensive testing. My
                expertise spans the entire development lifecycle from initial
                design to production deployment.
              </p>

              <p>
                With{" "}
                <span className="font-semibold text-orange-600 dark:text-orange-400">
                  5.8+ years of professional experience
                </span>{" "}
                across companies like Vimo India, Globant, and Equations Work, I
                have successfully delivered{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  20+ projects
                </span>{" "}
                ranging from AI-powered platforms to immersive VR/AR
                experiences.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary"
            >
              Contact Me →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
