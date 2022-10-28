import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App relative min-h-screen px-1 sm:px-5 md:px-10 lg:px-20 xl:px-32 max-w-10xl mx-auto">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
