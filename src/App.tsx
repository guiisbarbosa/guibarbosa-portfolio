import { useState, useEffect } from "react";
import { Header } from "@components/sections/Header/Header";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`min-h-screen bg-(--bg-page) ${isScrolled ? "pt-20" : ""}`}
      >
        <Header isScrolled={isScrolled} />
        <div className="h-96 w-2 bg-amber-300"></div>
        <div className="h-96 w-2 bg-amber-300"></div>
      </div>
    </>
  );
}

export default App;
