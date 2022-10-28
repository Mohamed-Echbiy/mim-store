import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App relative min-h-screen  mx-auto">
      <div className="navbar_hero_section px-1 sm:px-5 md:px-10 lg:px-20 xl:px-32 min-h-screen">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
