import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Parallax3D from "./components/Parallax3D";
import Projects from "./components/Projects";
import SciFiBackground from "./components/SciFiBackground";
import SciFiParticles from "./components/SciFiParticles";
import ScrollHologram from "./components/ScrollHologram";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Force dark mode for sci-fi theme
    setDarkMode(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-slate-950">
      <SciFiBackground />
      <Parallax3D />
      <SciFiParticles />
      <ScrollHologram />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Services />
      <Developer />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
