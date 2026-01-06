import { Header } from "@components/sections/Header/Header";
import { Hero } from "@components/sections/Hero/Hero";

function App() {
  return (
    <>
      <div className="min-h-screen bg-(--bg-page)">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
