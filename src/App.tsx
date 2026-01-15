import { useState, useEffect } from "react";
import { Header } from "@components/sections/Header/Header";
import { Hero } from "@components/sections/Hero/Hero";
import { About } from "@components/sections/About/About";
import { Skills } from "@components/sections/Skills/Skills";
import { Projects } from "@components/sections/Projects/Projects";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Header isScrolled={isScrolled} />
        <Hero />
        <div className="bg-linear-to-b from-(--c-950) to-(--c-900)">
          <About />
          <Skills />
        </div>
        <Projects />
      </div>
    </>
  );
}

export default App;
