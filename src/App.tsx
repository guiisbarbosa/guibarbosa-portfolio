import { useState, useEffect } from "react";
import { Header } from "@components/sections/Header/Header";
import { Hero } from "@components/sections/Hero/Hero";
import { About } from "@components/sections/About/About";

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
      <div className="min-h-screen bg-(--bg-page)">
        <Header isScrolled={isScrolled} />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
