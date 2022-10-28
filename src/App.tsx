import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App relative min-h-screen mx-auto">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
