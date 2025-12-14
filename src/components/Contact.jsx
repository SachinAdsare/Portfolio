import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:sachin.adsare@outlook.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setFormStatus("Opening your email client...");
    setTimeout(() => {
      setFormStatus("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      value: "sachin.adsare@outlook.com",
      link: "mailto:sachin.adsare@outlook.com",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9309787026",
      link: "tel:+919309787026",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      value: "Pune, Maharashtra, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/sachin-adsare-0971b216a3",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      name: "GitHub",
      link: "https://github.com/sachin-adsare",
      color: "hover:bg-gray-800",
    },
  ];

  return (
    <section id="contact" className="holographic-section section-padding">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-16 right-16 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30 shadow-lg shadow-blue-500/20">
              <FiMail className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-400 to-transparent"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            Let&apos;s collaborate on your next project or discuss{" "}
            <span className="text-blue-400 font-semibold">opportunities</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-600 dark:text-primary-400 rounded-lg transform hover:scale-110 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="p-4 bg-gradient-to-br from-gray-200 to-primary-100 dark:from-gray-800 dark:to-primary-900/30 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s Work Together
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I&apos;m passionate about taking on new challenges and
                collaborating on innovative projects. Whether you need a
                full-stack developer, technical consultant, or want to discuss
                your next big idea, I&apos;d love to hear from you!
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            {/* Holographic border */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 p-[2px] rounded-2xl"></div>

            <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-cyan-400/30 bg-slate-800/50 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all duration-200 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-cyan-400/30 bg-slate-800/50 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all duration-200 placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-cyan-400/30 bg-slate-800/50 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all duration-200 placeholder-gray-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-cyan-400/30 bg-slate-800/50 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-all duration-200 resize-none placeholder-gray-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <FiSend className="w-5 h-5" />
                  Send Message
                </button>

                {formStatus && (
                  <p className="text-center text-primary-600 dark:text-primary-400 font-medium">
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
